import { moldarteLink } from '@/lib/data'
import { IconArrow } from './Icons'

// Barra fija al pie, sólo en mobile (ver .sticky-cta en globals.css): las
// páginas miden 14.000-20.000 px en un teléfono y el CTA no puede quedar
// enterrado en el medio.
export default function StickyCta({ coleccion = 'catalogo', campaign }: { coleccion?: string; campaign: string }) {
  return (
    <div className="sticky-cta">
      <span className="sticky-cta-text">
        <strong>Moldarte</strong> · nuestra elección
      </span>
      <a
        className="btn btn-primary"
        href={moldarteLink(`/collections/${coleccion}`, campaign, 'sticky-mobile')}
        target="_blank"
        rel="noopener"
      >
        Ver moldes <IconArrow />
      </a>
    </div>
  )
}
