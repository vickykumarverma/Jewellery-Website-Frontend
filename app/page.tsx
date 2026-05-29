import { PremiumNavbar } from "@/components/navbar/premium-navbar"
import { HeroSection } from "@/components/hero/hero-section"
import { CategorySection } from "@/components/categories/category-section"
import { FeaturedProducts } from "@/components/products/featured-products"
import { CollectionsShowcase } from "@/components/collections/collections-showcase"
import { BrandStory } from "@/components/brand/brand-story"
import { Testimonials } from "@/components/testimonials/testimonials"
import { Newsletter } from "@/components/newsletter/newsletter"
import { PremiumFooter } from "@/components/footer/premium-footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <PremiumNavbar />
      <HeroSection />
      <CategorySection />
      <FeaturedProducts />
      <CollectionsShowcase />
      <BrandStory />
      <Testimonials />
      <Newsletter />
      <PremiumFooter />
    </main>
  )
}
