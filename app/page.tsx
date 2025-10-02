import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { JourneySection } from "@/components/journey-section"
import { ComparisonSection } from "@/components/comparison-section"
import { IntegrationSection } from "@/components/integration-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <JourneySection />
      <ComparisonSection />
      <IntegrationSection />
      <Footer />
    </main>
  )
}
