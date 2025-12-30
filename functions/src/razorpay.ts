import {onCall, HttpsError} from 'firebase-functions/v2/https';
import {onRequest} from 'firebase-functions/v2/https';
import * as admin from 'firebase-admin';
import Razorpay from 'razorpay';
import * as crypto from 'crypto';

// Lazy initialization of Razorpay to avoid runtime errors during deployment
let razorpayInstance: Razorpay | null = null;

function getRazorpay(): Razorpay {
  if (!razorpayInstance) {
    const keyId = process.env.RAZORPAY_KEY_ID;
    const keySecret = process.env.RAZORPAY_KEY_SECRET;
    
    if (!keyId || !keySecret) {
      throw new Error('Razorpay credentials not configured. Please set RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET environment variables.');
    }
    
    razorpayInstance = new Razorpay({
      key_id: keyId,
      key_secret: keySecret,
    });
  }
  return razorpayInstance;
}

interface CreateOrderData {
  amount: number;
  currency?: string;
  receipt?: string;
  notes?: Record<string, any>;
}

/**
 * Create Razorpay Order
 * Called from frontend when user clicks "Purchase"
 */
export const createRazorpayOrder = onCall(async (request) => {
  // Verify user is authenticated
  if (!request.auth) {
    throw new HttpsError('unauthenticated', 'User must be logged in');
  }

  const { amount, currency = 'INR', receipt, notes } = request.data as CreateOrderData;

  // Validate amount
  if (!amount || amount < 100) {
    throw new HttpsError('invalid-argument', 'Invalid amount');
  }

  try {
    // Get Razorpay instance
    const razorpay = getRazorpay();
    
    // Create order in Razorpay
    const order = await razorpay.orders.create({
      amount: amount, // Amount in paise (e.g., 49900 for ₹499)
      currency: currency,
      receipt: receipt || `receipt_${Date.now()}`,
      notes: notes || {},
    });

    // Store order in Firestore for tracking
    await admin.firestore().collection('payments').doc(order.id).set({
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
      status: 'CREATED',
      userId: request.auth.uid,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
      receipt: order.receipt,
    });

    return {
      success: true,
      order: {
        id: order.id,
        amount: order.amount,
        currency: order.currency,
      },
    };
  } catch (error: any) {
    console.error('Error creating Razorpay order:', error);
    throw new HttpsError('internal', error.message);
  }
});

interface VerifyPaymentData {
  razorpay_order_id: string;
  razorpay_payment_id: string;
  razorpay_signature: string;
}

/**
 * Verify Razorpay Payment Signature
 * Called from frontend after successful payment
 */
export const verifyRazorpayPayment = onCall(async (request) => {
  // Verify user is authenticated
  if (!request.auth) {
    throw new HttpsError('unauthenticated', 'User must be logged in');
  }

  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = request.data as VerifyPaymentData;

  if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
    throw new HttpsError('invalid-argument', 'Missing required fields');
  }

  try {
    // Verify signature
    const body = razorpay_order_id + '|' + razorpay_payment_id;
    const expectedSignature = crypto
      .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET || '')
      .update(body)
      .digest('hex');

    const isValid = expectedSignature === razorpay_signature;

    if (isValid) {
      // Update payment status in Firestore
      await admin.firestore().collection('payments').doc(razorpay_order_id).update({
        paymentId: razorpay_payment_id,
        signature: razorpay_signature,
        status: 'SUCCESS',
        verifiedAt: admin.firestore.FieldValue.serverTimestamp(),
      });

      return { success: true, verified: true };
    } else {
      // Mark as failed
      await admin.firestore().collection('payments').doc(razorpay_order_id).update({
        status: 'FAILED',
        failureReason: 'Invalid signature',
      });

      throw new HttpsError('permission-denied', 'Invalid payment signature');
    }
  } catch (error: any) {
    console.error('Error verifying payment:', error);
    throw new HttpsError('internal', error.message);
  }
});

/**
 * Razorpay Webhook Handler
 * Handles payment events from Razorpay
 */
export const razorpayWebhook = onRequest(async (req, res) => {
  const webhookSecret = process.env.RAZORPAY_WEBHOOK_SECRET || '';
  const signature = req.headers['x-razorpay-signature'] as string;

  if (!signature) {
    res.status(400).send('Missing signature');
    return;
  }

  // Verify webhook signature
  const body = JSON.stringify(req.body);
  const expectedSignature = crypto
    .createHmac('sha256', webhookSecret)
    .update(body)
    .digest('hex');

  if (expectedSignature !== signature) {
    res.status(400).send('Invalid signature');
    return;
  }

  const event = req.body.event;
  const payload = req.body.payload;

  try {
    switch (event) {
      case 'payment.captured':
        // Payment successful
        await admin.firestore().collection('payments').doc(payload.payment.entity.order_id).update({
          status: 'CAPTURED',
          capturedAt: admin.firestore.FieldValue.serverTimestamp(),
        });
        break;

      case 'payment.failed':
        // Payment failed
        await admin.firestore().collection('payments').doc(payload.payment.entity.order_id).update({
          status: 'FAILED',
          failureReason: payload.payment.entity.error_description,
        });
        break;

      case 'order.paid':
        // Order paid
        console.log('Order paid:', payload.order.entity.id);
        break;

      default:
        console.log('Unhandled event:', event);
    }

    res.status(200).send('OK');
  } catch (error) {
    console.error('Webhook error:', error);
    res.status(500).send('Error processing webhook');
  }
});