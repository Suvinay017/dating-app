import Link from "next/link"
import { Button } from "@/components/ui/button"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { VibeSection } from "@/components/vibe-section"
import { MusicSection } from "@/components/music-section"
import { Footer } from "@/components/footer"
import { Heart, Sparkles } from "lucide-react"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen cosmic-bg">
      <header className="px-4 lg:px-6 h-16 flex items-center justify-between border-b border-cosmic-nebula">
        <Link href="/" className="flex items-center">
          <Heart className="h-6 w-6 text-neon-pink mr-2" />
          <span className="font-bold text-2xl neon-text animate-glow">CosmicLink</span>
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link href="#features" className="text-sm font-medium hover:text-neon-blue transition-colors">
            Features
          </Link>
          <Link href="#vibes" className="text-sm font-medium hover:text-neon-purple transition-colors">
            Vibes
          </Link>
          <Link href="#music" className="text-sm font-medium hover:text-neon-pink transition-colors">
            Music
          </Link>
          <Link href="/explore" className="text-sm font-medium hover:text-neon-green transition-colors">
            Explore
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link href="/login">
            <Button variant="ghost" size="sm" className="hover:text-neon-blue hover:bg-cosmic-nebula">
              Log In
            </Button>
          </Link>
          <Link href="/signup">
            <Button
              size="sm"
              className="bg-transparent border border-neon-pink neon-pink text-white hover:bg-cosmic-nebula"
            >
              <Sparkles className="h-4 w-4 mr-2" />
              Sign Up
            </Button>
          </Link>
        </div>
      </header>
      <main className="flex-1">
        <HeroSection />
        <div className="cosmic-bg">
          <FeaturesSection />
          <VibeSection />
          <MusicSection />
        </div>
      </main>
      <Footer />
    </div>
  )
}

