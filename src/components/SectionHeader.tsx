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
  const isLightTheme = className.includes('text-white')
  
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
          className={`font-semibold text-sm uppercase tracking-wider mb-2 ${isLightTheme ? 'text-white/80' : 'text-accent'}`}
        >
          {subtitle}
        </motion.p>
      )}
      <motion.h2
        variants={fadeInUp}
        className={`text-4xl md:text-5xl font-heading font-bold mb-4 ${isLightTheme ? 'text-white' : 'text-ink'}`}
        style={{ transform: 'translateZ(30px)' }}
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          variants={fadeInUp}
          className={`text-lg leading-relaxed ${isLightTheme ? 'text-white/90' : 'text-muted'}`}
          style={{ transform: 'translateZ(10px)' }}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  )
}

