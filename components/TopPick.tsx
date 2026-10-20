import { moldarte, moldarteLink, puntaje, formatPuntaje } from '@/lib/data'
import { BrandBadge, IconArrow, IconCheck } from './Icons'

// Recomendación arriba del pliegue (patrón "nuestra elección" de los sitios
// comparadores): quien ya sabe que quiere comprar no tiene que scrollear el
// ranking para llegar al botón. StickyCta lo usa (id) para saber cuándo
// aparecer.
export default function TopPick({
  coleccion = 'catalogo',
  campaign,
  que = 'moldes de silicona',
}: {
  coleccion?: string
  campaign: string
  que?: string
}) {
  return (
    <aside className="toppick" id="toppick" aria-label="Nuestra elección">
      <div className="toppick-head">
        <BrandBadge nombre={moldarte.nombre} color={moldarte.color} destacado logo={moldarte.logo} size={44} />
        <div>
          <p className="toppick-label">Nuestra elección para {que}</p>
          <p className="toppick-name">{moldarte.nombre}</p>
        </div>
        <span className="score-badge score-badge-top toppick-score">
          <strong>{formatPuntaje(puntaje(moldarte))}</strong>
          <span>/10</span>
        </span>
      </div>
      <ul className="toppick-list">
        <li>
          <IconCheck size={14} /> Más de 350 moldes, con cera, esencias y glicerina
        </li>
        <li>
          <IconCheck size={14} /> Envío gratis desde $2.000
        </li>
        <li>
          <IconCheck size={14} /> Despacho en el día si comprás antes de las 12
        </li>
      </ul>
      <a
        className="btn btn-primary toppick-cta"
        href={moldarteLink(`/collections/${coleccion}`, campaign, 'top-pick')}
        target="_blank"
        rel="noopener"
      >
        Ver {que} en Moldarte <IconArrow />
      </a>
    </aside>
  )
}
