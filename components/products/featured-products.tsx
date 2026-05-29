"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Heart, ShoppingCart, Star, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCartStore } from "@/store/cart-store"
import { useWishlistStore } from "@/store/wishlist-store"
import { formatPrice, cn } from "@/lib/utils"

const featuredProducts = [
  {
    _id: "1",
    name: "Eternal Love Diamond Ring",
    slug: "eternal-love-diamond-ring",
    price: 125000,
    originalPrice: 150000,
    discount: 17,
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&q=80",
    rating: 4.8,
    reviewCount: 124,
    badges: [{ type: "bestseller", text: "Bestseller", color: "bg-amber-500" }],
    isNew: false,
  },
  {
    _id: "2",
    name: "Royal Kundan Necklace Set",
    slug: "royal-kundan-necklace-set",
    price: 285000,
    originalPrice: 320000,
    discount: 11,
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80",
    rating: 4.9,
    reviewCount: 89,
    badges: [{ type: "new", text: "New Arrival", color: "bg-green-500" }],
    isNew: true,
  },
  {
    _id: "3",
    name: "Solitaire Stud Earrings",
    slug: "solitaire-stud-earrings",
    price: 89000,
    originalPrice: 95000,
    discount: 6,
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80",
    rating: 4.7,
    reviewCount: 156,
    badges: [],
    isNew: false,
  },
  {
    _id: "4",
    name: "Antique Gold Bangle",
    slug: "antique-gold-bangle",
    price: 175000,
    originalPrice: 195000,
    discount: 10,
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=80",
    rating: 4.6,
    reviewCount: 78,
    badges: [{ type: "exclusive", text: "Exclusive", color: "bg-purple-500" }],
    isNew: false,
  },
]

export function FeaturedProducts() {
  const { addItem } = useCartStore()
  const { addItem: addToWishlist, isInWishlist } = useWishlistStore()

  return (
    <section className="py-20 lg:py-32 bg-white">
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
            Curated For You
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Featured Products
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Handpicked pieces from our finest collections, crafted with precision and passion.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product._id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl bg-gray-50 aspect-[3/4] mb-4 card-luxury">
                {/* Badges */}
                <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
                  {product.badges.map((badge) => (
                    <span
                      key={badge.type}
                      className={cn(
                        "px-3 py-1 text-xs font-medium text-white rounded-full",
                        badge.color
                      )}
                    >
                      {badge.text}
                    </span>
                  ))}
                  {product.isNew && (
                    <span className="px-3 py-1 text-xs font-medium text-white bg-green-500 rounded-full">
                      New
                    </span>
                  )}
                </div>

                {/* Image */}
                <div className="relative h-full img-zoom-container">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Quick Actions */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                  <Button
                    size="icon"
                    variant="secondary"
                    className="rounded-full bg-white hover:bg-white/90"
                    onClick={() => addToWishlist(product as any)}
                  >
                    <Heart
                      className={cn(
                        "w-5 h-5",
                        isInWishlist(product._id) ? "fill-red-500 text-red-500" : ""
                      )}
                    />
                  </Button>
                  <Button
                    size="icon"
                    variant="secondary"
                    className="rounded-full bg-white hover:bg-white/90"
                  >
                    <Eye className="w-5 h-5" />
                  </Button>
                  <Button
                    size="icon"
                    variant="secondary"
                    className="rounded-full bg-white hover:bg-white/90"
                    onClick={() => addItem(product as any)}
                  >
                    <ShoppingCart className="w-5 h-5" />
                  </Button>
                </div>
              </div>

              {/* Product Info */}
              <div>
                <h3 className="font-medium text-gray-900 mb-2 line-clamp-2 group-hover:text-amber-700 transition-colors">
                  {product.name}
                </h3>
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    <span className="text-sm font-medium text-gray-700">
                      {product.rating}
                    </span>
                  </div>
                  <span className="text-sm text-gray-400">
                    ({product.reviewCount})
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold text-gray-900">
                    {formatPrice(product.price)}
                  </span>
                  {product.originalPrice && (
                    <>
                      <span className="text-sm text-gray-400 line-through">
                        {formatPrice(product.originalPrice)}
                      </span>
                      <span className="text-sm font-medium text-green-600">
                        {product.discount}% OFF
                      </span>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <button className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-600 to-amber-800 text-white rounded-lg hover:from-amber-700 hover:to-amber-900 transition-all duration-300 font-medium shadow-gold btn-luxury">
            View All Products
          </button>
        </motion.div>
      </div>
    </section>
  )
}
