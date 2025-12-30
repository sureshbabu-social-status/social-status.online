# EmailJS Setup Guide

Follow these steps to configure EmailJS for your contact form:

## Step 1: Get Your Public Key

1. Go to [EmailJS Dashboard](https://dashboard.emailjs.com/admin)
2. Navigate to **Account** → **General**
3. Copy your **Public Key** (it looks like: `YOUR_PUBLIC_KEY_HERE`)
4. Paste it in `emailjs.config.ts` → `PUBLIC_KEY`

## Step 2: Create an Email Service

1. In the dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail recommended):
   - **Gmail**: Connect your Google account
   - **Outlook**: Connect your Microsoft account
   - Or use any other SMTP service
4. Click **Create Service**
5. Copy the **Service ID** (looks like: `service_xxxxxxx`)
6. Paste it in `emailjs.config.ts` → `SERVICE_ID`

## Step 3: Create an Email Template

1. Go to **Email Templates**
2. Click **Create New Template**
3. Use this template structure:

```
Subject: New Contact Form Submission - {{subject}}

From: {{from_name}}
Email: {{from_email}}

Subject: {{subject}}

Message:
{{message}}

---
This message was sent via Social Status Online contact form.
```

4. **Template Variables** (use these exact names):
   - `from_name` - Sender's name
   - `from_email` - Sender's email
   - `subject` - Message subject
   - `message` - Message content
   - `to_name` - Your name (Social Status Online Team)

5. Set **To Email**: `hello@social-status.online`
6. Click **Save**
7. Copy the **Template ID** (looks like: `template_xxxxxxx`)
8. Paste it in `emailjs.config.ts` → `TEMPLATE_ID`

## Step 4: Update Configuration File

Edit `emailjs.config.ts`:

```typescript
export const EMAILJS_CONFIG = {
  PUBLIC_KEY: 'your_actual_public_key',
  SERVICE_ID: 'service_xxxxxxx',
  TEMPLATE_ID: 'template_xxxxxxx',
};
```

## Step 5: Test the Form

1. Run `npm run dev`
2. Go to http://localhost:3000/contact
3. Fill out the form
4. Attach a test resume (PDF, DOC, DOCX, or TXT)
5. Click **Send Message**
6. Check your email at `hello@social-status.online`

## Free Tier Limits

- **200 emails/month** (free forever)
- **2MB file size limit** per attachment
- Email delivery in seconds

## Troubleshooting

### Error: "EmailJS not configured"
- Make sure you replaced all placeholder values in `emailjs.config.ts`
- Double-check your Public Key, Service ID, and Template ID

### Error: "Invalid template"
- Verify template variable names match exactly: `from_name`, `from_email`, `subject`, `message`
- Make sure template is saved and published

### File Upload Issues
- Maximum file size: 2MB
- Supported formats: PDF, DOC, DOCX, TXT
- Large files must be compressed

### Emails Not Arriving
- Check spam folder
- Verify `To Email` is set to `hello@social-status.online` in template
- Check EmailJS dashboard for delivery logs

## Security Notes

✅ **Safe to commit**: The Public Key is meant to be public (it's client-side)
✅ **Rate limited**: EmailJS automatically prevents spam abuse
✅ **No sensitive data**: Never store Service ID or Template ID as secrets (they're not sensitive)

## Next Steps (Optional Upgrades)

When you outgrow the free tier, consider:
1. **EmailJS Pro** ($15/month) - 1000 emails/month
2. **Firebase Cloud Functions** - Custom email sending with Firebase
3. **SendGrid** - Professional email service (free tier: 100 emails/day)

---

**Need Help?**
- EmailJS Docs: https://www.emailjs.com/docs/
- Contact Support: https://www.emailjs.com/contact/
