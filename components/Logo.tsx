import { SITE_NAME } from '@/lib/data'

// Símbolo: un molde visto de perfil (el recipiente trapezoidal donde se
// vierte cera, jabón o resina) con la gota del material ya volcado dentro.
// Se usa igual en el header, el footer, el favicon (app/icon.svg) y la
// imagen para redes.
export function LogoMark({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden="true" className="logo-mark">
      <rect x="1" y="1" width="30" height="30" rx="9" fill="var(--logo-bg, #b5603c)" />
      <path
        d="M9.5 10.5h13l-2.4 13.6a1.5 1.5 0 0 1-1.48 1.24h-5.24a1.5 1.5 0 0 1-1.48-1.24L9.5 10.5z"
        fill="none"
        stroke="var(--logo-fg, #fff8ef)"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M16 14.4c1.7 2.3 2.9 4.1 2.9 5.6a2.9 2.9 0 1 1-5.8 0c0-1.5 1.2-3.3 2.9-5.6z"
        fill="var(--logo-fg, #fff8ef)"
      />
    </svg>
  )
}

export function Logo() {
  return (
    <span className="logo">
      <LogoMark />
      <span className="logo-word" aria-label={SITE_NAME}>
        <span className="logo-b">moldes</span>
        <span className="logo-a">.uy</span>
      </span>
    </span>
  )
}
