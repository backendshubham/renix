'use client'

import { useEffect, useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Loader from './Loader'

export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(true)
  const startTimeRef = useRef(Date.now())
  const [canHide, setCanHide] = useState(false)

  useEffect(() => {
    // Mark page as loaded when ready
    const checkPageLoad = () => {
      if (document.readyState === 'complete') {
        // Page already loaded, wait for minimum time
        setTimeout(() => {
          setCanHide(true)
        }, 2000)
      } else {
        const handleLoad = () => {
          const elapsed = Date.now() - startTimeRef.current
          const remainingTime = Math.max(0, 2000 - elapsed)
          setTimeout(() => {
            setCanHide(true)
          }, remainingTime)
        }
        window.addEventListener('load', handleLoad, { once: true })
        return () => window.removeEventListener('load', handleLoad)
      }
    }

    checkPageLoad()
  }, [])

  useEffect(() => {
    if (canHide) {
      setIsLoading(false)
    }
  }, [canHide])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[9999]"
        >
          <Loader size="lg" fullScreen />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

