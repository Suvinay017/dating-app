"use client"

import React from "react"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Box, Sphere, Plane, Cylinder, Text } from "@react-three/drei"

export function VirtualWorld({ worldId }) {
  const group = useRef()

  useFrame((state, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.05
    }
  })

  switch (worldId) {
    case "cafe":
      return <NeonCafe ref={group} />
    case "arcade":
      return <RetroArcade ref={group} />
    case "mountain":
      return <DigitalSummit ref={group} />
    case "concert":
      return <VirtualConcert ref={group} />
    default:
      return <NeonCafe ref={group} />
  }
}

const NeonCafe = React.forwardRef((props, ref) => {
  return (
    <group ref={ref} {...props}>
      {/* Floor */}
      <Plane args={[20, 20]} rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
        <meshStandardMaterial color="#1a1a2e" />
      </Plane>

      {/* Neon grid on floor */}
      <Plane args={[20, 20]} rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.99, 0]}>
        <meshBasicMaterial color="#00f3ff" wireframe={true} transparent={true} opacity={0.3} />
      </Plane>

      {/* Tables */}
      <group position={[-2, -0.5, 0]}>
        <Cylinder args={[0.8, 0.8, 0.1, 16]} position={[0, 0, 0]}>
          <meshStandardMaterial color="#2a2a40" />
        </Cylinder>
        <Cylinder args={[0.1, 0.1, 0.9, 8]} position={[0, -0.5, 0]}>
          <meshStandardMaterial color="#2a2a40" />
        </Cylinder>
        <Sphere args={[0.2, 16, 16]} position={[0, 0.2, 0]}>
          <meshStandardMaterial color="#00f3ff" emissive="#00f3ff" emissiveIntensity={1} />
        </Sphere>
      </group>

      <group position={[2, -0.5, 0]}>
        <Cylinder args={[0.8, 0.8, 0.1, 16]} position={[0, 0, 0]}>
          <meshStandardMaterial color="#2a2a40" />
        </Cylinder>
        <Cylinder args={[0.1, 0.1, 0.9, 8]} position={[0, -0.5, 0]}>
          <meshStandardMaterial color="#2a2a40" />
        </Cylinder>
        <Sphere args={[0.2, 16, 16]} position={[0, 0.2, 0]}>
          <meshStandardMaterial color="#ff00e4" emissive="#ff00e4" emissiveIntensity={1} />
        </Sphere>
      </group>

      {/* Chairs */}
      <Cylinder args={[0.4, 0.3, 0.1, 16]} position={[-2, -0.25, 1]}>
        <meshStandardMaterial color="#2a2a40" />
      </Cylinder>
      <Cylinder args={[0.4, 0.3, 0.1, 16]} position={[-2, -0.25, -1]}>
        <meshStandardMaterial color="#2a2a40" />
      </Cylinder>
      <Cylinder args={[0.4, 0.3, 0.1, 16]} position={[2, -0.25, 1]}>
        <meshStandardMaterial color="#2a2a40" />
      </Cylinder>
      <Cylinder args={[0.4, 0.3, 0.1, 16]} position={[2, -0.25, -1]}>
        <meshStandardMaterial color="#2a2a40" />
      </Cylinder>

      {/* Neon signs */}
      <Text
        position={[0, 2, -5]}
        rotation={[0, 0, 0]}
        color="#00f3ff"
        fontSize={1}
        font="/fonts/Geist_Bold.json"
        anchorX="center"
        anchorY="middle"
      >
        NEON CAFE
      </Text>

      {/* Floating particles */}
      {[...Array(20)].map((_, i) => {
        const x = Math.random() * 16 - 8
        const y = Math.random() * 4 + 1
        const z = Math.random() * 16 - 8
        const size = Math.random() * 0.1 + 0.05
        const color = ["#00f3ff", "#ff00e4", "#9000ff"][Math.floor(Math.random() * 3)]

        return (
          <Sphere key={i} args={[size, 8, 8]} position={[x, y, z]}>
            <meshBasicMaterial color={color} transparent opacity={0.7} />
          </Sphere>
        )
      })}
    </group>
  )
})

const RetroArcade = React.forwardRef((props, ref) => {
  return (
    <group ref={ref} {...props}>
      {/* Floor */}
      <Plane args={[20, 20]} rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
        <meshStandardMaterial color="#1a1a2e" />
      </Plane>

      {/* Arcade machines */}
      {[-4, -2, 0, 2, 4].map((x, i) => (
        <group key={i} position={[x, 0, -5]}>
          <Box args={[1, 2, 0.5]} position={[0, 0, 0]}>
            <meshStandardMaterial color="#2a2a40" />
          </Box>
          <Box args={[0.8, 0.6, 0.1]} position={[0, 0.5, 0.3]}>
            <meshBasicMaterial color={["#00f3ff", "#ff00e4", "#9000ff", "#00ff8f", "#ffee00"][i]} />
          </Box>
          <Box args={[0.6, 0.1, 0.6]} position={[0, -0.5, 0.3]}>
            <meshStandardMaterial color="#0f0f1a" />
          </Box>
          <Sphere args={[0.1, 16, 16]} position={[-0.2, -0.4, 0.6]}>
            <meshStandardMaterial color="#ff00e4" />
          </Sphere>
          <Sphere args={[0.1, 16, 16]} position={[0.2, -0.4, 0.6]}>
            <meshStandardMaterial color="#00f3ff" />
          </Sphere>
        </group>
      ))}

      {/* Central gaming table */}
      <Cylinder args={[2, 2, 0.2, 16]} position={[0, -0.9, 0]}>
        <meshStandardMaterial color="#2a2a40" />
      </Cylinder>
      <Box args={[3, 0.1, 3]} position={[0, -0.8, 0]}>
        <meshBasicMaterial color="#0f0f1a" />
      </Box>

      {/* Pixel art on walls */}
      <Box args={[1, 1, 0.1]} position={[-5, 1, -4]} rotation={[0, Math.PI / 4, 0]}>
        <meshBasicMaterial color="#00f3ff" />
      </Box>
      <Box args={[1, 1, 0.1]} position={[5, 1, -4]} rotation={[0, -Math.PI / 4, 0]}>
        <meshBasicMaterial color="#ff00e4" />
      </Box>

      {/* Neon sign */}
      <Text
        position={[0, 2, -8]}
        rotation={[0, 0, 0]}
        color="#ffee00"
        fontSize={1}
        font="/fonts/Geist_Bold.json"
        anchorX="center"
        anchorY="middle"
      >
        RETRO ARCADE
      </Text>
    </group>
  )
})

const DigitalSummit = React.forwardRef((props, ref) => {
  return (
    <group ref={ref} {...props}>
      {/* Mountain terrain */}
      <group>
        {/* Base mountain */}
        <Cylinder args={[10, 15, 10, 6]} position={[0, -6, 0]} rotation={[0, Math.PI / 6, 0]}>
          <meshStandardMaterial color="#1a1a2e" wireframe={false} flatShading={true} />
        </Cylinder>

        {/* Snow cap */}
        <Cylinder args={[0, 5, 3, 6]} position={[0, 2, 0]} rotation={[0, Math.PI / 6, 0]}>
          <meshStandardMaterial
            color="#00f3ff"
            wireframe={false}
            flatShading={true}
            emissive="#00f3ff"
            emissiveIntensity={0.2}
          />
        </Cylinder>
      </group>

      {/* Floating platform */}
      <Cylinder args={[3, 3, 0.5, 16]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#2a2a40" />
      </Cylinder>

      {/* Digital trees */}
      {[...Array(8)].map((_, i) => {
        const angle = (i / 8) * Math.PI * 2
        const radius = 6
        const x = Math.cos(angle) * radius
        const z = Math.sin(angle) * radius

        return (
          <group key={i} position={[x, -1, z]}>
            <Cylinder args={[0.2, 0.3, 1, 8]} position={[0, 0, 0]}>
              <meshStandardMaterial color="#2a2a40" />
            </Cylinder>
            <Cylinder args={[0, 1, 2, 8]} position={[0, 1.5, 0]}>
              <meshStandardMaterial color="#9000ff" emissive="#9000ff" emissiveIntensity={0.3} />
            </Cylinder>
          </group>
        )
      })}

      {/* Northern lights in sky */}
      {[...Array(5)].map((_, i) => {
        const y = 5 + i * 0.5
        const width = 20 - i * 2
        const color = i % 2 === 0 ? "#00f3ff" : "#9000ff"

        return (
          <Box key={i} args={[width, 0.2, 0.1]} position={[0, y, -10]} rotation={[0.2, 0, 0]}>
            <meshBasicMaterial color={color} transparent opacity={0.3} />
          </Box>
        )
      })}

      {/* Stars */}
      {[...Array(100)].map((_, i) => {
        const x = Math.random() * 40 - 20
        const y = Math.random() * 10 + 5
        const z = Math.random() * 40 - 20
        const size = Math.random() * 0.05 + 0.02

        return (
          <Sphere key={i} args={[size, 8, 8]} position={[x, y, z]}>
            <meshBasicMaterial color="#ffffff" />
          </Sphere>
        )
      })}
    </group>
  )
})

const VirtualConcert = React.forwardRef((props, ref) => {
  return (
    <group ref={ref} {...props}>
      {/* Floor */}
      <Plane args={[20, 20]} rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
        <meshStandardMaterial color="#0f0f1a" />
      </Plane>

      {/* Stage */}
      <Box args={[10, 1, 5]} position={[0, -0.5, -5]}>
        <meshStandardMaterial color="#2a2a40" />
      </Box>

      {/* Stage equipment */}
      <Box args={[1, 2, 1]} position={[-3, 0.5, -5]}>
        <meshStandardMaterial color="#1a1a2e" />
      </Box>
      <Box args={[1, 2, 1]} position={[3, 0.5, -5]}>
        <meshStandardMaterial color="#1a1a2e" />
      </Box>
      <Cylinder args={[0.1, 0.1, 3, 8]} position={[0, 1, -4]}>
        <meshStandardMaterial color="#2a2a40" />
      </Cylinder>
      <Sphere args={[0.3, 16, 16]} position={[0, 2.5, -4]}>
        <meshBasicMaterial color="#ff00e4" />
      </Sphere>

      {/* Visualizer bars */}
      {[...Array(20)].map((_, i) => {
        const x = (i - 10) * 0.5
        const height = Math.sin(i * 0.5) * 1.5 + 2
        const color = i % 3 === 0 ? "#00f3ff" : i % 3 === 1 ? "#ff00e4" : "#9000ff"

        return (
          <Box key={i} args={[0.2, height, 0.2]} position={[x, height / 2 - 0.5, -6]}>
            <meshBasicMaterial color={color} transparent opacity={0.7} />
          </Box>
        )
      })}

      {/* Floating music notes */}
      {[...Array(15)].map((_, i) => {
        const x = Math.random() * 16 - 8
        const y = Math.random() * 4 + 1
        const z = Math.random() * 8 - 10
        const size = Math.random() * 0.2 + 0.1
        const color = ["#00f3ff", "#ff00e4", "#9000ff", "#00ff8f"][Math.floor(Math.random() * 4)]

        return (
          <group key={i} position={[x, y, z]}>
            <Sphere args={[size, 8, 8]}>
              <meshBasicMaterial color={color} transparent opacity={0.7} />
            </Sphere>
            <Box args={[size / 2, size * 2, size / 10]} position={[size / 2, 0, 0]}>
              <meshBasicMaterial color={color} transparent opacity={0.7} />
            </Box>
          </group>
        )
      })}

      {/* Concert name */}
      <Text
        position={[0, 3, -5]}
        rotation={[0, 0, 0]}
        color="#ffee00"
        fontSize={1}
        font="/fonts/Geist_Bold.json"
        anchorX="center"
        anchorY="middle"
      >
        VIRTUAL CONCERT
      </Text>
    </group>
  )
})

