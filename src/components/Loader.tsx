'use client'

import { motion } from 'framer-motion'

interface LoaderProps {
  size?: 'sm' | 'md' | 'lg'
  fullScreen?: boolean
}

export default function Loader({ size = 'md', fullScreen = false }: LoaderProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
  }

  const containerClass = fullScreen
    ? 'fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm'
    : 'flex items-center justify-center p-8'

  return (
    <div className={containerClass}>
      <div className="relative">
        {/* Main spinning ring */}
        <motion.div
          className={`${sizeClasses[size]} border-4 border-line rounded-full`}
          animate={{ rotate: 360 }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <div className="absolute inset-0 border-4 border-transparent border-t-accent rounded-full" />
        </motion.div>

        {/* Inner pulsing dot */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <div className="w-2 h-2 bg-primary rounded-full" />
        </motion.div>

        {/* Outer glow effect */}
        <motion.div
          className="absolute inset-0 -m-2 rounded-full bg-accent/20 blur-md"
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>
    </div>
  )
}

