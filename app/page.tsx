import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { PetContent } from "@/components/pet-content"
import { ShopCTA } from "@/components/shop-cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <PetContent />
        <ShopCTA />
      </main>
      <Footer />
    </div>
  )
}
