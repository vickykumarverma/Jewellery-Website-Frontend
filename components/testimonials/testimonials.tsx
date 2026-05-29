"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"
import { cn } from "@/lib/utils"

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Mumbai",
    rating: 5,
    text: "The bridal set I purchased for my wedding was absolutely stunning. The craftsmanship is impeccable and the service was exceptional. Highly recommend Maa Sharda Jewellers!",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
  },
  {
    name: "Rajesh Mehta",
    location: "Delhi",
    rating: 5,
    text: "Been a customer for over 10 years. Their gold purity is always authentic and the designs are unique. The lifetime buyback guarantee gives complete peace of mind.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
  },
  {
    name: "Ananya Patel",
    location: "Bangalore",
    rating: 5,
    text: "Ordered a diamond ring for my anniversary. The certification and quality exceeded my expectations. The team was very helpful in selecting the perfect piece.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
  },
]

export function Testimonials() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-amber-50/30 to-white">
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
            Customer Love
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Real stories from real customers who have experienced the Maa Sharda difference.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-luxury card-luxury relative"
            >
              {/* Quote Icon */}
              <Quote className="w-12 h-12 text-amber-200 absolute top-6 right-6" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                {testimonial.text}
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-500">
                    {testimonial.location}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          <div>
            <div className="text-4xl font-bold text-gray-900 mb-2">50K+</div>
            <div className="text-sm text-gray-600">Happy Customers</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-gray-900 mb-2">4.9</div>
            <div className="text-sm text-gray-600">Average Rating</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-gray-900 mb-2">100%</div>
            <div className="text-sm text-gray-600">Certified Products</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-gray-900 mb-2">38+</div>
            <div className="text-sm text-gray-600">Years of Trust</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
