import type { Metadata } from 'next'
import Link from 'next/link'
import Ranking from '@/components/Ranking'
import { guias } from '@/lib/guias'
import Faq from '@/components/Faq'
import TopPick from '@/components/TopPick'
import MoldartePicks from '@/components/MoldartePicks'
import StickyCta from '@/components/StickyCta'
import { IconArrow, IconCategoria, IconPin } from '@/components/Icons'
import { categorias, criterios, departamentos, faqGeneral, moldarte, alternativasGenerales, SITE_URL, CONTENT_UPDATED_LABEL } from '@/lib/data'

// Agrupación regional de los 19 departamentos, para romper la nube de
// chips idénticos y dar algo de estructura geográfica real.
const regiones: { nombre: string; deps: string[] }[] = [
  { nombre: 'Área metropolitana', deps: ['montevideo', 'canelones', 'san-jose'] },
  { nombre: 'Este', deps: ['maldonado', 'rocha', 'lavalleja', 'treinta-y-tres'] },
  { nombre: 'Litoral oeste', deps: ['colonia', 'soriano', 'rio-negro', 'paysandu', 'salto'] },
  { nombre: 'Centro', deps: ['florida', 'durazno', 'flores', 'tacuarembo'] },
  { nombre: 'Norte', deps: ['rivera', 'artigas', 'cerro-largo'] },
]

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

  // ItemList del ranking: ayuda a Google a entender que la página compara
  // tiendas concretas (con su propio nombre y URL), no sólo texto suelto.
  const tiendasRanking = [moldarte, ...alternativasGenerales]
  const rankingJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Ranking de tiendas de moldes de silicona en Uruguay',
    url: `${SITE_URL}/#ranking`,
    itemListElement: tiendasRanking.map((t, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'Store',
        name: t.nombre,
        url: t.url,
      },
    })),
  }

  return (
    <>
      <section className="hero hero-home">
        <div className="wrap hero-grid">
          <div>
            <p className="eyebrow">Guía de compra · Actualizada {CONTENT_UPDATED_LABEL}</p>
            <h1>Dónde comprar moldes de silicona en Uruguay</h1>
            <p className="lead">
              Un molde de silicona bueno desmolda limpio, aguanta decenas de piezas y no te arruina
              un trabajo por una temperatura mal calculada. Comparamos dónde comprarlos en Uruguay
              para velas, jabones, resina y chocolate, y sumamos lo que hace falta saber del oficio
              para que el molde rinda lo que tiene que rendir.
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
          <TopPick campaign="home" />
        </div>
      </section>

      <div className="wrap">
        <section className="block" id="ranking">
          <div className="section-head">
            <p className="eyebrow">Ranking</p>
            <h2>Las opciones, una por una</h2>
          </div>
          <Ranking campaign="home" />
        </section>

        <MoldartePicks coleccion="destacados" campaign="home" titulo="Lo más elegido de la temporada" />

        <section className="block" id="categorias">
          <div className="section-head">
            <p className="eyebrow">Categorías</p>
            <h2>Buscá por tipo de molde o insumo</h2>
          </div>
          <div className="tiles">
            {categorias.map((c) => (
              <Link key={c.slug} href={`/categorias/${c.slug}`} className={`tile tile-${c.icono}`}>
                <span className="tile-icon">
                  <IconCategoria icono={c.icono} size={34} />
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

        <section className="block" id="oficio">
          <div className="section-head">
            <p className="eyebrow">Guías del oficio</p>
            <h2>Comprar el molde es la mitad del trabajo</h2>
            <p>
              La otra mitad es usarlo bien: temperatura de vertido, proporciones y desmolde sin romper el detalle.
              Guías paso a paso para cada material.
            </p>
          </div>
          <div className="tiles">
            {guias.map((g) => {
              const c = categorias.find((x) => x.slug === g.categoria)
              return (
                <Link key={g.slug} href={`/guias/${g.slug}`} className={`tile ${c ? `tile-${c.icono}` : ''}`}>
                  {c && (
                    <span className="tile-icon">
                      <IconCategoria icono={c.icono} size={34} />
                    </span>
                  )}
                  <span className="tile-title">{g.metaTitulo}</span>
                  <span className="tile-arrow">
                    <IconArrow />
                  </span>
                </Link>
              )
            })}
          </div>
        </section>

        <section className="block" id="departamentos">
          <div className="section-head">
            <p className="eyebrow">Departamentos</p>
            <h2>Buscá por departamento</h2>
            <p>Cada zona del país tiene su propia dinámica de compra y de emprendimiento con moldes.</p>
          </div>
          <div className="regiones">
            {regiones.map((r) => (
              <div className="region" key={r.nombre}>
                <h3 className="region-title">{r.nombre}</h3>
                <ul className="region-list">
                  {r.deps.map((slug) => {
                    const d = departamentos.find((dep) => dep.slug === slug)
                    if (!d) return null
                    return (
                      <li key={d.slug}>
                        <Link href={`/comprar-moldes/${d.slug}`}>
                          <IconPin size={13} />
                          {d.nombre}
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="block" id="como-elegimos">
          <div className="section-head">
            <p className="eyebrow">Metodología</p>
            <h2>Cómo elegimos</h2>
            <p>
              Ordenamos el ranking mirando lo que de verdad cambia el resultado de un proyecto con
              moldes: catálogo real disponible, forma de pago, y si la tienda responde cuando hay
              una duda de medida o de uso. Nada de reseñas inventadas ni calificaciones de clientes
              falsas.
            </p>
          </div>
          <ol className="criterios">
            {criterios.map((c, i) => (
              <li key={c.nombre}>
                <span className="criterio-num">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h3>{c.nombre}</h3>
                  <p>{c.detalle}</p>
                </div>
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

      <StickyCta campaign="home" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(rankingJsonLd) }} />
    </>
  )
}
