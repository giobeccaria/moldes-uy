import { ogSize, renderOg } from '@/lib/og'
import { findCategoria } from '@/lib/data'

export const size = ogSize
export const contentType = 'image/png'

export default async function OgImage({ params }: { params: Promise<{ categoria: string }> }) {
  const { categoria } = await params
  const x = findCategoria(categoria)
  return renderOg(x ? x.titulo : 'moldes.uy', 'Dónde comprarlos en Uruguay · Comparativa')
}
