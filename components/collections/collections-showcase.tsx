"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

const collections = [
  {
    name: "Bridal Collection",
    description: "Make your special day unforgettable with our exquisite bridal jewellery",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1200&q=80",
    link: "/collections/bridal",
  },
  {
    name: "Diamond Collection",
    description: "Brilliant certified diamonds for every occasion",
    image: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=1200&q=80",
    link: "/collections/diamond",
  },
  {
    name: "Gold Heritage",
    description: "Timeless 22K gold pieces crafted with traditional artistry",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=1200&q=80",
    link: "/collections/gold",
  },
]

export function CollectionsShowcase() {
  return (
    <section className="py-20 lg:py-32 bg-amber-50/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-medium text-amber-700 tracking-widest uppercase mb-4">
            Exclusive Collections
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Curated Collections
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our carefully curated collections, each telling a unique story of elegance and craftsmanship.
          </p>
        </motion.div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {collections.map((collection, index) => (
            <motion.div
              key={collection.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative overflow-hidden rounded-2xl aspect-[4/5] cursor-pointer card-luxury"
            >
              {/* Image */}
              <div className="absolute inset-0">
                <img
                  src={collection.image}
                  alt={collection.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              </div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <h3 className="font-display text-3xl lg:text-4xl font-bold text-white mb-3">
                  {collection.name}
                </h3>
                <p className="text-white/80 text-base mb-6 line-clamp-2">
                  {collection.description}
                </p>
                <div className="flex items-center gap-2 text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0 duration-300">
                  <span className="text-sm font-medium">Explore Collection</span>
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
