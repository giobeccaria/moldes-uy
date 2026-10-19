import { moldarte, alternativas, Tienda } from '@/lib/data'
import { IconArrow, IconCheck, IconInfo, IconTruck, Stars } from './Icons'

function Card({ tienda, posicion }: { tienda: Tienda; posicion: number }) {
  return (
    <article className={`card ${tienda.destacado ? 'card-top' : ''}`}>
      {tienda.destacado && <span className="ribbon">Mejor opción</span>}
      <div className="card-head">
        <span className="posicion" aria-label={`Puesto ${posicion}`}>
          {posicion}
        </span>
        <div className="card-title">
          <h3>{tienda.nombre}</h3>
          <div className="score">
            <Stars rating={tienda.rating} />
            <span className="score-num">{tienda.rating}/5</span>
          </div>
        </div>
      </div>
      <p className="card-summary">{tienda.resumen}</p>
      <div className="pros-contras">
        <div className="pros">
          <p className="pc-title">Puntos a favor</p>
          <ul>
            {tienda.pros.map((p) => (
              <li key={p}>
                <span className="pc-icon">
                  <IconCheck size={14} />
                </span>
                {p}
              </li>
            ))}
          </ul>
        </div>
        <div className="contras">
          <p className="pc-title">A tener en cuenta</p>
          <ul>
            {tienda.contras.map((c) => (
              <li key={c}>
                <span className="pc-icon">
                  <IconInfo size={14} />
                </span>
                {c}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="card-foot">
        <p className="envio">
          <IconTruck />
          <span>{tienda.envio}</span>
        </p>
        {tienda.url && (
          <a
            className={`btn ${tienda.destacado ? 'btn-primary' : 'btn-ghost'}`}
            href={tienda.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver catálogo <IconArrow />
          </a>
        )}
      </div>
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
