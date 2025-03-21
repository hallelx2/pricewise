import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar'

const spaceGrotesk = Space_Grotesk({
    subsets: ['latin'],
    weight: ["300", "400", "500", "600", "700"],
 })


export const metadata: Metadata = {
  title: 'MarketMonitor',
  description: 'A simple market monitoring tool',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={spaceGrotesk.className}>
        <main className=',ax-w-10xl mx-auto'>
            <Navbar/>
        {children}
        </main>
    </body>
    </html>
  )
}
