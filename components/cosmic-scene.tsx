"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Text, Sphere, Torus } from "@react-three/drei"
import * as THREE from "three"

export function CosmicScene() {
  const group = useRef()
  const heartRef = useRef()
  const orbitRef1 = useRef()
  const orbitRef2 = useRef()

  useFrame((state, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.1
    }

    if (heartRef.current) {
      heartRef.current.rotation.y += delta * 0.5
      heartRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.2
    }

    if (orbitRef1.current) {
      orbitRef1.current.rotation.z += delta * 0.2
    }

    if (orbitRef2.current) {
      orbitRef2.current.rotation.x += delta * 0.15
    }
  })

  return (
    <group ref={group}>
      {/* Central heart */}
      <group ref={heartRef} position={[0, 0, 0]}>
        <Heart position={[0, 0, 0]} scale={[1.5, 1.5, 1.5]} color="#ff00e4" />
      </group>

      {/* Orbiting elements */}
      <group ref={orbitRef1}>
        <Torus args={[3, 0.05, 16, 100]} rotation={[Math.PI / 2, 0, 0]}>
          <meshStandardMaterial color="#00f3ff" emissive="#00f3ff" emissiveIntensity={2} />
        </Torus>

        {/* Feature spheres on first orbit */}
        <FeatureSphere position={[0, 0, 3]} color="#00f3ff" text="Music" textColor="#ffffff" />
        <FeatureSphere position={[3, 0, 0]} color="#9000ff" text="Gaming" textColor="#ffffff" />
        <FeatureSphere position={[0, 0, -3]} color="#00ff8f" text="Vibes" textColor="#ffffff" />
        <FeatureSphere position={[-3, 0, 0]} color="#ffee00" text="Explore" textColor="#ffffff" />
      </group>

      <group ref={orbitRef2} rotation={[Math.PI / 4, 0, 0]}>
        <Torus args={[4, 0.03, 16, 100]} rotation={[Math.PI / 2, 0, 0]}>
          <meshStandardMaterial color="#ff00e4" emissive="#ff00e4" emissiveIntensity={1} />
        </Torus>

        {/* Smaller decorative spheres on second orbit */}
        {[...Array(8)].map((_, i) => {
          const angle = (i / 8) * Math.PI * 2
          const x = Math.cos(angle) * 4
          const z = Math.sin(angle) * 4
          const colors = ["#00f3ff", "#ff00e4", "#9000ff", "#00ff8f"]
          const color = colors[i % colors.length]

          return (
            <Sphere key={i} args={[0.15, 16, 16]} position={[x, 0, z]}>
              <meshStandardMaterial color={color} emissive={color} emissiveIntensity={1} />
            </Sphere>
          )
        })}
      </group>

      {/* Background particles */}
      {[...Array(30)].map((_, i) => {
        const x = (Math.random() - 0.5) * 15
        const y = (Math.random() - 0.5) * 15
        const z = (Math.random() - 0.5) * 15
        const size = Math.random() * 0.1 + 0.05
        const colors = ["#00f3ff", "#ff00e4", "#9000ff", "#00ff8f", "#ffee00"]
        const color = colors[Math.floor(Math.random() * colors.length)]

        return (
          <Sphere key={i} args={[size, 8, 8]} position={[x, y, z]}>
            <meshBasicMaterial color={color} transparent opacity={0.7} />
          </Sphere>
        )
      })}
    </group>
  )
}

function FeatureSphere({ position, color, text, textColor }) {
  const sphereRef = useRef()

  useFrame((state) => {
    if (sphereRef.current) {
      sphereRef.current.position.y = Math.sin(state.clock.elapsedTime + position[0]) * 0.3
    }
  })

  return (
    <group ref={sphereRef} position={position}>
      <Sphere args={[0.4, 24, 24]}>
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} />
      </Sphere>
      <Text
        position={[0, 0.7, 0]}
        fontSize={0.3}
        color={textColor}
        anchorX="center"
        anchorY="middle"
        font="/fonts/Geist_Bold.json"
      >
        {text}
      </Text>
    </group>
  )
}

function Heart({ position, scale, color }) {
  // Create a heart shape
  const heartShape = new THREE.Shape()

  heartShape.moveTo(0, 0)
  heartShape.bezierCurveTo(0, -0.5, -1, -1.5, -2, -1.5)
  heartShape.bezierCurveTo(-3, -1.5, -3, 0, -3, 0)
  heartShape.bezierCurveTo(-3, 1, -2, 2, 0, 3)
  heartShape.bezierCurveTo(2, 2, 3, 1, 3, 0)
  heartShape.bezierCurveTo(3, 0, 3, -1.5, 2, -1.5)
  heartShape.bezierCurveTo(1, -1.5, 0, -0.5, 0, 0)

  const extrudeSettings = {
    steps: 2,
    depth: 1,
    bevelEnabled: true,
    bevelThickness: 0.1,
    bevelSize: 0.3,
    bevelSegments: 3,
  }

  return (
    <mesh position={position} scale={scale} rotation={[Math.PI, 0, 0]}>
      <extrudeGeometry args={[heartShape, extrudeSettings]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} />
    </mesh>
  )
}

