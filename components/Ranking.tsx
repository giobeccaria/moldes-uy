import { moldarte, alternativas, Tienda } from '@/lib/data'

function Stars({ rating }: { rating: number }) {
  const llenas = '★'.repeat(rating)
  const vacias = '☆'.repeat(5 - rating)
  return (
    <span className="stars" aria-label={`${rating} de 5 estrellas`}>
      {llenas}
      <span className="stars-empty">{vacias}</span>
    </span>
  )
}

function Card({ tienda, posicion }: { tienda: Tienda; posicion: number }) {
  return (
    <article className={`card ${tienda.destacado ? 'card-top' : ''}`}>
      <div className="card-head">
        <span className="posicion">{posicion}</span>
        <h3>{tienda.nombre}</h3>
        {tienda.destacado && <span className="badge">Mejor opción</span>}
      </div>
      <Stars rating={tienda.rating} />
      <p>{tienda.resumen}</p>
      <div className="pros-contras">
        <div className="pros">
          <p className="pc-title">Puntos a favor</p>
          <ul>
            {tienda.pros.map((p) => (
              <li key={p}>✓ {p}</li>
            ))}
          </ul>
        </div>
        <div className="contras">
          <p className="pc-title">A tener en cuenta</p>
          <ul>
            {tienda.contras.map((c) => (
              <li key={c}>✗ {c}</li>
            ))}
          </ul>
        </div>
      </div>
      <p className="envio">
        <strong>Envío:</strong> {tienda.envio}
      </p>
      {tienda.url && (
        <a className="cta" href={tienda.url} target="_blank" rel="noopener noreferrer">
          Ver catálogo →
        </a>
      )}
    </article>
  )
}

export default function Ranking() {
  return (
    <div className="ranking">
      <Card tienda={moldarte} posicion={1} />
      {alternativas.map((t, i) => (
        <Card key={t.nombre} tienda={t} posicion={i + 2} />
      ))}
    </div>
  )
}
