'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Sphere, Stars, useTexture } from '@react-three/drei'
import { useRef, useState, useEffect } from 'react'
import * as THREE from 'three'

function Earth() {
  const earthRef = useRef<THREE.Mesh>(null!)
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
    if (earthRef.current) {
      earthRef.current.rotation.y = state.clock.elapsedTime * 0.2 + mouse.x * 0.1
      earthRef.current.rotation.x = mouse.y * 0.05
    }
  })

  // Create Earth-like material with blue-green colors matching reference
  return (
    <Sphere ref={earthRef} args={[2, 64, 64]}>
      <meshStandardMaterial
        color="#0A0A0A"
        emissive="#0EA5E9"
        emissiveIntensity={0.4}
        roughness={0.7}
        metalness={0.3}
      />
    </Sphere>
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
      nodes.current.rotation.y = state.clock.elapsedTime * 0.15 + mouse.x * 0.1
      nodes.current.rotation.x = mouse.y * 0.05
    }
  })

  const nodePositions = [
    [4, 0, 0], [-4, 0, 0], [0, 4, 0], [0, -4, 0],
    [3, 3, 3], [-3, -3, -3], [3, -3, 3], [-3, 3, -3],
    [0, 0, 4], [0, 0, -4],
  ]

  return (
    <group ref={nodes}>
      {nodePositions.map((pos, i) => (
        <Sphere key={i} position={pos as [number, number, number]} args={[0.1, 16, 16]}>
          <meshStandardMaterial
            color="#0ea5e9"
            emissive="#0ea5e9"
            emissiveIntensity={0.6}
            metalness={0.7}
            roughness={0.2}
          />
        </Sphere>
      ))}
    </group>
  )
}

export default function Globe() {
  return (
    <div id="globeCanvas" className="w-full h-full" style={{ cursor: 'grab' }}>
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.7} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={0.6} />
        <Stars radius={300} depth={50} count={2000} factor={4} fade speed={1} />
        <Earth />
        <NetworkNodes />
        <OrbitControls
          enableZoom={true}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          enableDamping
          dampingFactor={0.05}
          minDistance={6}
          maxDistance={12}
        />
      </Canvas>
    </div>
  )
}

