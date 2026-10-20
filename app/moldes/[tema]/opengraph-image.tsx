import { ogSize, renderOg } from '@/lib/og'
import { findTema } from '@/lib/temas'

export const size = ogSize
export const contentType = 'image/png'

export default async function OgImage({ params }: { params: Promise<{ tema: string }> }) {
  const { tema } = await params
  const x = findTema(tema)
  return renderOg(x ? x.titulo : 'moldes.uy', 'Diseños en stock en Uruguay')
}
