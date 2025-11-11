# Email.js Template for Renix Solutions Contact Form

## Template Configuration

**Template Name:** Renix Solutions Contact Form  
**Subject:** New Contact Form Submission from {{from_name}}

---

## HTML Template (Copy and paste this into Email.js template editor)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Contact Form Submission</title>
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f8f9fa;">
    <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f8f9fa; padding: 40px 20px;">
        <tr>
            <td align="center">
                <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 12px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
                    <!-- Header -->
                    <tr>
                        <td style="background-color: #0A0A0A; padding: 30px; text-align: center; border-radius: 12px 12px 0 0;">
                            <h1 style="color: #FFFFFF; margin: 0; font-size: 28px; font-weight: bold;">Renix Solutions</h1>
                            <p style="color: #94A3B8; margin: 10px 0 0 0; font-size: 14px;">New Contact Form Submission</p>
                        </td>
                    </tr>
                    
                    <!-- Content -->
                    <tr>
                        <td style="padding: 40px 30px;">
                            <p style="color: #0A0A0A; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
                                Hello {{to_name}},
                            </p>
                            
                            <p style="color: #64748B; font-size: 16px; line-height: 1.6; margin: 0 0 30px 0;">
                                You have received a new contact form submission from your website.
                            </p>
                            
                            <!-- Contact Details Box -->
                            <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #F8F9FA; border-radius: 8px; padding: 20px; margin-bottom: 30px;">
                                <tr>
                                    <td style="padding-bottom: 15px;">
                                        <strong style="color: #0A0A0A; font-size: 14px; display: block; margin-bottom: 5px;">Name:</strong>
                                        <span style="color: #64748B; font-size: 16px;">{{from_name}}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="padding-bottom: 15px;">
                                        <strong style="color: #0A0A0A; font-size: 14px; display: block; margin-bottom: 5px;">Email:</strong>
                                        <a href="mailto:{{from_email}}" style="color: #0EA5E9; font-size: 16px; text-decoration: none;">{{from_email}}</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="padding-bottom: 15px;">
                                        <strong style="color: #0A0A0A; font-size: 14px; display: block; margin-bottom: 5px;">Company:</strong>
                                        <span style="color: #64748B; font-size: 16px;">{{company}}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <strong style="color: #0A0A0A; font-size: 14px; display: block; margin-bottom: 5px;">Budget Range:</strong>
                                        <span style="color: #64748B; font-size: 16px;">{{budget}}</span>
                                    </td>
                                </tr>
                            </table>
                            
                            <!-- Message Section -->
                            <div style="margin-bottom: 30px;">
                                <strong style="color: #0A0A0A; font-size: 14px; display: block; margin-bottom: 10px;">Message:</strong>
                                <div style="background-color: #F8F9FA; border-left: 4px solid #0EA5E9; padding: 15px; border-radius: 4px;">
                                    <p style="color: #0A0A0A; font-size: 16px; line-height: 1.6; margin: 0; white-space: pre-wrap;">{{message}}</p>
                                </div>
                            </div>
                            
                            <!-- Action Button -->
                            <table width="100%" cellpadding="0" cellspacing="0">
                                <tr>
                                    <td align="center" style="padding-top: 20px;">
                                        <a href="mailto:{{from_email}}?subject=Re: Your inquiry to Renix Solutions" style="display: inline-block; background-color: #0A0A0A; color: #FFFFFF; padding: 12px 30px; text-decoration: none; border-radius: 8px; font-size: 16px; font-weight: 600;">Reply to {{from_name}}</a>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    
                    <!-- Footer -->
                    <tr>
                        <td style="background-color: #F8F9FA; padding: 20px 30px; text-align: center; border-radius: 0 0 12px 12px; border-top: 1px solid #E2E8F0;">
                            <p style="color: #64748B; font-size: 12px; margin: 0; line-height: 1.6;">
                                This email was sent from the Renix Solutions contact form.<br>
                                <strong>Contact:</strong> +91 91311 53321 | <a href="mailto:renixsolutions@gmail.com" style="color: #0EA5E9; text-decoration: none;">renixsolutions@gmail.com</a>
                            </p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>
```

---

## Plain Text Version (Alternative - for email clients that don't support HTML)

```
New Contact Form Submission - Renix Solutions

Hello {{to_name}},

You have received a new contact form submission from your website.

CONTACT DETAILS:
----------------
Name: {{from_name}}
Email: {{from_email}}
Company: {{company}}
Budget Range: {{budget}}

MESSAGE:
--------
{{message}}

---
This email was sent from the Renix Solutions contact form.
Contact: +91 91311 53321 | renixsolutions@gmail.com
```

---

## Template Variables Used

Make sure these variables are available in your Email.js template:

- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email address
- `{{company}}` - Company name (or "Not provided")
- `{{budget}}` - Budget range (or "Not specified")
- `{{message}}` - Message content
- `{{to_name}}` - Recipient name (Renix Solutions)

---

## Setup Instructions

1. **Go to Email.js Dashboard**
   - Navigate to https://www.emailjs.com/
   - Go to "Email Templates"

2. **Create New Template**
   - Click "Create New Template"
   - Name it: "Renix Solutions Contact Form"

3. **Set Subject Line**
   - Subject: `New Contact Form Submission from {{from_name}}`

4. **Paste HTML Template**
   - Select "HTML" tab in the template editor
   - Copy and paste the HTML template above

5. **Save Template**
   - Click "Save"
   - Note your Template ID

6. **Test Template**
   - Use the "Test" button in Email.js
   - Fill in sample data to preview the email

---

## Email Preview

The template includes:
- ✅ Professional dark header with Renix Solutions branding
- ✅ Clean, organized contact details section
- ✅ Highlighted message section with left border accent
- ✅ Reply button for quick response
- ✅ Footer with contact information
- ✅ Responsive design that works on mobile
- ✅ Brand colors matching your website (#0A0A0A, #0EA5E9, etc.)

---

## Notes

- The template uses inline CSS for maximum email client compatibility
- All colors match your brand palette
- The template is mobile-responsive
- The "Reply" button creates a pre-filled email to the sender
- Company and Budget fields will show "Not provided" or "Not specified" if left empty

