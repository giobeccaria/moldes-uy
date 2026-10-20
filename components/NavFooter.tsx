import Link from 'next/link'
import { categorias, departamentos, SITE_NAME } from '@/lib/data'
import { guias } from '@/lib/guias'
import { Logo } from './Logo'
import { IconCategoria } from './Icons'
import MobileMenu from './MobileMenu'

const links = [
  { href: '/#ranking', label: 'Ranking' },
  { href: '/#departamentos', label: 'Por departamento' },
  { href: '/#categorias', label: 'Por categoría' },
  { href: '/guias', label: 'Guías' },
  { href: '/#como-elegimos', label: 'Cómo elegimos' },
]

export function Nav() {
  return (
    <header className="site-header">
      <div className="wrap nav-inner">
        <Link href="/" className="logo-link" aria-label={`${SITE_NAME}, inicio`}>
          <Logo />
        </Link>
        <nav className="nav-desktop" aria-label="Principal">
          {links.map((l) => (
            <Link key={l.href} href={l.href}>
              {l.label}
            </Link>
          ))}
        </nav>
        <MobileMenu>
          <nav aria-label="Principal">
            {links.map((l) => (
              <Link key={l.href} href={l.href}>
                {l.label}
              </Link>
            ))}
          </nav>
        </MobileMenu>
      </div>
    </header>
  )
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" className="logo-link" aria-label={`${SITE_NAME}, inicio`}>
              <Logo />
            </Link>
            <p>
              Guía para comparar dónde comprar moldes de silicona e insumos en Uruguay: velas,
              jabones, resina y chocolate.
            </p>
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
            <p className="footer-title">Guías</p>
            <ul>
              {guias.map((g) => (
                <li key={g.slug}>
                  <Link href={`/guias/${g.slug}`}>{g.metaTitulo}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="footer-title">Categorías</p>
            <ul>
              {categorias.map((c) => (
                <li key={c.slug}>
                  <Link href={`/categorias/${c.slug}`} className="footer-cat">
                    <IconCategoria icono={c.icono} size={16} />
                    {c.nombre}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="copy">
          © {new Date().getFullYear()} {SITE_NAME}
        </p>
      </div>
    </footer>
  )
}
