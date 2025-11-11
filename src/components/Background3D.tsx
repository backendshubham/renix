'use client'

import { useEffect, useRef } from 'react'

export default function Background3D({ intensity = 0.3 }: { intensity?: number }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const particlesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    const particles = particlesRef.current
    if (!container || !particles) return

    // Create floating particles
    const particleCount = 50
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div')
      particle.className = 'absolute rounded-full bg-gradient-to-r from-accent to-secondary opacity-20'
      particle.style.width = `${Math.random() * 4 + 2}px`
      particle.style.height = particle.style.width
      particle.style.left = `${Math.random() * 100}%`
      particle.style.top = `${Math.random() * 100}%`
      particle.style.animation = `float ${Math.random() * 20 + 10}s infinite ease-in-out`
      particle.style.animationDelay = `${Math.random() * 5}s`
      particles.appendChild(particle)
    }

    // Mouse parallax effect
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window
      const x = (clientX / innerWidth - 0.5) * 20
      const y = (clientY / innerHeight - 0.5) * 20
      
      if (container) {
        container.style.transform = `translate(${x}px, ${y}px)`
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      // Cleanup particles
      while (particles.firstChild) {
        particles.removeChild(particles.firstChild)
      }
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 w-full h-full pointer-events-none overflow-hidden"
      style={{ zIndex: 0, opacity: intensity }}
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-light to-background">
        <div className="absolute inset-0 bg-gradient-to-tr from-accent/5 via-transparent to-secondary/5 animate-gradient-shift" />
      </div>

      {/* Orbiting rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] lg:w-[1000px] lg:h-[1000px]">
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className="absolute inset-0 rounded-full border border-accent/20"
            style={{
              width: `${100 - i * 15}%`,
              height: `${100 - i * 15}%`,
              left: `${i * 7.5}%`,
              top: `${i * 7.5}%`,
              animation: `rotate-${i % 2 === 0 ? 'cw' : 'ccw'} ${20 + i * 5}s linear infinite`,
            }}
          />
        ))}
      </div>

      {/* Floating particles */}
      <div ref={particlesRef} className="absolute inset-0" />

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(14, 165, 233, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(14, 165, 233, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            animation: 'grid-move 20s linear infinite',
          }}
        />
      </div>

      {/* Glowing orbs */}
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className="absolute rounded-full bg-gradient-to-r from-accent/30 to-secondary/30 blur-3xl"
          style={{
            width: `${200 + i * 100}px`,
            height: `${200 + i * 100}px`,
            left: `${20 + i * 30}%`,
            top: `${10 + i * 25}%`,
            animation: `pulse-orb ${8 + i * 2}s ease-in-out infinite`,
            animationDelay: `${i * 2}s`,
          }}
        />
      ))}

      {/* Data stream lines */}
      <div className="absolute inset-0">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-px bg-gradient-to-b from-transparent via-accent/40 to-transparent"
            style={{
              left: `${(i * 8.33) % 100}%`,
              height: '100%',
              animation: `stream-flow ${3 + (i % 3)}s ease-in-out infinite`,
              animationDelay: `${i * 0.3}s`,
            }}
          />
        ))}
      </div>

    </div>
  )
}
