import Link from 'next/link'
import { categorias, departamentos } from '@/lib/data'

export function Nav() {
  return (
    <header className="site-header">
      <div className="wrap nav-inner">
        <Link href="/" className="logo">
          moldes.uy
        </Link>
        <nav>
          <Link href="/">Inicio</Link>
          <Link href="/comprar-moldes/montevideo">Por departamento</Link>
          <Link href="/categorias/moldes-para-velas">Por categoría</Link>
        </nav>
      </div>
    </header>
  )
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <p className="logo">moldes.uy</p>
            <p>Guía independiente para comparar dónde comprar moldes de silicona en Uruguay: velas, jabones, resina y chocolate.</p>
          </div>
          <div>
            <p className="footer-title">Departamentos</p>
            <ul>
              {departamentos.map((d) => (
                <li key={d.slug}>
                  <Link href={`/comprar-moldes/${d.slug}`}>{d.nombre}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="footer-title">Categorías</p>
            <ul>
              {categorias.map((c) => (
                <li key={c.slug}>
                  <Link href={`/categorias/${c.slug}`}>{c.nombre}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="copy">© {new Date().getFullYear()} moldes.uy — Guía de compra independiente.</p>
      </div>
    </footer>
  )
}
