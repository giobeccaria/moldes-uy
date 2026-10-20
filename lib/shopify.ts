// Lectura de la tienda pública de moldarte.uy (endpoints JSON de Shopify que
// no requieren token). Todo se revalida una vez por día y ante cualquier
// error devuelve vacío: una caída de la tienda nunca rompe moldes.uy.
const TIENDA = 'https://moldarte.uy'
const REVALIDATE = 86400

export type Producto = {
  handle: string
  titulo: string
  precio: number
  imagen: string
  nuevo: boolean
  ultimas: boolean
}

type ShopifyProduct = {
  handle: string
  title: string
  images: { src: string }[]
  variants: { id: number; price: string; available: boolean }[]
}

async function getJson<T>(path: string): Promise<T | null> {
  try {
    const res = await fetch(`${TIENDA}${path}`, { next: { revalidate: REVALIDATE } })
    if (!res.ok) return null
    return (await res.json()) as T
  } catch {
    return null
  }
}

async function getRaw(coleccion: string, limit = 250): Promise<ShopifyProduct[]> {
  const data = await getJson<{ products: ShopifyProduct[] }>(`/collections/${coleccion}/products.json?limit=${limit}`)
  return data?.products ?? []
}

// Handles de las colecciones "New In" y "Últimas unidades": señales de
// urgencia reales (las mantiene la tienda), no inventadas.
async function getHandles(coleccion: string) {
  return new Set((await getRaw(coleccion)).map((p) => p.handle))
}

export function imagenChica(src: string, width = 360) {
  return `${src}${src.includes('?') ? '&' : '?'}width=${width}`
}

export function limpiarTitulo(t: string) {
  return t.replace(/\s*\(molde de silicona\)\s*/i, '').trim()
}

export function formatPrecio(n: number) {
  return `$ ${Math.round(n).toLocaleString('es-UY')}`
}

export async function getProductos(coleccion: string, cantidad: number): Promise<Producto[]> {
  const [productos, nuevos, ultimas] = await Promise.all([
    getRaw(coleccion, 60),
    getHandles('new-in'),
    getHandles('ultimas-unidades'),
  ])
  return productos
    .filter((p) => p.images[0] && p.variants.some((v) => v.available))
    .slice(0, cantidad)
    .map((p) => ({
      handle: p.handle,
      titulo: limpiarTitulo(p.title),
      precio: Number(p.variants.find((v) => v.available)!.price),
      imagen: imagenChica(p.images[0].src),
      nuevo: nuevos.has(p.handle),
      ultimas: ultimas.has(p.handle),
    }))
}

export type Variante = { handle: string; titulo: string; precio: number; imagen?: string; variantId: number }

// Primera variante disponible de un producto, para armar el link de carrito.
// Devuelve null si el producto no existe o está agotado.
export async function getVariante(handle: string): Promise<Variante | null> {
  const p = await getJson<{
    title: string
    handle: string
    featured_image?: string
    variants: { id: number; price: number; available: boolean }[]
  }>(`/products/${handle}.js`)
  const v = p?.variants.find((x) => x.available)
  if (!p || !v) return null
  return {
    handle: p.handle,
    titulo: limpiarTitulo(p.title),
    // En el .js de Shopify el precio viene en centavos.
    precio: v.price / 100,
    imagen: p.featured_image ? imagenChica(p.featured_image.startsWith('//') ? `https:${p.featured_image}` : p.featured_image, 200) : undefined,
    variantId: v.id,
  }
}
