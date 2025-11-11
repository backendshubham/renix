'use client'

import { motion } from 'framer-motion'
import { fadeInUp } from '@/utils/animations'

interface SectionHeaderProps {
  title: string
  subtitle?: string
  description?: string
  className?: string
}

export default function SectionHeader({
  title,
  subtitle,
  description,
  className = '',
}: SectionHeaderProps) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={`text-center max-w-3xl mx-auto mb-12 transform-3d ${className}`}
      style={{ transform: 'translateZ(20px)' }}
    >
      {subtitle && (
        <motion.p
          variants={fadeInUp}
          className="text-accent font-semibold text-sm uppercase tracking-wider mb-2"
        >
          {subtitle}
        </motion.p>
      )}
      <motion.h2
        variants={fadeInUp}
        className="text-4xl md:text-5xl font-heading font-bold text-ink mb-4"
        style={{ transform: 'translateZ(30px)' }}
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          variants={fadeInUp}
          className="text-lg text-muted leading-relaxed"
          style={{ transform: 'translateZ(10px)' }}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  )
}

