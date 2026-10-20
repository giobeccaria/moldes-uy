import { ImageResponse } from 'next/og'

export const ogSize = { width: 1200, height: 630 }

// Imagen para redes con el estilo de la marca. Cada tipo de página pasa su
// título: al compartir una guía o una categoría se ve de qué se trata, no
// la misma imagen genérica para todo el sitio.
export function renderOg(titulo: string, bajada: string) {
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
          <svg width="72" height="72" viewBox="0 0 32 32">
            <rect x="1" y="1" width="30" height="30" rx="8" fill="#b5603c" />
            <circle cx="11" cy="11" r="4.3" fill="#fff8ef" />
            <circle cx="21" cy="11" r="4.3" fill="#fff8ef" />
            <circle cx="11" cy="21" r="4.3" fill="#fff8ef" />
            <circle cx="21" cy="21" r="4.3" fill="#fff8ef" />
          </svg>
          <div style={{ display: 'flex', fontSize: 48, letterSpacing: -1 }}>
            <span style={{ fontWeight: 700 }}>moldes</span>
            <span style={{ fontWeight: 400, color: '#b5603c' }}>.uy</span>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div style={{ fontSize: titulo.length > 55 ? 58 : 70, fontWeight: 800, lineHeight: 1.06, letterSpacing: -2, maxWidth: 1040 }}>
            {titulo}
          </div>
          <div style={{ fontSize: 30, color: '#5a4432' }}>{bajada}</div>
        </div>
      </div>
    ),
    ogSize,
  )
}
