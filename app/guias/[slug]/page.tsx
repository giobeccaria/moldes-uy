import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Faq from '@/components/Faq'
import MoldartePicks from '@/components/MoldartePicks'
import StickyCta from '@/components/StickyCta'
import { IconArrow, IconCheck } from '@/components/Icons'
import { guias, findGuia } from '@/lib/guias'
import { findCategoria, moldarteLink, CONTENT_UPDATED, CONTENT_UPDATED_LABEL, SITE_NAME, SITE_URL } from '@/lib/data'

export function generateStaticParams() {
  return guias.map((g) => ({ slug: g.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const g = findGuia(slug)
  if (!g) return {}
  return {
    title: g.metaTitulo,
    description: g.descripcion,
    alternates: { canonical: `/guias/${g.slug}` },
    openGraph: { type: 'article', title: g.metaTitulo, description: g.descripcion },
  }
}

export default async function GuiaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const g = findGuia(slug)
  if (!g) notFound()
  const categoria = findCategoria(g.categoria)
  const campaign = `guia-${g.slug}`
  const url = `${SITE_URL}/guias/${g.slug}`

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: g.titulo,
        description: g.descripcion,
        url,
        inLanguage: 'es-UY',
        dateModified: CONTENT_UPDATED,
        author: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
        publisher: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Inicio', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: 'Guías', item: `${SITE_URL}/guias` },
          { '@type': 'ListItem', position: 3, name: g.titulo, item: url },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: g.faq.map((f) => ({
          '@type': 'Question',
          name: f.pregunta,
          acceptedAnswer: { '@type': 'Answer', text: f.respuesta },
        })),
      },
    ],
  }

  return (
    <>
      <section className="hero hero-page">
        <div className="wrap">
          <nav className="breadcrumb" aria-label="Migas de pan">
            <Link href="/">Inicio</Link>
            <span aria-hidden="true">/</span>
            <Link href="/guias">Guías</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{categoria?.nombre ?? 'Guía'}</span>
          </nav>
          <p className="eyebrow">Guía del oficio · Actualizada {CONTENT_UPDATED_LABEL}</p>
          <h1>{g.titulo}</h1>
          <p className="lead">{g.intro}</p>
        </div>
      </section>

      <div className="wrap guia">
        <aside className="panel guia-materiales">
          <h2>Lo que vas a necesitar</h2>
          <ul className="list">
            {g.materiales.map((m) => (
              <li key={m}>
                <span className="list-check">
                  <IconCheck size={14} />
                </span>
                {m}
              </li>
            ))}
          </ul>
          <a
            className="btn btn-primary"
            href={moldarteLink(`/collections/${g.coleccion}`, campaign, 'materiales')}
            target="_blank"
            rel="noopener"
          >
            Conseguí los materiales en Moldarte <IconArrow />
          </a>
        </aside>

        <article className="block-narrow guia-cuerpo">
          {g.secciones.map((s, i) => (
            <section key={s.titulo}>
              <h2>
                <span className="guia-paso">{i + 1}</span>
                {s.titulo}
              </h2>
              {s.parrafos.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
            </section>
          ))}
        </article>

        <MoldartePicks coleccion={g.coleccion} campaign={campaign} titulo="Moldes para empezar hoy" />

        <section className="block block-narrow">
          <div className="section-head">
            <p className="eyebrow">Preguntas frecuentes</p>
            <h2>Dudas comunes</h2>
          </div>
          <Faq items={g.faq} />
        </section>

        <section className="block">
          <div className="section-head">
            <h2>Seguí leyendo</h2>
          </div>
          <div className="tiles">
            {categoria && (
              <Link href={`/categorias/${categoria.slug}`} className={`tile tile-${categoria.icono}`}>
                <span className="tile-title">Dónde comprar {categoria.nombre.toLowerCase()}</span>
                <span className="tile-text">Comparativa de tiendas en Uruguay</span>
                <span className="tile-arrow">
                  <IconArrow />
                </span>
              </Link>
            )}
            {guias
              .filter((o) => o.slug !== g.slug)
              .slice(0, 3)
              .map((o) => (
                <Link key={o.slug} href={`/guias/${o.slug}`} className="tile">
                  <span className="tile-title">{o.metaTitulo}</span>
                  <span className="tile-text">Guía paso a paso</span>
                  <span className="tile-arrow">
                    <IconArrow />
                  </span>
                </Link>
              ))}
          </div>
        </section>
      </div>

      <StickyCta coleccion={g.coleccion} campaign={campaign} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  )
}
