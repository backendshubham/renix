import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0A0A0A', // Dark like reference (from SVG fills)
        accent: '#0EA5E9', // Bright cyan/teal
        secondary: '#06B6D4', // Cyan accent (from reference)
        tertiary: '#1E293B', // Dark slate for tertiary backgrounds
        ink: '#0A0A0A', // Dark text like reference
        muted: '#64748B', // Slate gray
        line: '#E2E8F0', // Light slate
        background: '#FFFFFF', // Pure white
        light: '#F8F9FA', // Light background like reference
        dark: '#1E293B', // Dark slate for backgrounds
        border: '#E2E8F0', // Border color
        'text-light': '#94A3B8', // Light text
        'text-dark': '#0A0A0A', // Dark text
      },
      fontFamily: {
        heading: ['var(--font-sora)', 'var(--font-poppins)', 'sans-serif'],
        body: ['var(--font-inter)', 'var(--font-nunito)', 'sans-serif'],
      },
      borderRadius: {
        card: '12px',
      },
      boxShadow: {
        soft: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
        hover: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
      transitionDuration: {
        default: '200ms',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
export default config

