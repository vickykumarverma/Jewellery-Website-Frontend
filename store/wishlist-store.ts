import { create } from "zustand"
import { persist } from "zustand/middleware"
import { Product } from "@/types"

interface WishlistStore {
  items: Product[]
  isOpen: boolean
  addItem: (product: Product) => void
  removeItem: (productId: string) => void
  clearWishlist: () => void
  toggleWishlist: () => void
  isInWishlist: (productId: string) => boolean
}

export const useWishlistStore = create<WishlistStore>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,

      addItem: (product) => {
        set((state) => {
          const exists = state.items.some((item) => item._id === product._id)
          if (exists) {
            return state
          }
          return { items: [...state.items, product] }
        })
      },

      removeItem: (productId) => {
        set((state) => ({
          items: state.items.filter((item) => item._id !== productId),
        }))
      },

      clearWishlist: () => {
        set({ items: [] })
      },

      toggleWishlist: () => {
        set((state) => ({ isOpen: !state.isOpen }))
      },

      isInWishlist: (productId) => {
        return get().items.some((item) => item._id === productId)
      },
    }),
    {
      name: "wishlist-storage",
    }
  )
)
