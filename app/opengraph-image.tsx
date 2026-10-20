import { SITE_NAME } from '@/lib/data'
import { ogSize, renderOg } from '@/lib/og'

export const alt = `${SITE_NAME} — Dónde comprar moldes de silicona en Uruguay`
export const size = ogSize
export const contentType = 'image/png'

export default function OgImage() {
  return renderOg('Dónde comprar moldes de silicona en Uruguay', 'Velas · Jabones · Yeso · Resina · Macetas')
}
