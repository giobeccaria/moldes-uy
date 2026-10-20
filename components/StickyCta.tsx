'use client'

import { useEffect, useState } from 'react'
import { moldarteLink } from '@/lib/data'
import { IconArrow } from './Icons'

// Barra fija al pie, sólo en mobile (ver .sticky-cta en globals.css).
// Aparece recién cuando el recuadro "Nuestra elección" (#toppick) salió de
// pantalla: mientras se ve, sería un CTA duplicado tapando contenido. Si la
// página no tiene recuadro, aparece después del primer scroll.
export default function StickyCta({
  coleccion = 'catalogo',
  campaign,
  etiqueta = 'Ver moldes',
}: {
  coleccion?: string
  campaign: string
  etiqueta?: string
}) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const ancla = document.getElementById('toppick')
    if (!ancla) {
      const onScroll = () => setVisible(window.scrollY > 400)
      onScroll()
      window.addEventListener('scroll', onScroll, { passive: true })
      return () => window.removeEventListener('scroll', onScroll)
    }
    const io = new IntersectionObserver(([e]) => setVisible(!e.isIntersecting && e.boundingClientRect.top < 0))
    io.observe(ancla)
    return () => io.disconnect()
  }, [])

  return (
    <div className={`sticky-cta ${visible ? 'is-visible' : ''}`} aria-hidden={!visible}>
      <span className="sticky-cta-text">
        <strong>Moldarte</strong> · nuestra elección
      </span>
      <a
        className="btn btn-primary"
        href={moldarteLink(`/collections/${coleccion}`, campaign, 'sticky-mobile')}
        target="_blank"
        rel="noopener"
        tabIndex={visible ? 0 : -1}
      >
        {etiqueta} <IconArrow />
      </a>
    </div>
  )
}
