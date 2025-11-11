# Email.js 412 Precondition Failed Error - Troubleshooting Guide

## Error Details
- **Status Code:** 412 Precondition Failed
- **Service ID:** service_usoglbp
- **Template ID:** template_86vm0ze
- **User ID (Public Key):** JBqVi1DGxIZwitgL2

## Common Causes & Solutions

### 1. Template Not Published
**Issue:** The template exists but is not published/active.

**Solution:**
- Go to Email.js Dashboard → Email Templates
- Find template `template_86vm0ze`
- Make sure it's **Published** (not Draft)
- Click "Publish" if it's in draft mode

### 2. Service Not Connected
**Issue:** The email service is not properly connected.

**Solution:**
- Go to Email.js Dashboard → Email Services
- Find service `service_usoglbp`
- Make sure it's **Active** and connected
- Reconnect if needed (Gmail, Outlook, etc.)

### 3. Template Variables Mismatch
**Issue:** Template variables don't match what's being sent.

**Solution:**
- Check your template in Email.js
- Make sure these variables exist in the template:
  - `{{from_name}}`
  - `{{from_email}}`
  - `{{company}}`
  - `{{budget}}`
  - `{{message}}`
  - `{{to_name}}`
  - `{{reply_to}}` (optional)

### 4. Missing Required Fields
**Issue:** Template has required fields that aren't being sent.

**Solution:**
- Check your Email.js template settings
- Remove any "required" flags from optional fields
- Or make sure all required fields are being sent

### 5. User ID Mismatch
**Issue:** The public key doesn't match the service/template owner.

**Solution:**
- Go to Email.js Dashboard → Account → General
- Verify your Public Key matches: `JBqVi1DGxIZwitgL2`
- Make sure the service and template belong to the same account

### 6. Template ID or Service ID Incorrect
**Issue:** The IDs might be wrong.

**Solution:**
- Double-check the Service ID: `service_usoglbp`
- Double-check the Template ID: `template_86vm0ze`
- Copy them directly from Email.js dashboard (don't type manually)

## Step-by-Step Fix

1. **Verify Service:**
   ```
   - Go to Email.js Dashboard
   - Click "Email Services"
   - Find "service_usoglbp"
   - Make sure it's Active and Connected
   ```

2. **Verify Template:**
   ```
   - Go to "Email Templates"
   - Find "template_86vm0ze"
   - Make sure it's Published (not Draft)
   - Check all template variables match:
     * {{from_name}}
     * {{from_email}}
     * {{company}}
     * {{budget}}
     * {{message}}
     * {{to_name}}
   ```

3. **Test Template:**
   ```
   - Click "Test" button in Email.js
   - Fill in sample data
   - Send test email
   - If test works, the issue is in the code
   - If test fails, the issue is in Email.js configuration
   ```

4. **Check Template Variables:**
   ```
   Make sure your template uses these exact variable names:
   - {{from_name}} (not {{name}} or {{user_name}})
   - {{from_email}} (not {{email}} or {{user_email}})
   - {{company}}
   - {{budget}}
   - {{message}}
   - {{to_name}}
   ```

5. **Verify Public Key:**
   ```
   - Go to Account → General
   - Copy your Public Key
   - Make sure it matches: JBqVi1DGxIZwitgL2
   ```

## Quick Test

Try sending a test email directly from Email.js dashboard:
1. Go to Templates
2. Click "Test" on your template
3. Fill in the form
4. Send

If this works, the issue is in the code configuration.
If this fails, the issue is in Email.js setup.

## Alternative: Use Environment Variables

If you want to keep credentials secure, you can use environment variables:

1. Create `.env.local` file:
```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_usoglbp
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_86vm0ze
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=JBqVi1DGxIZwitgL2
```

2. Update ContactForm.tsx:
```typescript
const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_usoglbp'
const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_86vm0ze'
const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'JBqVi1DGxIZwitgL2'
```

## Still Not Working?

1. **Check Email.js Console:**
   - Go to Email.js Dashboard
   - Check "Logs" or "Activity" section
   - Look for detailed error messages

2. **Verify Account Status:**
   - Make sure your Email.js account is active
   - Check if you've exceeded free tier limits
   - Verify payment status if on paid plan

3. **Contact Email.js Support:**
   - If nothing works, contact Email.js support
   - Provide them with:
     * Service ID: service_usoglbp
     * Template ID: template_86vm0ze
     * Error: 412 Precondition Failed
     * Request details from browser console

