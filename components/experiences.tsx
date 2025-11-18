import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Users, Leaf } from "lucide-react"

const experiences = [
  {
    title: "Atlas Mountain Trek",
    location: "High Atlas Mountains",
    image: "/atlas-mountains-hiking-morocco.jpg",
    impact: "Supports 15 local guides",
    travelers: "2,340",
    carbon: "-45kg CO2",
  },
  {
    title: "Argan Oil Cooperative",
    location: "Essaouira Region",
    image: "/argan-oil-cooperative-women-morocco.jpg",
    impact: "Empowers 200+ women",
    travelers: "1,890",
    carbon: "-12kg CO2",
  },
  {
    title: "Desert Conservation Camp",
    location: "Sahara Desert",
    image: "/sahara-desert-conservation-sustainable-tourism.jpg",
    impact: "Protects endangered species",
    travelers: "1,560",
    carbon: "-38kg CO2",
  },
  {
    title: "Coastal Cleanup & Snorkel",
    location: "Mediterranean Coast",
    image: "/mediterranean-coast-ocean-cleanup-morocco.jpg",
    impact: "Removes 500kg plastic/month",
    travelers: "3,120",
    carbon: "-8kg CO2",
  },
]

export function Experiences() {
  return (
    <section id="experiences" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">Featured Experiences</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Handpicked sustainable activities that make a real difference.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer">
              <div className="relative h-48 overflow-hidden bg-muted">
                <img
                  src={exp.image || "/placeholder.svg"}
                  alt={exp.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 space-y-3">
                <div>
                  <h3 className="font-semibold text-foreground text-lg">{exp.title}</h3>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
                    <MapPin size={16} />
                    {exp.location}
                  </div>
                </div>

                <div className="space-y-2 py-3 border-y border-border">
                  <div className="flex items-center gap-2 text-sm">
                    <Leaf size={16} className="text-primary" />
                    <span className="text-muted-foreground">{exp.impact}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Users size={16} className="text-primary" />
                    <span className="text-muted-foreground">{exp.travelers} travelers</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-primary">{exp.carbon}</span>
                  <Button size="sm" variant="outline" className="text-xs bg-transparent">
                    View
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
