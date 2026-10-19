import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Ranking from '@/components/Ranking'
import { IconArrow, IconCategoria, IconCheck } from '@/components/Icons'
import { categorias, findCategoria } from '@/lib/data'

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
    description: `${c.intro.slice(0, 140)}...`,
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

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: c.titulo,
    description: c.intro,
    category: c.nombre,
  }

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
          <span className="hero-cat-icon" aria-hidden="true">
            <IconCategoria icono={c.icono} size={56} />
          </span>
        </div>
      </section>

      <div className="wrap">
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

        <section className="block">
          <div className="section-head">
            <p className="eyebrow">Ranking</p>
            <h2>Dónde comprar {c.nombre.toLowerCase()} en Uruguay</h2>
          </div>
          <Ranking />
        </section>

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

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  )
}
