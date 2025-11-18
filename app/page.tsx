import { Header } from "@/components/header";
import { SubdomainCards } from "@/components/subdomain-cards";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { CTAMovement } from "@/components/cta-movement";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <SubdomainCards />
      <CTAMovement />
      <Footer />
    </main>
  );
}
