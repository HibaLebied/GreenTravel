import { Button } from "@/components/ui/button";
import { Search, ArrowRight, Calendar } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0">
            <img
              src="/moroccan-landscape-mountains-sustainable-tourism.jpg"
              alt="Moroccan landscape"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/20"></div>
          </div>

          <div className="absolute top-6 right-6 w-38 h-38 rounded-lg overflow-hidden border-4 border-white/20 shadow-lg">
            <img
              src="/Zellig_image2.png"
              alt="Moroccan zellige tiles"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute bottom-6 left-6 w-40 h-40 rounded-lg overflow-hidden border-4 border-white/20 shadow-lg">
            <img
              src="/Zellig_image1.png"
              alt="Traditional zellige pattern"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="relative z-10 py-20 md:py-32 px-6 sm:px-8 lg:px-12">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight text-balance mb-4">
                Explore Morocco. Live green. Travel smarter.
              </h1>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed text-pretty mb-8">
                Discover eco-friendly destinations, activities, and experiences
                that protect Morocco's beauty.
              </p>

              {/* Search Bar */}
              <div className="mb-8 flex items-center bg-white/95 rounded-full px-4 py-2 shadow-lg">
                <Search size={20} className="text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Find eco-trips, clubs, or green stays…"
                  className="flex-1 bg-transparent px-4 py-2 outline-none text-foreground placeholder:text-muted-foreground"
                />
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="#subdomains">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2"
                  >
                    Explore Now <ArrowRight size={20} />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
