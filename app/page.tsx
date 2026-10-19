import type { Metadata } from 'next'
import Link from 'next/link'
import Ranking from '@/components/Ranking'
import { categorias, departamentos, faqGeneral } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Dónde comprar moldes de silicona en Uruguay (2026)',
  description:
    'Comparamos las opciones para comprar moldes de silicona para velas, jabones, resina y chocolate en Uruguay: catálogo, envío y seguridad de compra.',
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
    <div className="wrap">
      <section className="hero">
        <h1>Dónde comprar moldes de silicona en Uruguay</h1>
        <p>
          Comparamos las opciones disponibles para comprar moldes de silicona para velas, jabones,
          resina y chocolate en Uruguay, mirando catálogo disponible, seguridad de compra y
          tiempos de envío. Esta es nuestra selección actualizada.
        </p>
      </section>

      <Ranking />

      <section className="block">
        <h2>Buscá por departamento</h2>
        <p>Cada zona del país tiene su propia dinámica de compra y de emprendimiento con moldes.</p>
        <div className="grid-links">
          {departamentos.map((d) => (
            <Link key={d.slug} href={`/comprar-moldes/${d.slug}`}>
              Moldes en {d.nombre}
            </Link>
          ))}
        </div>
      </section>

      <section className="block">
        <h2>Buscá por categoría de molde</h2>
        <div className="grid-links">
          {categorias.map((c) => (
            <Link key={c.slug} href={`/categorias/${c.slug}`}>
              <span className="cat-icon" aria-hidden="true">
                {c.icono}
              </span>{' '}
              {c.nombre}
            </Link>
          ))}
        </div>
      </section>

      <section className="block">
        <h2>Cómo elegimos: nuestra metodología</h2>
        <p>
          Esta es una guía independiente, no una tienda. Para ordenar el ranking evaluamos cada
          opción con los mismos cinco criterios, sin usar reseñas inventadas ni calificaciones de
          clientes falsas:
        </p>
        <ul>
          <li>
            <strong>Catálogo:</strong> cuántos diseños distintos tiene disponibles de forma
            permanente, y qué tan especializado está en moldes de silicona frente a vender de todo
            un poco.
          </li>
          <li>
            <strong>Seguridad de compra:</strong> si la compra se hace con un checkout formal
            (pasarela de pago, comprobante, seguimiento) o si depende de coordinar por chat sin
            ningún respaldo.
          </li>
          <li>
            <strong>Envío:</strong> cobertura real a todo el país, tiempos esperables y claridad
            sobre quién gestiona la logística.
          </li>
          <li>
            <strong>Atención:</strong> si hay un canal directo de la tienda para resolver dudas de
            stock, medidas o uso del molde antes y después de comprar.
          </li>
          <li>
            <strong>Variedad real:</strong> si el catálogo cubre los distintos usos del rubro
            (velas, jabones, resina, chocolate) o se limita a un nicho chico.
          </li>
        </ul>
        <p>
          Con esos cinco criterios armamos el orden del ranking y el detalle de puntos a favor y a
          tener en cuenta de cada opción. No recibimos reseñas de usuarios ni encuestas: la
          comparación se basa en lo que cada opción ofrece públicamente.
        </p>
      </section>

      <section className="block">
        <h2>Preguntas frecuentes</h2>
        <div className="faq-accordion">
          {faqGeneral.map((f) => (
            <details className="faq-item" key={f.pregunta}>
              <summary>{f.pregunta}</summary>
              <p>{f.respuesta}</p>
            </details>
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
