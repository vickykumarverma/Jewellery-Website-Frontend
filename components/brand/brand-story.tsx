"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Sparkles, Award, Shield, Heart } from "lucide-react"
import { cn } from "@/lib/utils"

const features = [
  {
    icon: Sparkles,
    title: "Handcrafted Excellence",
    description: "Each piece is meticulously crafted by master artisans with decades of experience",
  },
  {
    icon: Award,
    title: "Certified Quality",
    description: "All our diamonds are IGI certified and gold is BIS hallmarked for authenticity",
  },
  {
    icon: Shield,
    title: "Lifetime Assurance",
    description: "Enjoy lifetime buyback guarantee and free maintenance for all purchases",
  },
  {
    icon: Heart,
    title: "Customer First",
    description: "Personalized service and dedicated support for every customer",
  },
]

export function BrandStory() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block text-sm font-medium text-amber-700 tracking-widest uppercase mb-4">
              Our Legacy
            </span>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Crafting Dreams Since 1985
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              For over three decades, Maa Sharda Jewellers has been synonymous with trust, quality, and exquisite craftsmanship. What started as a small family workshop has now grown into one of the most trusted names in luxury jewellery.
            </p>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Our commitment to using only the finest materials and our dedication to traditional artistry has made us the preferred choice for discerning customers across generations.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-amber-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-luxury-xl">
              <img
                src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80"
                alt="Craftsmanship"
                className="w-full aspect-square object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>

            {/* Floating Card */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-8 -left-8 bg-white rounded-2xl p-6 shadow-luxury-lg max-w-xs"
            >
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center">
                  <Award className="w-8 h-8 text-amber-700" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">38+</div>
                  <div className="text-sm text-gray-600">Years of Excellence</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
