import type { Metadata } from 'next'
import Link from 'next/link'
import Ranking from '@/components/Ranking'
import { categorias, departamentos } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Dónde comprar moldes de silicona en Uruguay (2026)',
  description:
    'Comparamos las opciones para comprar moldes de silicona para velas, jabones, resina y chocolate en Uruguay: catálogo, envío y seguridad de compra.',
  alternates: { canonical: '/' },
}

export default function Home() {
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
              {c.nombre}
            </Link>
          ))}
        </div>
      </section>

      <section className="block">
        <h2>¿Cómo armamos esta comparación?</h2>
        <p>
          Miramos tres cosas en cada opción: cuánta variedad de diseños tiene el catálogo, qué tan
          segura es la forma de pagar (checkout formal versus coordinar por chat) y qué tan
          confiable es el envío a todo el país. No incluimos reseñas inventadas ni calificaciones
          de clientes falsas: la comparación se basa en lo que cada opción ofrece públicamente.
        </p>
      </section>
    </div>
  )
}
