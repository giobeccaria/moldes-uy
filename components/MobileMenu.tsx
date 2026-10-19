'use client'

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import { IconMenu } from './Icons'

// Menú desplegable para pantallas chicas. Es un <details>, así que anda sin
// JS; el efecto sólo lo cierra al navegar a otra página.
export default function MobileMenu({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDetailsElement>(null)
  const pathname = usePathname()
  useEffect(() => {
    if (ref.current) ref.current.open = false
  }, [pathname])

  return (
    <details className="menu" ref={ref}>
      <summary aria-label="Abrir menú">
        <IconMenu />
      </summary>
      <div className="menu-panel" onClick={() => ref.current && (ref.current.open = false)}>
        {children}
      </div>
    </details>
  )
}
