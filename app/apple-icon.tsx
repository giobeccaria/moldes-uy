import { ImageResponse } from 'next/og'

export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#1f4e79' }}>
        <svg width="120" height="120" viewBox="0 0 32 32">
          <path d="M16 6.5c0 0-7 7.6-7 12.3a7 7 0 0 0 14 0c0-4.7-7-12.3-7-12.3z" fill="#fff" />
        </svg>
      </div>
    ),
    size,
  )
}
