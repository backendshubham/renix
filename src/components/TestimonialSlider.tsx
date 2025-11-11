'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import testimonialsData from '@/data/testimonials.json'

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonialsData.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const currentTestimonial = testimonialsData[currentIndex]

  return (
    <div className="relative max-w-4xl mx-auto">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-card p-8 md:p-12 shadow-soft"
        >
          <div className="flex items-start space-x-4 mb-6">
            <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
              <span className="text-2xl">💬</span>
            </div>
            <div className="flex-1">
              <p className="text-lg text-ink leading-relaxed mb-6">
                &quot;{currentTestimonial.quote}&quot;
              </p>
              <div className="flex items-center space-x-4">
                <div>
                  <p className="font-heading font-semibold text-ink">
                    {currentTestimonial.name}
                  </p>
                  <p className="text-sm text-muted">
                    {currentTestimonial.role}, {currentTestimonial.company}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Dots Indicator */}
      <div className="flex justify-center space-x-2 mt-6">
        {testimonialsData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-200 ${
              index === currentIndex ? 'bg-primary w-8' : 'bg-line'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

