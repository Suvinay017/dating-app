"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Canvas } from "@react-three/fiber"
import { Environment, OrbitControls, PerspectiveCamera, Stars } from "@react-three/drei"
import { Suspense } from "react"
import { CosmicScene } from "./cosmic-scene"
import { Headphones, Users, Heart, Sparkles } from "lucide-react"

export function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f0f2d] to-[#1a1a40] z-0">
        <div className="absolute inset-0 opacity-30"></div>
      </div>
      <div className="container px-4 md:px-6 mx-auto flex flex-col md:flex-row items-center gap-8 relative z-10">
        <div className="flex flex-col gap-4 md:gap-6 md:w-1/2">
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="h-6 w-6 text-neon-pink" />
            <span className="text-sm font-medium text-neon-pink">COSMIC CONNECTIONS</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white">
            Find Your <span className="text-neon-blue neon-text">Cosmic Match</span>
          </h1>
          <p className="text-lg text-muted-foreground md:text-xl">
            Connect with like-minded individuals in immersive 3D environments. Share your vibes, music tastes, and
            explore new worlds together.
          </p>
          <div className="flex flex-wrap gap-4 mt-2">
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-neon-purple" />
              <span className="text-sm">10k+ Active Users</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart className="h-5 w-5 text-neon-pink" />
              <span className="text-sm">5k+ Successful Matches</span>
            </div>
            <div className="flex items-center gap-2">
              <Headphones className="h-5 w-5 text-neon-blue" />
              <span className="text-sm">Music Matching</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Link href="/signup">
              <Button className="bg-transparent border border-neon-pink neon-pink text-white hover:bg-gaming-accent">
                Get Started
              </Button>
            </Link>
            <Link href="/explore">
              <Button variant="outline" className="border-neon-blue hover:neon-border hover:bg-gaming-accent">
                Explore Worlds
              </Button>
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 h-[400px] md:h-[500px] rounded-xl overflow-hidden border border-gaming-accent bg-[#0f0f2d]">
          <Canvas>
            <Suspense fallback={null}>
              <PerspectiveCamera makeDefault position={[0, 0, 10]} />
              <ambientLight intensity={0.2} />
              <pointLight position={[10, 10, 10]} intensity={0.8} color="#ff00e4" />
              <pointLight position={[-10, -10, -10]} intensity={0.5} color="#00f3ff" />
              <CosmicScene />
              <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
              <Environment preset="night" />
              <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
            </Suspense>
          </Canvas>
        </div>
      </div>
    </section>
  )
}

