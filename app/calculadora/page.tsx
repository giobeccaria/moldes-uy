import type { Metadata } from 'next'
import Link from 'next/link'
import Calculadora, { type Pack, type PacksPorMaterial } from '@/components/Calculadora'
import Faq from '@/components/Faq'
import { moldarteLink, SITE_URL } from '@/lib/data'
import { getVariante } from '@/lib/shopify'

export const metadata: Metadata = {
  title: 'Calculadora: cuánta cera, yeso o resina necesito',
  description:
    'Calculá cuánta cera de soja, glicerina, yeso, resina o cemento necesitás según la capacidad del molde y la cantidad de piezas, con esencia y agua incluidas.',
  alternates: { canonical: '/calculadora' },
}

// Productos de Moldarte que la calculadora puede sumar al carrito, con su
// contenido en gramos (sale del título del producto).
const PACKS: Record<string, { handle: string; gramos: number }[]> = {
  soja: [
    { handle: 'cera-de-soja-para-velas-1kg', gramos: 1000 },
    { handle: 'cera-de-soja-para-velas-apf-1kg-copia', gramos: 500 },
  ],
  glicerina: [{ handle: 'glicerina-transparente-para-jabones-1kg', gramos: 1000 }],
  yeso: [
    { handle: 'yeso-en-polvo-1kg', gramos: 1000 },
    { handle: 'yeso-paris-artistico-en-polvo-1kg-copia', gramos: 500 },
  ],
}
const ESENCIA = { handle: 'esencia-de-vainilla-para-velas-30-ml', gramos: 28 }

async function cargar(lista: { handle: string; gramos: number }[]) {
  const vs = await Promise.all(lista.map((p) => getVariante(p.handle)))
  return vs
    .map((v, i): Pack | null => (v ? { variantId: v.variantId, titulo: v.titulo, precio: v.precio, gramos: lista[i].gramos } : null))
    .filter((p): p is Pack => p !== null)
}

const faq = [
  {
    pregunta: '¿Cómo sé cuántos ml tiene mi molde?',
    respuesta:
      'Llenalo con agua hasta el borde y pasá el agua a una jarra medidora. Si es un molde de varias cavidades, medí una y multiplicá.',
  },
  {
    pregunta: '¿Por qué la cera da menos gramos que los ml del molde?',
    respuesta:
      'Porque la cera es más liviana que el agua. La regla de referencia es multiplicar el peso del agua por 0,86 para cera de soja.',
  },
  {
    pregunta: '¿Por qué suma un 10 % más?',
    respuesta:
      'Para cubrir lo que queda en la jarra, el segundo vertido para nivelar y alguna pieza que salga mal. Si ya tenés práctica podés comprar justo.',
  },
]

export default async function CalculadoraPage() {
  const [soja, glicerina, yeso, esencia] = await Promise.all([
    cargar(PACKS.soja),
    cargar(PACKS.glicerina),
    cargar(PACKS.yeso),
    cargar([ESENCIA]),
  ])
  const packs: PacksPorMaterial = {
    soja: { principal: soja, esencia: esencia[0] },
    glicerina: { principal: glicerina },
    yeso: { principal: yeso },
  }
  const carritoBase = moldarteLink('/cart/__ITEMS__', 'calculadora', 'carrito').replace('%5F%5FITEMS%5F%5F', '__ITEMS__')

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Calculadora de materiales para moldes de silicona',
    url: `${SITE_URL}/calculadora`,
    applicationCategory: 'UtilitiesApplication',
    inLanguage: 'es-UY',
    offers: { '@type': 'Offer', price: 0, priceCurrency: 'UYU' },
  }

  return (
    <>
      <section className="hero hero-page">
        <div className="wrap">
          <nav className="breadcrumb" aria-label="Migas de pan">
            <Link href="/">Inicio</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Calculadora</span>
          </nav>
          <p className="eyebrow">Herramienta</p>
          <h1>¿Cuánta cera, yeso o resina necesito?</h1>
          <p className="lead">
            Poné la capacidad del molde y cuántas piezas querés sacar: te decimos cuánto material comprar, con la
            esencia y el agua ya calculadas.
          </p>
        </div>
      </section>
      <div className="wrap">
        <section className="block">
          <Calculadora packs={packs} carritoBase={carritoBase} />
        </section>
        <section className="block block-narrow">
          <div className="section-head">
            <p className="eyebrow">Preguntas frecuentes</p>
            <h2>Sobre el cálculo</h2>
          </div>
          <Faq items={faq} />
          <p className="block-more">
            <Link href="/guias/temperatura-cera-de-soja" className="link-arrow">Temperatura de la cera de soja</Link>
            <Link href="/guias/como-hacer-piezas-de-yeso" className="link-arrow">Proporción de agua y yeso</Link>
            <a className="link-arrow" href={moldarteLink('/collections/insumos', 'calculadora', 'insumos')} target="_blank" rel="noopener">
              Insumos en Moldarte
            </a>
          </p>
        </section>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  )
}
