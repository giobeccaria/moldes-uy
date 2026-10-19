import { ImageResponse } from 'next/og'

export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#b5603c' }}>
        <svg width="120" height="120" viewBox="0 0 32 32">
          <path
            d="M9.5 10.5h13l-2.4 13.6a1.5 1.5 0 0 1-1.48 1.24h-5.24a1.5 1.5 0 0 1-1.48-1.24L9.5 10.5z"
            fill="none"
            stroke="#fff8ef"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path
            d="M16 14.4c1.7 2.3 2.9 4.1 2.9 5.6a2.9 2.9 0 1 1-5.8 0c0-1.5 1.2-3.3 2.9-5.6z"
            fill="#fff8ef"
          />
        </svg>
      </div>
    ),
    size,
  )
}
