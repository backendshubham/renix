# Detailed Gmail API Scopes Fix - Step by Step

## Current Issue
Still getting "Gmail_API: Request had insufficient authentication scopes" error even after reconnecting.

## Complete Fix Process

### Step 1: Remove the Service Completely
1. Go to Email.js Dashboard: https://www.emailjs.com/
2. Click "Email Services" in left sidebar
3. Find `service_usoglbp`
4. Click on it
5. Click "Delete" or "Remove" to completely remove it
6. Confirm deletion

### Step 2: Create a NEW Service
1. Click "Add New Service" button
2. Select "Gmail" from the list
3. Click "Connect Account"

### Step 3: Connect Gmail with Full Permissions
1. **Sign in with your Gmail account** (renixsolutions@gmail.com or the account you want to use)
2. When Google shows the permission screen, you'll see:
   - "Send email on your behalf"
   - Other permissions
3. **CRITICAL:** Click "Allow" for ALL permissions
4. **DO NOT** restrict or deny any permissions
5. Complete the OAuth flow

### Step 4: Get the New Service ID
1. After connecting, Email.js will show you the new Service ID
2. It will look like: `service_xxxxxxx`
3. **Copy this new Service ID**
4. Update it in your code (or keep using `service_usoglbp` if it's the same)

### Step 5: Verify Service Status
1. The service should show:
   - ✅ Status: "Active"
   - ✅ Connection: "Connected"
   - ✅ Green checkmark or active indicator

### Step 6: Test the Service
1. Go to "Email Templates"
2. Find `template_86vm0ze`
3. Click "Test" button
4. Fill in sample data:
   - from_name: Test User
   - from_email: test@example.com
   - company: Test Company
   - budget: $50K - $100K
   - message: This is a test message
   - to_name: Renix Solutions
5. Click "Send Test Email"
6. **If this works, the service is properly configured**

### Step 7: Check Template Recipient
1. In the template `template_86vm0ze`, make sure:
   - "To Email" field is set to: `renixsolutions@gmail.com`
   - Or the email address where you want to receive form submissions

## Alternative: Use Different Email Service

If Gmail continues to have issues, try these alternatives:

### Option A: Outlook/Office 365
1. In Email.js, add new service
2. Select "Outlook" or "Office 365"
3. Connect your Outlook account
4. Usually more reliable than Gmail

### Option B: SMTP Service
1. Add new service
2. Select "SMTP"
3. Configure with your email provider's SMTP settings
4. More direct connection

### Option C: SendGrid
1. Sign up for SendGrid (free tier available)
2. Add SendGrid service in Email.js
3. Connect using API key
4. Professional email service

## Verify Your Gmail Account Settings

### Check Google Account Permissions
1. Go to: https://myaccount.google.com/permissions
2. Look for "Email.js" or "Third-party apps"
3. Make sure it shows "Send email on your behalf" permission
4. If it's restricted, click on it and allow full access

### Check Gmail Settings
1. Go to Gmail settings
2. Check "Forwarding and POP/IMAP"
3. Make sure IMAP is enabled (if using IMAP)
4. Check for any security restrictions

## Debug Steps

### 1. Check Browser Console
- Open browser DevTools (F12)
- Go to Console tab
- Submit the form
- Look for detailed error messages
- Share the full error if it's different

### 2. Check Email.js Logs
- Go to Email.js Dashboard
- Check "Logs" or "Activity" section
- Look for failed email attempts
- Check error details there

### 3. Test with Different Browser
- Try submitting the form in:
  - Chrome
  - Firefox
  - Edge
- See if the error persists

## Common Issues and Solutions

### Issue 1: Service Shows as Connected but Still Fails
**Solution:** 
- Disconnect and reconnect
- Make sure to allow ALL permissions during reconnection
- Don't skip any permission screens

### Issue 2: Permission Screen Doesn't Show
**Solution:**
- Clear browser cache and cookies
- Try in incognito/private mode
- Use a different browser

### Issue 3: "Access Denied" During Connection
**Solution:**
- Make sure you're signed in to the correct Google account
- Check if your Google account has any restrictions
- Try with a different Gmail account

### Issue 4: Service Connects but Test Fails
**Solution:**
- Check the template recipient email
- Verify template variables match
- Make sure template is published (not draft)

## Quick Verification Checklist

- [ ] Old service is completely deleted
- [ ] New service is created and connected
- [ ] "Send email on your behalf" permission is allowed
- [ ] Service shows as "Active" and "Connected"
- [ ] Test email from Email.js dashboard works
- [ ] Template `template_86vm0ze` is published
- [ ] Template recipient email is correct
- [ ] All template variables are present

## Still Not Working?

If you've tried everything above and it still doesn't work:

1. **Contact Email.js Support:**
   - Go to Email.js support
   - Provide them with:
     * Service ID: service_usoglbp
     * Template ID: template_86vm0ze
     * Error: "Gmail_API: Request had insufficient authentication scopes"
     * Screenshot of service status

2. **Try Alternative Service:**
   - Use Outlook/Office 365 instead
   - Or use SMTP directly
   - These are often more reliable

3. **Check Gmail Account:**
   - Make sure your Gmail account is not restricted
   - Check if it's a Google Workspace account (may need admin approval)
   - Verify account is active and not suspended

