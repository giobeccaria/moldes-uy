import type { Metadata } from 'next'
import './globals.css'
import { Nav, Footer } from '@/components/NavFooter'
import { SITE_URL, SITE_NAME } from '@/lib/data'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Dónde comprar moldes de silicona en Uruguay`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    'Comparamos dónde comprar moldes de silicona para velas, jabones, resina y chocolate en Uruguay, por departamento y por categoría.',
  openGraph: {
    type: 'website',
    locale: 'es_UY',
    siteName: SITE_NAME,
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
