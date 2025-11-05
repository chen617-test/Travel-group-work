import Navbar from "@/components/navbar"
import HeroBanner from "@/components/hero-banner"
import FoodDestinations from "@/components/food-destinations"
import SpecialExperiences from "@/components/special-experiences"
import WhyChooseUs from "@/components/why-choose-us"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroBanner />
        <FoodDestinations />
        <SpecialExperiences />
        <WhyChooseUs />
      </main>
      <Footer />
    </div>
  )
}