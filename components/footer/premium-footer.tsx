"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

const footerLinks = {
  shop: {
    title: "Shop",
    links: [
      { name: "New Arrivals", href: "/new-arrivals" },
      { name: "Bestsellers", href: "/bestsellers" },
      { name: "Rings", href: "/rings" },
      { name: "Necklaces", href: "/necklaces" },
      { name: "Earrings", href: "/earrings" },
      { name: "Bridal Collection", href: "/bridal" },
    ],
  },
  about: {
    title: "About Us",
    links: [
      { name: "Our Story", href: "/about" },
      { name: "Craftsmanship", href: "/craftsmanship" },
      { name: "Certifications", href: "/certifications" },
      { name: "Store Locator", href: "/stores" },
      { name: "Careers", href: "/careers" },
      { name: "Press", href: "/press" },
    ],
  },
  support: {
    title: "Customer Service",
    links: [
      { name: "Contact Us", href: "/contact" },
      { name: "FAQs", href: "/faqs" },
      { name: "Shipping Info", href: "/shipping" },
      { name: "Returns & Exchanges", href: "/returns" },
      { name: "Size Guide", href: "/size-guide" },
      { name: "Jewellery Care", href: "/care" },
    ],
  },
  policies: {
    title: "Policies",
    links: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms & Conditions", href: "/terms" },
      { name: "Refund Policy", href: "/refund" },
      { name: "Security Policy", href: "/security" },
      { name: "Cookie Policy", href: "/cookies" },
    ],
  },
}

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Youtube, href: "#", label: "YouTube" },
]

const contactInfo = [
  { icon: Phone, text: "+91 98765 43210" },
  { icon: Mail, text: "care@maashardajewellers.com" },
  { icon: MapPin, text: "123 Luxury Lane, Mumbai, India" },
]

export function PremiumFooter() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="font-serif text-3xl font-bold text-gradient mb-4">
                Maa Sharda
              </h3>
              <p className="text-sm text-gray-400 mb-6">
                Crafting timeless elegance since 1985. Your trusted partner for exquisite jewellery.
              </p>

              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center gap-3 text-sm text-gray-400">
                    <info.icon className="w-4 h-4 text-amber-500" />
                    <span>{info.text}</span>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-amber-600 transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([key, section], index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h4 className="font-semibold text-lg mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-amber-500 transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Maa Sharda Jewellers. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/100px-Visa_Inc._logo.svg.png"
                alt="Visa"
                className="h-6 opacity-50 hover:opacity-100 transition-opacity"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/100px-Mastercard-logo.svg.png"
                alt="Mastercard"
                className="h-6 opacity-50 hover:opacity-100 transition-opacity"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/100px-PayPal.svg.png"
                alt="PayPal"
                className="h-6 opacity-50 hover:opacity-100 transition-opacity"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
