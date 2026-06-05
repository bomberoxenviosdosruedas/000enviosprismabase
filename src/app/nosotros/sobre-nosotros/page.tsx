import { OptimizedHeader } from "@/components/homenew/optimized-header"
import { AboutHero } from "@/components/about/about-hero"
import { WhoWeAre } from "@/components/about/who-we-are"
import { CompanyValues } from "@/components/about/company-values"
import { CompanyStory } from "@/components/about/company-story"
import { TeamSection } from "@/components/about/team-section"
import { MissionVision } from "@/components/about/mission-vision"
import { CarruselRedes } from "@/components/homenew/carrusel-redes"
import { Footer } from "@/components/homenew/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sobre Nosotros | Empresa de Logística Líder en Mar del Plata",
  description: "Conocé nuestra infraestructura y valores como la empresa de logística local referente en Mar del Plata. Transparencia, flota propia y compromiso total.",
  alternates: { canonical: 'https://www.enviosdosruedas.com/nosotros/sobre-nosotros' },
  openGraph: {
    title: "Sobre Nosotros | Empresa de Logística Líder en Mar del Plata",
    description: "Conocé nuestra infraestructura y valores como la empresa de logística local referente en Mar del Plata. Transparencia, flota propia y compromiso total.",
    url: 'https://www.enviosdosruedas.com/nosotros/sobre-nosotros',
    images: [{ url: '/og-image.jpg' }],
  },
}

export default function AboutPage() {
  return (
    <div className="dark min-h-screen flex flex-col bg-background text-foreground selection:bg-primary/30">
      <OptimizedHeader />
      <main className="flex-grow">
        <AboutHero />
        <WhoWeAre />
        <CompanyValues />
        <CompanyStory />
        <TeamSection />
        <MissionVision />
      </main>
      <CarruselRedes />
      <Footer />
    </div>
  )
}
