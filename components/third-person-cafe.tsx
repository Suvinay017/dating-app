"use client"

import { useRef } from "react"
import { Box, Sphere, Plane, Cylinder, Text } from "@react-three/drei"

export function ThirdPersonCafe() {
  const group = useRef()

  // This is a simplified 3D café scene with two characters
  // In a real app, we would use detailed 3D models and animations

  return (
    <group ref={group}>
      {/* Floor */}
      <Plane args={[20, 20]} rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]}>
        <meshStandardMaterial color="#1a1a2e" />
      </Plane>

      {/* Walls */}
      <Box args={[20, 5, 0.2]} position={[0, 2, -10]}>
        <meshStandardMaterial color="#2a2a40" />
      </Box>
      <Box args={[0.2, 5, 20]} position={[-10, 2, 0]}>
        <meshStandardMaterial color="#2a2a40" />
      </Box>
      <Box args={[0.2, 5, 20]} position={[10, 2, 0]}>
        <meshStandardMaterial color="#2a2a40" />
      </Box>

      {/* Neon lights on walls */}
      <Box args={[15, 0.1, 0.1]} position={[0, 3, -9.9]} emissive="#00f3ff" intensity={2}>
        <meshStandardMaterial color="#00f3ff" emissive="#00f3ff" emissiveIntensity={2} />
      </Box>
      <Box args={[0.1, 0.1, 15]} position={[-9.9, 3, 0]} emissive="#ff00e4" intensity={2}>
        <meshStandardMaterial color="#ff00e4" emissive="#ff00e4" emissiveIntensity={2} />
      </Box>

      {/* Tables */}
      <CafeTable position={[-3, 0, -3]} />
      <CafeTable position={[3, 0, -3]} />
      <CafeTable position={[-3, 0, 3]} />
      <CafeTable position={[3, 0, 3]} />

      {/* Bar */}
      <Box args={[8, 1, 1.5]} position={[0, 0, -8]}>
        <meshStandardMaterial color="#2a2a40" />
      </Box>
      <Box args={[7.8, 0.1, 1.3]} position={[0, 0.6, -8]}>
        <meshStandardMaterial color="#1a1a2e" />
      </Box>

      {/* Barstools */}
      <Cylinder args={[0.4, 0.4, 1, 16]} position={[-2, 0.5, -6.5]}>
        <meshStandardMaterial color="#2a2a40" />
      </Cylinder>
      <Cylinder args={[0.4, 0.4, 1, 16]} position={[0, 0.5, -6.5]}>
        <meshStandardMaterial color="#2a2a40" />
      </Cylinder>
      <Cylinder args={[0.4, 0.4, 1, 16]} position={[2, 0.5, -6.5]}>
        <meshStandardMaterial color="#2a2a40" />
      </Cylinder>

      {/* Characters - simplified representations */}
      <Character1 position={[-3, 0, -2.5]} />
      <Character2 position={[-3, 0, -3.5]} />

      {/* Ambient objects */}
      <Cylinder args={[0.2, 0.2, 0.5, 16]} position={[-3, 0.75, -3]}>
        <meshStandardMaterial color="#00f3ff" emissive="#00f3ff" emissiveIntensity={0.5} />
      </Cylinder>

      {/* Floating text labels */}
      <Text
        position={[-3, 2, -3]}
        color="#00f3ff"
        fontSize={0.3}
        font="/fonts/Geist_Bold.json"
        anchorX="center"
        anchorY="middle"
      >
        ACTIVE DATE
      </Text>

      <Text
        position={[3, 2, 3]}
        color="#9000ff"
        fontSize={0.3}
        font="/fonts/Geist_Bold.json"
        anchorX="center"
        anchorY="middle"
      >
        AVAILABLE
      </Text>

      {/* Ambient lighting */}
      <pointLight position={[0, 3, 0]} intensity={0.5} color="#00f3ff" />
      <pointLight position={[-5, 3, -5]} intensity={0.3} color="#ff00e4" />
      <pointLight position={[5, 3, 5]} intensity={0.3} color="#9000ff" />
    </group>
  )
}

function CafeTable({ position }) {
  return (
    <group position={position}>
      {/* Table surface */}
      <Cylinder args={[1, 1, 0.1, 16]} position={[0, 0.5, 0]}>
        <meshStandardMaterial color="#2a2a40" />
      </Cylinder>

      {/* Table leg */}
      <Cylinder args={[0.1, 0.1, 1, 8]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#2a2a40" />
      </Cylinder>

      {/* Table base */}
      <Cylinder args={[0.5, 0.5, 0.1, 16]} position={[0, -0.45, 0]}>
        <meshStandardMaterial color="#2a2a40" />
      </Cylinder>

      {/* Chairs */}
      <Chair position={[0, 0, 1.2]} rotation={[0, Math.PI, 0]} />
      <Chair position={[0, 0, -1.2]} rotation={[0, 0, 0]} />
      <Chair position={[1.2, 0, 0]} rotation={[0, Math.PI / 2, 0]} />
      <Chair position={[-1.2, 0, 0]} rotation={[0, -Math.PI / 2, 0]} />
    </group>
  )
}

function Chair({ position, rotation }) {
  return (
    <group position={position} rotation={rotation}>
      {/* Seat */}
      <Box args={[0.6, 0.1, 0.6]} position={[0, 0.25, 0]}>
        <meshStandardMaterial color="#1a1a2e" />
      </Box>

      {/* Back */}
      <Box args={[0.6, 0.6, 0.1]} position={[0, 0.55, -0.25]}>
        <meshStandardMaterial color="#1a1a2e" />
      </Box>

      {/* Legs */}
      <Cylinder args={[0.05, 0.05, 0.5, 8]} position={[0.2, 0, 0.2]}>
        <meshStandardMaterial color="#2a2a40" />
      </Cylinder>
      <Cylinder args={[0.05, 0.05, 0.5, 8]} position={[-0.2, 0, 0.2]}>
        <meshStandardMaterial color="#2a2a40" />
      </Cylinder>
      <Cylinder args={[0.05, 0.05, 0.5, 8]} position={[0.2, 0, -0.2]}>
        <meshStandardMaterial color="#2a2a40" />
      </Cylinder>
      <Cylinder args={[0.05, 0.05, 0.5, 8]} position={[-0.2, 0, -0.2]}>
        <meshStandardMaterial color="#2a2a40" />
      </Cylinder>
    </group>
  )
}

function Character1({ position }) {
  // Simplified character representation
  return (
    <group position={position}>
      {/* Body */}
      <Box args={[0.4, 0.6, 0.2]} position={[0, 0.8, 0]}>
        <meshStandardMaterial color="#9000ff" />
      </Box>

      {/* Head */}
      <Sphere args={[0.2, 16, 16]} position={[0, 1.3, 0]}>
        <meshStandardMaterial color="#ffee00" />
      </Sphere>

      {/* Arms */}
      <Box args={[0.1, 0.4, 0.1]} position={[0.25, 0.8, 0]}>
        <meshStandardMaterial color="#9000ff" />
      </Box>
      <Box args={[0.1, 0.4, 0.1]} position={[-0.25, 0.8, 0]}>
        <meshStandardMaterial color="#9000ff" />
      </Box>

      {/* Legs */}
      <Box args={[0.15, 0.5, 0.15]} position={[0.15, 0.25, 0]}>
        <meshStandardMaterial color="#9000ff" />
      </Box>
      <Box args={[0.15, 0.5, 0.15]} position={[-0.15, 0.25, 0]}>
        <meshStandardMaterial color="#9000ff" />
      </Box>
    </group>
  )
}

function Character2({ position }) {
  // Simplified character representation
  return (
    <group position={position}>
      {/* Body */}
      <Box args={[0.4, 0.6, 0.2]} position={[0, 0.8, 0]}>
        <meshStandardMaterial color="#00ff8f" />
      </Box>

      {/* Head */}
      <Sphere args={[0.2, 16, 16]} position={[0, 1.3, 0]}>
        <meshStandardMaterial color="#00f3ff" />
      </Sphere>

      {/* Arms */}
      <Box args={[0.1, 0.4, 0.1]} position={[0.25, 0.8, 0]}>
        <meshStandardMaterial color="#00ff8f" />
      </Box>
      <Box args={[0.1, 0.4, 0.1]} position={[-0.25, 0.8, 0]}>
        <meshStandardMaterial color="#00ff8f" />
      </Box>

      {/* Legs */}
      <Box args={[0.15, 0.5, 0.15]} position={[0.15, 0.25, 0]}>
        <meshStandardMaterial color="#00ff8f" />
      </Box>
      <Box args={[0.15, 0.5, 0.15]} position={[-0.15, 0.25, 0]}>
        <meshStandardMaterial color="#00ff8f" />
      </Box>
    </group>
  )
}

