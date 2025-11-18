"use client";

import Link from "next/link";
import { Card } from "@/components/ui/card";
import {
  ArrowRight,
  Leaf,
  Users,
  MapPin,
  Calendar,
  Home,
  Zap,
} from "lucide-react";

const subdomains = [
  {
    id: "activities",
    title: "Activities",
    description:
      "Discover eco-friendly adventures designed for our conscious travelers",
    icon: Zap,
    href: "/activities",
    color: "from-green-500 to-emerald-600",
    image: "/hiking-adventure-mountains-morocco-eco-tourism.jpg",
  },
  {
    id: "clubs",
    title: "Eco Clubs",
    description:
      "Connect with fellow eco-conscious tourists and local communities",
    icon: Users,
    href: "/clubs",
    color: "from-blue-500 to-cyan-600",
    image: "/community-gathering-people-eco-conscious-travelers.jpg",
  },
  {
    id: "stays",
    title: "Sustainable Stays",
    description:
      "Experience eco-certified accommodations loved by our tourists",
    icon: Home,
    href: "/stays",
    color: "from-amber-500 to-orange-600",
    image: "/eco-lodge-sustainable-accommodation-morocco.jpg",
  },
  {
    id: "ecotrip",
    title: "AI EcoTrip",
    description: "Your personalized sustainable itinerary powered by AI",
    icon: MapPin,
    href: "/ecotrip",
    color: "from-purple-500 to-pink-600",
    image: "/map-technology-ai-travel-planning.jpg",
  },
  {
    id: "events",
    title: "Eco Events",
    description:
      "Join our tourists at sustainable events and cultural gatherings",
    icon: Calendar,
    href: "/events",
    color: "from-red-500 to-rose-600",
    image: "/festival-celebration-cultural-event-morocco.jpg",
  },
];

export function SubdomainCards() {
  return (
    <section
      id="subdomains"
      className="relative py-20 px-4 md:px-8 bg-gradient-to-b from-background to-muted/30 overflow-hidden"
    >
      <div className="absolute top-8 right-8 w-24 h-24 rounded-lg overflow-hidden opacity-70 shadow-md">
        <img
          src="/Zellig_image.png"
          alt="Zellige pattern"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute bottom-8 left-8 w-28 h-28 rounded-lg overflow-hidden opacity-70 shadow-md">
        <img
          src="/Zellig2_image.png"
          alt="Zellige tiles"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Leaf className="w-6 h-6 text-primary" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wide">
              Welcome to GreenTravel
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Plan Your Sustainable Adventure in Morocco
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Join thousands of conscious travelers exploring Morocco responsibly.
            Support local communities, protect our environment, and create
            unforgettable memories.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {subdomains.map((subdomain) => {
            const Icon = subdomain.icon;
            return (
              <Link key={subdomain.id} href={subdomain.href}>
                <Card className="h-full cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105 border-border/50 overflow-hidden group">
                  <div className="relative h-40 overflow-hidden bg-muted">
                    <img
                      src={subdomain.image || "/placeholder.svg"}
                      alt={subdomain.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    {/* Overlay gradient */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${subdomain.color} opacity-20`}
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col h-full">
                    {/* Icon */}
                    <div className="mb-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-foreground mb-2">
                      {subdomain.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground mb-4 flex-grow">
                      {subdomain.description}
                    </p>

                    {/* Arrow */}
                    <div className="flex items-center text-primary font-semibold text-sm group-hover:translate-x-1 transition-transform">
                      Explore
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </div>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
