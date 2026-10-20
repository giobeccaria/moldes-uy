import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Ranking from '@/components/Ranking'
import Faq from '@/components/Faq'
import TopPick from '@/components/TopPick'
import MoldartePicks from '@/components/MoldartePicks'
import StickyCta from '@/components/StickyCta'
import { IconPin, IconTruck } from '@/components/Icons'
import { departamentos, findDepartamento, SITE_URL } from '@/lib/data'

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

  const url = `${SITE_URL}/comprar-moldes/${d.slug}`
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'FAQPage',
        mainEntity: d.faq.map((f) => ({
          '@type': 'Question',
          name: f.pregunta,
          acceptedAnswer: { '@type': 'Answer', text: f.respuesta },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Inicio', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: d.nombre, item: url },
        ],
      },
    ],
  }
  const campaign = `departamento-${d.slug}`

  return (
    <>
      <section className="hero hero-page">
        <div className="wrap">
          <nav className="breadcrumb" aria-label="Migas de pan">
            <Link href="/">Inicio</Link>
            <span aria-hidden="true">/</span>
            <Link href="/#departamentos">Departamentos</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{d.nombre}</span>
          </nav>
          <p className="eyebrow">Departamento</p>
          <h1>Dónde comprar moldes de silicona en {d.nombre}</h1>
          <p className="lead">{d.contexto}</p>
          <TopPick campaign={campaign} />
        </div>
      </section>

      <div className="wrap">
        <section className="block duo">
          <div className="panel">
            <span className="panel-icon">
              <IconPin />
            </span>
            <h2>El rubro en {d.nombre}</h2>
            <p>{d.comercio}</p>
          </div>
          <div className="panel">
            <span className="panel-icon">
              <IconTruck size={20} />
            </span>
            <h2>Envío y logística hacia {d.nombre}</h2>
            <p>{d.logistica}</p>
          </div>
        </section>

        <section className="block">
          <div className="section-head">
            <p className="eyebrow">Ranking</p>
            <h2>Las opciones para comprar desde {d.nombre}</h2>
          </div>
          <Ranking campaign={campaign} />
        </section>

        <MoldartePicks coleccion="destacados" campaign={campaign} titulo="Para arrancar: los moldes más elegidos" cantidad={4} />

        <section className="block block-narrow">
          <div className="section-head">
            <p className="eyebrow">Preguntas frecuentes</p>
            <h2>Preguntas frecuentes sobre {d.nombre}</h2>
          </div>
          <Faq items={d.faq} />
        </section>

        <section className="block">
          <div className="section-head">
            <h2>Otros departamentos</h2>
          </div>
          <div className="chips">
            {departamentos
              .filter((o) => o.slug !== d.slug)
              .map((o) => (
                <Link key={o.slug} href={`/comprar-moldes/${o.slug}`} className="chip">
                  <IconPin size={16} />
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
