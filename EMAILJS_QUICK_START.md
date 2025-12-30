# 🚀 Quick Start - EmailJS Configuration

## Your EmailJS Dashboard
👉 https://dashboard.emailjs.com/admin

---

## ⚡ 3 Values You Need

Copy these from your EmailJS dashboard and paste into `emailjs.config.ts`:

### 1️⃣ PUBLIC_KEY
📍 Location: **Account** → **General** → **Public Key**
```
Example: abc123XYZ456def789
```

### 2️⃣ SERVICE_ID  
📍 Location: **Email Services** → Your Service → **Service ID**
```
Example: service_abc123
```

### 3️⃣ TEMPLATE_ID
📍 Location: **Email Templates** → Your Template → **Template ID**
```
Example: template_xyz789
```

---

## 📝 Email Template (Copy & Paste)

**Subject:**
```
New Contact - {{subject}}
```

**Email Body:**
```
From: {{from_name}}
Email: {{from_email}}

Subject: {{subject}}

Message:
{{message}}

---
Sent via Social Status Online
```

**To Email:** `hello@social-status.online`

---

## ✅ Configuration File

Edit `/social-status.online/emailjs.config.ts`:

```typescript
export const EMAILJS_CONFIG = {
  PUBLIC_KEY: 'paste_your_public_key_here',
  SERVICE_ID: 'service_xxxxxxx',
  TEMPLATE_ID: 'template_xxxxxxx',
};
```

---

## 🧪 Test It

```bash
npm run dev
```

Then visit: http://localhost:3000/contact

---

## 📊 Features Implemented

✅ **Name & Email validation**
✅ **Subject & Message fields**
✅ **File upload** (PDF, DOC, DOCX, TXT)
✅ **2MB file size limit** with validation
✅ **File type validation**
✅ **Success/Error messages**
✅ **Neumorphic design** with dark mode
✅ **EmailJS integration** (200 free emails/month)

---

## 🔒 Security Features

✅ Email validation (regex)
✅ File type whitelist (PDF, DOC, DOCX, TXT only)
✅ File size limit (2MB max)
✅ XSS protection (React escapes by default)
✅ Rate limiting (EmailJS built-in)

---

## 💡 Next Steps

1. **Configure EmailJS** (5 minutes)
2. **Test the form** with a real email
3. **Check inbox** at hello@social-status.online
4. **Deploy to production**

---

**Need detailed setup?** See `EMAILJS_SETUP.md` for step-by-step guide.
