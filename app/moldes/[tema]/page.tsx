import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Faq from '@/components/Faq'
import TopPick from '@/components/TopPick'
import MoldartePicks from '@/components/MoldartePicks'
import StickyCta from '@/components/StickyCta'
import { IconArrow, IconCategoria } from '@/components/Icons'
import { temas, findTema } from '@/lib/temas'
import { findGuia } from '@/lib/guias'
import { findCategoria, CONTENT_UPDATED_LABEL, SITE_URL } from '@/lib/data'

export function generateStaticParams() {
  return temas.map((t) => ({ tema: t.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ tema: string }> }): Promise<Metadata> {
  const { tema } = await params
  const t = findTema(tema)
  if (!t) return {}
  return {
    title: t.metaTitulo,
    description: t.descripcion,
    alternates: { canonical: `/moldes/${t.slug}` },
  }
}

// Páginas por diseño: búsquedas largas con intención de compra ("moldes de
// silicona de flores"). El contenido principal son los productos reales de
// la colección de Moldarte, más ideas de uso escritas sobre ese catálogo.
export default async function TemaPage({ params }: { params: Promise<{ tema: string }> }) {
  const { tema } = await params
  const t = findTema(tema)
  if (!t) notFound()
  const campaign = `tema-${t.slug}`
  const url = `${SITE_URL}/moldes/${t.slug}`
  const que = t.nombre.toLowerCase()

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'CollectionPage', name: t.titulo, description: t.descripcion, url, inLanguage: 'es-UY' },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Inicio', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: t.nombre, item: url },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: t.faq.map((f) => ({
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
        <div className="wrap hero-cat">
          <div>
            <nav className="breadcrumb" aria-label="Migas de pan">
              <Link href="/">Inicio</Link>
              <span aria-hidden="true">/</span>
              <Link href="/#disenos">Por diseño</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">{t.nombre}</span>
            </nav>
            <p className="eyebrow">
              {t.temporada ? `Temporada · ${t.temporada}` : `Por diseño · Actualizado ${CONTENT_UPDATED_LABEL}`}
            </p>
            <h1>{t.titulo}</h1>
            <p className="lead">{t.intro}</p>
          </div>
          <TopPick coleccion={t.coleccion} campaign={campaign} que={que} />
        </div>
      </section>

      <div className="wrap">
        <MoldartePicks coleccion={t.coleccion} campaign={campaign} titulo={`${t.nombre} en stock`} cantidad={12} />

        <section className="block block-narrow">
          <div className="section-head">
            <p className="eyebrow">Ideas</p>
            <h2>Qué hacer con {que}</h2>
          </div>
          <div className="oficio-list">
            {t.ideas.map((i) => (
              <article className="oficio-item" key={i.titulo}>
                <h3>{i.titulo}</h3>
                <p>{i.texto}</p>
              </article>
            ))}
          </div>
        </section>

        {(t.guias.length > 0 || t.materiales.length > 0) && (
          <section className="block">
            <div className="section-head">
              <h2>Según el material</h2>
            </div>
            <div className="tiles">
              {t.materiales.map((slug) => {
                const c = findCategoria(slug)
                if (!c) return null
                return (
                  <Link key={slug} href={`/categorias/${c.slug}`} className={`tile tile-${c.icono}`}>
                    <span className="tile-icon">
                      <IconCategoria icono={c.icono} size={30} />
                    </span>
                    <span className="tile-title">{c.nombre}</span>
                    <span className="tile-text">Dónde comprarlos y qué mirar</span>
                    <span className="tile-arrow">
                      <IconArrow />
                    </span>
                  </Link>
                )
              })}
              {t.guias.map((slug) => {
                const g = findGuia(slug)
                if (!g) return null
                return (
                  <Link key={slug} href={`/guias/${g.slug}`} className="tile">
                    <span className="tile-title">{g.metaTitulo}</span>
                    <span className="tile-text">Guía paso a paso</span>
                    <span className="tile-arrow">
                      <IconArrow />
                    </span>
                  </Link>
                )
              })}
            </div>
          </section>
        )}

        <section className="block block-narrow">
          <div className="section-head">
            <p className="eyebrow">Preguntas frecuentes</p>
            <h2>Dudas comunes</h2>
          </div>
          <Faq items={t.faq} />
        </section>

        <section className="block">
          <div className="section-head">
            <h2>Otros diseños</h2>
          </div>
          <div className="chips">
            {temas
              .filter((o) => o.slug !== t.slug)
              .map((o) => (
                <Link key={o.slug} href={`/moldes/${o.slug}`} className="chip">
                  {o.nombre}
                </Link>
              ))}
          </div>
        </section>
      </div>

      <StickyCta coleccion={t.coleccion} campaign={campaign} etiqueta="Ver diseños" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  )
}
