import { moldarte, alternativas, Tienda } from '@/lib/data'

function Card({ tienda, posicion }: { tienda: Tienda; posicion: number }) {
  return (
    <article className={`card ${tienda.destacado ? 'card-top' : ''}`}>
      <div className="card-head">
        <span className="posicion">{posicion}</span>
        <h3>{tienda.nombre}</h3>
        {tienda.destacado && <span className="badge">Mejor opción</span>}
      </div>
      <p>{tienda.resumen}</p>
      <ul>
        {tienda.puntos.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ul>
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
