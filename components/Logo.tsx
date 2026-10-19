import { SITE_NAME } from '@/lib/data'

// Símbolo: una bandeja de molde vista desde arriba, con sus cuatro
// cavidades en negativo — el objeto real que se usa para verter cera,
// jabón, resina o chocolate. Legible incluso a 16px (favicon/header).
// Se usa igual en el header, el footer, el favicon (app/icon.svg) y la
// imagen para redes.
export function LogoMark({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden="true" className="logo-mark">
      <rect x="1" y="1" width="30" height="30" rx="8" fill="var(--logo-bg, #b5603c)" />
      <circle cx="11" cy="11" r="4.3" fill="var(--logo-fg, #fff8ef)" />
      <circle cx="21" cy="11" r="4.3" fill="var(--logo-fg, #fff8ef)" />
      <circle cx="11" cy="21" r="4.3" fill="var(--logo-fg, #fff8ef)" />
      <circle cx="21" cy="21" r="4.3" fill="var(--logo-fg, #fff8ef)" />
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
