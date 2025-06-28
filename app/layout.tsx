import type React from "react"
import type { Metadata } from "next"
import { Press_Start_2P } from "next/font/google"
import "./globals.css"

const pressStart = Press_Start_2P({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-press",
})

export const metadata: Metadata = {
  title: "$VEX - The Ultimate Crypto Tracker's Token",
  description: "From tracking prices to making gains! VEX Token - built by traders, for traders.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={pressStart.variable}>
      <body>{children}</body>
    </html>
  )
}
