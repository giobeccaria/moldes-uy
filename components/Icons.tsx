import type { IconoCategoria } from '@/lib/data'

type P = { size?: number }

const base = (size: number) => ({
  width: size,
  height: size,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
})

export function IconVela({ size = 24 }: P) {
  return (
    <svg {...base(size)}>
      <path d="M12 2.8c1.6 1.8 2 3 2 3.9a2 2 0 0 1-4 0c0-.9.4-2.1 2-3.9z" />
      <path d="M12 8.7v2" />
      <rect x="7.5" y="10.7" width="9" height="10.5" rx="1.6" />
      <path d="M7.5 14.2h9" />
    </svg>
  )
}

export function IconJabon({ size = 24 }: P) {
  return (
    <svg {...base(size)}>
      <rect x="3.5" y="10" width="14" height="10" rx="3" />
      <path d="M7 14.2c1.2-.9 3.4-.9 4.6 0" />
      <circle cx="17.5" cy="5.5" r="2.2" />
      <circle cx="21" cy="9.2" r="1.1" />
      <circle cx="12.6" cy="5.2" r="1.2" />
    </svg>
  )
}

export function IconResina({ size = 24 }: P) {
  return (
    <svg {...base(size)}>
      <path d="M6.5 4h11l3.5 5-9 11L3 9z" />
      <path d="M3 9h18M9.5 4 8 9l4 11 4-11-1.5-5" />
    </svg>
  )
}

export function IconChocolate({ size = 24 }: P) {
  return (
    <svg {...base(size)}>
      <path d="M5 3.5h10.5L19 7v13.5H5z" />
      <path d="M5 9.5h14M5 15h14M12 3.5v17" />
    </svg>
  )
}

export function IconFrasco({ size = 24 }: P) {
  return (
    <svg {...base(size)}>
      <path d="M8 3.5h8v2.5H8z" />
      <path d="M7 6h10l.5 2.5v11a1.5 1.5 0 0 1-1.5 1.5H8a1.5 1.5 0 0 1-1.5-1.5v-11z" />
      <path d="M6.6 12.5h10.8M12 12.5V10" />
    </svg>
  )
}

export function IconGota({ size = 24 }: P) {
  return (
    <svg {...base(size)}>
      <path d="M12 3s-6 6.7-6 11a6 6 0 0 0 12 0c0-4.3-6-11-6-11z" />
      <path d="M9.2 14.6a2.9 2.9 0 0 0 2.4 2.7" />
    </svg>
  )
}

export function IconCategoria({ icono, size }: { icono: IconoCategoria } & P) {
  switch (icono) {
    case 'vela':
      return <IconVela size={size} />
    case 'jabon':
      return <IconJabon size={size} />
    case 'resina':
      return <IconResina size={size} />
    case 'chocolate':
      return <IconChocolate size={size} />
    case 'frasco':
      return <IconFrasco size={size} />
    case 'gota':
      return <IconGota size={size} />
  }
}

export function IconCheck({ size = 16 }: P) {
  return (
    <svg {...base(size)} strokeWidth={2.2}>
      <path d="M5 12.5l4.2 4.2L19 7" />
    </svg>
  )
}

export function IconInfo({ size = 16 }: P) {
  return (
    <svg {...base(size)} strokeWidth={2}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 11v5.5M12 7.6v.1" />
    </svg>
  )
}

export function IconTruck({ size = 18 }: P) {
  return (
    <svg {...base(size)}>
      <path d="M2.5 6.5h11v9.5h-11zM13.5 10h4l3 3v3h-7" />
      <circle cx="6.5" cy="17.5" r="1.8" />
      <circle cx="17" cy="17.5" r="1.8" />
    </svg>
  )
}

export function IconArrow({ size = 16 }: P) {
  return (
    <svg {...base(size)} strokeWidth={2}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}

export function IconInstagram({ size = 16 }: P) {
  return (
    <svg {...base(size)} strokeWidth={1.7}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function IconFacebook({ size = 16 }: P) {
  return (
    <svg {...base(size)} strokeWidth={1.7}>
      <path d="M14.5 21v-7.2h2.4l.4-3h-2.8V8.8c0-.87.24-1.46 1.5-1.46H17.5V4.7c-.26-.03-1.14-.1-2.17-.1-2.15 0-3.63 1.31-3.63 3.72v2.08H9.3v3h2.4V21z" />
    </svg>
  )
}

export function IconPin({ size = 20 }: P) {
  return (
    <svg {...base(size)}>
      <path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11z" />
      <circle cx="12" cy="10" r="2.3" />
    </svg>
  )
}

export function IconMenu({ size = 22 }: P) {
  return (
    <svg {...base(size)} strokeWidth={1.8}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  )
}

// Badge visual por tienda del ranking: si hay un logo real disponible (ver
// lib/data.ts) se muestra ese logo sobre blanco; si no, un badge con las
// iniciales de la marca sobre su color, como respaldo.
export function BrandBadge({ nombre, color, destacado, logo, size = 48 }: {
  nombre: string
  color: string
  destacado?: boolean
  logo?: string
  size?: number
}) {
  if (logo) {
    // La foto de perfil real de Instagram de Moldarte ya llena el cuadro
    // (sin margen blanco alrededor), así que va sin el padding ni el fondo
    // blanco que sí necesitan los logos de otras marcas sobre fondo
    // transparente.
    const esFotoRecortada = logo.includes('-instagram')
    // Tamaño de imagen en píxeles explícitos: algunos de los SVG de marca no
    // traen width/height propios (sólo viewBox), y un width/height en % sobre
    // un contenedor grid puede resolver a 0 en Chromium por la referencia
    // circular de tamaño. Pixeles fijos lo evitan en cualquier logo.
    const imgSize = esFotoRecortada ? size : Math.round(size * 0.7)
    return (
      <span
        className={`brand-badge brand-badge-logo ${esFotoRecortada ? 'brand-badge-photo' : ''}`}
        style={{ width: size, height: size }}
      >
        {/* Logos de terceros, cada uno con pocas unidades de uso: una
           etiqueta <img> simple evita el loader/optimizador remoto de
           next/image para estos assets locales de pocos KB. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={logo}
          alt={`Logo de ${nombre}`}
          width={imgSize}
          height={imgSize}
          style={{ width: imgSize, height: imgSize }}
        />
      </span>
    )
  }
  if (destacado) {
    return (
      <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden="true" className="brand-badge">
        <rect x="1" y="1" width="30" height="30" rx="9" fill={color} />
        <path
          d="M16 6.5c0 0-7 7.6-7 12.3a7 7 0 0 0 14 0c0-4.7-7-12.3-7-12.3z"
          fill="#ffffff"
        />
        <path
          d="M16 12.2c0 0-3.6 4-3.6 6.5a3.6 3.6 0 0 0 7.2 0c0-2.5-3.6-6.5-3.6-6.5z"
          fill={color}
          opacity="0.22"
        />
      </svg>
    )
  }
  const iniciales = nombre
    .split(/\s+/)
    .filter((w) => w.length > 2 || /^[A-ZÁÉÍÓÚ]/.test(w))
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase())
    .join('') || nombre[0]?.toUpperCase()
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden="true" className="brand-badge">
      <rect x="1" y="1" width="30" height="30" rx="9" fill={color} />
      <text
        x="16"
        y="21.5"
        textAnchor="middle"
        fontFamily="Georgia, serif"
        fontWeight="600"
        fontSize="13"
        fill="#ffffff"
      >
        {iniciales}
      </text>
    </svg>
  )
}

export function Stars({ rating }: { rating: number }) {
  return (
    <span className="stars" role="img" aria-label={`${rating} de 5 estrellas`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" className={i <= rating ? 'on' : 'off'}>
          <path d="M12 2.8l2.8 5.8 6.3.9-4.6 4.4 1.1 6.3L12 17.2l-5.6 3 1.1-6.3L2.9 9.5l6.3-.9z" />
        </svg>
      ))}
    </span>
  )
}
