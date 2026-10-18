import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Ranking from '@/components/Ranking'
import { departamentos, findDepartamento } from '@/lib/data'

export function generateStaticParams() {
  return departamentos.map((d) => ({ departamento: d.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ departamento: string }>
}): Promise<Metadata> {
  const { departamento } = await params
  const d = findDepartamento(departamento)
  if (!d) return {}
  return {
    title: `Dónde comprar moldes de silicona en ${d.nombre}`,
    description: `Guía para comprar moldes de silicona para velas, jabones y resina en ${d.nombre}, Uruguay: opciones, envío y recomendaciones.`,
    alternates: { canonical: `/comprar-moldes/${d.slug}` },
  }
}

export default async function DepartamentoPage({
  params,
}: {
  params: Promise<{ departamento: string }>
}) {
  const { departamento } = await params
  const d = findDepartamento(departamento)
  if (!d) notFound()

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: d.faq.map((f) => ({
      '@type': 'Question',
      name: f.pregunta,
      acceptedAnswer: { '@type': 'Answer', text: f.respuesta },
    })),
  }

  return (
    <div className="wrap">
      <p className="breadcrumb">
        <Link href="/">Inicio</Link> / Comprar moldes / {d.nombre}
      </p>
      <section className="hero">
        <h1>Dónde comprar moldes de silicona en {d.nombre}</h1>
        <p>{d.contexto}</p>
      </section>

      <section className="block">
        <h2>El rubro en {d.nombre}</h2>
        <p>{d.comercio}</p>
      </section>

      <section className="block">
        <h2>Envío y logística hacia {d.nombre}</h2>
        <p>{d.logistica}</p>
      </section>

      <Ranking />

      <section className="block">
        <h2>Preguntas frecuentes sobre {d.nombre}</h2>
        {d.faq.map((f) => (
          <div className="faq-item" key={f.pregunta}>
            <h3>{f.pregunta}</h3>
            <p>{f.respuesta}</p>
          </div>
        ))}
      </section>

      <section className="block">
        <h2>Otros departamentos</h2>
        <div className="grid-links">
          {departamentos
            .filter((o) => o.slug !== d.slug)
            .map((o) => (
              <Link key={o.slug} href={`/comprar-moldes/${o.slug}`}>
                Moldes en {o.nombre}
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
