import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import Link from 'next/link'
import './globals.css'

const geist = Geist({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Veille Tech',
  description: 'Dashboard de veille technologique',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={`${geist.className} bg-gray-950`}>
        <nav className="border-b border-gray-800 px-8 py-4 flex items-center gap-6">
          <Link href="/" className="text-white font-bold text-lg">
            Veille Tech
          </Link>
          <Link href="/search" className="text-gray-400 hover:text-white transition-colors">
            Rechercher
          </Link>
        </nav>
        {children}
      </body>
    </html>
  )
}