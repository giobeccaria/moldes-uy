import { moldarteLink } from '@/lib/data'
import { formatPrecio, getProductos } from '@/lib/shopify'
import { IconArrow } from './Icons'

// Productos reales de la colección de moldarte.uy. Si la tienda no responde
// la sección no se muestra: nunca rompe la página.
export default async function MoldartePicks({
  coleccion,
  campaign,
  titulo,
  cantidad = 8,
}: {
  coleccion: string
  campaign: string
  titulo: string
  cantidad?: number
}) {
  const productos = await getProductos(coleccion, cantidad)
  if (productos.length === 0) return null
  return (
    <section className="block picks">
      <div className="section-head">
        <p className="eyebrow">En stock en Moldarte</p>
        <h2>{titulo}</h2>
      </div>
      <ul className="picks-grid">
        {productos.map((p) => (
          <li key={p.handle}>
            <a
              className="pick"
              href={moldarteLink(`/products/${p.handle}`, campaign, 'producto')}
              target="_blank"
              rel="noopener"
            >
              <span className="pick-img">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.imagen} alt={p.titulo} loading="lazy" width={360} height={360} />
                {p.ultimas ? (
                  <span className="pick-badge pick-badge-ultimas">Últimas unidades</span>
                ) : p.nuevo ? (
                  <span className="pick-badge">Nuevo</span>
                ) : null}
              </span>
              <span className="pick-title">{p.titulo}</span>
              <span className="pick-price">{formatPrecio(p.precio)}</span>
            </a>
          </li>
        ))}
      </ul>
      <a
        className="btn btn-primary picks-more"
        href={moldarteLink(`/collections/${coleccion}`, campaign, 'picks-ver-todos')}
        target="_blank"
        rel="noopener"
      >
        Ver toda la colección en Moldarte <IconArrow />
      </a>
    </section>
  )
}
