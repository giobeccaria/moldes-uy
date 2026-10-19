import type { Metadata } from 'next'
import Link from 'next/link'
import Ranking from '@/components/Ranking'
import Faq from '@/components/Faq'
import { IconArrow, IconCategoria, IconPin } from '@/components/Icons'
import { categorias, criterios, departamentos, faqGeneral } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Dónde comprar moldes de silicona en Uruguay (2026)',
  description:
    'Comparamos dónde comprar moldes de silicona e insumos (cera, glicerina, esencias, pabilos) para velas, jabones, resina y chocolate en Uruguay.',
  alternates: { canonical: '/' },
}

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqGeneral.map((f) => ({
      '@type': 'Question',
      name: f.pregunta,
      acceptedAnswer: { '@type': 'Answer', text: f.respuesta },
    })),
  }

  return (
    <>
      <section className="hero hero-home">
        <div className="wrap hero-grid">
          <div>
            <p className="eyebrow">Guía de compra · 2026</p>
            <h1>Dónde comprar moldes de silicona en Uruguay</h1>
            <p className="lead">
              Comparamos dónde comprar moldes de silicona e insumos para velas, jabones, resina y
              chocolate en Uruguay, mirando catálogo disponible, seguridad de compra y tiempos de
              envío. Esta es nuestra selección actualizada.
            </p>
            <div className="hero-actions">
              <a href="#ranking" className="btn btn-primary">
                Ver el ranking <IconArrow />
              </a>
              <a href="#como-elegimos" className="btn btn-ghost">
                Cómo elegimos
              </a>
            </div>
          </div>
          <div className="hero-art" aria-hidden="true">
            {categorias.slice(0, 4).map((c) => (
              <div key={c.slug} className="hero-tile">
                <IconCategoria icono={c.icono} size={40} />
                <span>{c.nombre.split(' ').pop()!.replace(/^./, (l) => l.toUpperCase())}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="wrap">
        <section className="block" id="ranking">
          <div className="section-head">
            <p className="eyebrow">Ranking</p>
            <h2>Las opciones, una por una</h2>
          </div>
          <Ranking />
        </section>

        <section className="block" id="categorias">
          <div className="section-head">
            <p className="eyebrow">Categorías</p>
            <h2>Buscá por tipo de molde o insumo</h2>
          </div>
          <div className="tiles">
            {categorias.map((c) => (
              <Link key={c.slug} href={`/categorias/${c.slug}`} className="tile">
                <span className="tile-icon">
                  <IconCategoria icono={c.icono} size={26} />
                </span>
                <span className="tile-title">{c.nombre}</span>
                <span className="tile-text">{c.usos[0]}</span>
                <span className="tile-arrow">
                  <IconArrow />
                </span>
              </Link>
            ))}
          </div>
        </section>

        <section className="block" id="departamentos">
          <div className="section-head">
            <p className="eyebrow">Departamentos</p>
            <h2>Buscá por departamento</h2>
            <p>Cada zona del país tiene su propia dinámica de compra y de emprendimiento con moldes.</p>
          </div>
          <div className="chips">
            {departamentos.map((d) => (
              <Link key={d.slug} href={`/comprar-moldes/${d.slug}`} className="chip">
                <IconPin size={16} />
                {d.nombre}
              </Link>
            ))}
          </div>
        </section>

        <section className="block" id="como-elegimos">
          <div className="section-head">
            <p className="eyebrow">Metodología</p>
            <h2>Cómo elegimos</h2>
            <p>
              Para ordenar el ranking evaluamos cada opción con los mismos cinco criterios, sin
              usar reseñas inventadas ni calificaciones de clientes falsas.
            </p>
          </div>
          <ol className="criterios">
            {criterios.map((c) => (
              <li key={c.nombre}>
                <h3>{c.nombre}</h3>
                <p>{c.detalle}</p>
              </li>
            ))}
          </ol>
          <p className="note">
            Con esos cinco criterios armamos el orden del ranking y el detalle de puntos a favor y a
            tener en cuenta de cada opción. No recibimos reseñas de usuarios ni encuestas: la
            comparación se basa en lo que cada opción ofrece públicamente.
          </p>
        </section>

        <section className="block block-narrow" id="preguntas">
          <div className="section-head">
            <p className="eyebrow">Preguntas frecuentes</p>
            <h2>Lo que más se pregunta</h2>
          </div>
          <Faq items={faqGeneral} />
        </section>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  )
}
