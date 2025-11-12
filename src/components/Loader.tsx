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
    lg: 'w-24 h-24',
  }

  const containerClass = fullScreen
    ? 'fixed inset-0 z-[9999] flex items-center justify-center bg-background backdrop-blur-sm'
    : 'flex items-center justify-center p-8'

  return (
    <div className={containerClass}>
      <div className="relative">
        {/* Outer ring - dark theme base */}
        <motion.div
          className={`${sizeClasses[size]} border-4 border-primary/20 rounded-full`}
          animate={{ rotate: 360 }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {/* Dark gradient arc */}
          <div className="absolute inset-0 border-4 border-transparent border-t-primary rounded-full" />
          <div className="absolute inset-0 border-4 border-transparent border-r-primary/80 rounded-full" />
        </motion.div>

        {/* Middle ring - subtle dark rotation */}
        <motion.div
          className={`absolute inset-0 ${sizeClasses[size]} border-[3px] border-primary/15 rounded-full`}
          animate={{ rotate: -360 }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <div className="absolute inset-0 border-[3px] border-transparent border-b-primary/60 rounded-full" />
        </motion.div>

        {/* Inner pulsing dot - dark theme */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <div className="w-2.5 h-2.5 bg-primary rounded-full shadow-lg shadow-primary/40" />
        </motion.div>

        {/* Subtle outer glow - dark theme */}
        <motion.div
          className="absolute inset-0 -m-6 rounded-full bg-primary/10 blur-2xl"
          animate={{ 
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.15, 1]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Additional depth ring */}
        <motion.div
          className={`absolute inset-0 ${sizeClasses[size]} border-2 border-primary/10 rounded-full`}
          animate={{ rotate: 360 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>
    </div>
  )
}

