import { SITE_NAME } from '@/lib/data'

// Símbolo: un bloque de molde con la cavidad en forma de gota. Se usa igual
// en el header, el footer, el favicon (app/icon.svg) y la imagen para redes.
export function LogoMark({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden="true" className="logo-mark">
      <rect x="1" y="1" width="30" height="30" rx="9" fill="var(--logo-bg, #1f4e79)" />
      <path
        d="M16 6.5c0 0-7 7.6-7 12.3a7 7 0 0 0 14 0c0-4.7-7-12.3-7-12.3z"
        fill="var(--logo-fg, #ffffff)"
      />
      <path
        d="M16 12.2c0 0-3.6 4-3.6 6.5a3.6 3.6 0 0 0 7.2 0c0-2.5-3.6-6.5-3.6-6.5z"
        fill="var(--logo-bg, #1f4e79)"
        opacity="0.22"
      />
    </svg>
  )
}

export function Logo() {
  return (
    <span className="logo">
      <LogoMark />
      <span className="logo-word" aria-label={SITE_NAME}>
        <span className="logo-a">Compara</span>
        <span className="logo-b">moldes</span>
      </span>
    </span>
  )
}
