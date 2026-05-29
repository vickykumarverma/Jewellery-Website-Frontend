export interface User {
  _id: string
  name: string
  email: string
  phone?: string
  avatar?: string
  role: "customer" | "admin" | "superadmin"
  addresses: Address[]
  wishlist: string[]
  createdAt: Date
  updatedAt: Date
}

export interface Address {
  _id: string
  fullName: string
  phone: string
  addressLine1: string
  addressLine2?: string
  city: string
  state: string
  pincode: string
  country: string
  isDefault: boolean
}

export interface Product {
  _id: string
  name: string
  slug: string
  description: string
  shortDescription: string
  category: Category
  subcategory: string
  images: ProductImage[]
  videos?: string[]
  price: number
  originalPrice?: number
  discount?: number
  currency: string
  stock: number
  variants: ProductVariant[]
  specifications: ProductSpecification
  metalType: "gold" | "silver" | "platinum" | "rose-gold"
  metalPurity: "14K" | "18K" | "22K" | "24K"
  stoneType?: "diamond" | "ruby" | "emerald" | "sapphire" | "pearl" | "none"
  stoneCarat?: number
  weight: number
  dimensions: {
    length?: number
    width?: number
    height?: number
  }
  tags: string[]
  badges: ProductBadge[]
  rating: number
  reviewCount: number
  isNew: boolean
  isFeatured: boolean
  isBestseller: boolean
  seoTitle?: string
  seoDescription?: string
  seoKeywords?: string[]
  createdAt: Date
  updatedAt: Date
}

export interface ProductImage {
  _id: string
  url: string
  alt: string
  isDefault: boolean
  order: number
}

export interface ProductVariant {
  _id: string
  name: string
  value: string
  price?: number
  stock?: number
  image?: string
}

export interface ProductSpecification {
  metal: string
  purity: string
  weight: string
  stone?: string
  stoneCarat?: string
  dimensions?: string
  makingCharges?: string
  hallmark?: string
  certification?: string
}

export interface ProductBadge {
  type: "new" | "sale" | "bestseller" | "limited" | "exclusive"
  text: string
  color: string
}

export interface Category {
  _id: string
  name: string
  slug: string
  description: string
  image: string
  icon?: string
  parent?: string
  order: number
  isActive: boolean
  subcategories?: Category[]
}

export interface CartItem {
  _id: string
  product: Product
  quantity: number
  variant?: ProductVariant
  size?: string
  price: number
}

export interface Cart {
  _id: string
  user: string
  items: CartItem[]
  subtotal: number
  discount: number
  coupon?: Coupon
  total: number
  createdAt: Date
  updatedAt: Date
}

export interface Coupon {
  _id: string
  code: string
  type: "percentage" | "fixed" | "free-shipping"
  value: number
  minPurchase?: number
  maxDiscount?: number
  applicableCategories?: string[]
  applicableProducts?: string[]
  usageLimit?: number
  usedCount: number
  validFrom: Date
  validUntil: Date
  isActive: boolean
}

export interface Order {
  _id: string
  orderNumber: string
  user: User
  items: OrderItem[]
  shippingAddress: Address
  billingAddress: Address
  subtotal: number
  discount: number
  shipping: number
  tax: number
  total: number
  paymentMethod: "stripe" | "razorpay" | "cod"
  paymentStatus: "pending" | "processing" | "completed" | "failed" | "refunded"
  paymentId?: string
  orderStatus: "pending" | "confirmed" | "processing" | "shipped" | "delivered" | "cancelled" | "returned"
  trackingNumber?: string
  estimatedDelivery?: Date
  actualDelivery?: Date
  notes?: string
  coupon?: Coupon
  createdAt: Date
  updatedAt: Date
}

export interface OrderItem {
  _id: string
  product: Product
  quantity: number
  variant?: ProductVariant
  size?: string
  price: number
  subtotal: number
}

export interface Review {
  _id: string
  user: User
  product: string
  rating: number
  title: string
  comment: string
  images?: string[]
  isVerified: boolean
  isApproved: boolean
  helpful: number
  createdAt: Date
  updatedAt: Date
}

export interface Wishlist {
  _id: string
  user: string
  products: Product[]
  createdAt: Date
  updatedAt: Date
}

export interface Collection {
  _id: string
  name: string
  slug: string
  description: string
  image: string
  bannerImage?: string
  products: string[]
  isActive: boolean
  order: number
  createdAt: Date
  updatedAt: Date
}

export interface Boutique {
  _id: string
  name: string
  address: Address
  phone: string
  email: string
  timings: string
  image?: string
  mapUrl?: string
  services: string[]
  isActive: boolean
}

export interface Appointment {
  _id: string
  user: User
  boutique: Boutique
  date: Date
  time: string
  type: "consultation" | "custom-design" | "try-at-home" | "repair"
  notes?: string
  status: "pending" | "confirmed" | "completed" | "cancelled"
  createdAt: Date
  updatedAt: Date
}

export interface GoldExchange {
  _id: string
  user: User
  goldType: "ornaments" | "coins" | "bars"
  weight: number
  purity: string
  estimatedValue: number
  status: "pending" | "approved" | "rejected" | "completed"
  appointmentDate?: Date
  notes?: string
  createdAt: Date
  updatedAt: Date
}

export interface Analytics {
  totalRevenue: number
  totalOrders: number
  totalCustomers: number
  averageOrderValue: number
  topProducts: Product[]
  topCategories: Category[]
  recentOrders: Order[]
  salesByMonth: { month: string; revenue: number; orders: number }[]
  salesByCategory: { category: string; revenue: number; orders: number }[]
}

export interface Notification {
  _id: string
  user: string
  type: "order" | "promotion" | "wishlist" | "review" | "system"
  title: string
  message: string
  link?: string
  isRead: boolean
  createdAt: Date
}

export interface SearchSuggestion {
  type: "product" | "category" | "collection"
  id: string
  name: string
  image?: string
  url: string
}

export interface AIRecommendation {
  productId: string
  score: number
  reason: string
}
