import { create } from "zustand"
import { persist } from "zustand/middleware"
import { CartItem, Product } from "@/types"

interface CartStore {
  items: CartItem[]
  isOpen: boolean
  addItem: (product: Product, quantity?: number, variant?: any, size?: string) => void
  removeItem: (itemId: string) => void
  updateQuantity: (itemId: string, quantity: number) => void
  clearCart: () => void
  toggleCart: () => void
  subtotal: () => number
  totalItems: () => number
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,

      addItem: (product, quantity = 1, variant, size) => {
        set((state) => {
          const existingItem = state.items.find(
            (item) =>
              item.product._id === product._id &&
              item.variant?._id === variant?._id &&
              item.size === size
          )

          if (existingItem) {
            return {
              items: state.items.map((item) =>
                item.product._id === product._id &&
                item.variant?._id === variant?._id &&
                item.size === size
                  ? { ...item, quantity: item.quantity + quantity }
                  : item
              ),
            }
          }

          return {
            items: [
              ...state.items,
              {
                _id: `${product._id}-${variant?._id || "default"}-${size || "default"}`,
                product,
                quantity,
                variant,
                size,
                price: variant?.price || product.price,
              },
            ],
          }
        })
      },

      removeItem: (itemId) => {
        set((state) => ({
          items: state.items.filter((item) => item._id !== itemId),
        }))
      },

      updateQuantity: (itemId, quantity) => {
        set((state) => ({
          items: state.items.map((item) =>
            item._id === itemId ? { ...item, quantity } : item
          ),
        }))
      },

      clearCart: () => {
        set({ items: [] })
      },

      toggleCart: () => {
        set((state) => ({ isOpen: !state.isOpen }))
      },

      subtotal: () => {
        return get().items.reduce((total, item) => total + item.price * item.quantity, 0)
      },

      totalItems: () => {
        return get().items.reduce((total, item) => total + item.quantity, 0)
      },
    }),
    {
      name: "cart-storage",
    }
  )
)
