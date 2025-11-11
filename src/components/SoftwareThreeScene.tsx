'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Sphere, Line, Float, Stars } from '@react-three/drei'
import { useRef, useState, useEffect } from 'react'
import * as THREE from 'three'

function NetworkSphere() {
  const sphereRef = useRef<THREE.Group>(null!)
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
    if (sphereRef.current) {
      sphereRef.current.rotation.y = state.clock.elapsedTime * 0.3 + mouse.x * 0.2
      sphereRef.current.rotation.x = mouse.y * 0.1
    }
  })

  // Create a network of nodes on a sphere
  const nodeCount = 20
  const radius = 2.5
  const nodes: [number, number, number][] = []
  
  for (let i = 0; i < nodeCount; i++) {
    const theta = Math.random() * Math.PI * 2
    const phi = Math.acos(Math.random() * 2 - 1)
    const x = radius * Math.sin(phi) * Math.cos(theta)
    const y = radius * Math.sin(phi) * Math.sin(theta)
    const z = radius * Math.cos(phi)
    nodes.push([x, y, z])
  }

  // Create connections between nearby nodes
  const connections: [number, number][] = []
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const dist = Math.sqrt(
        Math.pow(nodes[i][0] - nodes[j][0], 2) +
        Math.pow(nodes[i][1] - nodes[j][1], 2) +
        Math.pow(nodes[i][2] - nodes[j][2], 2)
      )
      if (dist < 3) {
        connections.push([i, j])
      }
    }
  }

  return (
    <group ref={sphereRef}>
      {nodes.map((pos, i) => (
        <Float key={i} speed={0.5 + i * 0.05} rotationIntensity={0.2} floatIntensity={0.2}>
          <Sphere position={pos} args={[0.08, 16, 16]}>
            <meshStandardMaterial
              color="#0A0A0A"
              emissive="#0EA5E9"
              emissiveIntensity={0.6}
              metalness={0.8}
              roughness={0.2}
            />
          </Sphere>
        </Float>
      ))}
      {connections.map(([start, end], i) => {
        const startPos = nodes[start]
        const endPos = nodes[end]
        const points = [new THREE.Vector3(...startPos), new THREE.Vector3(...endPos)]
        return (
          <Line key={i} points={points} color="#0EA5E9" lineWidth={1} transparent opacity={0.3} />
        )
      })}
    </group>
  )
}

function FloatingDataNodes() {
  const nodes = useRef<THREE.Group>(null!)

  useFrame((state) => {
    if (nodes.current) {
      nodes.current.rotation.y = state.clock.elapsedTime * 0.15
      nodes.current.rotation.x = state.clock.elapsedTime * 0.08
    }
  })

  const nodePositions = Array.from({ length: 15 }, () => [
    (Math.random() - 0.5) * 8,
    (Math.random() - 0.5) * 8,
    (Math.random() - 0.5) * 8,
  ])

  return (
    <group ref={nodes}>
      {nodePositions.map((pos, i) => (
        <Float key={i} speed={0.3 + Math.random() * 0.3} rotationIntensity={0.15} floatIntensity={0.15}>
          <Sphere position={pos as [number, number, number]} args={[0.06, 12, 12]}>
            <meshStandardMaterial
              color="#06B6D4"
              emissive="#06B6D4"
              emissiveIntensity={0.5}
              transparent
              opacity={0.7}
            />
          </Sphere>
        </Float>
      ))}
    </group>
  )
}

function ConcentricRings() {
  const rings = useRef<THREE.Group>(null!)

  useFrame((state) => {
    if (rings.current) {
      rings.current.rotation.y = state.clock.elapsedTime * 0.1
    }
  })

  return (
    <group ref={rings}>
      {[3, 4, 5].map((radius, i) => (
        <mesh key={i} rotation={[Math.PI / 2, 0, 0]}>
          <ringGeometry args={[radius - 0.1, radius + 0.1, 64]} />
          <meshBasicMaterial
            color="#0EA5E9"
            transparent
            opacity={0.15 - i * 0.03}
            side={THREE.DoubleSide}
          />
        </mesh>
      ))}
    </group>
  )
}

export default function SoftwareThreeScene() {
  return (
    <div id="softwareCanvas" className="w-full h-full" style={{ cursor: 'grab' }}>
      <Canvas
        camera={{ position: [0, 0, 10], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} intensity={0.8} />
        <pointLight position={[-10, -10, -10]} intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={0.5} />
        <Stars radius={300} depth={50} count={1500} factor={4} fade speed={1} />
        <NetworkSphere />
        <FloatingDataNodes />
        <ConcentricRings />
        <OrbitControls
          enableZoom={true}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.4}
          enableDamping
          dampingFactor={0.05}
          minDistance={7}
          maxDistance={15}
        />
      </Canvas>
    </div>
  )
}

