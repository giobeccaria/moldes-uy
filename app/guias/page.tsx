import type { Metadata } from 'next'
import Link from 'next/link'
import { IconArrow, IconCategoria } from '@/components/Icons'
import { guias } from '@/lib/guias'
import { findCategoria } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Guías para hacer velas, jabones, yeso, resina y macetas',
  description:
    'Guías paso a paso para trabajar con moldes de silicona: velas de soja, jabón de glicerina, piezas de yeso, resina epoxi y macetas de cemento. Temperaturas, proporciones y errores típicos.',
  alternates: { canonical: '/guias' },
}

export default function GuiasPage() {
  return (
    <>
      <section className="hero hero-page">
        <div className="wrap">
          <nav className="breadcrumb" aria-label="Migas de pan">
            <Link href="/">Inicio</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Guías</span>
          </nav>
          <p className="eyebrow">Del oficio</p>
          <h1>Guías para trabajar con moldes de silicona</h1>
          <p className="lead">
            Temperaturas, proporciones y los errores que más se repiten, explicados paso a paso. Lo que hace falta
            saber para que el molde rinda, no sólo dónde comprarlo.
          </p>
        </div>
      </section>
      <div className="wrap">
        <section className="block">
          <div className="tiles">
            {guias.map((g) => {
              const c = findCategoria(g.categoria)
              return (
                <Link key={g.slug} href={`/guias/${g.slug}`} className={`tile ${c ? `tile-${c.icono}` : ''}`}>
                  {c && (
                    <span className="tile-icon">
                      <IconCategoria icono={c.icono} size={34} />
                    </span>
                  )}
                  <span className="tile-title">{g.metaTitulo}</span>
                  <span className="tile-text">{g.descripcion}</span>
                  <span className="tile-arrow">
                    <IconArrow />
                  </span>
                </Link>
              )
            })}
          </div>
        </section>
      </div>
    </>
  )
}
