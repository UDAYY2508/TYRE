# Booking Form Setup Instructions

This guide will help you set up the booking appointment form to send emails when customers submit appointment requests.

## Option 1: EmailJS Setup (Recommended - No Backend Required)

EmailJS is a free service that allows you to send emails directly from your frontend without a backend server.

### Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (allows 200 emails/month)
3. Verify your email address

### Step 2: Add Email Service

1. Go to **Email Services** in the dashboard
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the instructions to connect your email account
5. **Copy the Service ID** (e.g., `service_abc123`)

### Step 3: Create Email Template

1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Use this template structure:

```
Subject: New Appointment Request from {{from_name}}

Hello,

You have received a new appointment request:

Name: {{from_name}}
Phone: {{from_phone}}
Email: {{from_email}}
Vehicle: {{vehicle}}
Preferred Date: {{preferred_date}}
Preferred Time: {{preferred_time}}

Additional Information:
{{message}}

---
This email was sent from your VABE website booking form.
```

4. **Copy the Template ID** (e.g., `template_xyz789`)

### Step 4: Get Your Public Key

1. Go to **Account** > **General**
2. Find **API Keys** section
3. **Copy your Public Key** (e.g., `abcdefghijklmnop`)

### Step 5: Configure Environment Variables

1. Copy the `.env.example` file to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Open `.env` file and fill in your credentials:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id_here
   VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
   VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
   VITE_RECEIVER_EMAIL=your-email@example.com
   ```

3. Replace the placeholder values with your actual EmailJS credentials

### Step 6: Test the Form

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Navigate to the booking page
3. Fill out and submit the form
4. Check your email inbox for the appointment request

## Option 2: Custom Backend API (Advanced)

If you prefer to use your own backend, you can modify the `handleSubmit` function in `src/components/BookAppointment.tsx`:

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const response = await fetch('YOUR_API_ENDPOINT', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error('Failed to submit');
    }

    toast.success('Appointment request sent successfully!');
    // Reset form...
  } catch (error) {
    toast.error('Failed to send appointment request.');
  } finally {
    setIsSubmitting(false);
  }
};
```

## Troubleshooting

### Form not sending emails?

1. **Check browser console** for error messages
2. **Verify environment variables** are set correctly in `.env`
3. **Restart development server** after changing `.env` file
4. **Check EmailJS dashboard** for usage limits (free tier: 200 emails/month)
5. **Verify email service** is connected and active in EmailJS

### Environment variables not working?

- Make sure your `.env` file is in the root directory (same level as `package.json`)
- Restart your development server after creating/modifying `.env`
- Variables must start with `VITE_` to be accessible in Vite

### Need more emails?

- EmailJS free tier: 200 emails/month
- Paid plans start at $15/month for 1,000 emails
- Or set up your own backend API

## Security Notes

- Never commit your `.env` file to version control
- The `.env` file is already in `.gitignore`
- Public Key is safe to expose (it's meant to be public)
- Service ID and Template ID are also safe to expose

## Support

For EmailJS support, visit: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)

For issues with this implementation, check the browser console for error messages.

