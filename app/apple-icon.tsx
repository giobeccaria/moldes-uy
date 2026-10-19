import { ImageResponse } from 'next/og'

export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#b5603c' }}>
        <svg width="120" height="120" viewBox="0 0 32 32">
          <circle cx="11" cy="11" r="4.3" fill="#fff8ef" />
          <circle cx="21" cy="11" r="4.3" fill="#fff8ef" />
          <circle cx="11" cy="21" r="4.3" fill="#fff8ef" />
          <circle cx="21" cy="21" r="4.3" fill="#fff8ef" />
        </svg>
      </div>
    ),
    size,
  )
}
