import { Users, Map, MessageSquare, Video, Headphones, Gamepad2 } from "lucide-react"

export function FeaturesSection() {
  return (
    <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gaming-dark">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="inline-block rounded-lg bg-gaming-accent px-3 py-1 text-sm">
            <span className="text-neon-blue">FEATURES</span>
          </div>
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
              Level Up Your Dating Experience
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Immersive 3D environments designed for gamers and explorers
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          <FeatureCard
            icon={<Users className="h-10 w-10 text-neon-blue" />}
            title="Customizable 3D Avatars"
            description="Create and personalize your 3D avatar with gaming-inspired gear and accessories."
            color="blue"
          />
          <FeatureCard
            icon={<Map className="h-10 w-10 text-neon-purple" />}
            title="Virtual Environments"
            description="Meet in cyberpunk cities, fantasy realms, or retro arcade worlds."
            color="purple"
          />
          <FeatureCard
            icon={<MessageSquare className="h-10 w-10 text-neon-pink" />}
            title="Immersive Chat"
            description="Text, voice, and 3D emotes with gaming references and memes."
            color="pink"
          />
          <FeatureCard
            icon={<Video className="h-10 w-10 text-neon-green" />}
            title="Third-Person Dates"
            description="Experience dates from a third-person perspective in our 3D café and other venues."
            color="green"
          />
          <FeatureCard
            icon={<Headphones className="h-10 w-10 text-neon-blue" />}
            title="Music Matching"
            description="Connect with others who share your music taste, from game soundtracks to your favorite genres."
            color="blue"
          />
          <FeatureCard
            icon={<Gamepad2 className="h-10 w-10 text-neon-yellow" />}
            title="Gaming Together"
            description="Play mini-games, solve puzzles, and enjoy co-op experiences on your virtual dates."
            color="yellow"
          />
        </div>
      </div>
    </section>
  )
}

function FeatureCard({ icon, title, description, color }) {
  const getBorderClass = () => {
    switch (color) {
      case "blue":
        return "border-neon-blue hover:neon-border"
      case "purple":
        return "border-neon-purple hover:neon-purple"
      case "pink":
        return "border-neon-pink hover:neon-pink"
      case "green":
        return "border-neon-green hover:neon-green"
      case "yellow":
        return "border-neon-yellow hover:neon-yellow"
      default:
        return "border-neon-blue hover:neon-border"
    }
  }

  return (
    <div
      className={`flex flex-col items-center text-center p-6 bg-gaming-card rounded-xl border ${getBorderClass()} transition-all duration-300 hover:transform hover:-translate-y-1`}
    >
      <div className="p-4 rounded-full bg-gaming-accent mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  )
}

