"use client"

import React from "react"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Text, Sphere, Torus, Box, Plane, Html, Cylinder } from "@react-three/drei"

export function ExploreWorld({ worldId, viewMode }) {
  const group = useRef()

  useFrame((state, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.05
    }
  })

  switch (worldId) {
    case "cosmic-lounge":
      return viewMode === "first-person" ? <CosmicLoungeFirstPerson ref={group} /> : <CosmicLoungeThirdPerson />
    case "gaming-hub":
      return viewMode === "first-person" ? <GamingHubFirstPerson ref={group} /> : <GamingHubThirdPerson />
    case "aurora-vista":
      return viewMode === "first-person" ? <AuroraVistaFirstPerson ref={group} /> : <AuroraVistaThirdPerson />
    case "rhythm-sphere":
      return viewMode === "first-person" ? <RhythmSphereFirstPerson ref={group} /> : <RhythmSphereThirdPerson />
    default:
      return viewMode === "first-person" ? <CosmicLoungeFirstPerson ref={group} /> : <CosmicLoungeThirdPerson />
  }
}

// First Person Views
const CosmicLoungeFirstPerson = React.forwardRef((props, ref) => {
  return (
    <group ref={ref} {...props}>
      {/* Floor */}
      <Plane args={[50, 50]} rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
        <meshStandardMaterial color="#0f0f2d" />
      </Plane>

      {/* Central area */}
      <group position={[0, 0, -5]}>
        <Torus args={[5, 0.2, 16, 100]} rotation={[Math.PI / 2, 0, 0]}>
          <meshStandardMaterial color="#00f3ff" emissive="#00f3ff" emissiveIntensity={1} />
        </Torus>

        {/* Floating orb in center */}
        <Sphere args={[1, 32, 32]} position={[0, 2, 0]}>
          <meshStandardMaterial color="#ff00e4" emissive="#ff00e4" emissiveIntensity={0.5} />
        </Sphere>

        {/* Seating areas */}
        {[...Array(8)].map((_, i) => {
          const angle = (i / 8) * Math.PI * 2
          const x = Math.cos(angle) * 5
          const z = Math.sin(angle) * 5

          return (
            <group key={i} position={[x, 0, z]} rotation={[0, -angle, 0]}>
              <Box args={[1.5, 0.4, 1.5]} position={[0, -0.8, 0]}>
                <meshStandardMaterial color="#1a1a40" />
              </Box>
              <Box args={[1.2, 0.6, 0.6]} position={[0, -0.3, -0.5]}>
                <meshStandardMaterial color="#2a2a50" />
              </Box>
            </group>
          )
        })}
      </group>

      {/* Decorative elements */}
      {[...Array(20)].map((_, i) => {
        const angle = (i / 20) * Math.PI * 2
        const radius = 12
        const x = Math.cos(angle) * radius
        const z = Math.sin(angle) * radius
        const height = Math.random() * 4 + 1

        return (
          <Box key={i} args={[0.2, height, 0.2]} position={[x, height / 2 - 1, z]}>
            <meshStandardMaterial color="#2a2a50" />
          </Box>
        )
      })}

      {/* Floating particles */}
      {[...Array(50)].map((_, i) => {
        const x = (Math.random() - 0.5) * 30
        const y = Math.random() * 6
        const z = (Math.random() - 0.5) * 30
        const size = Math.random() * 0.2 + 0.05
        const colors = ["#00f3ff", "#ff00e4", "#9000ff", "#00ff8f", "#ffee00"]
        const color = colors[Math.floor(Math.random() * colors.length)]

        return (
          <Sphere key={i} args={[size, 8, 8]} position={[x, y, z]}>
            <meshBasicMaterial color={color} transparent opacity={0.7} />
          </Sphere>
        )
      })}

      {/* Cosmic Lounge sign */}
      <Text
        position={[0, 4, -5]}
        rotation={[0, 0, 0]}
        color="#00f3ff"
        fontSize={1.5}
        font="/fonts/Geist_Bold.json"
        anchorX="center"
        anchorY="middle"
      >
        COSMIC LOUNGE
      </Text>
    </group>
  )
})

const GamingHubFirstPerson = React.forwardRef((props, ref) => {
  return (
    <group ref={ref} {...props}>
      {/* Floor with grid */}
      <Plane args={[50, 50]} rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
        <meshStandardMaterial color="#0f0f2d" wireframe={true} />
      </Plane>
      <Plane args={[50, 50]} rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.99, 0]}>
        <meshStandardMaterial color="#0f0f2d" />
      </Plane>

      {/* Gaming stations */}
      {[-6, -2, 2, 6].map((x, i) => (
        <group key={i} position={[x, 0, -5]}>
          <Box args={[2, 2, 0.5]} position={[0, 0, 0]}>
            <meshStandardMaterial color="#2a2a50" />
          </Box>
          <Box args={[1.5, 1, 0.1]} position={[0, 0.5, 0.3]}>
            <meshBasicMaterial
              color={["#00f3ff", "#ff00e4", "#9000ff", "#00ff8f"][i]}
              emissive={["#00f3ff", "#ff00e4", "#9000ff", "#00ff8f"][i]}
              emissiveIntensity={0.5}
            />
          </Box>
          <Box args={[1, 0.2, 0.8]} position={[0, -0.5, 0.5]}>
            <meshStandardMaterial color="#1a1a40" />
          </Box>

          {/* Seating */}
          <Box args={[1, 0.5, 1]} position={[0, -0.75, 1.5]}>
            <meshStandardMaterial color="#2a2a50" />
          </Box>
        </group>
      ))}

      {/* Central holographic display */}
      <group position={[0, 2, 0]}>
        <Sphere args={[1, 16, 16]} position={[0, 0, 0]}>
          <meshStandardMaterial color="#9000ff" transparent opacity={0.7} emissive="#9000ff" emissiveIntensity={0.5} />
        </Sphere>

        {/* Orbiting mini-consoles */}
        {[...Array(4)].map((_, i) => {
          const angle = (i / 4) * Math.PI * 2
          const x = Math.cos(angle) * 2
          const z = Math.sin(angle) * 2

          return (
            <Box key={i} args={[0.5, 0.5, 0.5]} position={[x, 0, z]}>
              <meshStandardMaterial color="#00f3ff" emissive="#00f3ff" emissiveIntensity={0.5} />
            </Box>
          )
        })}
      </group>

      {/* Gaming Hub sign */}
      <Text
        position={[0, 4, -8]}
        rotation={[0, 0, 0]}
        color="#9000ff"
        fontSize={1.5}
        font="/fonts/Geist_Bold.json"
        anchorX="center"
        anchorY="middle"
      >
        GAMING HUB
      </Text>
    </group>
  )
})

const AuroraVistaFirstPerson = React.forwardRef((props, ref) => {
  return (
    <group ref={ref} {...props}>
      {/* Cosmic terrain */}
      <group>
        {/* Base terrain */}
        <Plane args={[100, 100]} rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
          <meshStandardMaterial color="#0f0f2d" />
        </Plane>

        {/* Mountains in distance */}
        {[...Array(10)].map((_, i) => {
          const angle = (i / 10) * Math.PI * 2
          const distance = 20 + Math.random() * 10
          const x = Math.cos(angle) * distance
          const z = Math.sin(angle) * distance
          const height = 5 + Math.random() * 10

          return (
            <group key={i} position={[x, -1, z]}>
              <Box args={[5 + Math.random() * 5, height, 5 + Math.random() * 5]} position={[0, height / 2, 0]}>
                <meshStandardMaterial color="#1a1a40" />
              </Box>
            </group>
          )
        })}
      </group>

      {/* Floating platform */}
      <group position={[0, 0, 0]}>
        <Plane args={[10, 10]} rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]}>
          <meshStandardMaterial color="#2a2a50" />
        </Plane>

        {/* Edge lighting */}
        <Box args={[10, 0.1, 0.1]} position={[0, -0.45, 5]}>
          <meshStandardMaterial color="#00f3ff" emissive="#00f3ff" emissiveIntensity={1} />
        </Box>
        <Box args={[10, 0.1, 0.1]} position={[0, -0.45, -5]}>
          <meshStandardMaterial color="#00f3ff" emissive="#00f3ff" emissiveIntensity={1} />
        </Box>
        <Box args={[0.1, 0.1, 10]} position={[5, -0.45, 0]}>
          <meshStandardMaterial color="#00f3ff" emissive="#00f3ff" emissiveIntensity={1} />
        </Box>
        <Box args={[0.1, 0.1, 10]} position={[-5, -0.45, 0]}>
          <meshStandardMaterial color="#00f3ff" emissive="#00f3ff" emissiveIntensity={1} />
        </Box>
      </group>

      {/* Central crystal formation */}
      <group position={[0, 0, 0]}>
        {[...Array(5)].map((_, i) => {
          const angle = (i / 5) * Math.PI * 2
          const x = Math.cos(angle) * 1
          const z = Math.sin(angle) * 1
          const height = 2 + Math.random() * 3

          return (
            <Box key={i} args={[0.5, height, 0.5]} position={[x, height / 2, z]} rotation={[0, 0, Math.random() * 0.5]}>
              <meshStandardMaterial
                color="#ff00e4"
                transparent
                opacity={0.7}
                emissive="#ff00e4"
                emissiveIntensity={0.5}
              />
            </Box>
          )
        })}
      </group>

      {/* Aurora in sky */}
      {[...Array(5)].map((_, i) => {
        const y = 5 + i * 0.5
        const width = 30 - i * 2
        const colors = ["#00f3ff", "#ff00e4", "#9000ff"]
        const color = colors[i % colors.length]

        return (
          <group key={i}>
            <Box args={[width, 0.2, 0.1]} position={[0, y, -15]} rotation={[0.2, 0, 0]}>
              <meshBasicMaterial color={color} transparent opacity={0.3} />
            </Box>
            <Box args={[width, 0.2, 0.1]} position={[0, y + 2, 15]} rotation={[-0.2, 0, 0]}>
              <meshBasicMaterial color={color} transparent opacity={0.3} />
            </Box>
          </group>
        )
      })}

      {/* Aurora Vista sign */}
      <Text
        position={[0, 6, 0]}
        rotation={[0, 0, 0]}
        color="#ff00e4"
        fontSize={1.5}
        font="/fonts/Geist_Bold.json"
        anchorX="center"
        anchorY="middle"
      >
        AURORA VISTA
      </Text>
    </group>
  )
})

const RhythmSphereFirstPerson = React.forwardRef((props, ref) => {
  return (
    <group ref={ref} {...props}>
      {/* Floor */}
      <Plane args={[50, 50]} rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
        <meshStandardMaterial color="#0f0f2d" />
      </Plane>

      {/* Central sphere */}
      <Sphere args={[5, 32, 32]} position={[0, 5, 0]}>
        <meshStandardMaterial color="#1a1a40" wireframe={true} />
      </Sphere>

      {/* Visualizer bars */}
      {[...Array(36)].map((_, i) => {
        const angle = (i / 36) * Math.PI * 2
        const x = Math.cos(angle) * 8
        const z = Math.sin(angle) * 8
        const height = 1 + Math.sin(i * 0.5) * 2
        const colors = ["#00f3ff", "#ff00e4", "#9000ff", "#00ff8f"]
        const color = colors[i % colors.length]

        return (
          <Box key={i} args={[0.3, height, 0.3]} position={[x, height / 2 - 0.5, z]}>
            <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} />
          </Box>
        )
      })}

      {/* Floating music notes */}
      {[...Array(20)].map((_, i) => {
        const angle = (i / 20) * Math.PI * 2
        const radius = 5 + Math.random() * 3
        const x = Math.cos(angle) * radius
        const y = Math.random() * 5 + 2
        const z = Math.sin(angle) * radius
        const size = 0.2 + Math.random() * 0.3
        const colors = ["#00f3ff", "#ff00e4", "#9000ff", "#00ff8f"]
        const color = colors[Math.floor(Math.random() * colors.length)]

        return (
          <group key={i} position={[x, y, z]}>
            <Sphere args={[size, 8, 8]}>
              <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} />
            </Sphere>
            <Box args={[size / 2, size * 2, size / 10]} position={[size / 2, 0, 0]}>
              <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} />
            </Box>
          </group>
        )
      })}

      {/* Seating areas */}
      {[...Array(8)].map((_, i) => {
        const angle = (i / 8) * Math.PI * 2
        const x = Math.cos(angle) * 12
        const z = Math.sin(angle) * 12

        return (
          <group key={i} position={[x, -0.5, z]}>
            <Box args={[2, 0.5, 2]} position={[0, 0, 0]}>
              <meshStandardMaterial color="#2a2a50" />
            </Box>
            <Box args={[1.8, 0.3, 0.8]} position={[0, 0.4, -0.5]}>
              <meshStandardMaterial color="#1a1a40" />
            </Box>
          </group>
        )
      })}

      {/* Rhythm Sphere sign */}
      <Text
        position={[0, 10, 0]}
        rotation={[0, 0, 0]}
        color="#00ff8f"
        fontSize={1.5}
        font="/fonts/Geist_Bold.json"
        anchorX="center"
        anchorY="middle"
      >
        RHYTHM SPHERE
      </Text>
    </group>
  )
})

// Third Person Views
function CosmicLoungeThirdPerson() {
  return (
    <group>
      {/* Floor */}
      <Plane args={[50, 50]} rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]}>
        <meshStandardMaterial color="#0f0f2d" />
      </Plane>

      {/* Central lounge area */}
      <group position={[0, 0, 0]}>
        <Torus args={[5, 0.1, 16, 100]} position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <meshStandardMaterial color="#00f3ff" emissive="#00f3ff" emissiveIntensity={1} />
        </Torus>

        {/* Central table */}
        <Cylinder args={[2, 2, 0.2, 32]} position={[0, -0.4, 0]}>
          <meshStandardMaterial color="#1a1a40" />
        </Cylinder>

        {/* Seating */}
        {[...Array(8)].map((_, i) => {
          const angle = (i / 8) * Math.PI * 2
          const x = Math.cos(angle) * 4
          const z = Math.sin(angle) * 4

          return (
            <group key={i} position={[x, -0.25, z]} rotation={[0, -angle + Math.PI, 0]}>
              <Box args={[1.5, 0.5, 0.8]} position={[0, 0, 0]}>
                <meshStandardMaterial color="#2a2a50" />
              </Box>
              <Box args={[1.5, 0.8, 0.2]} position={[0, 0.65, -0.3]}>
                <meshStandardMaterial color="#2a2a50" />
              </Box>
            </group>
          )
        })}
      </group>

      {/* Characters - simplified representations */}
      <Character position={[-1.5, 0, 1.5]} color="#ff00e4" />
      <Character position={[1.5, 0, -1.5]} color="#00f3ff" />

      {/* Ambient objects */}
      <Sphere args={[0.3, 16, 16]} position={[0, 0.5, 0]}>
        <meshStandardMaterial color="#9000ff" emissive="#9000ff" emissiveIntensity={1} />
      </Sphere>

      {/* Floating text labels */}
      <Html position={[-1.5, 2, 1.5]}>
        <div className="px-2 py-1 rounded-md bg-cosmic-space/80 backdrop-blur-sm border border-neon-pink text-white text-xs whitespace-nowrap">
          StarGazer
        </div>
      </Html>

      <Html position={[1.5, 2, -1.5]}>
        <div className="px-2 py-1 rounded-md bg-cosmic-space/80 backdrop-blur-sm border border-neon-blue text-white text-xs whitespace-nowrap">
          CosmicDreamer
        </div>
      </Html>
    </group>
  )
}

function GamingHubThirdPerson() {
  return (
    <group>
      {/* Floor */}
      <Plane args={[50, 50]} rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]}>
        <meshStandardMaterial color="#0f0f2d" />
      </Plane>

      {/* Gaming stations */}
      {[-4, 4].map((x, i) => (
        <group key={i} position={[x, 0, 0]}>
          <Box args={[3, 1.5, 1]} position={[0, 0.25, -1]}>
            <meshStandardMaterial color="#1a1a40" />
          </Box>
          <Box args={[2.5, 0.1, 0.8]} position={[0, 1, -1]}>
            <meshStandardMaterial color="#2a2a50" />
          </Box>
          <Box args={[2, 1, 0.1]} position={[0, 1.5, -1.5]}>
            <meshBasicMaterial
              color={i === 0 ? "#00f3ff" : "#ff00e4"}
              emissive={i === 0 ? "#00f3ff" : "#ff00e4"}
              emissiveIntensity={0.5}
            />
          </Box>

          {/* Chairs */}
          <Box args={[1, 0.5, 1]} position={[0, 0.25, 0.5]}>
            <meshStandardMaterial color="#2a2a50" />
          </Box>
          <Box args={[1, 1, 0.2]} position={[0, 1, 0.5]}>
            <meshStandardMaterial color="#2a2a50" />
          </Box>
        </group>
      ))}

      {/* Characters */}
      <Character position={[-4, 0, 0.5]} color="#9000ff" />
      <Character position={[4, 0, 0.5]} color="#00ff8f" />

      {/* Floating text labels */}
      <Html position={[-4, 2, 0.5]}>
        <div className="px-2 py-1 rounded-md bg-cosmic-space/80 backdrop-blur-sm border border-neon-purple text-white text-xs whitespace-nowrap">
          PixelWarrior
        </div>
      </Html>

      <Html position={[4, 2, 0.5]}>
        <div className="px-2 py-1 rounded-md bg-cosmic-space/80 backdrop-blur-sm border border-neon-green text-white text-xs whitespace-nowrap">
          NebulaNomad
        </div>
      </Html>
    </group>
  )
}

function AuroraVistaThirdPerson() {
  return (
    <group>
      {/* Floor */}
      <Plane args={[50, 50]} rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]}>
        <meshStandardMaterial color="#0f0f2d" />
      </Plane>

      {/* Viewing platform */}
      <Cylinder args={[5, 5, 0.2, 32]} position={[0, -0.4, 0]}>
        <meshStandardMaterial color="#1a1a40" />
      </Cylinder>

      {/* Crystal formations */}
      <group position={[0, 0, 0]}>
        {[...Array(5)].map((_, i) => {
          const angle = (i / 5) * Math.PI * 2
          const x = Math.cos(angle) * 2
          const z = Math.sin(angle) * 2
          const height = 1 + Math.random() * 2
          const colors = ["#00f3ff", "#ff00e4", "#9000ff"]
          const color = colors[i % colors.length]

          return (
            <Box key={i} args={[0.4, height, 0.4]} position={[x, height / 2, z]} rotation={[0, 0, Math.random() * 0.5]}>
              <meshStandardMaterial color={color} transparent opacity={0.7} emissive={color} emissiveIntensity={0.5} />
            </Box>
          )
        })}
      </group>

      {/* Characters */}
      <Character position={[-2, 0, 2]} color="#ff00e4" />
      <Character position={[2, 0, -2]} color="#00f3ff" />

      {/* Floating text labels */}
      <Html position={[-2, 2, 2]}>
        <div className="px-2 py-1 rounded-md bg-cosmic-space/80 backdrop-blur-sm border border-neon-pink text-white text-xs whitespace-nowrap">
          AstralExplorer
        </div>
      </Html>

      <Html position={[2, 2, -2]}>
        <div className="px-2 py-1 rounded-md bg-cosmic-space/80 backdrop-blur-sm border border-neon-blue text-white text-xs whitespace-nowrap">
          MidnightDreamer
        </div>
      </Html>
    </group>
  )
}

function RhythmSphereThirdPerson() {
  return (
    <group>
      {/* Floor */}
      <Plane args={[50, 50]} rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]}>
        <meshStandardMaterial color="#0f0f2d" />
      </Plane>

      {/* Central dance floor */}
      <Cylinder args={[4, 4, 0.1, 32]} position={[0, -0.45, 0]}>
        <meshStandardMaterial color="#1a1a40" />
      </Cylinder>

      {/* Glowing edge */}
      <Torus args={[4, 0.1, 16, 100]} position={[0, -0.4, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <meshStandardMaterial color="#00ff8f" emissive="#00ff8f" emissiveIntensity={1} />
      </Torus>

      {/* Visualizer bars */}
      {[...Array(16)].map((_, i) => {
        const angle = (i / 16) * Math.PI * 2
        const x = Math.cos(angle) * 6
        const z = Math.sin(angle) * 6
        const height = 0.5 + Math.sin(i * 0.5) * 1
        const colors = ["#00f3ff", "#ff00e4", "#9000ff", "#00ff8f"]
        const color = colors[i % colors.length]

        return (
          <Box key={i} args={[0.2, height, 0.2]} position={[x, height / 2, z]}>
            <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} />
          </Box>
        )
      })}

      {/* Characters */}
      <Character position={[-1, 0, 1]} color="#9000ff" />
      <Character position={[1, 0, -1]} color="#00ff8f" />

      {/* Floating text labels */}
      <Html position={[-1, 2, 1]}>
        <div className="px-2 py-1 rounded-md bg-cosmic-space/80 backdrop-blur-sm border border-neon-purple text-white text-xs whitespace-nowrap">
          MelodyHunter
        </div>
      </Html>

      <Html position={[1, 2, -1]}>
        <div className="px-2 py-1 rounded-md bg-cosmic-space/80 backdrop-blur-sm border border-neon-green text-white text-xs whitespace-nowrap">
          HarmonySeeker
        </div>
      </Html>
    </group>
  )
}

function Character({ position, color }) {
  return (
    <group position={position}>
      {/* Body */}
      <Box args={[0.4, 0.6, 0.2]} position={[0, 0.8, 0]}>
        <meshStandardMaterial color={color} />
      </Box>

      {/* Head */}
      <Sphere args={[0.2, 16, 16]} position={[0, 1.3, 0]}>
        <meshStandardMaterial color="#ffffff" />
      </Sphere>

      {/* Arms */}
      <Box args={[0.1, 0.4, 0.1]} position={[0.25, 0.8, 0]}>
        <meshStandardMaterial color={color} />
      </Box>
      <Box args={[0.1, 0.4, 0.1]} position={[-0.25, 0.8, 0]}>
        <meshStandardMaterial color={color} />
      </Box>

      {/* Legs */}
      <Box args={[0.15, 0.5, 0.15]} position={[0.15, 0.25, 0]}>
        <meshStandardMaterial color={color} />
      </Box>
      <Box args={[0.15, 0.5, 0.15]} position={[-0.15, 0.25, 0]}>
        <meshStandardMaterial color={color} />
      </Box>
    </group>
  )
}

