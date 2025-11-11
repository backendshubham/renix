'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import { staggerContainer, fadeInUp, Variants } from '@/utils/animations'

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  variants?: Variants
}

export default function AnimatedSection({
  children,
  className = '',
  variants = staggerContainer,
}: AnimatedSectionProps) {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function AnimatedItem({
  children,
  className = '',
  variants = fadeInUp,
}: {
  children: ReactNode
  className?: string
  variants?: Variants
}) {
  return (
    <motion.div variants={variants} className={className}>
      {children}
    </motion.div>
  )
}

