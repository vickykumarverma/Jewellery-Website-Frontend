import type { Metadata } from "next"
import { Inter, Playfair_Display, Cormorant_Garamond } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Maa Sharda Jewellers | Luxury Diamond & Gold Jewellery",
  description: "Discover exquisite diamond and gold jewellery at Maa Sharda Jewellers. Premium quality rings, necklaces, earrings, and bridal collections with timeless elegance.",
  keywords: ["luxury jewellery", "diamond jewellery", "gold jewellery", "bridal jewellery", "rings", "necklaces", "earrings", "tanishq", "premium jewellery"],
  authors: [{ name: "Maa Sharda Jewellers" }],
  creator: "Maa Sharda Jewellers",
  publisher: "Maa Sharda Jewellers",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Maa Sharda Jewellers | Luxury Diamond & Gold Jewellery",
    description: "Discover exquisite diamond and gold jewellery at Maa Sharda Jewellers. Premium quality rings, necklaces, earrings, and bridal collections with timeless elegance.",
    siteName: "Maa Sharda Jewellers",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Maa Sharda Jewellers - Luxury Jewellery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maa Sharda Jewellers | Luxury Diamond & Gold Jewellery",
    description: "Discover exquisite diamond and gold jewellery at Maa Sharda Jewellers. Premium quality rings, necklaces, earrings, and bridal collections with timeless elegance.",
    images: ["/og-image.jpg"],
    creator: "@maasharda",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${playfair.variable} ${cormorant.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
