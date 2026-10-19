import { ImageResponse } from 'next/og'
import { SITE_NAME } from '@/lib/data'

export const alt = `${SITE_NAME} — Dónde comprar moldes de silicona en Uruguay`
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 80,
          background: 'linear-gradient(135deg, #fbf6ef 0%, #f3e2d3 100%)',
          color: '#3a2a1e',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
          <svg width="88" height="88" viewBox="0 0 32 32">
            <rect x="1" y="1" width="30" height="30" rx="8" fill="#b5603c" />
            <circle cx="11" cy="11" r="4.3" fill="#fff8ef" />
            <circle cx="21" cy="11" r="4.3" fill="#fff8ef" />
            <circle cx="11" cy="21" r="4.3" fill="#fff8ef" />
            <circle cx="21" cy="21" r="4.3" fill="#fff8ef" />
          </svg>
          <div style={{ display: 'flex', fontSize: 56, letterSpacing: -1 }}>
            <span style={{ fontWeight: 700 }}>moldes</span>
            <span style={{ fontWeight: 400, color: '#b5603c' }}>.uy</span>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div style={{ fontSize: 72, fontWeight: 800, lineHeight: 1.05, letterSpacing: -2, maxWidth: 950 }}>
            Dónde comprar moldes de silicona en Uruguay
          </div>
          <div style={{ fontSize: 32, color: '#5a4432' }}>Velas · Jabones · Resina · Chocolate</div>
        </div>
      </div>
    ),
    size,
  )
}
