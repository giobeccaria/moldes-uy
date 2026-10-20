// Kits armados con productos reales de moldarte.uy. El botón usa el link de
// carrito de Shopify (/cart/<variante>:<cantidad>,...), que lleva directo al
// checkout con todo cargado. Si un producto se agota, el kit se arma igual
// con el resto (ver components/Kit.tsx).
export type Kit = {
  slug: string
  nombre: string
  descripcion: string
  // Dónde se muestra: slugs de categoría y de guía.
  en: string[]
  items: { handle: string; cantidad: number; nota?: string }[]
}

export const ENVIO_GRATIS_DESDE = 2000

export const kits: Kit[] = [
  {
    slug: 'velas-de-soja-en-molde',
    nombre: 'Kit para velas de soja en molde',
    descripcion: 'Lo justo para tu primera tanda de velas de molde: cera de alto punto, pabilos, esencia y un molde fácil de desmoldar.',
    en: ['moldes-para-velas', 'insumos-para-velas', 'como-hacer-velas-de-soja', 'temperatura-cera-de-soja', 'que-pabilo-usar-segun-diametro', 'cera-de-soja-parafina-o-cera-de-abeja', 'cuanta-esencia-por-kilo-de-cera', 'como-hacer-velas-para-vender'],
    items: [
      { handle: 'cubo-burbuja-3x3', cantidad: 1, nota: 'molde' },
      { handle: 'cera-de-soja-para-velas-1kg', cantidad: 1 },
      { handle: 'pabilo-para-velas-15cm-10-unidades', cantidad: 1 },
      { handle: 'esencia-de-vainilla-para-velas-30-ml', cantidad: 1 },
      { handle: 'porta-pabilos-de-metal-para-velas-1-unidad', cantidad: 1 },
    ],
  },
  {
    slug: 'velas-en-frasco',
    nombre: 'Kit para velas en frasco',
    descripcion: 'Cera de soja de bajo punto (la que se pega al vidrio), cuatro frascos con tapa de corcho, pabilos, adhesivos para centrarlos y esencia.',
    en: ['insumos-para-velas', 'temperatura-cera-de-soja', 'que-pabilo-usar-segun-diametro', 'cuanta-esencia-por-kilo-de-cera', 'como-hacer-velas-para-vender'],
    items: [
      { handle: 'cera-de-soja-para-velas-apf-1kg-copia-1', cantidad: 1 },
      { handle: 'frasco-vaso-de-vidrio-con-tapa-corcho-para-velas-90g-de-cera', cantidad: 4 },
      { handle: 'pabilos-para-velas-6cm-10-unidades-copia', cantidad: 1 },
      { handle: 'cinta-stickers-adhesivos-para-fijar-pabilos-insumo', cantidad: 1 },
      { handle: 'esencia-de-lavanda-para-velas-30-ml', cantidad: 1 },
    ],
  },
  {
    slug: 'jabones-de-glicerina',
    nombre: 'Kit para jabones de glicerina',
    descripcion: 'Base transparente y blanca para combinar capas, un molde de varias cavidades y una pipeta para dosificar de a gotas.',
    en: ['moldes-para-jabones', 'insumos-para-jabones', 'como-hacer-jabon-de-glicerina'],
    items: [
      { handle: 'glicerina-transparente-para-jabones-1kg', cantidad: 1 },
      { handle: 'glicerina-transparente-para-jabones-1kg-copia', cantidad: 1, nota: 'glicerina blanca' },
      { handle: 'abejas-x8-molde-de-silicona', cantidad: 1, nota: 'molde' },
      { handle: 'pipeta-calibrada-acrilico', cantidad: 1 },
    ],
  },
  {
    slug: 'piezas-de-yeso',
    nombre: 'Kit para piezas de yeso',
    descripcion: 'Dos kilos de yeso París, antiespumante para que la pieza salga sin poros y dos moldes para arrancar.',
    en: ['moldes-de-yeso', 'como-hacer-piezas-de-yeso', 'efecto-marmol-en-yeso'],
    items: [
      { handle: 'yeso-en-polvo-1kg', cantidad: 2 },
      { handle: 'antiespumante-para-yeso-insumo', cantidad: 1 },
      { handle: 'panal-de-abejas-molde-de-silicona', cantidad: 1, nota: 'molde' },
      { handle: 'ovillo', cantidad: 1, nota: 'molde' },
    ],
  },
]

export function kitsPara(slug: string) {
  return kits.filter((k) => k.en.includes(slug))
}
