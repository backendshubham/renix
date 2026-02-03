'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Background3D from './Background3D'

export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(true)
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    // Start animation sequence
    const timer = setTimeout(() => {
      setShowContent(true)
    }, 500)

    // Minimum display time for the welcome screen
    const minDisplayTime = 3500

    const handleLoad = () => {
      setTimeout(() => {
        setIsLoading(false)
      }, minDisplayTime)
    }

    if (document.readyState === 'complete') {
      handleLoad()
    } else {
      window.addEventListener('load', handleLoad)
      return () => window.removeEventListener('load', handleLoad)
    }

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background overflow-hidden"
        >
          {/* Animated Background */}
          <div className="absolute inset-0 z-0">
            <Background3D intensity={0.5} />
          </div>

          <div className="flex flex-col items-center justify-center space-y-2 relative z-10">
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-muted text-2xl md:text-3xl font-medium"
            >
              Welcome to RenixSolutions
            </motion.p>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
              className="relative w-80 md:w-96"
            >
              {/* Using the logo from public folder */}
              <img
                src="/welcome-logo.png"
                alt="Renix Solutions"
                className="w-full h-auto"
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

