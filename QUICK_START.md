# Quick Start Guide

## 🚀 First Steps

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Replace Placeholder Images**
   - `public/favicon.ico` - Your favicon (16x16 or 32x32)
   - `public/og-image.jpg` - Open Graph image (1200x630px)
   - `public/logo.svg` - Your company logo

3. **Start Development Server**
   ```bash
   npm run dev
   ```

4. **Open Browser**
   - Navigate to http://localhost:3000

## 📝 Update Content

### Company Information
- Edit `src/utils/seo.ts` for company metadata
- Update contact info in `src/components/Footer.tsx` and `src/app/contact/page.tsx`

### Services
- Edit `src/data/services.json`

### Industries
- Edit `src/data/industries.json`

### Projects/Case Studies
- Edit `src/data/projects.json`
- Add detail pages in `src/app/case-studies/[slug]/page.tsx`

### Testimonials
- Edit `src/data/testimonials.json`

### Careers
- Edit `src/data/careers.json`

### Blog Posts
- Add metadata to `src/data/blog.json`
- Create markdown files in `src/content/blog/`

## 🎨 Customize Design

### Colors
- Edit `tailwind.config.ts` - color palette section

### Fonts
- Edit `src/app/layout.tsx` - font imports
- Edit `tailwind.config.ts` - font family configuration

### Components
- All components in `src/components/` are customizable
- Global styles in `src/styles/globals.css`

## 🔧 API Integration

### Contact Form
- Update `src/app/api/contact/route.ts` to integrate with your email service

### Analytics
- Update `src/utils/analytics.ts` with your analytics provider
- Update `src/app/api/analytics/route.ts` to send events

## 📦 Deploy to Vercel

1. Push code to GitHub
2. Import repository in Vercel
3. Vercel will auto-detect Next.js and deploy

## ✅ Checklist Before Launch

- [ ] Replace all placeholder images
- [ ] Update company information
- [ ] Add real content to all pages
- [ ] Test all forms and links
- [ ] Configure analytics
- [ ] Set up contact form backend
- [ ] Test on mobile devices
- [ ] Run Lighthouse audit
- [ ] Update sitemap URL in `src/app/sitemap.ts`
- [ ] Update robots.txt URL in `src/app/robots.ts`

