"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Canvas } from "@react-three/fiber"
import { Environment, OrbitControls, PerspectiveCamera, Stars } from "@react-three/drei"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { ExploreWorld } from "@/components/explore-world"
import { ArrowLeft, Heart, MessageCircle, X, Gamepad2, Coffee, Mountain, Music, Search, Users } from "lucide-react"

export default function ExplorePage() {
  const [activeTab, setActiveTab] = useState("worlds")
  const [currentWorld, setCurrentWorld] = useState("cosmic-lounge")
  const [viewMode, setViewMode] = useState("first-person")
  const [searchQuery, setSearchQuery] = useState("")
  const [activeFilter, setActiveFilter] = useState("all")

  const worlds = [
    {
      id: "cosmic-lounge",
      name: "Cosmic Lounge",
      description: "A space-themed lounge for meaningful connections",
      icon: <Coffee className="h-4 w-4" />,
      category: "social",
    },
    {
      id: "gaming-hub",
      name: "Gaming Hub",
      description: "Connect with fellow gamers in this interactive space",
      icon: <Gamepad2 className="h-4 w-4" />,
      category: "gaming",
    },
    {
      id: "aurora-vista",
      name: "Aurora Vista",
      description: "A breathtaking cosmic vista for deep conversations",
      icon: <Mountain className="h-4 w-4" />,
      category: "nature",
    },
    {
      id: "rhythm-sphere",
      name: "Rhythm Sphere",
      description: "Share your music taste in this interactive venue",
      icon: <Music className="h-4 w-4" />,
      category: "music",
    },
  ]

  const filteredWorlds = worlds.filter(
    (world) =>
      (activeFilter === "all" || world.category === activeFilter) &&
      (searchQuery === "" ||
        world.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        world.description.toLowerCase().includes(searchQuery.toLowerCase())),
  )

  const [onlineUsers, setOnlineUsers] = useState([])

  // Simulate fetching online users
  useEffect(() => {
    const mockUsers = [
      {
        id: "user1",
        name: "StarGazer",
        avatar: "/placeholder.svg?height=50&width=50",
        worldId: "cosmic-lounge",
        interests: ["Astronomy", "Sci-Fi", "Music"],
        compatibility: 92,
      },
      {
        id: "user2",
        name: "CosmicDreamer",
        avatar: "/placeholder.svg?height=50&width=50",
        worldId: "aurora-vista",
        interests: ["Art", "Philosophy", "Nature"],
        compatibility: 87,
      },
      {
        id: "user3",
        name: "MelodyHunter",
        avatar: "/placeholder.svg?height=50&width=50",
        worldId: "rhythm-sphere",
        interests: ["Music", "Dancing", "Travel"],
        compatibility: 85,
      },
      {
        id: "user4",
        name: "PixelWarrior",
        avatar: "/placeholder.svg?height=50&width=50",
        worldId: "gaming-hub",
        interests: ["Gaming", "Anime", "Technology"],
        compatibility: 78,
      },
    ]

    setOnlineUsers(mockUsers)
  }, [])

  return (
    <div className="flex flex-col min-h-screen cosmic-bg">
      <header className="px-4 lg:px-6 h-16 flex items-center border-b border-cosmic-nebula">
        <Link href="/" className="flex items-center">
          <ArrowLeft className="h-4 w-4 mr-2 text-neon-blue" />
          <span className="font-bold text-white">Back to Home</span>
        </Link>
      </header>
      <main className="flex-1 container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-6">
          <div className="h-[600px] rounded-xl overflow-hidden border border-cosmic-nebula bg-cosmic-space relative">
            <div className="absolute top-4 right-4 z-10 flex gap-2">
              <Button
                variant="outline"
                size="sm"
                className={`border ${viewMode === "first-person" ? "border-neon-blue text-neon-blue" : "border-muted-foreground"}`}
                onClick={() => setViewMode("first-person")}
              >
                First Person
              </Button>
              <Button
                variant="outline"
                size="sm"
                className={`border ${viewMode === "third-person" ? "border-neon-pink text-neon-pink" : "border-muted-foreground"}`}
                onClick={() => setViewMode("third-person")}
              >
                Third Person
              </Button>
            </div>
            <Canvas>
              <PerspectiveCamera makeDefault position={[0, 1.5, 5]} />
              <ambientLight intensity={0.3} />
              <pointLight position={[10, 10, 10]} intensity={1} color="#ff00e4" />
              <pointLight position={[-10, -10, -10]} intensity={0.5} color="#00f3ff" />
              <ExploreWorld worldId={currentWorld} viewMode={viewMode} />
              <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
              <Environment preset="night" />
              <OrbitControls
                enableZoom={true}
                minDistance={2}
                maxDistance={10}
                minPolarAngle={Math.PI / 6}
                maxPolarAngle={Math.PI / 2}
              />
            </Canvas>

            {/* World info overlay */}
            <div className="absolute bottom-4 left-4 right-4 bg-cosmic-space/80 backdrop-blur-sm p-4 rounded-lg border border-cosmic-nebula">
              <h2 className="text-xl font-bold text-white mb-1">
                {worlds.find((w) => w.id === currentWorld)?.name || "Explore"}
              </h2>
              <p className="text-sm text-muted-foreground">
                {worlds.find((w) => w.id === currentWorld)?.description || ""}
              </p>
              <div className="flex justify-between items-center mt-2">
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-neon-blue" />
                  <span className="text-xs text-neon-blue">
                    {onlineUsers.filter((u) => u.worldId === currentWorld).length} online
                  </span>
                </div>
                <Button
                  size="sm"
                  className="bg-transparent border border-neon-pink neon-pink text-white hover:bg-cosmic-nebula"
                >
                  Enter World
                </Button>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <Card className="bg-cosmic-space border-cosmic-nebula">
              <CardContent className="p-6">
                <Tabs defaultValue="worlds" onValueChange={setActiveTab} className="w-full">
                  <TabsList className="grid w-full grid-cols-3 bg-cosmic-nebula">
                    <TabsTrigger
                      value="worlds"
                      className="data-[state=active]:bg-cosmic-space data-[state=active]:text-neon-blue"
                    >
                      Worlds
                    </TabsTrigger>
                    <TabsTrigger
                      value="profiles"
                      className="data-[state=active]:bg-cosmic-space data-[state=active]:text-neon-purple"
                    >
                      Profiles
                    </TabsTrigger>
                    <TabsTrigger
                      value="vibes"
                      className="data-[state=active]:bg-cosmic-space data-[state=active]:text-neon-pink"
                    >
                      Vibes
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="worlds" className="mt-4 space-y-4">
                    <div className="flex items-center justify-between">
                      <h2 className="text-xl font-bold text-white">Explore Worlds</h2>
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          className={`border ${activeFilter === "all" ? "border-neon-blue text-neon-blue" : "border-muted-foreground"}`}
                          onClick={() => setActiveFilter("all")}
                        >
                          All
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className={`border ${activeFilter === "social" ? "border-neon-pink text-neon-pink" : "border-muted-foreground"}`}
                          onClick={() => setActiveFilter("social")}
                        >
                          Social
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className={`border ${activeFilter === "gaming" ? "border-neon-purple text-neon-purple" : "border-muted-foreground"}`}
                          onClick={() => setActiveFilter("gaming")}
                        >
                          Gaming
                        </Button>
                      </div>
                    </div>

                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        placeholder="Search worlds..."
                        className="bg-cosmic-nebula border-cosmic-nebula pl-10"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                    </div>

                    <div className="space-y-3 mt-4 max-h-[300px] overflow-y-auto pr-2">
                      {filteredWorlds.length > 0 ? (
                        filteredWorlds.map((world) => (
                          <div
                            key={world.id}
                            className={`p-3 rounded-lg border cursor-pointer transition-colors flex items-center gap-3 ${
                              currentWorld === world.id
                                ? "bg-cosmic-nebula border-neon-blue"
                                : "border-cosmic-nebula hover:bg-cosmic-nebula/50"
                            }`}
                            onClick={() => setCurrentWorld(world.id)}
                          >
                            <div className="p-2 rounded-full bg-cosmic-dark text-neon-blue">{world.icon}</div>
                            <div className="flex-1">
                              <h3 className="font-medium text-white">{world.name}</h3>
                              <p className="text-sm text-muted-foreground">{world.description}</p>
                            </div>
                            <div className="flex items-center gap-1 text-xs text-neon-blue">
                              <Users className="h-3 w-3" />
                              <span>{onlineUsers.filter((u) => u.worldId === world.id).length}</span>
                            </div>
                          </div>
                        ))
                      ) : (
                        <div className="text-center py-8 text-muted-foreground">
                          No worlds found matching your search
                        </div>
                      )}
                    </div>

                    <Button className="w-full mt-4 bg-transparent border border-neon-blue neon-border text-white hover:bg-cosmic-nebula">
                      Enter Selected World
                    </Button>
                  </TabsContent>

                  <TabsContent value="profiles" className="mt-4">
                    <h2 className="text-xl font-bold text-white">Discover Profiles</h2>
                    <p className="text-muted-foreground">Find your cosmic match</p>
                    <div className="space-y-4 mt-6">
                      <ProfileCard
                        name="StarGazer, 28"
                        bio="Astronomy enthusiast and dreamer. Looking for someone to explore cosmic wonders with."
                        interests={["Astronomy", "Sci-Fi", "Philosophy", "Art"]}
                        compatibility="92%"
                        avatar="/placeholder.svg?height=80&width=80"
                      />
                      <ProfileCard
                        name="CosmicDreamer, 25"
                        bio="Digital artist and space enthusiast. Let's talk about the universe and create something beautiful together!"
                        interests={["Art", "Space", "Music", "Photography"]}
                        compatibility="87%"
                        avatar="/placeholder.svg?height=80&width=80"
                      />
                      <ProfileCard
                        name="NebulaNomad, 30"
                        bio="Traveler and explorer. Looking for someone to share adventures both on Earth and in virtual worlds."
                        interests={["Travel", "VR/AR", "Hiking", "Cultures"]}
                        compatibility="85%"
                        avatar="/placeholder.svg?height=80&width=80"
                      />
                    </div>
                  </TabsContent>

                  <TabsContent value="vibes" className="mt-4">
                    <h2 className="text-xl font-bold text-white">Your Vibe Matches</h2>
                    <p className="text-muted-foreground">People who share your cosmic energy</p>
                    <div className="space-y-4 mt-6">
                      <VibeMatchCard
                        name="AstralExplorer"
                        bio="I love discovering hidden cosmic wonders and sharing meaningful conversations under the stars."
                        vibes={["Cosmic", "Deep Conversations", "Stargazing"]}
                        compatibility="92%"
                        avatar="/placeholder.svg?height=60&width=60"
                      />
                      <VibeMatchCard
                        name="MidnightDreamer"
                        bio="Night owl who loves philosophical discussions and creating art inspired by the cosmos."
                        vibes={["Night Owl", "Philosophy", "Creativity"]}
                        compatibility="87%"
                        avatar="/placeholder.svg?height=60&width=60"
                      />
                      <VibeMatchCard
                        name="HarmonySeeker"
                        bio="I find peace in music and nature. Looking for someone who appreciates the subtle harmonies of life."
                        vibes={["Music", "Nature", "Harmony"]}
                        compatibility="85%"
                        avatar="/placeholder.svg?height=60&width=60"
                      />
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            <Card className="bg-cosmic-space border-cosmic-nebula">
              <CardContent className="p-4">
                <h3 className="text-lg font-bold text-white mb-3">Online Now</h3>
                <div className="space-y-3 max-h-[200px] overflow-y-auto pr-2">
                  {onlineUsers.map((user) => (
                    <div
                      key={user.id}
                      className="flex items-center gap-3 p-2 rounded-lg hover:bg-cosmic-nebula/50 cursor-pointer"
                    >
                      <div className="relative">
                        <div className="w-10 h-10 rounded-full overflow-hidden">
                          <img
                            src={user.avatar || "/placeholder.svg"}
                            alt={user.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-green-500 border-2 border-cosmic-space"></div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="font-medium text-white">{user.name}</h4>
                          <span className="text-xs text-neon-pink">{user.compatibility}%</span>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          In: {worlds.find((w) => w.id === user.worldId)?.name || "Exploring"}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}

function ProfileCard({ name, bio, interests, compatibility, avatar }) {
  return (
    <Card className="overflow-hidden bg-cosmic-space border-cosmic-nebula">
      <div className="h-24 bg-gradient-to-r from-neon-blue to-neon-purple relative">
        <div className="absolute -bottom-10 left-4 w-20 h-20 rounded-full border-4 border-cosmic-space overflow-hidden">
          <img src={avatar || "/placeholder.svg"} alt={name} className="w-full h-full object-cover" />
        </div>
        <div className="absolute top-4 right-4 bg-cosmic-space/80 backdrop-blur-sm px-3 py-1 rounded-full">
          <span className="text-sm font-bold text-neon-pink">{compatibility}</span>
        </div>
      </div>
      <CardContent className="pt-12 p-4">
        <h3 className="text-xl font-bold text-white">{name}</h3>
        <p className="text-sm text-muted-foreground mt-2">{bio}</p>

        <div className="mt-3">
          <h4 className="text-sm font-medium text-white mb-1">Interests:</h4>
          <div className="flex flex-wrap gap-2">
            {interests.map((interest) => (
              <span key={interest} className="text-xs bg-cosmic-nebula px-2 py-1 rounded-full text-neon-blue">
                {interest}
              </span>
            ))}
          </div>
        </div>

        <div className="flex gap-2 mt-4">
          <Button
            variant="outline"
            size="sm"
            className="flex-1 border-cosmic-nebula text-muted-foreground hover:text-white"
          >
            <X className="h-4 w-4 mr-2" />
            Pass
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="flex-1 border-cosmic-nebula text-muted-foreground hover:text-white"
          >
            <MessageCircle className="h-4 w-4 mr-2" />
            Chat
          </Button>
          <Button
            size="sm"
            className="flex-1 bg-transparent border border-neon-pink neon-pink text-white hover:bg-cosmic-nebula"
          >
            <Heart className="h-4 w-4 mr-2" />
            Like
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

function VibeMatchCard({ name, bio, vibes, compatibility, avatar }) {
  return (
    <Card className="overflow-hidden bg-cosmic-space border-cosmic-nebula">
      <div className="p-4 flex gap-4">
        <div className="relative">
          <div className="w-12 h-12 rounded-full overflow-hidden">
            <img src={avatar || "/placeholder.svg"} alt={name} className="w-full h-full object-cover" />
          </div>
          <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-cosmic-space border border-cosmic-nebula flex items-center justify-center">
            <span className="text-xs font-bold text-neon-pink">{compatibility.split("%")[0]}</span>
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-bold text-white">{name}</h3>
          <p className="text-sm text-muted-foreground mt-1">{bio}</p>

          <div className="mt-3">
            <h4 className="text-xs font-medium text-white mb-1">Shared Vibes:</h4>
            <div className="flex flex-wrap gap-2">
              {vibes.map((vibe) => (
                <span key={vibe} className="text-xs bg-cosmic-nebula px-2 py-1 rounded-full text-neon-pink">
                  {vibe}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-cosmic-nebula p-3 flex justify-between">
        <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-white">
          <X className="h-4 w-4 mr-2" />
          Skip
        </Button>
        <Button size="sm" className="bg-transparent border border-neon-pink text-white hover:bg-cosmic-nebula">
          <MessageCircle className="h-4 w-4 mr-2" />
          Connect
        </Button>
      </div>
    </Card>
  )
}

