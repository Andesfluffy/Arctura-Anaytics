import type { Metadata, Viewport } from 'next'
import { Montserrat, Open_Sans } from 'next/font/google'
import '@/styles/globals.css'
import { Navbar } from '@/components/Navbar'
import { TopBar } from '@/components/TopBar'
import { Footer } from '@/components/footer'
import { Analytics } from '@/components/analytics'
import { OrganizationJsonLd, defaultMetadata } from '@/lib/seo'

const montserrat = Montserrat({ subsets: ['latin'], weight: ['700'], display: 'swap', preload: true, variable: '--font-heading' })
const openSans = Open_Sans({ subsets: ['latin'], weight: ['400'], display: 'swap', preload: true, variable: '--font-body' })

export const metadata: Metadata = defaultMetadata

export const viewport: Viewport = {
  themeColor: '#171312',
  colorScheme: 'dark'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body className={`${openSans.variable} ${montserrat.variable} bg-bg text-ink antialiased`}>
        <a href="#content" className="skip-link">Skip to content</a>
        <OrganizationJsonLd />
        <TopBar />
        <Navbar />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
