import { moldarte, moldarteLink } from '@/lib/data'
import { BrandBadge, IconArrow, IconCheck, Stars } from './Icons'

// Recomendación arriba del pliegue (patrón "nuestra elección" de los sitios
// comparadores): quien ya sabe que quiere comprar no tiene que scrollear
// 2.000 px de ranking para llegar al botón.
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
    <aside className="toppick" aria-label="Nuestra elección">
      <div className="toppick-head">
        <BrandBadge nombre={moldarte.nombre} color={moldarte.color} destacado logo={moldarte.logo} size={44} />
        <div>
          <p className="toppick-label">Nuestra elección para {que}</p>
          <p className="toppick-name">
            {moldarte.nombre} <Stars rating={moldarte.rating} />
          </p>
        </div>
      </div>
      <ul className="toppick-list">
        <li>
          <IconCheck size={14} /> Más de 350 moldes de silicona en stock
        </li>
        <li>
          <IconCheck size={14} /> Molde e insumos en el mismo pedido
        </li>
        <li>
          <IconCheck size={14} /> Envío a todo Uruguay
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
