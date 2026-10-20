import { criterios, featureLabels, formatPuntaje, puntaje, type Tienda } from '@/lib/data'
import { IconCheck, IconInfo } from './Icons'

// Bloques reutilizables de las páginas de opiniones y comparación.
export function DesgloseTabla({ tiendas }: { tiendas: Tienda[] }) {
  return (
    <div className="tabla-scroll">
      <table className="tabla tabla-angosta">
        <thead>
          <tr>
            <th scope="col"><span className="sr-only">Criterio</span></th>
            {tiendas.map((t) => (
              <th scope="col" key={t.nombre} className={t.destacado ? 'col-top' : ''}>
                {t.nombre}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {criterios.map((c, i) => (
            <tr key={c.nombre}>
              <th scope="row">{c.nombre}</th>
              {tiendas.map((t) => (
                <td key={t.nombre} className={t.destacado ? 'col-top' : ''}>
                  {t.puntajes[i]}/10
                </td>
              ))}
            </tr>
          ))}
          <tr>
            <th scope="row"><strong>Puntaje final</strong></th>
            {tiendas.map((t) => (
              <td key={t.nombre} className={t.destacado ? 'col-top' : ''}>
                <strong>{formatPuntaje(puntaje(t))}</strong>
              </td>
            ))}
          </tr>
          {featureLabels.map((f) => (
            <tr key={f.key}>
              <th scope="row">{f.label}</th>
              {tiendas.map((t) => {
                const v = t.features[f.key]
                return (
                  <td key={t.nombre} className={t.destacado ? 'col-top' : ''}>
                    {v === true ? (
                      <span className="cel cel-si"><IconCheck size={15} /></span>
                    ) : v === false ? (
                      <span className="cel cel-no">✕</span>
                    ) : v === null ? (
                      <span className="cel cel-nd">—</span>
                    ) : (
                      <span className="cel cel-si cel-txt"><IconCheck size={13} /> {v}</span>
                    )}
                  </td>
                )
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export function ProsContras({ tienda }: { tienda: Tienda }) {
  return (
    <div className="pros-contras">
      <div className="pros">
        <p className="pc-title">Puntos a favor</p>
        <ul>
          {tienda.pros.map((p) => (
            <li key={p}>
              <span className="pc-icon"><IconCheck size={14} /></span>
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
              <span className="pc-icon"><IconInfo size={14} /></span>
              {c}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export function Atributos({ tienda }: { tienda: Tienda }) {
  if (!tienda.atributos) return null
  const filas = [
    ['Catálogo', tienda.atributos.catalogo],
    ['Precios', tienda.atributos.precios],
    ['Envío', tienda.atributos.envioResumen],
    ['Medios de pago', tienda.atributos.pago],
  ]
  return (
    <dl className="atributos">
      {filas.map(([k, v]) => (
        <div key={k}>
          <dt>{k}</dt>
          <dd>{v}</dd>
        </div>
      ))}
    </dl>
  )
}
