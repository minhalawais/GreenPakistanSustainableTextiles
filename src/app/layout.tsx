import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Green Pakistan Project",
  description: "Cooperation between German Importers and Pakistani Producers",
  icons: {
    icon: "/sequa_logo.png",
    shortcut: "/sequa_logo.png",
    apple: "/sequa_logo.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} min-h-screen bg-background text-foreground`}>{children}</body>
    </html>
  )
}

