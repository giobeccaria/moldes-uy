import type { Metadata, Viewport } from 'next'
import { Fraunces, Inter } from 'next/font/google'
import './globals.css'
import { Nav, Footer } from '@/components/NavFooter'
import { SITE_URL, SITE_NAME } from '@/lib/data'

const display = Fraunces({ subsets: ['latin'], variable: '--font-display', display: 'swap' })
const sans = Inter({ subsets: ['latin'], variable: '--font-sans', display: 'swap' })

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Dónde comprar moldes de silicona en Uruguay`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    'Comparamos dónde comprar moldes de silicona e insumos para velas, jabones, resina y chocolate en Uruguay, por departamento y por categoría.',
  openGraph: {
    type: 'website',
    locale: 'es_UY',
    siteName: SITE_NAME,
  },
  twitter: { card: 'summary_large_image' },
}

export const viewport: Viewport = {
  themeColor: '#1f4e79',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-UY" className={`${display.variable} ${sans.variable}`}>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
