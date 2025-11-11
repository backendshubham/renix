'use client'

import { motion } from 'framer-motion'
import { ReactNode, useState } from 'react'
import { fadeInUp } from '@/utils/animations'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export default function Card({ children, className = '', hover = true }: CardProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!hover) return

    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 15
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -15

    setMousePosition({ x, y })
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 })
    setIsHovered(false)
  }

  return (
    <motion.div
      variants={fadeInUp}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX: hover && isHovered ? mousePosition.y : 0,
        rotateY: hover && isHovered ? mousePosition.x : 0,
        y: hover && isHovered ? -12 : 0,
        scale: hover && isHovered ? 1.05 : 1,
        z: hover && isHovered ? 20 : 0,
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      className={`bg-white rounded-card p-6 shadow-soft ${
        hover ? 'hover:shadow-hover' : ''
      } transition-all duration-200 transform-3d ${className}`}
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div style={{ transform: 'translateZ(20px)' }}>{children}</div>
    </motion.div>
  )
}

