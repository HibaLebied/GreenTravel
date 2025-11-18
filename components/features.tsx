import { Card } from "@/components/ui/card"
import { Leaf, Users, Globe, Zap } from "lucide-react"

const features = [
  {
    icon: Leaf,
    title: "Eco-Conscious",
    description: "Every experience is vetted for environmental sustainability and minimal carbon footprint.",
  },
  {
    icon: Users,
    title: "Community First",
    description: "Support local communities directly. 30% of proceeds go to local initiatives and conservation.",
  },
  {
    icon: Globe,
    title: "Authentic Experiences",
    description: "Connect with local guides and cultural experts for genuine Moroccan experiences.",
  },
  {
    icon: Zap,
    title: "Carbon Tracking",
    description: "Monitor your travel impact with our built-in carbon footprint calculator.",
  },
]

export function Features() {
  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">Why Choose GreenTravel</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            We're committed to making sustainable tourism accessible and impactful for everyone.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
