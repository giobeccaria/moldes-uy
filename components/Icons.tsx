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
