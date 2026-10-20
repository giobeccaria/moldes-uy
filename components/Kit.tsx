import { moldarteLink } from '@/lib/data'
import { ENVIO_GRATIS_DESDE, type Kit as KitType } from '@/lib/kits'
import { formatPrecio, getVariante } from '@/lib/shopify'
import { IconArrow, IconCheck } from './Icons'

// Un kit = una lista de productos reales con precio y un botón que arma el
// carrito de Moldarte de un clic. Los productos agotados se omiten; si queda
// menos de la mitad del kit, no se muestra.
export default async function Kit({ kit, campaign }: { kit: KitType; campaign: string }) {
  const variantes = await Promise.all(kit.items.map((i) => getVariante(i.handle)))
  const items = kit.items
    .map((i, idx) => ({ ...i, v: variantes[idx] }))
    .filter((i): i is typeof i & { v: NonNullable<typeof i.v> } => i.v !== null)
  if (items.length < Math.ceil(kit.items.length / 2)) return null

  const total = items.reduce((acc, i) => acc + i.v.precio * i.cantidad, 0)
  const falta = ENVIO_GRATIS_DESDE - total
  const carrito = moldarteLink(
    `/cart/${items.map((i) => `${i.v.variantId}:${i.cantidad}`).join(',')}`,
    campaign,
    `kit-${kit.slug}`,
  )

  return (
    <article className="kit">
      <div className="kit-head">
        <p className="eyebrow">Kit armado en Moldarte</p>
        <h3>{kit.nombre}</h3>
        <p>{kit.descripcion}</p>
      </div>
      <ul className="kit-items">
        {items.map((i) => (
          <li key={i.handle}>
            {i.v.imagen && (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={i.v.imagen} alt="" width={48} height={48} loading="lazy" />
            )}
            <span className="kit-item-name">
              {i.cantidad > 1 && <strong>{i.cantidad} × </strong>}
              {i.v.titulo}
            </span>
            <span className="kit-item-price">{formatPrecio(i.v.precio * i.cantidad)}</span>
          </li>
        ))}
      </ul>
      <div className="kit-foot">
        <p className="kit-total">
          Total <strong>{formatPrecio(total)}</strong>
        </p>
        <p className="kit-envio">
          <IconCheck size={14} />
          {falta <= 0
            ? 'Con este kit ya tenés envío gratis'
            : `Sumá ${formatPrecio(falta)} más y el envío es gratis`}
        </p>
        <a className="btn btn-primary kit-cta" href={carrito} target="_blank" rel="noopener">
          Comprar el kit en Moldarte <IconArrow />
        </a>
      </div>
    </article>
  )
}

export function Kits({ kits, campaign }: { kits: KitType[]; campaign: string }) {
  if (kits.length === 0) return null
  return (
    <section className="block">
      <div className="section-head">
        <p className="eyebrow">Para arrancar hoy</p>
        <h2>{kits.length > 1 ? 'Kits listos para comprar' : 'Un kit listo para comprar'}</h2>
        <p>Todo lo que hace falta, ya elegido. Un clic y el pedido queda armado en Moldarte.</p>
      </div>
      <div className="kits">
        {kits.map((k) => (
          <Kit key={k.slug} kit={k} campaign={campaign} />
        ))}
      </div>
    </section>
  )
}
