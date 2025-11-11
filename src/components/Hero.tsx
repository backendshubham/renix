'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/utils/animations'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-light perspective-1000 pt-20 pb-16">
      <div className="container relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center text-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto transform-3d"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-ink mb-6 leading-tight"
              style={{ transform: 'translateZ(50px)' }}
            >
              Safeguarding Online Presence,<br />
              <strong className="text-primary">Protecting Your Data Fast.</strong>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-lg sm:text-xl md:text-2xl text-muted mb-8 max-w-2xl mx-auto leading-relaxed px-4"
              style={{ transform: 'translateZ(30px)' }}
            >
              In today&apos;s digital age, software security is paramount. Vulnerabilities can lead to data breaches, 
              financial losses, and reputational damage.
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="flex justify-center items-center"
              style={{ transform: 'translateZ(40px)' }}
            >
              <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all duration-200 font-medium text-lg shadow-soft hover:shadow-hover"
                >
                  Get Started Now
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

