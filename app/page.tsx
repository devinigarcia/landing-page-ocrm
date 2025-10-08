import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { Section2 } from "@/components/section-2"
import { Section3 } from "@/components/section-3"
import { Section4 } from "@/components/section-4"
import { Section5 } from "@/components/section-5"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Footer />
    </main>
  )
}
