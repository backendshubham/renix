# Renix Solutions Website

A modern, production-ready Next.js 14+ website for Renix Solutions, featuring a clean light-theme UI, subtle 3D animations, and comprehensive SEO optimization.

## 🚀 Features

- **Next.js 14+ App Router** - Latest Next.js with App Router architecture
- **TypeScript** - Full type safety throughout the codebase
- **Tailwind CSS** - Utility-first CSS framework with custom design system
- **Framer Motion** - Smooth animations and page transitions
- **React Three Fiber** - 3D animated hero section with interactive elements
- **SEO Optimized** - Complete metadata, sitemap, robots.txt, and JSON-LD schemas
- **Fully Responsive** - Mobile-first design that works on all devices
- **Accessibility** - WCAG AA compliant with prefers-reduced-motion support
- **Static Data** - JSON-based content management for easy updates

## 📁 Project Structure

```
renix/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── layout.tsx          # Root layout with fonts and metadata
│   │   ├── page.tsx            # Home page
│   │   ├── services/           # Services page
│   │   ├── industries/         # Industries page
│   │   ├── case-studies/       # Case studies listing and detail pages
│   │   ├── about/              # About page
│   │   ├── careers/            # Careers page
│   │   ├── blog/               # Blog listing and detail pages
│   │   ├── contact/            # Contact page
│   │   ├── sitemap.ts          # Dynamic sitemap generation
│   │   └── robots.ts           # Robots.txt configuration
│   ├── components/             # Reusable React components
│   │   ├── Navbar.tsx          # Navigation bar
│   │   ├── Footer.tsx          # Footer component
│   │   ├── Hero.tsx            # Hero section with 3D scene
│   │   ├── Card.tsx             # Reusable card component
│   │   ├── SectionHeader.tsx   # Section header component
│   │   ├── TestimonialSlider.tsx # Testimonial carousel
│   │   ├── ContactForm.tsx     # Contact form with validation
│   │   └── ThreeScene.tsx      # 3D scene component
│   ├── data/                   # Static JSON data files
│   │   ├── services.json       # Services data
│   │   ├── industries.json     # Industries data
│   │   ├── projects.json       # Projects/case studies data
│   │   ├── testimonials.json   # Testimonials data
│   │   ├── careers.json        # Job openings data
│   │   └── blog.json           # Blog posts metadata
│   ├── content/                # Markdown content
│   │   └── blog/               # Blog post markdown files
│   ├── styles/                 # Global styles
│   │   └── globals.css         # Tailwind imports and custom styles
│   └── utils/                  # Utility functions
│       ├── seo.ts              # SEO metadata helpers
│       ├── animations.ts       # Framer Motion animation variants
│       └── analytics.ts        # Analytics tracking utilities
├── public/                     # Static assets
│   ├── logo.svg               # Company logo
│   ├── manifest.json          # PWA manifest
│   └── robots.txt             # Robots.txt file
├── package.json               # Dependencies and scripts
├── tsconfig.json              # TypeScript configuration
├── next.config.js             # Next.js configuration
├── tailwind.config.ts         # Tailwind CSS configuration
└── README.md                  # This file
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

2. **Important**: Replace placeholder images:
   - Replace `public/favicon.ico` with your actual favicon
   - Replace `public/og-image.jpg` with a 1200x630px Open Graph image
   - Add your company logo to `public/logo.svg` (or replace with actual logo file)

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

**Note**: Linting errors may appear before running `npm install`. These will be resolved after installing dependencies.

## 📝 Content Management

All content is managed through static JSON files in the `src/data/` directory:

- **Services**: Edit `src/data/services.json`
- **Industries**: Edit `src/data/industries.json`
- **Projects**: Edit `src/data/projects.json`
- **Testimonials**: Edit `src/data/testimonials.json`
- **Careers**: Edit `src/data/careers.json`
- **Blog Metadata**: Edit `src/data/blog.json`

### Blog Posts

Blog posts are written in Markdown and stored in `src/content/blog/`. Each post should have a corresponding entry in `src/data/blog.json` with metadata.

## 🎨 Design System

### Colors

- **Primary**: `#3B82F6` (Electric Blue)
- **Accent**: `#14B8A6` (Teal)
- **Secondary**: `#F59E0B` (Amber)
- **Neutral**: `#111827` (Ink), `#6B7280` (Muted), `#E5E7EB` (Line), `#F9FAFB` (Background)

### Typography

- **Headings**: Sora or Poppins
- **Body**: Inter or Nunito Sans

### Components

- Rounded cards with soft shadows
- 8-12px border radius
- Smooth transitions (150-250ms)
- Hover effects with depth

## 🔍 SEO Configuration

Each page includes:

- Dynamic metadata (title, description, keywords)
- Open Graph tags
- Twitter Card tags
- JSON-LD structured data (Organization, WebSite, BreadcrumbList)
- Canonical URLs
- Sitemap generation
- Robots.txt configuration

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the repository in Vercel
3. Vercel will automatically detect Next.js and deploy

### Other Platforms

The site can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 📊 Analytics

Analytics tracking is set up with placeholder functions in `src/utils/analytics.ts`. To integrate:

1. Choose an analytics provider (Google Analytics, Plausible, etc.)
2. Update `src/utils/analytics.ts` with your provider's SDK
3. Update `src/app/api/analytics/route.ts` to send events to your provider

## 🔧 API Routes

Placeholder API routes are included for future backend integration:

- `/api/contact` - Contact form submissions
- `/api/analytics` - Analytics event tracking

These routes currently log data to the console. Update them to integrate with your backend services.

## 📱 PWA Support

A basic PWA manifest is included in `public/manifest.json`. To enhance PWA features:

1. Add service worker for offline support
2. Add app icons in various sizes
3. Configure push notifications (if needed)

## 🎯 Performance

The site is optimized for performance:

- Image optimization with `next/image`
- Code splitting and lazy loading
- Static generation where possible
- Font optimization with `next/font`
- Minimal JavaScript bundle size

## ♿ Accessibility

- WCAG AA compliant
- Semantic HTML
- ARIA labels where needed
- Keyboard navigation support
- Prefers-reduced-motion support

## 📄 License

This project is proprietary and owned by Renix Solutions.

## 👤 Contact

- **Founder**: Yash Jain
- **Phone**: +91 91311 53321
- **Email**: renixsolutions@gmail.com
- **Website**: https://renix.live

---

Built with ❤️ by Renix Solutions

