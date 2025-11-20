'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ReactNode } from 'react'

interface AnimatedLinkProps {
  href: string
  children: ReactNode
  className?: string
  target?: string
  rel?: string
}

export default function AnimatedLink({ href, children, className = '', target, rel }: AnimatedLinkProps) {
  const isExternal = href.startsWith('http://') || href.startsWith('https://')
  
  if (isExternal) {
    return (
      <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
        <a href={href} className={className} target={target} rel={rel}>
          {children}
        </a>
      </motion.div>
    )
  }
  
  return (
    <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
      <Link href={href} className={className}>
        {children}
      </Link>
    </motion.div>
  )
}

