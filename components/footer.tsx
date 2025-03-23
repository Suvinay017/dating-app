import Link from "next/link"
import { Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full py-6 bg-gaming-dark border-t border-gaming-accent">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col space-y-4">
            <Link href="/" className="flex items-center">
              <span className="font-bold text-xl text-neon-blue neon-text">NexusLink</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Dating reimagined for gamers and explorers. Connect in immersive 3D worlds and find your perfect match.
            </p>
          </div>
          <div className="flex flex-col space-y-4">
            <h3 className="font-medium text-white">Platform</h3>
            <Link href="#" className="text-sm text-muted-foreground hover:text-neon-blue transition-colors">
              How it Works
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-neon-blue transition-colors">
              Features
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-neon-blue transition-colors">
              Pricing
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-neon-blue transition-colors">
              FAQ
            </Link>
          </div>
          <div className="flex flex-col space-y-4">
            <h3 className="font-medium text-white">Company</h3>
            <Link href="#" className="text-sm text-muted-foreground hover:text-neon-purple transition-colors">
              About Us
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-neon-purple transition-colors">
              Careers
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-neon-purple transition-colors">
              Blog
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-neon-purple transition-colors">
              Press
            </Link>
          </div>
          <div className="flex flex-col space-y-4">
            <h3 className="font-medium text-white">Legal</h3>
            <Link href="#" className="text-sm text-muted-foreground hover:text-neon-pink transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-neon-pink transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-neon-pink transition-colors">
              Cookie Policy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-neon-pink transition-colors">
              Community Guidelines
            </Link>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between mt-8 pt-8 border-t border-gaming-accent">
          <p className="text-sm text-muted-foreground">© 2025 NexusLink. All rights reserved.</p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <p className="text-sm text-muted-foreground flex items-center">
              Made with <Heart className="h-4 w-4 mx-1 text-neon-pink" /> for gamers
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

