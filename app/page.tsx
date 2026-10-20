import type { Metadata } from 'next'
import Link from 'next/link'
import Ranking from '@/components/Ranking'
import { guias } from '@/lib/guias'
import Faq from '@/components/Faq'
import TopPick from '@/components/TopPick'
import MoldartePicks from '@/components/MoldartePicks'
import StickyCta from '@/components/StickyCta'
import SelectorDepartamento from '@/components/SelectorDepartamento'
import { Kits } from '@/components/Kit'
import { IconArrow, IconCategoria } from '@/components/Icons'
import { categorias, criterios, departamentos, faqGeneral, moldarte, alternativasGenerales, SITE_URL, CONTENT_UPDATED_LABEL } from '@/lib/data'
import { kits } from '@/lib/kits'
import { temas } from '@/lib/temas'

// Accesos rápidos del hero: resuelven la intención en el primer toque en
// vez de mandar a leer la metodología.
const accesos = [
  { href: '/categorias/moldes-para-velas', label: 'Velas' },
  { href: '/categorias/moldes-para-jabones', label: 'Jabones' },
  { href: '/categorias/moldes-de-resina', label: 'Resina' },
  { href: '/categorias/moldes-de-yeso', label: 'Yeso' },
  { href: '/categorias/moldes-para-macetas', label: 'Macetas' },
  { href: '/moldes/moldes-de-navidad', label: 'Navidad' },
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
              Comparamos las tiendas uruguayas de moldes e insumos para velas, jabones, yeso y resina:
              catálogo, envío y forma de pago, con lo que hace falta saber para usarlos bien.
            </p>
            <nav className="accesos" aria-label="Ir a una categoría">
              {accesos.map((a) => (
                <Link key={a.href} href={a.href} className="acceso">
                  {a.label}
                </Link>
              ))}
            </nav>
            <a href="#ranking" className="link-arrow hero-ranking">
              Ver el ranking completo <IconArrow size={14} />
            </a>
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

        <Kits kits={kits.filter((k) => ['velas-de-soja-en-molde', 'jabones-de-glicerina'].includes(k.slug))} campaign="home" />

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

        <section className="block" id="disenos">
          <div className="section-head">
            <p className="eyebrow">Por diseño</p>
            <h2>Buscá por forma</h2>
          </div>
          <div className="chips">
            {temas.map((t) => (
              <Link key={t.slug} href={`/moldes/${t.slug}`} className={`chip ${t.temporada ? 'chip-temporada' : ''}`}>
                {t.nombre}
                {t.temporada && <span className="chip-tag">{t.temporada}</span>}
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
            </p>
          </div>
          <div className="tiles">
            {guias.slice(0, 6).map((g) => {
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
          <p className="block-more">
            <Link href="/guias" className="link-arrow">
              Ver las {guias.length} guías <IconArrow size={14} />
            </Link>
            <Link href="/calculadora" className="link-arrow">
              Calculadora de materiales <IconArrow size={14} />
            </Link>
          </p>
        </section>

        <section className="block" id="departamentos">
          <div className="section-head">
            <p className="eyebrow">Departamentos</p>
            <h2>Comprar desde tu departamento</h2>
            <p>Agencias de envío, tiempos y opciones para cada departamento del país.</p>
          </div>
          <SelectorDepartamento departamentos={departamentos.map((d) => ({ slug: d.slug, nombre: d.nombre }))} />
        </section>

        <section className="block" id="como-elegimos">
          <div className="section-head">
            <p className="eyebrow">Metodología</p>
            <h2>Cómo elegimos</h2>
            <p>
              Ordenamos el ranking mirando lo que de verdad cambia el resultado de un proyecto con
              moldes: catálogo real disponible, forma de pago, envío y si la tienda responde cuando
              hay una duda de medida o de uso. Cada criterio se puntúa de 0 a 10 y el puntaje final
              es el promedio. Nada de reseñas inventadas ni calificaciones de clientes falsas.
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
