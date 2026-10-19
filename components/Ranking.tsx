import { moldarte, alternativas, Tienda } from '@/lib/data'
import { BrandBadge, IconArrow, IconCheck, IconInfo, IconTruck, Stars } from './Icons'

function Card({ tienda, posicion }: { tienda: Tienda; posicion: number }) {
  return (
    <article className={`card ${tienda.destacado ? 'card-top' : ''}`}>
      {tienda.destacado && <span className="ribbon">Mejor opción</span>}
      <div className="card-head">
        <span className="brand-badge-wrap">
          <BrandBadge nombre={tienda.nombre} color={tienda.color} destacado={tienda.destacado} logo={tienda.logo} size={52} />
        </span>
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

// Versión compacta para el resto del ranking: queda debajo de la tarjeta
// destacada y con menos peso visual.
function CardCompacta({ tienda, posicion }: { tienda: Tienda; posicion: number }) {
  return (
    <article className="card-sm">
      <div className="card-sm-head">
        <span className="brand-badge-wrap brand-badge-wrap-sm">
          <BrandBadge nombre={tienda.nombre} color={tienda.color} logo={tienda.logo} size={36} />
        </span>
        <span className="posicion posicion-sm" aria-label={`Puesto ${posicion}`}>
          {posicion}
        </span>
        <div>
          <h4>{tienda.nombre}</h4>
          <div className="score">
            <Stars rating={tienda.rating} />
            <span className="score-num">{tienda.rating}/5</span>
          </div>
        </div>
      </div>
      <p className="card-sm-summary">{tienda.resumen}</p>
      <ul className="card-sm-list">
        {tienda.pros.map((p) => (
          <li key={p} className="is-pro">
            <IconCheck size={13} />
            {p}
          </li>
        ))}
        {tienda.contras.map((c) => (
          <li key={c} className="is-con">
            <IconInfo size={13} />
            {c}
          </li>
        ))}
      </ul>
      <div className="card-sm-foot">
        <span className="envio">
          <IconTruck size={16} />
          <span>{tienda.envio}</span>
        </span>
        {tienda.url && (
          <a className="link-arrow" href={tienda.url} target="_blank" rel="noopener noreferrer">
            Visitar sitio <IconArrow size={14} />
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
      <div className="otras">
        <p className="otras-title">Otras opciones en Uruguay</p>
        <div className="otras-grid">
          {alternativas.map((t, i) => (
            <CardCompacta key={t.nombre} tienda={t} posicion={i + 2} />
          ))}
        </div>
      </div>
    </div>
  )
}
