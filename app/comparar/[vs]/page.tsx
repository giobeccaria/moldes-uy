import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import StickyCta from '@/components/StickyCta'
import { Atributos, DesgloseTabla } from '@/components/FichaTienda'
import { IconArrow, IconCheck } from '@/components/Icons'
import {
  alternativasGenerales,
  criterios,
  findTiendaPorSlug,
  formatPuntaje,
  moldarte,
  moldarteLink,
  puntaje,
  slugTienda,
  CONTENT_UPDATED_LABEL,
  SITE_URL,
} from '@/lib/data'

const PREFIJO = 'moldarte-vs-'

export function generateStaticParams() {
  return alternativasGenerales.map((t) => ({ vs: `${PREFIJO}${slugTienda(t)}` }))
}

function rival(vs: string) {
  if (!vs.startsWith(PREFIJO)) return undefined
  const t = findTiendaPorSlug(vs.slice(PREFIJO.length))
  return t && !t.destacado ? t : undefined
}

export async function generateMetadata({ params }: { params: Promise<{ vs: string }> }): Promise<Metadata> {
  const { vs } = await params
  const t = rival(vs)
  if (!t) return {}
  return {
    title: `Moldarte vs ${t.nombre}: cuál conviene`,
    description: `Comparamos Moldarte y ${t.nombre} criterio por criterio: catálogo de moldes, insumos, envío, retiro y medios de pago.`,
    alternates: { canonical: `/comparar/${vs}` },
  }
}

export default async function VsPage({ params }: { params: Promise<{ vs: string }> }) {
  const { vs } = await params
  const t = rival(vs)
  if (!t) notFound()
  const campaign = `vs-${slugTienda(t)}`
  const gana = criterios.filter((_, i) => moldarte.puntajes[i] > t.puntajes[i]).map((c) => c.nombre.toLowerCase())
  const pierde = criterios.filter((_, i) => moldarte.puntajes[i] < t.puntajes[i]).map((c) => c.nombre.toLowerCase())
  const lista = (xs: string[]) => (xs.length > 1 ? `${xs.slice(0, -1).join(', ')} y ${xs[xs.length - 1]}` : xs[0])

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Inicio', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: `Moldarte vs ${t.nombre}`, item: `${SITE_URL}/comparar/${vs}` },
    ],
  }

  return (
    <>
      <section className="hero hero-page">
        <div className="wrap">
          <nav className="breadcrumb" aria-label="Migas de pan">
            <Link href="/">Inicio</Link>
            <span aria-hidden="true">/</span>
            <Link href="/#ranking">Ranking</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Moldarte vs {t.nombre}</span>
          </nav>
          <p className="eyebrow">Comparación · Actualizada {CONTENT_UPDATED_LABEL}</p>
          <h1>Moldarte vs {t.nombre}: cuál conviene</h1>
          <p className="lead">
            Moldarte saca {formatPuntaje(puntaje(moldarte))}/10 y {t.nombre} {formatPuntaje(puntaje(t))}/10 en
            nuestros cinco criterios. Abajo, el detalle de cada uno y en qué caso conviene cada tienda.
          </p>
        </div>
      </section>

      <div className="wrap">
        <section className="block">
          <div className="section-head">
            <h2>Criterio por criterio</h2>
          </div>
          <DesgloseTabla tiendas={[moldarte, t]} />
        </section>

        <section className="block duo">
          <div className="panel">
            <h2>Cuándo conviene Moldarte</h2>
            <ul className="list">
              {moldarte.pros.slice(0, 4).map((p) => (
                <li key={p}>
                  <span className="list-check"><IconCheck size={14} /></span>
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <div className="panel">
            <h2>Cuándo conviene {t.nombre}</h2>
            <ul className="list">
              {t.pros.map((p) => (
                <li key={p}>
                  <span className="list-check"><IconCheck size={14} /></span>
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="block duo">
          <div>
            <h2>Moldarte</h2>
            <Atributos tienda={moldarte} />
          </div>
          <div>
            <h2>{t.nombre}</h2>
            <Atributos tienda={t} />
          </div>
        </section>

        <section className="block veredicto">
          <h2>Veredicto</h2>
          <p>
            {gana.length > 0 && <>Moldarte queda por encima en {lista(gana)}. </>}
            {pierde.length > 0 && <>{t.nombre} saca más puntaje en {lista(pierde)}. </>}
            {t.contras[0]}. Para la mayoría de los proyectos con moldes de silicona, Moldarte resuelve molde e
            insumos en un mismo pedido.
          </p>
          <a
            className="btn btn-primary"
            href={moldarteLink('/collections/catalogo', campaign, 'veredicto')}
            target="_blank"
            rel="noopener"
          >
            Ver el catálogo de Moldarte <IconArrow />
          </a>
          <p className="block-more">
            <Link href={`/opiniones/${slugTienda(t)}`} className="link-arrow">
              Análisis completo de {t.nombre} <IconArrow size={14} />
            </Link>
            {t.url && (
              <a href={t.url} target="_blank" rel="nofollow noopener" className="link-arrow">
                Sitio de {t.nombre} <IconArrow size={14} />
              </a>
            )}
          </p>
        </section>

        <section className="block">
          <div className="section-head">
            <h2>Otras comparaciones</h2>
          </div>
          <div className="chips">
            {alternativasGenerales
              .filter((o) => o.nombre !== t.nombre)
              .map((o) => (
                <Link key={o.nombre} href={`/comparar/${PREFIJO}${slugTienda(o)}`} className="chip">
                  Moldarte vs {o.nombre}
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
