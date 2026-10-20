import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Ranking from '@/components/Ranking'
import TopPick from '@/components/TopPick'
import MoldartePicks from '@/components/MoldartePicks'
import StickyCta from '@/components/StickyCta'
import { Kits } from '@/components/Kit'
import { kitsPara } from '@/lib/kits'
import { guias } from '@/lib/guias'
import { IconArrow, IconCategoria, IconCheck } from '@/components/Icons'
import { categorias, findCategoria, SITE_URL, CONTENT_UPDATED_LABEL } from '@/lib/data'

export function generateStaticParams() {
  return categorias.map((c) => ({ categoria: c.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ categoria: string }>
}): Promise<Metadata> {
  const { categoria } = await params
  const c = findCategoria(categoria)
  if (!c) return {}
  return {
    title: c.titulo,
    description: `${c.titulo} en Uruguay: dónde comprarlos, qué mirar antes de elegir y cómo usarlos. Comparativa actualizada ${CONTENT_UPDATED_LABEL}.`,
    alternates: { canonical: `/categorias/${c.slug}` },
  }
}

export default async function CategoriaPage({
  params,
}: {
  params: Promise<{ categoria: string }>
}) {
  const { categoria } = await params
  const c = findCategoria(categoria)
  if (!c) notFound()

  // CollectionPage + migas. Antes era un Product sin offers ni reviews, que
  // Google marca como inválido para resultados enriquecidos.
  const url = `${SITE_URL}/categorias/${c.slug}`
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'CollectionPage', name: c.titulo, description: c.intro, url, inLanguage: 'es-UY' },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Inicio', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: c.nombre, item: url },
        ],
      },
    ],
  }
  const campaign = `categoria-${c.slug}`
  const que = c.nombre.toLowerCase()

  return (
    <>
      <section className="hero hero-page">
        <div className="wrap hero-cat">
          <div>
            <nav className="breadcrumb" aria-label="Migas de pan">
              <Link href="/">Inicio</Link>
              <span aria-hidden="true">/</span>
              <Link href="/#categorias">Categorías</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">{c.nombre}</span>
            </nav>
            <p className="eyebrow">Categoría</p>
            <h1>{c.titulo}</h1>
            <p className="lead">{c.intro}</p>
          </div>
          <TopPick coleccion={c.coleccion} campaign={campaign} que={que} />
        </div>
      </section>

      <div className="wrap">
        <MoldartePicks coleccion={c.coleccion} campaign={campaign} titulo={`${c.nombre} disponibles hoy`} />

        <section className="block duo">
          <div className="panel">
            <h2>¿Para qué se usan?</h2>
            <ul className="list">
              {c.usos.map((u) => (
                <li key={u}>
                  <span className="list-dot" />
                  {u}
                </li>
              ))}
            </ul>
          </div>
          <div className="panel">
            <h2>Tips antes de comprar</h2>
            <ul className="list">
              {c.tips.map((t) => (
                <li key={t}>
                  <span className="list-check">
                    <IconCheck size={14} />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {c.oficio.length > 0 && (
          <section className="block block-narrow" id="oficio">
            <div className="section-head">
              <p className="eyebrow">Del oficio</p>
              <h2>Lo que conviene saber antes de empezar</h2>
            </div>
            <div className="oficio-list">
              {c.oficio.map((o) => (
                <article className="oficio-item" key={o.titulo}>
                  <h3>{o.titulo}</h3>
                  <p>{o.texto}</p>
                </article>
              ))}
            </div>
          </section>
        )}

        <section className="block">
          <div className="section-head">
            <p className="eyebrow">Ranking</p>
            <h2>Dónde comprar {c.nombre.toLowerCase()} en Uruguay</h2>
          </div>
          <Ranking campaign={campaign} categoria={c} />
        </section>

        <Kits kits={kitsPara(c.slug)} campaign={campaign} />

        {guias.some((g) => g.categoria === c.slug) && (
          <section className="block">
            <div className="section-head">
              <p className="eyebrow">Guías</p>
              <h2>Cómo usarlos</h2>
            </div>
            <div className="tiles">
              {guias
                .filter((g) => g.categoria === c.slug)
                .map((g) => (
                  <Link key={g.slug} href={`/guias/${g.slug}`} className={`tile tile-${c.icono}`}>
                    <span className="tile-title">{g.metaTitulo}</span>
                    <span className="tile-text">Guía paso a paso</span>
                    <span className="tile-arrow">
                      <IconArrow />
                    </span>
                  </Link>
                ))}
            </div>
          </section>
        )}

        <section className="block">
          <div className="section-head">
            <h2>Otras categorías</h2>
          </div>
          <div className="tiles">
            {categorias
              .filter((o) => o.slug !== c.slug)
              .map((o) => (
                <Link key={o.slug} href={`/categorias/${o.slug}`} className="tile">
                  <span className="tile-icon">
                    <IconCategoria icono={o.icono} size={26} />
                  </span>
                  <span className="tile-title">{o.nombre}</span>
                  <span className="tile-text">{o.usos[0]}</span>
                  <span className="tile-arrow">
                    <IconArrow />
                  </span>
                </Link>
              ))}
          </div>
        </section>
      </div>

      <StickyCta coleccion={c.coleccion} campaign={campaign} etiqueta={`Ver ${c.nombre.toLowerCase().replace(/^moldes /, '')}`} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  )
}
