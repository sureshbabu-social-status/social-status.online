/**
 * Firebase Cloud Functions for Social Status Platform
 * Handles Razorpay payment processing
 * 
 * Project: social-status-online (Auth + Database + Functions)
 */

import {setGlobalOptions} from "firebase-functions/v2";
import * as admin from "firebase-admin";

// Initialize Firebase Admin
admin.initializeApp();

// Set global options for all functions
setGlobalOptions({
  maxInstances: 10,
  region: "asia-south1", // Mumbai region for better performance in India
});

// Export Razorpay functions
export { createRazorpayOrder, verifyRazorpayPayment, razorpayWebhook } from './razorpay';
