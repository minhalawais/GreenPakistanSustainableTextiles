import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Green Pakistan Project',
  description: 'Cooperation between German Importers and Pakistani Producers',
  icons: {
    icon: '/sequa_logo.png', // Path to your favicon.ico file in the public folder
    shortcut: '/sequa_logo.png', // Optional: Path to a shortcut icon
    apple: '/sequa_logo.png', // Optional: Path to an Apple Touch icon
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
