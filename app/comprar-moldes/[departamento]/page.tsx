import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Ranking from '@/components/Ranking'
import Faq from '@/components/Faq'
import TopPick from '@/components/TopPick'
import MoldartePicks from '@/components/MoldartePicks'
import StickyCta from '@/components/StickyCta'
import SelectorDepartamento from '@/components/SelectorDepartamento'
import { findEnvio } from '@/lib/envios-departamentos'
import { IconPin, IconTruck } from '@/components/Icons'
import { departamentos, findDepartamento, SITE_URL } from '@/lib/data'

const POBLACION_MINIMA_INDEX = 60000

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
  const e = findEnvio(d.slug)
  return {
    title: `Dónde comprar moldes de silicona en ${d.nombre}`,
    description: `Moldes de silicona e insumos en ${d.nombre}: tiendas que envían, ${e?.agenciasDac.length ? `agencias DAC en ${e.agenciasDac.length} localidades, ` : ''}tiempos de entrega y retiro.`,
    alternates: { canonical: `/comprar-moldes/${d.slug}` },
    // Los departamentos chicos casi no tienen búsquedas propias: se dejan
    // fuera del índice (siguen enlazados y rastreables) para que Google no
    // vea 19 páginas parecidas compitiendo entre sí.
    ...(e?.poblacion && e.poblacion < POBLACION_MINIMA_INDEX ? { robots: { index: false, follow: true } } : {}),
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
  const envio = findEnvio(d.slug)
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

        {envio && envio.agenciasDac.length > 0 && (
          <section className="block">
            <div className="section-head">
              <p className="eyebrow">Envíos a {d.nombre}</p>
              <h2>Dónde retirar un envío por DAC en {d.nombre}</h2>
              <p>
                {envio.poblacion ? `${d.nombre} tiene ${envio.poblacion.toLocaleString('es-UY')} habitantes (censo 2023) y ` : ''}
                DAC tiene {envio.agenciasTotal ?? envio.agenciasDac.length} {(envio.agenciasTotal ?? envio.agenciasDac.length) === 1 ? 'agencia' : 'agencias'} en el
                departamento. Moldarte despacha por DAC el mismo día si comprás antes de las 12: a agencia llega en 48 a
                72 horas y a domicilio en 72 horas a 4 días.
              </p>
            </div>
            <ul className="agencias">
              {envio.agenciasDac.map((a) => (
                <li key={a}>
                  <IconPin size={14} /> {a}
                </li>
              ))}
            </ul>
            <p className="note">
              Fuente: <a href={envio.fuente} target="_blank" rel="nofollow noopener">listado de agencias de DAC</a>.
            </p>
          </section>
        )}

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
          <SelectorDepartamento departamentos={departamentos.map((o) => ({ slug: o.slug, nombre: o.nombre }))} actual={d.slug} />
        </section>
      </div>

      <StickyCta campaign={campaign} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  )
}
