import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Ranking from '@/components/Ranking'
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
    <div className="wrap">
      <p className="breadcrumb">
        <Link href="/">Inicio</Link> / Categorías / {c.nombre}
      </p>
      <section className="hero">
        <h1>{c.titulo}</h1>
        <p>{c.intro}</p>
      </section>

      <section className="block">
        <h2>¿Para qué se usan?</h2>
        <ul>
          {c.usos.map((u) => (
            <li key={u}>{u}</li>
          ))}
        </ul>
      </section>

      <section className="block">
        <h2>Tips antes de comprar</h2>
        <ul>
          {c.tips.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </section>

      <section className="block">
        <h2>Dónde comprar {c.nombre.toLowerCase()} en Uruguay</h2>
        <Ranking />
      </section>

      <section className="block">
        <h2>Otras categorías</h2>
        <div className="grid-links">
          {categorias
            .filter((o) => o.slug !== c.slug)
            .map((o) => (
              <Link key={o.slug} href={`/categorias/${o.slug}`}>
                {o.nombre}
              </Link>
            ))}
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  )
}
