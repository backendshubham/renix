# Netlify Deployment Checklist

## Pre-Deployment

- [x] All domain references updated to `renix.live`
- [x] Email.js credentials configured
- [x] `netlify.toml` created
- [x] `.nvmrc` file created (Node 18)
- [x] All dependencies installed
- [x] Build runs successfully locally (`npm run build`)

## Deployment Steps

### 1. Push to Git Repository
```bash
git add .
git commit -m "Ready for Netlify deployment"
git push origin main
```

### 2. Connect to Netlify

**Option A: Via Netlify UI**
1. Go to https://app.netlify.com/
2. Click "Add new site" → "Import an existing project"
3. Connect your Git provider (GitHub/GitLab/Bitbucket)
4. Select your repository
5. Netlify will auto-detect Next.js settings

**Option B: Via Netlify CLI**
```bash
npm install -g netlify-cli
netlify login
netlify init
netlify deploy --prod
```

### 3. Configure Build Settings

Netlify should auto-detect these, but verify:
- **Build command**: `npm run build`
- **Publish directory**: `.next`
- **Node version**: `18` (from `.nvmrc`)

### 4. Environment Variables (Optional)

If you want to use environment variables instead of hardcoded values:
- Go to Site settings → Environment variables
- Add:
  ```
  NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_usoglbp
  NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_86vm0ze
  NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=JBqVi1DGxIZwitgL2
  ```

### 5. Custom Domain Setup

1. **Add Domain**
   - Go to Site settings → Domain management
   - Click "Add custom domain"
   - Enter: `renix.live`

2. **Configure DNS**
   - Netlify will provide DNS instructions
   - Add CNAME record: `renix.live` → `your-site.netlify.app`
   - Or add A records with Netlify's IP addresses

3. **SSL Certificate**
   - Netlify automatically provisions SSL
   - HTTPS will be enabled automatically
   - Wait for DNS propagation (can take up to 48 hours)

## Post-Deployment Testing

- [ ] Site loads at Netlify URL
- [ ] Custom domain `renix.live` works
- [ ] HTTPS is active
- [ ] All pages load correctly:
  - [ ] Home page (`/`)
  - [ ] Services page (`/services`)
  - [ ] About page (`/about`)
  - [ ] Contact page (`/contact`)
- [ ] 3D background animations work
- [ ] Company logos slider works
- [ ] Contact form works (test Email.js)
- [ ] Navigation links work
- [ ] Mobile responsive design works
- [ ] SEO metadata is correct (check page source)
- [ ] Sitemap accessible: `https://renix.live/sitemap.xml`
- [ ] Robots.txt accessible: `https://renix.live/robots.txt`
- [ ] Favicon and icons load correctly

## Troubleshooting

### Build Fails
- Check build logs in Netlify dashboard
- Verify Node version is 18
- Check for dependency conflicts
- Try `npm install --legacy-peer-deps` locally first

### Site Not Loading
- Check publish directory is `.next`
- Verify `@netlify/plugin-nextjs` is installed
- Check Netlify build logs

### 3D Animations Not Working
- Check browser console for errors
- Verify dynamic imports are working
- Check if WebGL is supported in browser

### Custom Domain Not Working
- Wait for DNS propagation (up to 48 hours)
- Verify DNS records are correct
- Check Netlify domain status

## Files Created for Netlify

- ✅ `netlify.toml` - Netlify configuration
- ✅ `.nvmrc` - Node version specification
- ✅ `public/_redirects` - Redirect rules (handled by plugin)
- ✅ `.gitignore` - Updated with Netlify entries

## Quick Deploy Command

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy --prod
```

## Support

- Netlify Docs: https://docs.netlify.com/
- Next.js on Netlify: https://docs.netlify.com/integrations/frameworks/next-js/
- Netlify Support: https://www.netlify.com/support/

