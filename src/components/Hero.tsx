'use client'

import Link from 'next/link'
import { motion, useMotionValue, useSpring, useTransform, useScroll } from 'framer-motion'
import { useRef, useEffect } from 'react'
import { fadeInUp, staggerContainer } from '@/utils/animations'

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null)

  // Mouse parallax values
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Smooth springs for mouse tracking
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 })

  // Scroll-based parallax
  const { scrollY } = useScroll()
  const scrollY1 = useTransform(scrollY, [0, 600], [0, -120])
  const scrollY2 = useTransform(scrollY, [0, 600], [0, -60])
  const scrollY3 = useTransform(scrollY, [0, 600], [0, -200])
  const scrollOpacity = useTransform(scrollY, [0, 400], [1, 0])

  // Layer transforms (mouse-driven)
  const layer1X = useTransform(springX, [-300, 300], [-18, 18])
  const layer1Y = useTransform(springY, [-300, 300], [-18, 18])
  const layer2X = useTransform(springX, [-300, 300], [-10, 10])
  const layer2Y = useTransform(springY, [-300, 300], [-10, 10])
  const layer3X = useTransform(springX, [-300, 300], [-30, 30])
  const layer3Y = useTransform(springY, [-300, 300], [-30, 30])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window
      mouseX.set(e.clientX - innerWidth / 2)
      mouseY.set(e.clientY - innerHeight / 2)
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-light pt-20 pb-16"
    >
      {/* Parallax background orbs — layer 3 (deepest, moves most) */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ x: layer3X, y: layer3Y, translateY: scrollY3 }}
      >
        <div className="absolute top-[-10%] left-[-5%] w-96 h-96 rounded-full bg-primary/8 blur-3xl" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-accent/8 blur-3xl" />
      </motion.div>

      {/* Mid-layer orbs — layer 2 */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ x: layer2X, y: layer2Y, translateY: scrollY2 }}
      >
        <div className="absolute top-[20%] right-[10%] w-64 h-64 rounded-full bg-secondary/6 blur-2xl" />
        <div className="absolute bottom-[25%] left-[8%] w-56 h-56 rounded-full bg-primary/6 blur-2xl" />
        {/* Floating grid dots */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'radial-gradient(circle, #6366f1 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
      </motion.div>

      {/* Foreground floating shapes — layer 1 (closest) */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ x: layer1X, y: layer1Y, translateY: scrollY1 }}
      >
        <motion.div
          animate={{ y: [0, -16, 0], rotate: [0, 6, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-[15%] left-[12%] w-12 h-12 rounded-xl bg-primary/15 border border-primary/20 backdrop-blur-sm"
        />
        <motion.div
          animate={{ y: [0, 14, 0], rotate: [0, -8, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute top-[30%] right-[14%] w-8 h-8 rounded-full bg-accent/20 border border-accent/25"
        />
        <motion.div
          animate={{ y: [0, -10, 0], rotate: [0, 12, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute bottom-[30%] left-[18%] w-6 h-6 rounded-lg bg-secondary/20 border border-secondary/25"
        />
        <motion.div
          animate={{ y: [0, 18, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          className="absolute bottom-[20%] right-[18%] w-10 h-10 rounded-xl bg-primary/10 border border-primary/15"
        />
      </motion.div>

      {/* Hero text content — fades and lifts on scroll */}
      <motion.div
        className="container relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        style={{ opacity: scrollOpacity, translateY: scrollY2 }}
      >
        <div className="flex flex-col items-center justify-center text-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto"
          >
            {/* Badge */}
            <motion.div variants={fadeInUp} className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Trusted by 50K+ Users Worldwide
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-ink mb-6 leading-tight"
            >
              Safeguarding Online Presence,{' '}
              <br />
              <span className="relative">
                <strong className="text-primary">Protecting Your Data Fast.</strong>
                <motion.span
                  className="absolute -bottom-1 left-0 h-1 bg-primary/30 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ delay: 1, duration: 0.8, ease: 'easeOut' }}
                />
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-lg sm:text-xl md:text-2xl text-muted mb-10 max-w-2xl mx-auto leading-relaxed px-4"
            >
              In today&apos;s digital age, software security is paramount. Vulnerabilities can lead to
              data breaches, financial losses, and reputational damage.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.div whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all duration-200 font-medium text-lg shadow-soft hover:shadow-hover inline-block"
                >
                  Get Started Now
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/case-studies"
                  className="px-8 py-4 bg-transparent text-primary border-2 border-primary/30 rounded-lg hover:border-primary hover:bg-primary/5 transition-all duration-200 font-medium text-lg inline-block"
                >
                  View Our Work →
                </Link>
              </motion.div>
            </motion.div>

            {/* Stats row */}
            <motion.div
              variants={fadeInUp}
              className="mt-14 grid grid-cols-3 gap-6 max-w-lg mx-auto"
            >
              {[
                { value: '50K+', label: 'Users Served' },
                { value: '99.9%', label: 'Uptime' },
                { value: '10+', label: 'Products Built' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-2xl sm:text-3xl font-heading font-bold text-primary">{stat.value}</p>
                  <p className="text-xs sm:text-sm text-muted mt-1">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-light to-transparent pointer-events-none" />
    </section>
  )
}
