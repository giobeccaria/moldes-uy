import { ogSize, renderOg } from '@/lib/og'
import { findGuia } from '@/lib/guias'

export const size = ogSize
export const contentType = 'image/png'

export default async function OgImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const x = findGuia(slug)
  return renderOg(x ? x.metaTitulo : 'moldes.uy', 'Guía paso a paso')
}
