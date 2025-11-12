/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'www.google.com',
      'www.apple.com',
      'www.youtube.com',
      'logos-world.net',
      'cdn.simpleicons.org',
      'cdn.worldvectorlogo.com',
      'img-prod-cms-rt-microsoft-com.akamaized.net',
    ],
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.google.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.apple.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.youtube.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'logos-world.net',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.simpleicons.org',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.worldvectorlogo.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'img-prod-cms-rt-microsoft-com.akamaized.net',
        pathname: '/**',
      },
    ],
  },
  experimental: {
    optimizePackageImports: ['@react-three/fiber', '@react-three/drei'],
  },
}

module.exports = nextConfig

