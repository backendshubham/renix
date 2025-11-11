import { Metadata } from 'next'

export const defaultMetadata: Metadata = {
  metadataBase: new URL('https://renix.live'),
  title: {
    default: 'Renix Solutions | Build. Scale. Renix.',
    template: '%s | Renix Solutions',
  },
  description: 'Renix Solutions helps startups and enterprises design, build, and scale digital products with clean UX and resilient tech.',
  keywords: ['Renix Solutions', 'Yash Jain', 'software development', 'UI UX design', 'Next.js', 'India', 'product engineering'],
  authors: [{ name: 'Yash Jain', url: 'https://renix.live' }],
  creator: 'Yash Jain',
  publisher: 'Renix Solutions',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://renix.live',
    siteName: 'Renix Solutions',
    title: 'Renix Solutions — Modern Software & Design Studio',
    description: 'We design and build resilient digital experiences for ambitious teams.',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Renix Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Renix Solutions — Modern Software & Design Studio',
    description: 'We design and build resilient digital experiences for ambitious teams.',
    images: ['/og-image.svg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://renix.live',
  },
}

export function generatePageMetadata(
  title: string,
  description: string,
  path: string
): Metadata {
  return {
    title,
    description,
    openGraph: {
      ...defaultMetadata.openGraph,
      title: `${title} | Renix Solutions`,
      description,
      url: `https://renix.live${path}`,
    },
    twitter: {
      ...defaultMetadata.twitter,
      title: `${title} | Renix Solutions`,
      description,
    },
    alternates: {
      canonical: `https://renix.live${path}`,
    },
  }
}

export function generateJsonLd(type: 'Organization' | 'WebSite' | 'BreadcrumbList', data?: any) {
  const base = {
    '@context': 'https://schema.org',
    '@type': type,
  }

  switch (type) {
    case 'Organization':
      return {
        ...base,
        name: 'Renix Solutions',
        founder: {
          '@type': 'Person',
          name: 'Yash Jain',
        },
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+91-91311-53321',
          contactType: 'Customer Service',
          email: 'renixsolutions@gmail.com',
        },
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'IN',
        },
        url: 'https://renix.live',
        logo: 'https://renix.live/logo.svg',
        sameAs: [],
      }
    case 'WebSite':
      return {
        ...base,
        name: 'Renix Solutions',
        url: 'https://renix.live',
        potentialAction: {
          '@type': 'SearchAction',
          target: 'https://renix.live/search?q={search_term_string}',
          'query-input': 'required name=search_term_string',
        },
      }
    case 'BreadcrumbList':
      return {
        ...base,
        itemListElement: data?.items || [],
      }
    default:
      return base
  }
}

