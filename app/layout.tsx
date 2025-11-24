import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"

const geist = Geist({ subsets: ["latin"] })
const geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "BanyaHouse - Premium Mobile Sauna Rentals in Topeka, KS",
  description:
    "Experience luxury mobile sauna and cold plunge rentals in Topeka, Kansas. Book private sessions, delivered experiences, and wellness retreats. Call (785) 501-3414.",
  keywords: "mobile sauna, sauna rental, banya, cold plunge, wellness, Topeka Kansas, sauna delivery",
  generator: "v0.app",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://banyahouse.com",
    siteName: "BanyaHouse",
    title: "Premium Mobile Sauna Rentals in Topeka, KS",
    description: "Luxury sauna and cold plunge experiences delivered to you",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "BanyaHouse Mobile Sauna",
      },
    ],
  },
  alternates: {
    canonical: "https://banyahouse.com",
  },
  robots: "index, follow",
  authors: [{ name: "BanyaHouse" }],
  creator: "BanyaHouse",
}

export const viewport: Viewport = {
  themeColor: "#ff6b35",
  userScalable: true,
  initialScale: 1,
  maximumScale: 5,
  width: "device-width",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body className={`${geist.className} antialiased`}>
        <Navigation />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
