import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Compass, Map, Mountain, Tent, Building, Castle, Skull, Trees, Waves, Rocket } from "lucide-react"

export function VibeSection() {
  const vibeCategories = [
    {
      name: "Urban Explorer",
      description: "For those who love exploring abandoned buildings, urban ruins, and hidden city spots",
      icon: <Building className="h-6 w-6" />,
      interests: ["Abandoned Places", "Urban Photography", "City Secrets", "Rooftops", "Underground"],
      color: "blue",
    },
    {
      name: "Nature Seeker",
      description: "Connect with others who enjoy hiking, camping, and discovering natural wonders",
      icon: <Mountain className="h-6 w-6" />,
      interests: ["Hiking", "Camping", "Waterfalls", "Stargazing", "Wildlife"],
      color: "green",
    },
    {
      name: "Dark Tourist",
      description: "Find companions for visiting historical sites with dark pasts and haunted locations",
      icon: <Skull className="h-6 w-6" />,
      interests: ["Ghost Towns", "Historical Disasters", "Haunted Places", "Cemeteries", "Mysteries"],
      color: "purple",
    },
    {
      name: "Adventure Junkie",
      description: "For thrill-seekers looking for adrenaline-pumping experiences and extreme activities",
      icon: <Compass className="h-6 w-6" />,
      interests: ["Rock Climbing", "Skydiving", "Rafting", "Bungee Jumping", "Caving"],
      color: "pink",
    },
  ]

  return (
    <section id="vibes" className="w-full py-12 md:py-24 lg:py-32 bg-gaming-dark">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-block rounded-lg bg-gaming-accent px-3 py-1 text-sm">
            <span className="text-neon-purple">VIBES</span>
          </div>
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
              Find Your Exploration Crew
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Connect with others who share your passion for exploration and adventure
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {vibeCategories.map((category, index) => (
            <VibeCard key={index} category={category} />
          ))}
        </div>

        <div className="mt-16 bg-gaming-card border border-gaming-accent rounded-xl p-6">
          <h3 className="text-2xl font-bold mb-4 text-white">Popular Exploration Interests</h3>
          <div className="flex flex-wrap gap-3">
            <InterestBadge icon={<Building />} name="Abandoned Buildings" color="blue" />
            <InterestBadge icon={<Castle />} name="Ancient Ruins" color="purple" />
            <InterestBadge icon={<Trees />} name="Hidden Forests" color="green" />
            <InterestBadge icon={<Skull />} name="Ghost Towns" color="pink" />
            <InterestBadge icon={<Map />} name="Urban Legends" color="blue" />
            <InterestBadge icon={<Tent />} name="Remote Camping" color="green" />
            <InterestBadge icon={<Waves />} name="Secret Beaches" color="blue" />
            <InterestBadge icon={<Rocket />} name="Space Enthusiast" color="purple" />
            <InterestBadge icon={<Mountain />} name="Mountain Peaks" color="green" />
          </div>
        </div>
      </div>
    </section>
  )
}

function VibeCard({ category }) {
  const getBorderClass = () => {
    switch (category.color) {
      case "blue":
        return "border-neon-blue"
      case "purple":
        return "border-neon-purple"
      case "pink":
        return "border-neon-pink"
      case "green":
        return "border-neon-green"
      default:
        return "border-neon-blue"
    }
  }

  const getTextClass = () => {
    switch (category.color) {
      case "blue":
        return "text-neon-blue"
      case "purple":
        return "text-neon-purple"
      case "pink":
        return "text-neon-pink"
      case "green":
        return "text-neon-green"
      default:
        return "text-neon-blue"
    }
  }

  return (
    <Card className={`bg-gaming-card border ${getBorderClass()} overflow-hidden`}>
      <CardContent className="p-0">
        <div className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className={`p-2 rounded-lg bg-gaming-accent ${getTextClass()}`}>{category.icon}</div>
            <h3 className="text-xl font-bold text-white">{category.name}</h3>
          </div>
          <p className="text-muted-foreground mb-6">{category.description}</p>
          <div className="flex flex-wrap gap-2">
            {category.interests.map((interest, index) => (
              <Badge key={index} variant="outline" className={`border ${getBorderClass()} bg-gaming-accent`}>
                {interest}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function InterestBadge({ icon, name, color }) {
  const getColorClass = () => {
    switch (color) {
      case "blue":
        return "border-neon-blue text-neon-blue hover:bg-neon-blue/10"
      case "purple":
        return "border-neon-purple text-neon-purple hover:bg-neon-purple/10"
      case "pink":
        return "border-neon-pink text-neon-pink hover:bg-neon-pink/10"
      case "green":
        return "border-neon-green text-neon-green hover:bg-neon-green/10"
      default:
        return "border-neon-blue text-neon-blue hover:bg-neon-blue/10"
    }
  }

  return (
    <Badge
      variant="outline"
      className={`flex items-center gap-1 py-2 px-3 bg-gaming-accent ${getColorClass()} cursor-pointer transition-colors`}
    >
      {icon}
      <span>{name}</span>
    </Badge>
  )
}

