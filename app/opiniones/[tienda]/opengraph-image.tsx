import { ogSize, renderOg } from '@/lib/og'
import { findTiendaPorSlug } from '@/lib/data'

export const size = ogSize
export const contentType = 'image/png'

export default async function OgImage({ params }: { params: Promise<{ tienda: string }> }) {
  const { tienda } = await params
  const x = findTiendaPorSlug(tienda)
  return renderOg(x ? `${x.nombre}: opiniones y análisis` : 'moldes.uy', 'Catálogo · Envío · Medios de pago')
}
