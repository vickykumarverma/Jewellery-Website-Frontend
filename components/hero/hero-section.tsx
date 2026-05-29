"use client"

import * as React from "react"
import { motion, useAnimation } from "framer-motion"
import { ChevronRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const heroBanners = [
  {
    id: 1,
    title: "Timeless Elegance",
    subtitle: "Discover Our New Bridal Collection",
    description: "Exquisite craftsmanship meets modern design in our stunning bridal jewellery collection.",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1920&q=80",
    cta: "Explore Collection",
    link: "/collections/bridal",
  },
  {
    id: 2,
    title: "Diamond Dreams",
    subtitle: "Certified Diamond Jewellery",
    description: "Each diamond is IGI certified and handpicked for exceptional brilliance.",
    image: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=1920&q=80",
    cta: "Shop Diamonds",
    link: "/collections/diamond",
  },
  {
    id: 3,
    title: "Golden Heritage",
    subtitle: "22K Gold Masterpieces",
    description: "Traditional artistry blended with contemporary elegance in pure gold.",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=1920&q=80",
    cta: "View Gold Collection",
    link: "/collections/gold",
  },
]

export function HeroSection() {
  const [currentBanner, setCurrentBanner] = React.useState(0)
  const controls = useAnimation()

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % heroBanners.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  const nextBanner = () => {
    setCurrentBanner((prev) => (prev + 1) % heroBanners.length)
  }

  const prevBanner = () => {
    setCurrentBanner((prev) => (prev - 1 + heroBanners.length) % heroBanners.length)
  }

  return (
    <section className="relative h-screen lg:h-[90vh] overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div
        key={currentBanner}
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${heroBanners[currentBanner].image})`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
      </motion.div>

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl">
            <motion.div
              key={currentBanner}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 mb-6"
              >
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span className="text-sm font-medium text-white">
                  {heroBanners[currentBanner].subtitle}
                </span>
              </motion.div>

              {/* Title */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="font-display text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight"
              >
                {heroBanners[currentBanner].title}
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="text-lg lg:text-xl text-gray-200 mb-8 leading-relaxed"
              >
                {heroBanners[currentBanner].description}
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="flex flex-wrap gap-4"
              >
                <Button
                  size="xl"
                  className="bg-gradient-to-r from-amber-600 to-amber-800 text-white hover:from-amber-700 hover:to-amber-900 shadow-gold btn-luxury"
                >
                  {heroBanners[currentBanner].cta}
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Button>
                <Button
                  size="xl"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-black backdrop-blur-sm"
                >
                  Book Appointment
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {heroBanners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentBanner(index)}
            className={cn(
              "w-3 h-3 rounded-full transition-all duration-300",
              currentBanner === index
                ? "w-12 bg-amber-500"
                : "bg-white/50 hover:bg-white/80"
            )}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col gap-4">
        <button
          onClick={prevBanner}
          className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all"
        >
          <ChevronRight className="w-6 h-6 rotate-180" />
        </button>
        <button
          onClick={nextBanner}
          className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-8 hidden lg:block"
      >
        <div className="flex flex-col items-center gap-2 text-white/70">
          <span className="text-sm font-medium tracking-widest uppercase">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2"
          >
            <div className="w-1.5 h-3 bg-white rounded-full" />
          </motion.div>
        </div>
      </motion.div>

      {/* Floating Elements */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 right-1/4 w-20 h-20 bg-gradient-to-br from-amber-400/20 to-amber-600/20 rounded-full blur-2xl"
      />
      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-1/3 right-1/3 w-32 h-32 bg-gradient-to-br from-amber-300/10 to-amber-500/10 rounded-full blur-3xl"
      />
    </section>
  )
}
