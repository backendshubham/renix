'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Sphere, MeshDistortMaterial, Line, Float, Stars } from '@react-three/drei'
import { useRef, useState, useEffect } from 'react'
import * as THREE from 'three'

function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null!)
  const [mouse, setMouse] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMouse({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.25 + mouse.y * 0.3
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.35 + mouse.x * 0.3
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <Sphere ref={meshRef} args={[1, 64, 64]} scale={2.2}>
        <MeshDistortMaterial
          color="#2563EB"
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.1}
          metalness={0.9}
          transparent
          opacity={0.7}
        />
      </Sphere>
    </Float>
  )
}

function NetworkNodes() {
  const nodes = useRef<THREE.Group>(null!)
  const [mouse, setMouse] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMouse({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useFrame((state) => {
    if (nodes.current) {
      nodes.current.rotation.y = state.clock.elapsedTime * 0.2 + mouse.x * 0.15
      nodes.current.rotation.x = mouse.y * 0.15
    }
  })

  const nodePositions = [
    [3, 0, 0], [-3, 0, 0], [0, 3, 0], [0, -3, 0],
    [2.5, 2.5, 2.5], [-2.5, -2.5, -2.5], [2.5, -2.5, 2.5], [-2.5, 2.5, -2.5],
    [0, 0, 3], [0, 0, -3],
    [2, 2, 0], [-2, -2, 0], [2, -2, 0], [-2, 2, 0],
  ]

  const connections = [
    [0, 1], [2, 3], [4, 5], [6, 7], [8, 9],
    [0, 4], [1, 5], [2, 6], [3, 7],
    [0, 10], [1, 11], [2, 12], [3, 13],
    [4, 8], [5, 9], [6, 8], [7, 9],
  ]

  return (
    <group ref={nodes}>
      {nodePositions.map((pos, i) => (
        <Float key={i} speed={1 + i * 0.1} rotationIntensity={0.3} floatIntensity={0.3}>
          <Sphere position={pos as [number, number, number]} args={[0.15, 32, 32]}>
            <meshStandardMaterial
              color="#0EA5E9"
              emissive="#0EA5E9"
              emissiveIntensity={0.8}
              metalness={0.8}
              roughness={0.2}
              transparent
              opacity={0.8}
            />
          </Sphere>
        </Float>
      ))}
      {connections.map(([start, end], i) => {
        const startPos = nodePositions[start]
        const endPos = nodePositions[end]
        const points = [new THREE.Vector3(...startPos), new THREE.Vector3(...endPos)]
        return (
          <Line key={i} points={points} color="#0EA5E9" lineWidth={2} transparent opacity={0.4} />
        )
      })}
    </group>
  )
}

function FloatingParticles() {
  const particles = useRef<THREE.Group>(null!)

  useFrame((state) => {
    if (particles.current) {
      particles.current.rotation.y = state.clock.elapsedTime * 0.1
      particles.current.rotation.x = state.clock.elapsedTime * 0.05
    }
  })

  const particlePositions = Array.from({ length: 30 }, () => [
    (Math.random() - 0.5) * 12,
    (Math.random() - 0.5) * 12,
    (Math.random() - 0.5) * 12,
  ])

  return (
    <group ref={particles}>
      {particlePositions.map((pos, i) => (
        <Float key={i} speed={0.5 + Math.random() * 0.5} rotationIntensity={0.2} floatIntensity={0.2}>
          <Sphere position={pos as [number, number, number]} args={[0.08, 16, 16]}>
            <meshStandardMaterial
              color="#06B6D4"
              emissive="#06B6D4"
              emissiveIntensity={0.6}
              transparent
              opacity={0.7}
            />
          </Sphere>
        </Float>
      ))}
    </group>
  )
}


export default function ThreeScene() {
  return (
    <div className="absolute inset-0 w-full h-full opacity-30">
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }} gl={{ antialias: true, alpha: true }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={0.4} />
        <spotLight position={[0, 10, 0]} angle={0.3} penumbra={1} intensity={0.5} />
        <Stars radius={300} depth={50} count={3000} factor={4} fade speed={1} />
        <AnimatedSphere />
        <NetworkNodes />
        <FloatingParticles />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.3}
          enableDamping
          dampingFactor={0.05}
        />
      </Canvas>
    </div>
  )
}

