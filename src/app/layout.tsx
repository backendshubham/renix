import type { Metadata } from 'next'
import { Sora, Poppins, Inter, Nunito_Sans } from 'next/font/google'
import dynamic from 'next/dynamic'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { defaultMetadata } from '@/utils/seo'

const JsonLd = dynamic(() => import('@/components/JsonLd'), {
  ssr: false,
})

const Background3D = dynamic(() => import('@/components/Background3D'), {
  ssr: false,
  loading: () => null,
})

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-nunito',
  display: 'swap',
  adjustFontFallback: false,
})

export const metadata: Metadata = {
  ...defaultMetadata,
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: [
      { url: '/apple-touch-icon.svg', sizes: '180x180', type: 'image/svg+xml' },
    ],
  },
  manifest: '/manifest.json',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${sora.variable} ${poppins.variable} ${inter.variable} ${nunitoSans.variable}`}>
      <body className="relative">
        <JsonLd />
        <Background3D intensity={0.28} />
        <Navbar />
        <main className="relative z-10 min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

