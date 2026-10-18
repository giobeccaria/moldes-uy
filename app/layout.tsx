import type { Metadata } from 'next'
import './globals.css'
import { Nav, Footer } from '@/components/NavFooter'
import { SITE_URL } from '@/lib/data'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'moldes.uy — Dónde comprar moldes de silicona en Uruguay',
    template: '%s | moldes.uy',
  },
  description:
    'Comparamos dónde comprar moldes de silicona para velas, jabones, resina y chocolate en Uruguay, por departamento y por categoría.',
  openGraph: {
    type: 'website',
    locale: 'es_UY',
    siteName: 'moldes.uy',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-UY">
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
