"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Search, ShoppingBag, Heart, User, Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCartStore } from "@/store/cart-store"
import { useWishlistStore } from "@/store/wishlist-store"
import { cn } from "@/lib/utils"

export function PremiumNavbar() {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
  const [isSearchOpen, setIsSearchOpen] = React.useState(false)
  const [activeMegaMenu, setActiveMegaMenu] = React.useState<string | null>(null)
  const { totalItems, toggleCart } = useCartStore()
  const { items: wishlistItems } = useWishlistStore()

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const categories = [
    {
      name: "Rings",
      subcategories: ["Engagement Rings", "Wedding Bands", "Solitaire Rings", "Eternity Rings", "Cocktail Rings"],
    },
    {
      name: "Necklaces",
      subcategories: ["Pendant Sets", "Chokers", "Statement Necklaces", "Chains", "Lockets"],
    },
    {
      name: "Earrings",
      subcategories: ["Studs", "Drops", "Hoops", "Jhumkas", "Chandeliers"],
    },
    {
      name: "Bangles",
      subcategories: ["Gold Bangles", "Diamond Bangles", "Kadas", "Cuff Bangles"],
    },
    {
      name: "Bridal",
      subcategories: ["Bridal Sets", "Mangalsutras", "Nose Pins", "Maang Tikka"],
    },
    {
      name: "Collections",
      subcategories: ["Diamond", "Gold", "Rose Gold", "Platinum", "Daily Wear"],
    },
  ]

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled
            ? "bg-white/95 backdrop-blur-xl shadow-luxury"
            : "bg-transparent"
        )}
      >
        {/* Top Bar */}
        <div className="hidden lg:block bg-gradient-to-r from-amber-50 to-cream border-b border-amber-100">
          <div className="container mx-auto px-4 py-2 flex justify-between items-center text-xs text-amber-900">
            <div className="flex gap-6">
              <span>Free Shipping on Orders Above ₹10,000</span>
              <span>•</span>
              <span>100% Certified Jewellery</span>
              <span>•</span>
              <span>Lifetime Exchange</span>
            </div>
            <div className="flex gap-4">
              <a href="#" className="hover:text-amber-700 transition-colors">Track Order</a>
              <a href="#" className="hover:text-amber-700 transition-colors">Store Locator</a>
              <a href="#" className="hover:text-amber-700 transition-colors">Contact Us</a>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20 lg:h-24">
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </Button>

            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex-shrink-0"
            >
              <a href="/" className="font-serif text-2xl lg:text-3xl font-bold text-gradient">
                Maa Sharda
              </a>
              <p className="text-xs text-amber-700 font-medium tracking-widest uppercase">
                Jewellers
              </p>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {categories.map((category) => (
                <div
                  key={category.name}
                  className="relative group"
                  onMouseEnter={() => setActiveMegaMenu(category.name)}
                  onMouseLeave={() => setActiveMegaMenu(null)}
                >
                  <button
                    className={cn(
                      "flex items-center gap-1 text-sm font-medium transition-colors",
                      activeMegaMenu === category.name
                        ? "text-amber-700"
                        : "text-gray-700 hover:text-amber-700"
                    )}
                  >
                    {category.name}
                    <ChevronDown className="w-4 h-4" />
                  </button>

                  {/* Mega Menu */}
                  <AnimatePresence>
                    {activeMegaMenu === category.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-luxury-lg border border-gray-100 overflow-hidden"
                      >
                        {category.subcategories.map((sub) => (
                          <a
                            key={sub}
                            href={`/category/${category.name.toLowerCase()}/${sub.toLowerCase().replace(" ", "-")}`}
                            className="block px-4 py-3 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-700 transition-colors"
                          >
                            {sub}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Right Icons */}
            <div className="flex items-center gap-2 lg:gap-4">
              {/* Search */}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="text-gray-700 hover:text-amber-700"
              >
                <Search className="w-5 h-5" />
              </Button>

              {/* Wishlist */}
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-700 hover:text-amber-700 relative"
              >
                <Heart className="w-5 h-5" />
                {wishlistItems.length > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-amber-600 text-white text-xs rounded-full flex items-center justify-center">
                    {wishlistItems.length}
                  </span>
                )}
              </Button>

              {/* Cart */}
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleCart}
                className="text-gray-700 hover:text-amber-700 relative"
              >
                <ShoppingBag className="w-5 h-5" />
                {totalItems() > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-amber-600 text-white text-xs rounded-full flex items-center justify-center">
                    {totalItems()}
                  </span>
                )}
              </Button>

              {/* User */}
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-700 hover:text-amber-700 hidden lg:flex"
              >
                <User className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <AnimatePresence>
          {isSearchOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="border-t border-gray-100 bg-white"
            >
              <div className="container mx-auto px-4 py-4">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search for jewellery, collections, categories..."
                    className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all"
                    autoFocus
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            className="fixed inset-0 z-50 bg-white lg:hidden"
          >
            <div className="container mx-auto px-4 py-6">
              <div className="flex justify-between items-center mb-8">
                <span className="font-serif text-2xl font-bold text-gradient">Maa Sharda</span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <X />
                </Button>
              </div>

              <div className="space-y-4">
                {categories.map((category) => (
                  <div key={category.name}>
                    <button className="text-lg font-medium text-gray-700 w-full text-left py-2">
                      {category.name}
                    </button>
                    <div className="pl-4 space-y-2">
                      {category.subcategories.map((sub) => (
                        <a
                          key={sub}
                          href="#"
                          className="block text-sm text-gray-500 py-1"
                        >
                          {sub}
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-gray-100 flex gap-4">
                <Button variant="outline" className="flex-1">
                  <User className="w-4 h-4 mr-2" />
                  Account
                </Button>
                <Button variant="outline" className="flex-1">
                  <Search className="w-4 h-4 mr-2" />
                  Search
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
