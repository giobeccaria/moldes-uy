import { moldarteLink } from '@/lib/data'
import { IconArrow } from './Icons'

type Producto = { handle: string; titulo: string; precio: string; imagen: string }

type ShopifyProduct = {
  handle: string
  title: string
  images: { src: string }[]
  variants: { price: string; available: boolean }[]
}

// Productos reales de la colección de moldarte.uy (endpoint público de
// Shopify), revalidados una vez por día. Si la tienda no responde la sección
// no se muestra: nunca rompe la página.
async function getProductos(coleccion: string, cantidad: number): Promise<Producto[]> {
  try {
    const res = await fetch(`https://moldarte.uy/collections/${coleccion}/products.json?limit=30`, {
      next: { revalidate: 86400 },
    })
    if (!res.ok) return []
    const { products } = (await res.json()) as { products: ShopifyProduct[] }
    return products
      .filter((p) => p.images[0] && p.variants.some((v) => v.available))
      .slice(0, cantidad)
      .map((p) => ({
        handle: p.handle,
        titulo: p.title.replace(/\s*\(molde de silicona\)\s*/i, '').trim(),
        precio: `$ ${Math.round(Number(p.variants.find((v) => v.available)!.price)).toLocaleString('es-UY')}`,
        imagen: `${p.images[0].src}${p.images[0].src.includes('?') ? '&' : '?'}width=360`,
      }))
  } catch {
    return []
  }
}

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
                <img src={p.imagen} alt={p.titulo} loading="lazy" width={360} height={360} />
              </span>
              <span className="pick-title">{p.titulo}</span>
              <span className="pick-price">{p.precio}</span>
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
