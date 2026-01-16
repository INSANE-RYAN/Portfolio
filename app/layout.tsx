import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display, Noto_Sans_KR } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
})

const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-noto-kr",
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Sarthak 사르탁 - Creative Developer Portfolio",
  description: "BCA Student at Chandigarh University | Full-Stack Developer & Designer | 창의적인 개발자",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfairDisplay.variable} ${notoSansKR.variable} antialiased`}>
      <body className="font-sans">
        <ThemeProvider defaultTheme="korean-traditional" storageKey="korean-portfolio-theme">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
