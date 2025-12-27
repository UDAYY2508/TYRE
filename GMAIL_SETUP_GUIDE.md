# Gmail Setup Guide for Booking Appointment Form

This guide will walk you through connecting Gmail to your booking appointment form using EmailJS.

## Prerequisites
- A Gmail account (vabe2023@gmail.com)
- Access to your Gmail account settings

---

## Step-by-Step Instructions

### Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click **Sign Up** (top right corner)
3. Sign up with your Gmail account (vabe2023@gmail.com) or create a new account
4. Verify your email address by clicking the verification link sent to your inbox
5. Log in to your EmailJS dashboard

**Note:** Free plan allows 200 emails/month, which is perfect for getting started.

---

### Step 2: Connect Gmail Account

1. In EmailJS dashboard, go to **Email Services** (left sidebar)
2. Click **Add New Service** button
3. Select **Gmail** from the list of email providers
4. Click **Connect Account**
5. You'll be redirected to Google's authorization page
6. Select your Gmail account (vabe2023@gmail.com)
7. Click **Allow** to grant EmailJS permission to send emails on your behalf
8. You'll be redirected back to EmailJS
9. **Important:** Copy your **Service ID** (it looks like `service_abc123xyz`)
   - This will be displayed on the service page

---

### Step 3: Create Email Template

1. In EmailJS dashboard, go to **Email Templates** (left sidebar)
2. Click **Create New Template**
3. Fill in the template details:

   **Template Name:** `VABE Appointment Request`
   
   **Subject:** `Contact Us: New Appointment Request from {{from_name}}`
   
   **Content (HTML):**
   ```html
   <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
     <h2 style="color: #1e3a8a; margin-bottom: 20px;">New Appointment Request</h2>
     
     <p style="margin-bottom: 20px;">A message by <strong>{{from_name}}</strong> has been received. Kindly respond at your earliest convenience.</p>
     
     <!-- Client Message Block -->
     <div style="background-color: #f9f9f9; border-left: 4px solid #1e3a8a; padding: 15px; margin: 20px 0; border-radius: 4px;">
       <div style="display: flex; align-items: center; margin-bottom: 10px;">
         <div style="width: 40px; height: 40px; background-color: #9333ea; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; margin-right: 12px;">
           {{from_name}}
         </div>
         <div>
           <div style="font-size: 16px; font-weight: bold; color: #333;">{{from_name}}</div>
           <div style="font-size: 12px; color: #666;">{{current_time}}</div>
         </div>
       </div>
       <div style="margin-top: 10px; padding-top: 10px; border-top: 1px dashed #ddd;">
         <p style="margin: 0; color: #333; line-height: 1.6;">{{message}}</p>
       </div>
     </div>
     
     <!-- Appointment Details -->
     <div style="background-color: #ffffff; border: 1px solid #e0e0e0; padding: 20px; margin: 20px 0; border-radius: 4px;">
       <h3 style="color: #1e3a8a; margin-top: 0; margin-bottom: 15px;">Appointment Details</h3>
       <table style="width: 100%; border-collapse: collapse;">
         <tr>
           <td style="padding: 8px 0; border-bottom: 1px solid #f0f0f0; font-weight: bold; color: #666; width: 40%;">Phone:</td>
           <td style="padding: 8px 0; border-bottom: 1px solid #f0f0f0; color: #333;">{{from_phone}}</td>
         </tr>
         <tr>
           <td style="padding: 8px 0; border-bottom: 1px solid #f0f0f0; font-weight: bold; color: #666;">Email:</td>
           <td style="padding: 8px 0; border-bottom: 1px solid #f0f0f0; color: #333;">{{from_email}}</td>
         </tr>
         <tr>
           <td style="padding: 8px 0; border-bottom: 1px solid #f0f0f0; font-weight: bold; color: #666;">Vehicle:</td>
           <td style="padding: 8px 0; border-bottom: 1px solid #f0f0f0; color: #333;">{{vehicle}}</td>
         </tr>
         <tr>
           <td style="padding: 8px 0; border-bottom: 1px solid #f0f0f0; font-weight: bold; color: #666;">Preferred Date:</td>
           <td style="padding: 8px 0; border-bottom: 1px solid #f0f0f0; color: #333;">{{preferred_date}}</td>
         </tr>
         <tr>
           <td style="padding: 8px 0; font-weight: bold; color: #666;">Preferred Time:</td>
           <td style="padding: 8px 0; color: #333;">{{preferred_time}}</td>
         </tr>
       </table>
     </div>
     
     <hr style="border: none; border-top: 1px dashed #ddd; margin: 30px 0;">
     <p style="font-size: 12px; color: #999; margin: 0;">This email was sent from your VABE website booking form.</p>
   </div>
   ```

   **Or Simple Text Version:**
   ```
   New Appointment Request
   
   A message by {{from_name}} has been received. Kindly respond at your earliest convenience.
   
   ---
   CLIENT MESSAGE:
   {{message}}
   ---
   
   APPOINTMENT DETAILS:
   Name: {{from_name}}
   Phone: {{from_phone}}
   Email: {{from_email}}
   Vehicle: {{vehicle}}
   Preferred Date: {{preferred_date}}
   Preferred Time: {{preferred_time}}
   
   ---
   This email was sent from your VABE website booking form.
   ```

4. In **To Email** field, enter: `vabe2023@gmail.com`
5. In **From Name** field, enter: `VABE Website`
6. Click **Save** button
7. **Important:** Copy your **Template ID** (it looks like `template_xyz789abc`)
   - This will be displayed at the top of the template page

---

### Step 4: Get Your Public Key

1. In EmailJS dashboard, click on **Account** (top right corner)
2. Go to **General** tab
3. Scroll down to **API Keys** section
4. **Important:** Copy your **Public Key** (it looks like `abcdefghijklmnop123456`)
   - This is different from Private Key (keep Private Key secret!)

---

### Step 5: Create Environment File

1. In your project root directory (same folder as `package.json`), create a new file named `.env`
2. Open the `.env` file and add the following:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
VITE_RECEIVER_EMAIL=vabe2023@gmail.com
```

3. Replace the placeholder values:
   - `your_service_id_here` → Your Service ID from Step 2
   - `your_template_id_here` → Your Template ID from Step 3
   - `your_public_key_here` → Your Public Key from Step 4
   - `vabe2023@gmail.com` → Already correct!

**Example:**
```env
VITE_EMAILJS_SERVICE_ID=service_abc123xyz
VITE_EMAILJS_TEMPLATE_ID=template_xyz789abc
VITE_EMAILJS_PUBLIC_KEY=abcdefghijklmnop123456
VITE_RECEIVER_EMAIL=vabe2023@gmail.com
```

---

### Step 6: Restart Development Server

1. Stop your current development server (if running) by pressing `Ctrl+C` in the terminal
2. Start it again:
   ```bash
   npm run dev
   ```
3. **Important:** Environment variables are only loaded when the server starts, so you must restart after creating/modifying `.env`

---

### Step 7: Test the Booking Form

1. Open your website in the browser
2. Navigate to the **Book Appointment** page
3. Fill out the form with test data:
   - Name: Test User
   - Phone: +91 9370047020
   - Email: test@example.com
   - Vehicle: Test Vehicle
   - Date: Select a future date
   - Time: Select a time
   - Message: This is a test appointment
4. Click **Submit Appointment Request**
5. You should see a success message: "Appointment request sent successfully!"
6. Check your Gmail inbox (vabe2023@gmail.com) for the email
7. Also check **Spam/Junk** folder if you don't see it in inbox

---

## Troubleshooting

### Email Not Received?

1. **Check Browser Console:**
   - Press `F12` to open Developer Tools
   - Go to **Console** tab
   - Look for any red error messages
   - Common errors:
     - "EmailJS is not configured" → Check your `.env` file
     - "Invalid template" → Check Template ID
     - "Service not found" → Check Service ID

2. **Verify Environment Variables:**
   - Make sure `.env` file is in the root directory
   - Make sure all variables start with `VITE_`
   - Make sure there are no spaces around `=` sign
   - Restart development server after changes

3. **Check EmailJS Dashboard:**
   - Go to EmailJS dashboard → **Email Logs**
   - Check if emails are being sent
   - Check for any error messages

4. **Check Gmail:**
   - Check Spam/Junk folder
   - Check All Mail folder
   - Make sure Gmail account is properly connected in EmailJS

### "EmailJS is not configured" Error?

- Make sure `.env` file exists in root directory
- Make sure all three variables are set: SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY
- Restart development server
- Check that variables start with `VITE_`

### Gmail Connection Issues?

- Go to EmailJS → Email Services
- Click on your Gmail service
- Click **Reconnect Account** if needed
- Make sure you granted all necessary permissions

### "412Gmail_API: Invalid grant. Please reconnect your Gmail account" Error?

This error means your Gmail OAuth token has expired. Follow these steps:

1. **Go to EmailJS Dashboard:**
   - Log in to [https://www.emailjs.com/](https://www.emailjs.com/)
   - Navigate to **Email Services** (left sidebar)

2. **Reconnect Gmail:**
   - Find your Gmail service in the list
   - Click on it to open the service settings
   - Look for a **"Reconnect Account"** or **"Disconnect"** button
   - Click it to disconnect the current connection

3. **Re-authorize Gmail:**
   - Click **"Connect Account"** or **"Add New Service"** → **Gmail**
   - You'll be redirected to Google's authorization page
   - Select your Gmail account (vabe2023@gmail.com)
   - Click **Allow** to grant permissions
   - You'll be redirected back to EmailJS

4. **Verify Connection:**
   - Make sure the service shows a **green status** (active)
   - The service should show "Connected" status

5. **Test Again:**
   - Try submitting the form again
   - Check EmailJS → **Email Logs** to see if emails are being sent
   - Check your Gmail inbox (and spam folder)

**Note:** Gmail OAuth tokens can expire after a period of inactivity or due to security changes. You may need to reconnect periodically.

### Form Submits But No Email?

- Check EmailJS dashboard → Email Logs
- Verify email service is active (green status)
- Check if you've exceeded free tier limit (200 emails/month)
- Verify template has correct variable names: `{{from_name}}`, `{{from_phone}}`, `{{from_email}}`, etc.

---

## Security Notes

✅ **Safe to Expose:**
- Public Key (it's meant to be public)
- Service ID
- Template ID

❌ **Never Expose:**
- Private Key (keep this secret!)
- `.env` file (already in `.gitignore`)

---

## Production Deployment

When deploying to production (Vercel, Netlify, etc.):

1. Go to your hosting platform's dashboard
2. Find **Environment Variables** or **Settings** section
3. Add all four variables:
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`
   - `VITE_RECEIVER_EMAIL`
4. Redeploy your application

---

## Quick Reference

**Your EmailJS Credentials:**
- Service ID: `service_xxxxx` (from Email Services)
- Template ID: `template_xxxxx` (from Email Templates)
- Public Key: `xxxxx` (from Account → General → API Keys)
- Receiver Email: `vabe2023@gmail.com`

**File Locations:**
- Environment file: `.env` (root directory)
- Config file: `src/config/emailjs.ts`
- Booking form: `src/components/BookAppointment.tsx`

---

## Support

- **EmailJS Documentation:** [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
- **EmailJS Support:** Check EmailJS dashboard for support options
- **Project Issues:** Check browser console for error messages

---

## Success Checklist

- [ ] EmailJS account created and verified
- [ ] Gmail account connected to EmailJS
- [ ] Service ID copied
- [ ] Email template created with all variables
- [ ] Template ID copied
- [ ] Public Key copied
- [ ] `.env` file created with all credentials
- [ ] Development server restarted
- [ ] Test form submission successful
- [ ] Email received in Gmail inbox

Once all items are checked, your booking form is fully configured! 🎉

