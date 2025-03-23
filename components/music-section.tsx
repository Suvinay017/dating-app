import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Disc, Music, Radio, Headphones, Pause, SkipForward, SkipBack, Volume2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"

export function MusicSection() {
  const musicGenres = [
    {
      name: "Game Soundtracks",
      description: "From epic orchestral scores to chiptune classics",
      icon: <Disc className="h-6 w-6" />,
      examples: ["The Witcher 3", "Final Fantasy", "Cyberpunk 2077", "Zelda", "Halo"],
      color: "blue",
    },
    {
      name: "Electronic",
      description: "EDM, Synthwave, and electronic music lovers",
      icon: <Music className="h-6 w-6" />,
      examples: ["Synthwave", "Techno", "House", "Drum & Bass", "Dubstep"],
      color: "purple",
    },
    {
      name: "Rock & Metal",
      description: "From classic rock to heavy metal and everything in between",
      icon: <Radio className="h-6 w-6" />,
      examples: ["Alternative", "Metal", "Classic Rock", "Punk", "Indie"],
      color: "pink",
    },
    {
      name: "Hip Hop & R&B",
      description: "Beats, rhymes, and smooth vocals",
      icon: <Headphones className="h-6 w-6" />,
      examples: ["Rap", "Trap", "R&B", "Lo-fi", "Soul"],
      color: "green",
    },
  ]

  return (
    <section id="music" className="w-full py-12 md:py-24 lg:py-32 bg-gaming-dark">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-block rounded-lg bg-gaming-accent px-3 py-1 text-sm">
            <span className="text-neon-pink">MUSIC</span>
          </div>
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
              Match Your Soundtrack
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Music brings people together - find your harmony with others who share your taste
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {musicGenres.map((genre, index) => (
            <MusicCard key={index} genre={genre} />
          ))}
        </div>

        <div className="bg-gaming-card border border-neon-pink rounded-xl p-6 animate-float">
          <h3 className="text-2xl font-bold mb-6 text-white text-center">Music Player Experience</h3>
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/3 aspect-square bg-gaming-accent rounded-lg flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/20 to-neon-pink/20"></div>
              <div className="w-3/4 h-3/4 rounded-full bg-gaming-dark flex items-center justify-center border-4 border-neon-pink">
                <Music className="h-16 w-16 text-neon-pink" />
              </div>
            </div>
            <div className="w-full md:w-2/3 flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <h4 className="text-xl font-bold text-white">Synthwave Radio</h4>
                <p className="text-muted-foreground">Share and listen to music together in real-time</p>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="text-neon-pink">Now Playing:</span>
                <span>"Midnight Drive" by NightRunner</span>
              </div>
              <div className="mt-2">
                <Slider defaultValue={[65]} max={100} step={1} className="w-full" />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>1:45</span>
                  <span>4:20</span>
                </div>
              </div>
              <div className="flex items-center justify-center gap-4 mt-2">
                <Button variant="ghost" size="icon" className="rounded-full text-muted-foreground hover:text-white">
                  <SkipBack className="h-5 w-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full w-12 h-12 bg-neon-pink text-white hover:bg-neon-pink/80"
                >
                  <Pause className="h-6 w-6" />
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full text-muted-foreground hover:text-white">
                  <SkipForward className="h-5 w-5" />
                </Button>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <Volume2 className="h-4 w-4 text-muted-foreground" />
                <Slider defaultValue={[80]} max={100} step={1} className="w-24" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function MusicCard({ genre }) {
  const getBorderClass = () => {
    switch (genre.color) {
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
    switch (genre.color) {
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
            <div className={`p-2 rounded-lg bg-gaming-accent ${getTextClass()}`}>{genre.icon}</div>
            <h3 className="text-xl font-bold text-white">{genre.name}</h3>
          </div>
          <p className="text-muted-foreground mb-6">{genre.description}</p>
          <div className="flex flex-wrap gap-2">
            {genre.examples.map((example, index) => (
              <Badge key={index} variant="outline" className={`border ${getBorderClass()} bg-gaming-accent`}>
                {example}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

