# Gmail API Authentication Scopes Error - Fix Guide

## Error Message
```
Gmail_API: Request had insufficient authentication scopes.
```

## What This Means
Your Gmail service in Email.js doesn't have the proper permissions to send emails. You need to reconnect it with the correct scopes.

## Step-by-Step Fix

### 1. Go to Email.js Dashboard
- Navigate to https://www.emailjs.com/
- Log in to your account

### 2. Navigate to Email Services
- Click on "Email Services" in the left sidebar
- Find your service: `service_usoglbp`
- Click on it to open settings

### 3. Disconnect and Reconnect Gmail
- Click "Disconnect" or "Remove" on the current Gmail connection
- Click "Add New Service" or "Connect Account"
- Select "Gmail" as the email service

### 4. Grant Proper Permissions
When connecting Gmail, make sure to:
- ✅ **IMPORTANT:** Allow "Send email on your behalf" permission during connection
- ✅ Grant "Send email" permission
- ✅ Grant "Read and send email" permission (if prompted)
- ✅ Allow all requested scopes
- ✅ Both Gmail and Google Apps accounts are supported

### 5. Required Gmail Scopes
Email.js needs these Gmail API scopes:
- `https://www.googleapis.com/auth/gmail.send` - To send emails
- `https://www.googleapis.com/auth/gmail.compose` - To compose emails

### 6. Reconnect Process
1. Click "Connect Gmail Account"
2. Sign in with your Gmail account (the one you want to send from)
3. **CRITICAL:** When Google asks for permissions, you MUST allow:
   - ✅ **"Send email on your behalf"** permission (This is required!)
   - ✅ All other requested permissions
4. Don't restrict any scopes - allow full access
5. Complete the connection
6. Both Gmail and Google Apps accounts are supported

### 7. Verify Connection
- After reconnecting, verify the service shows as "Active" and "Connected"
- The status should be green/active

### 8. Test the Service
- Go to Email Templates
- Find `template_86vm0ze`
- Click "Test" button
- Send a test email
- If it works, the service is properly connected

## Alternative: Use App Password (If 2FA is enabled)

If you have 2-Factor Authentication enabled on Gmail:

1. **Generate App Password:**
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate a new app password for "Mail"
   - Copy the 16-character password

2. **Use App Password in Email.js:**
   - When connecting Gmail service
   - Use your Gmail email
   - Use the app password (not your regular password)

## Still Not Working?

### Option 1: Use Different Email Service
If Gmail continues to have issues, try:
- **Outlook/Office 365** - Often more reliable
- **SendGrid** - Professional email service
- **SMTP** - Direct SMTP connection

### Option 2: Check Gmail Account Settings
1. Make sure "Less secure app access" is enabled (if using older Gmail)
2. Or use App Passwords (recommended for 2FA accounts)
3. Check if your Gmail account has any restrictions

### Option 3: Verify Service ID
- Make sure `service_usoglbp` is the correct service ID
- Double-check it's connected to the right Gmail account
- Verify the service is active in Email.js dashboard

## Quick Checklist

- [ ] Gmail service is disconnected
- [ ] Gmail service is reconnected with full permissions
- [ ] All scopes are granted (don't restrict any)
- [ ] Service shows as "Active" and "Connected"
- [ ] Test email works from Email.js dashboard
- [ ] Template `template_86vm0ze` is published

## After Fixing

Once you've reconnected Gmail with proper scopes:
1. The 412 error should be resolved
2. Test the contact form on your website
3. Emails should send successfully

## Important Notes

- **CRITICAL:** You MUST allow "Send email on your behalf" permission during connection
- **Don't restrict scopes** - Email.js needs full email sending permissions
- **Use App Passwords** if you have 2FA enabled
- **Test in Email.js dashboard first** before testing on your website
- **Keep the service connected** - Don't disconnect it after setup
- **Both Gmail and Google Apps accounts are supported** - You can use either type of account

