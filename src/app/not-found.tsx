import { Metadata } from 'next'
import Link from 'next/link'
import { generatePageMetadata } from '@/utils/seo'

export const metadata: Metadata = generatePageMetadata(
  'Page Not Found | 404',
  'The page you are looking for could not be found.',
  '/404'
)

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-heading font-bold text-primary mb-4">404</h1>
        <h2 className="text-3xl md:text-4xl font-heading font-semibold text-ink mb-4">
          Page Not Found
        </h2>
        <p className="text-lg text-muted mb-8">
          The page you are looking for could not be found. It may have been moved or deleted.
        </p>
        <Link
          href="/"
          className="inline-block px-8 py-4 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all duration-200 font-medium text-lg shadow-soft hover:shadow-hover"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  )
}

