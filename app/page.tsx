import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import IndustrialZoneStats from "@/components/industrial-zone-stats"
import SpecialZoneStats from "@/components/special-zone-stats"
import NewsSection from "@/components/news-section"
import PartnersMarquee from "@/components/partners-marquee"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <IndustrialZoneStats />
      <SpecialZoneStats />
      <NewsSection />
      <PartnersMarquee />
      <Footer />
    </main>
  )
}
