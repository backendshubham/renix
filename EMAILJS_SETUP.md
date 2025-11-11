# Email.js Setup Guide

## Overview
The contact form uses Email.js to send emails directly from the browser without a backend server.

## Setup Instructions

1. **Create an Email.js Account**
   - Go to https://www.emailjs.com/
   - Sign up for a free account

2. **Create an Email Service**
   - In the Email.js dashboard, go to "Email Services"
   - Add a new service (Gmail, Outlook, etc.)
   - Note your Service ID

3. **Create an Email Template**
   - Go to "Email Templates"
   - Create a new template
   - Use these template variables:
     - `{{from_name}}` - Sender's name
     - `{{from_email}}` - Sender's email
     - `{{company}}` - Company name
     - `{{budget}}` - Budget range
     - `{{message}}` - Message content
     - `{{to_name}}` - Recipient name (Renix Solutions)
   - Note your Template ID

4. **Get Your Public Key**
   - Go to "Account" → "General"
   - Copy your Public Key

5. **Configure Environment Variables**
   - Create a `.env.local` file in the root directory
   - Add the following variables:
   ```
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
   ```

6. **Restart Development Server**
   - Stop your Next.js dev server
   - Run `npm run dev` again

## Testing
- Fill out the contact form
- Submit and check your email inbox
- The email should arrive within seconds

## Troubleshooting
- Make sure all environment variables are set correctly
- Check the browser console for any errors
- Verify your Email.js service is active
- Ensure your email template has all required variables

