import { Button } from "@/components/ui/button";
import { Leaf } from "lucide-react";
import { ZelligePattern } from "@/components/zellige-pattern";
import Image from "next/image";
import Link from "next/link";

export function CTAMovement() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/image.png"
              alt="Moroccan landscape"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 py-16 md:py-24 px-8 sm:px-12 lg:px-16 text-center">
            <div className="flex justify-center mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/60">
                <Leaf size={32} className="text-primary" />
              </div>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance text-white">
              Be part of the Green Travel Movement
            </h2>

            <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto text-pretty text-white/90">
              Join thousands of conscious travelers and eco-conscious businesses
              transforming tourism in Morocco. Together, we're creating
              sustainable experiences that benefit communities and protect our
              planet.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#subdomains">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 cursor-pointer"
                >
                  Explore our subdomains
                </Button>
              </Link>
              <Link href="#subdomains">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary text-white/90 hover:bg-primary/10 px-8 bg-transparent"
                >
                  Register your Eco-Club / Business
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-16 pt-12 border-t border-border ">
              <div>
                <div className="text-3xl font-bold text-primary">500+</div>
                <p className="text-sm text-muted-foreground mt-2 text-white/90">
                  Eco Experiences
                </p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">50K+</div>
                <p className="text-sm text-muted-foreground mt-2 text-white/90">
                  Conscious Travelers
                </p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">100+</div>
                <p className="text-sm text-muted-foreground mt-2 text-white/90">
                  Communities Supported
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
