# Quick Start Guide - Booking Form Setup

## 🚀 Quick Setup (5 minutes)

### 1. Install Dependencies
```bash
npm install
```
*(EmailJS is already installed)*

### 2. Set Up EmailJS (Free Account)

1. **Sign up**: Go to [emailjs.com](https://www.emailjs.com/) and create a free account
2. **Add Email Service**: 
   - Dashboard → Email Services → Add New Service
   - Connect your Gmail/Outlook
   - Copy the **Service ID**

3. **Create Template**:
   - Dashboard → Email Templates → Create New Template
   - Use this template:
   ```
   Subject: New Appointment Request from {{from_name}}
   
   Name: {{from_name}}
   Phone: {{from_phone}}
   Vehicle: {{vehicle}}
   Date: {{preferred_date}}
   Time: {{preferred_time}}
   Message: {{message}}
   ```
   - Copy the **Template ID**

4. **Get Public Key**:
   - Dashboard → Account → General → API Keys
   - Copy your **Public Key**

### 3. Configure Environment Variables

1. Create `.env` file in the root directory:
   ```bash
   # Windows PowerShell
   Copy-Item .env.example .env
   
   # Mac/Linux
   cp .env.example .env
   ```

2. Open `.env` and add your credentials:
   ```env
   VITE_EMAILJS_SERVICE_ID=service_xxxxx
   VITE_EMAILJS_TEMPLATE_ID=template_xxxxx
   VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxx
   VITE_RECEIVER_EMAIL=your-email@example.com
   ```

### 4. Test It!

1. Start the dev server:
   ```bash
   npm run dev
   ```

2. Go to the booking page and submit a test form
3. Check your email inbox!

## ✅ That's It!

Your booking form is now fully functional. Every appointment request will be sent directly to your email.

## 📝 Need More Help?

See `SETUP_INSTRUCTIONS.md` for detailed instructions and troubleshooting.

