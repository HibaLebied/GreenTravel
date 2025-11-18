import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTA() {
  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">Ready to Travel with Purpose?</h2>
          <p className="text-xl text-muted-foreground text-pretty">
            Join thousands of conscious travelers making a difference in Morocco. Start your sustainable journey today.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
            Start Exploring <ArrowRight size={20} />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary/10 bg-transparent"
          >
            Schedule a Demo
          </Button>
        </div>

        <div className="pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
            Questions?{" "}
            <a href="#" className="text-primary hover:underline font-semibold">
              Contact our team
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
