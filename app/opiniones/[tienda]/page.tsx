import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Faq from '@/components/Faq'
import TopPick from '@/components/TopPick'
import MoldartePicks from '@/components/MoldartePicks'
import StickyCta from '@/components/StickyCta'
import { Atributos, DesgloseTabla, ProsContras } from '@/components/FichaTienda'
import { BrandBadge, IconArrow } from '@/components/Icons'
import {
  findTiendaPorSlug,
  formatPuntaje,
  moldarte,
  moldarteLink,
  puntaje,
  slugTienda,
  tiendasConPagina,
  CONTENT_UPDATED_LABEL,
  SITE_URL,
  type Tienda,
} from '@/lib/data'

export function generateStaticParams() {
  return tiendasConPagina.map((t) => ({ tienda: slugTienda(t) }))
}

export async function generateMetadata({ params }: { params: Promise<{ tienda: string }> }): Promise<Metadata> {
  const { tienda } = await params
  const t = findTiendaPorSlug(tienda)
  if (!t) return {}
  return {
    title: `${t.nombre} opiniones: catálogo, envío y medios de pago`,
    description: `¿Conviene comprar en ${t.nombre}? Análisis de su catálogo, envío, medios de pago y puntaje (${formatPuntaje(puntaje(t))}/10), comparado con otras tiendas de Uruguay.`,
    alternates: { canonical: `/opiniones/${slugTienda(t)}` },
  }
}

// Preguntas armadas sólo con datos verificados de la tienda.
function faqDe(t: Tienda) {
  const f = t.features
  const si = (v: boolean | null | string) => (v === true ? 'Sí.' : v === false ? 'No.' : v === null ? 'No lo publica en su sitio.' : `Sí: ${v}.`)
  return [
    { pregunta: `¿${t.nombre} vende moldes de silicona?`, respuesta: `${si(f.moldes)} ${t.atributos?.catalogo ?? ''}`.trim() },
    { pregunta: `¿${t.nombre} hace envíos a todo Uruguay?`, respuesta: `${si(f.envioPais)} ${t.envio}` },
    { pregunta: `¿Qué medios de pago acepta ${t.nombre}?`, respuesta: t.atributos?.pago ?? 'No lo publica en su sitio.' },
    { pregunta: `¿Se puede retirar en persona en ${t.nombre}?`, respuesta: si(f.retiro) },
  ]
}

export default async function OpinionesPage({ params }: { params: Promise<{ tienda: string }> }) {
  const { tienda } = await params
  const t = findTiendaPorSlug(tienda)
  if (!t) notFound()
  const esMoldarte = t.destacado
  const campaign = `opiniones-${slugTienda(t)}`
  const url = `${SITE_URL}/opiniones/${slugTienda(t)}`
  const faq = faqDe(t)
  const otras = tiendasConPagina.filter((o) => o.nombre !== t.nombre && !o.destacado)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        name: `${t.nombre} opiniones`,
        url,
        inLanguage: 'es-UY',
        about: { '@type': 'Store', name: t.nombre, url: t.url },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Inicio', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: `${t.nombre} opiniones`, item: url },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: faq.map((q) => ({ '@type': 'Question', name: q.pregunta, acceptedAnswer: { '@type': 'Answer', text: q.respuesta } })),
      },
    ],
  }

  return (
    <>
      <section className="hero hero-page">
        <div className="wrap hero-cat">
          <div>
            <nav className="breadcrumb" aria-label="Migas de pan">
              <Link href="/">Inicio</Link>
              <span aria-hidden="true">/</span>
              <Link href="/#ranking">Ranking</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">{t.nombre}</span>
            </nav>
            <p className="eyebrow">Análisis de tienda · Actualizado {CONTENT_UPDATED_LABEL}</p>
            <h1>{t.nombre}: opiniones y análisis</h1>
            <div className="opinion-score">
              <BrandBadge nombre={t.nombre} color={t.color} destacado={t.destacado} logo={t.logo} size={48} />
              <span className={`score-badge score-badge-lg ${esMoldarte ? 'score-badge-top' : ''}`}>
                <strong>{formatPuntaje(puntaje(t))}</strong>
                <span>/10</span>
              </span>
            </div>
            <p className="lead">{t.resumen}</p>
          </div>
          {esMoldarte ? (
            <TopPick campaign={campaign} />
          ) : (
            <TopPick campaign={campaign} que="moldes e insumos" />
          )}
        </div>
      </section>

      <div className="wrap">
        <section className="block">
          <div className="section-head">
            <h2>Lo bueno y lo que conviene saber</h2>
          </div>
          <ProsContras tienda={t} />
        </section>

        <section className="block block-narrow">
          <div className="section-head">
            <h2>Catálogo, precios, envío y pago</h2>
          </div>
          <Atributos tienda={t} />
          {!esMoldarte && t.url && (
            <p className="note">
              <a href={t.url} target="_blank" rel="nofollow noopener" className="link-arrow">
                Sitio de {t.nombre} <IconArrow size={14} />
              </a>
            </p>
          )}
        </section>

        <section className="block">
          <div className="section-head">
            <h2>{esMoldarte ? 'Puntaje por criterio' : `${t.nombre} comparada con Moldarte`}</h2>
          </div>
          <DesgloseTabla tiendas={esMoldarte ? [t] : [moldarte, t]} />
          {!esMoldarte && (
            <p className="block-more">
              <Link href={`/comparar/moldarte-vs-${slugTienda(t)}`} className="link-arrow">
                Ver la comparación completa: Moldarte vs {t.nombre} <IconArrow size={14} />
              </Link>
            </p>
          )}
        </section>

        {esMoldarte && <MoldartePicks coleccion="destacados" campaign={campaign} titulo="Lo más elegido en Moldarte" />}

        {!esMoldarte && (
          <section className="block veredicto">
            <h2>¿Buscás otra opción?</h2>
            <p>
              Moldarte tiene el puntaje más alto del ranking ({formatPuntaje(puntaje(moldarte))}/10): más de 350
              moldes de silicona, cera, esencias y glicerina en el mismo pedido, envío gratis desde $2.000 y
              despacho en el día si comprás antes de las 12.
            </p>
            <a
              className="btn btn-primary"
              href={moldarteLink('/collections/catalogo', campaign, 'alternativa')}
              target="_blank"
              rel="noopener"
            >
              Ver el catálogo de Moldarte <IconArrow />
            </a>
          </section>
        )}

        <section className="block block-narrow">
          <div className="section-head">
            <p className="eyebrow">Preguntas frecuentes</p>
            <h2>Sobre {t.nombre}</h2>
          </div>
          <Faq items={faq} />
        </section>

        <section className="block">
          <div className="section-head">
            <h2>Otras tiendas analizadas</h2>
          </div>
          <div className="chips">
            {!esMoldarte && (
              <Link href="/opiniones/moldarte" className="chip chip-temporada">
                Moldarte
              </Link>
            )}
            {otras.map((o) => (
              <Link key={o.nombre} href={`/opiniones/${slugTienda(o)}`} className="chip">
                {o.nombre}
              </Link>
            ))}
          </div>
        </section>
      </div>

      <StickyCta campaign={campaign} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  )
}
