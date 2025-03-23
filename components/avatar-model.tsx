"use client"

import { useGLTF } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useRef } from "react"
import * as THREE from "three"

export function AvatarModel(props) {
  const group = useRef()
  const { scene } = useGLTF("/assets/3d/duck.glb")

  // This is a placeholder - in a real app, we'd use a human avatar model
  // The duck is just for demonstration purposes

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, state.mouse.x * Math.PI * 0.25, 0.05)
    }
  })

  return (
    <group ref={group} {...props} dispose={null}>
      <primitive object={scene} scale={1.5} />
    </group>
  )
}

