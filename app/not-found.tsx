import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="wrap">
      <section className="hero">
        <h1>Página no encontrada</h1>
        <p>
          No encontramos esa página. Volvé al <Link href="/">inicio</Link> para ver la
          comparación completa.
        </p>
      </section>
    </div>
  )
}
