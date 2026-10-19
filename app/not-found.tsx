import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="wrap">
      <section className="hero hero-simple">
        <p className="eyebrow">Error 404</p>
        <h1>Página no encontrada</h1>
        <p className="lead">No encontramos esa página. Volvé al inicio para ver la comparación completa.</p>
        <Link href="/" className="btn btn-primary">
          Ir al inicio
        </Link>
      </section>
    </div>
  )
}
