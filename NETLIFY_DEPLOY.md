# Netlify Deployment Guide

## Quick Deploy

### Option 1: Deploy via Netlify UI

1. **Push to GitHub/GitLab/Bitbucket**
   - Push your code to a Git repository
   - Make sure all files are committed

2. **Connect to Netlify**
   - Go to https://app.netlify.com/
   - Click "Add new site" → "Import an existing project"
   - Connect your Git provider
   - Select your repository

3. **Configure Build Settings**
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
   - **Node version**: `18` (or latest LTS)

4. **Environment Variables** (if needed)
   - Go to Site settings → Environment variables
   - Add any required variables:
     - `NEXT_PUBLIC_EMAILJS_SERVICE_ID` (optional, already in code)
     - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` (optional, already in code)
     - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` (optional, already in code)

5. **Deploy**
   - Click "Deploy site"
   - Wait for build to complete
   - Your site will be live!

### Option 2: Deploy via Netlify CLI

1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login to Netlify**
   ```bash
   netlify login
   ```

3. **Initialize Site**
   ```bash
   netlify init
   ```
   - Follow the prompts
   - Select "Create & configure a new site"
   - Choose your team
   - Site name will be auto-generated (or provide one)

4. **Deploy**
   ```bash
   netlify deploy --prod
   ```

## Configuration Files

### `netlify.toml`
- Build command: `npm run build`
- Publish directory: `.next`
- Node version: `18`
- Uses `@netlify/plugin-nextjs` for Next.js support

### `public/_redirects`
- Handles client-side routing
- Redirects all routes to Next.js handler

## Environment Variables

If you need to use environment variables (currently Email.js credentials are hardcoded):

1. Go to Netlify Dashboard
2. Site settings → Environment variables
3. Add variables:
   ```
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_usoglbp
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_86vm0ze
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=JBqVi1DGxIZwitgL2
   ```

## Custom Domain Setup

1. **Add Custom Domain**
   - Go to Site settings → Domain management
   - Click "Add custom domain"
   - Enter: `renix.live`

2. **Configure DNS**
   - Add CNAME record pointing to your Netlify site
   - Or add A record with Netlify's IP addresses
   - Netlify will provide DNS instructions

3. **SSL Certificate**
   - Netlify automatically provisions SSL certificates
   - HTTPS will be enabled automatically

## Build Settings

- **Build command**: `npm run build`
- **Publish directory**: `.next`
- **Node version**: `18` (or latest LTS)
- **NPM version**: Latest (auto-detected)

## Post-Deployment Checklist

- [ ] Site is accessible at Netlify URL
- [ ] Custom domain `renix.live` is configured
- [ ] SSL certificate is active (HTTPS)
- [ ] All pages load correctly
- [ ] Contact form works (test Email.js)
- [ ] 3D background animations work
- [ ] Company logos slider works
- [ ] Mobile responsive design works
- [ ] SEO metadata is correct
- [ ] Sitemap is accessible at `/sitemap.xml`
- [ ] Robots.txt is accessible at `/robots.txt`

## Troubleshooting

### Build Fails

1. **Check Node Version**
   - Ensure Node 18+ is used
   - Set in `netlify.toml` or Netlify UI

2. **Check Dependencies**
   - Run `npm install` locally first
   - Check for dependency conflicts
   - Use `npm install --legacy-peer-deps` if needed

3. **Check Build Logs**
   - Go to Deploys → Click on failed deploy
   - Check build logs for errors

### Site Not Loading

1. **Check Publish Directory**
   - Should be `.next` for Next.js
   - Verify in Netlify settings

2. **Check Redirects**
   - Ensure `_redirects` file is in `public/` folder
   - Check `netlify.toml` configuration

### 3D Animations Not Working

1. **Check Browser Console**
   - Open DevTools → Console
   - Look for JavaScript errors

2. **Check Dynamic Imports**
   - Ensure `Background3D` is dynamically imported
   - Check `layout.tsx` for correct import

## Performance Optimization

### Enable Netlify Edge Functions (Optional)

Add to `netlify.toml`:
```toml
[[edge_functions]]
  path = "/api/*"
  function = "edge-function"
```

### Enable Image Optimization

Next.js Image component is already configured. Netlify will handle image optimization automatically.

## Continuous Deployment

Netlify automatically deploys when you push to your Git repository:
- **Production**: Deploys from `main` or `master` branch
- **Preview**: Deploys from other branches as preview deployments

## Support

- Netlify Docs: https://docs.netlify.com/
- Next.js on Netlify: https://docs.netlify.com/integrations/frameworks/next-js/
- Netlify Support: https://www.netlify.com/support/

