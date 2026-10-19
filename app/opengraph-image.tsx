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
          background: 'linear-gradient(135deg, #f4f7fb 0%, #e3ebf4 100%)',
          color: '#0f1b2d',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
          <svg width="88" height="88" viewBox="0 0 32 32">
            <rect x="1" y="1" width="30" height="30" rx="9" fill="#1f4e79" />
            <path d="M16 6.5c0 0-7 7.6-7 12.3a7 7 0 0 0 14 0c0-4.7-7-12.3-7-12.3z" fill="#fff" />
          </svg>
          <div style={{ display: 'flex', fontSize: 56, letterSpacing: -1 }}>
            <span style={{ fontWeight: 400 }}>Compara</span>
            <span style={{ fontWeight: 800, color: '#1f4e79', marginLeft: -12 }}>moldes</span>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div style={{ fontSize: 72, fontWeight: 800, lineHeight: 1.05, letterSpacing: -2, maxWidth: 950 }}>
            Dónde comprar moldes de silicona en Uruguay
          </div>
          <div style={{ fontSize: 32, color: '#4a5b70' }}>Velas · Jabones · Resina · Chocolate</div>
        </div>
      </div>
    ),
    size,
  )
}
