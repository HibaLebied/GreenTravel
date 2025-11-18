import { Card } from "@/components/ui/card"

export function Impact() {
  return (
    <section id="impact" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-primary/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">Our Impact</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Together, we're creating measurable positive change for Morocco's environment and communities.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="p-8 text-center space-y-4">
            <div className="text-5xl font-bold text-primary">2.5M</div>
            <h3 className="text-xl font-semibold text-foreground">kg CO2 Offset</h3>
            <p className="text-muted-foreground">Through sustainable travel choices and conservation projects</p>
          </Card>

          <Card className="p-8 text-center space-y-4">
            <div className="text-5xl font-bold text-primary">$850K</div>
            <h3 className="text-xl font-semibold text-foreground">Community Support</h3>
            <p className="text-muted-foreground">Direct funding to local initiatives and conservation efforts</p>
          </Card>

          <Card className="p-8 text-center space-y-4">
            <div className="text-5xl font-bold text-primary">15K+</div>
            <h3 className="text-xl font-semibold text-foreground">Lives Impacted</h3>
            <p className="text-muted-foreground">Travelers and community members benefiting from our platform</p>
          </Card>
        </div>
      </div>
    </section>
  )
}
