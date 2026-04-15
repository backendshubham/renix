'use client'

import { useRef, ReactNode } from 'react'
import { motion, useInView } from 'framer-motion'
import { Variants } from 'framer-motion'

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  variants?: Variants
  delay?: number
  once?: boolean
  threshold?: number
}

const defaultVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function ScrollReveal({
  children,
  className = '',
  variants = defaultVariants,
  delay = 0,
  once = true,
  threshold = 0.15,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once, amount: threshold })

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={variants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  )
}
