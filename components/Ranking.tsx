import {
  moldarte,
  alternativas,
  alternativasGenerales,
  mercadoLibre,
  moldarteLink,
  criterios,
  featureLabels,
  puntaje,
  formatPuntaje,
  CONTENT_UPDATED_LABEL,
  Tienda,
  Categoria,
} from '@/lib/data'
import {
  BrandBadge,
  IconArrow,
  IconCheck,
  IconFacebook,
  IconInfo,
  IconInstagram,
  IconPin,
  IconPinterest,
  IconTikTok,
  IconTruck,
  IconYouTube,
  Stars,
} from './Icons'

function RedesSociales({ tienda, size = 15 }: { tienda: Tienda; size?: number }) {
  if (!tienda.redes) return null
  const rel = tienda.destacado ? 'noopener' : 'nofollow noopener'
  return (
    <span className="redes-sociales">
      {tienda.redes.instagram && (
        <a
          href={tienda.redes.instagram}
          target="_blank"
          rel={rel}
          aria-label={`${tienda.nombre} en Instagram`}
          title="Instagram"
        >
          <IconInstagram size={size} />
        </a>
      )}
      {tienda.redes.facebook && (
        <a
          href={tienda.redes.facebook}
          target="_blank"
          rel={rel}
          aria-label={`${tienda.nombre} en Facebook`}
          title="Facebook"
        >
          <IconFacebook size={size} />
        </a>
      )}
      {tienda.redes.tiktok && (
        <a
          href={tienda.redes.tiktok}
          target="_blank"
          rel={rel}
          aria-label={`${tienda.nombre} en TikTok`}
          title="TikTok"
        >
          <IconTikTok size={size} />
        </a>
      )}
      {tienda.redes.pinterest && (
        <a
          href={tienda.redes.pinterest}
          target="_blank"
          rel={rel}
          aria-label={`${tienda.nombre} en Pinterest`}
          title="Pinterest"
        >
          <IconPinterest size={size} />
        </a>
      )}
      {tienda.redes.youtube && (
        <a
          href={tienda.redes.youtube}
          target="_blank"
          rel={rel}
          aria-label={`${tienda.nombre} en YouTube`}
          title="YouTube"
        >
          <IconYouTube size={size} />
        </a>
      )}
    </span>
  )
}

// Ranking asimétrico (patrón de los comparadores): el #1 con tarjeta completa
// y desglose del puntaje; el resto en filas compactas con el detalle
// plegado. El link de Moldarte va a la colección de la página (deep link +
// UTM) y conserva el referrer; los de la competencia van nofollow.
function ScoreBadge({ tienda, grande }: { tienda: Tienda; grande?: boolean }) {
  const n = puntaje(tienda)
  return (
    <span className={`score-badge ${grande ? 'score-badge-lg' : ''} ${tienda.destacado ? 'score-badge-top' : ''}`}>
      <strong>{formatPuntaje(n)}</strong>
      <span>/10</span>
    </span>
  )
}

function Desglose({ tienda }: { tienda: Tienda }) {
  return (
    <dl className="desglose">
      {criterios.map((c, i) => (
        <div key={c.nombre}>
          <dt>{c.nombre}</dt>
          <dd>
            <span className="desglose-bar">
              <span style={{ width: `${tienda.puntajes[i] * 10}%` }} />
            </span>
            <span className="desglose-num">{tienda.puntajes[i]}</span>
          </dd>
        </div>
      ))}
    </dl>
  )
}

function ListaPros({ items, visibles }: { items: string[]; visibles: number }) {
  const item = (p: string) => (
    <li key={p}>
      <span className="pc-icon">
        <IconCheck size={14} />
      </span>
      {p}
    </li>
  )
  return (
    <>
      <ul>{items.slice(0, visibles).map(item)}</ul>
      {items.length > visibles && (
        <details className="ver-mas">
          <summary>Ver {items.length - visibles} más</summary>
          <ul>{items.slice(visibles).map(item)}</ul>
        </details>
      )}
    </>
  )
}

function CardTop({ tienda, href }: { tienda: Tienda; href: string }) {
  return (
    <article className="card card-top">
      <span className="ribbon">Mejor opción</span>
      <div className="card-head">
        <span className="brand-badge-wrap">
          <BrandBadge nombre={tienda.nombre} color={tienda.color} destacado logo={tienda.logo} size={52} />
        </span>
        <span className="posicion" aria-label="Puesto 1">
          1
        </span>
        <div className="card-title">
          <h3>{tienda.nombre}</h3>
          <div className="score">
            <Stars rating={tienda.rating} />
          </div>
        </div>
        <ScoreBadge tienda={tienda} grande />
      </div>
      <p className="card-summary">{tienda.resumen}</p>
      <div className="card-top-grid">
        <div className="pros">
          <p className="pc-title">Puntos a favor</p>
          <ListaPros items={tienda.pros} visibles={3} />
        </div>
        <div className="desglose-wrap">
          <p className="pc-title">Puntaje por criterio</p>
          <Desglose tienda={tienda} />
        </div>
      </div>
      <div className="card-foot">
        <div className="card-foot-info">
          <p className="envio">
            <IconTruck />
            <span>{tienda.envio}</span>
          </p>
        </div>
        <span className="card-foot-actions">
          <a className="btn btn-primary" href={href} target="_blank" rel="noopener">
            Ver moldes en Moldarte <IconArrow />
          </a>
          <RedesSociales tienda={tienda} />
        </span>
      </div>
    </article>
  )
}

function Fila({ tienda, posicion }: { tienda: Tienda; posicion: number }) {
  // Primera oración del resumen: alcanza para ubicar a la tienda.
  const linea = tienda.resumen.split(/(?<=\.)\s/)[0]
  return (
    <article className="fila">
      <div className="fila-head">
        <span className="posicion posicion-sm" aria-label={`Puesto ${posicion}`}>
          {posicion}
        </span>
        <span className="brand-badge-wrap brand-badge-wrap-sm">
          <BrandBadge nombre={tienda.nombre} color={tienda.color} logo={tienda.logo} size={36} />
        </span>
        <h3>{tienda.nombre}</h3>
        <ScoreBadge tienda={tienda} />
      </div>
      <p className="fila-linea">{linea}</p>
      <details className="fila-detalle">
        <summary>Ver detalle</summary>
        <div className="pros-contras">
          <div className="pros">
            <p className="pc-title">Puntos a favor</p>
            <ListaPros items={tienda.pros} visibles={tienda.pros.length} />
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
        <Desglose tienda={tienda} />
        <p className="envio">
          <IconTruck />
          <span>{tienda.envio}</span>
        </p>
        <span className="card-foot-actions">
          {tienda.url && (
            <a className="link-arrow" href={tienda.url} target="_blank" rel="nofollow noopener">
              Visitar sitio <IconArrow size={14} />
            </a>
          )}
          <RedesSociales tienda={tienda} />
        </span>
      </details>
    </article>
  )
}

function Celda({ v }: { v: boolean | null | string }) {
  if (v === true) return <span className="cel cel-si" aria-label="Sí"><IconCheck size={15} /></span>
  if (v === false) return <span className="cel cel-no" aria-label="No">✕</span>
  if (v === null) return <span className="cel cel-nd" aria-label="No lo publica">—</span>
  return (
    <span className="cel cel-si cel-txt">
      <IconCheck size={13} /> {v}
    </span>
  )
}

// Tabla comparativa con ✓/✕: filas = atributos, columnas = tiendas, con la
// columna de Moldarte resaltada. Scroll horizontal dentro del contenedor en
// mobile (la página no se desborda).
function Comparativa({ tiendas }: { tiendas: Tienda[] }) {
  return (
    <div className="comparativa-wrap">
      <p className="otras-title">Todas, lado a lado</p>
      <div className="tabla-scroll" role="region" aria-label="Tabla comparativa" tabIndex={0}>
        <table className="tabla">
          <thead>
            <tr>
              <th scope="col"><span className="sr-only">Atributo</span></th>
              {tiendas.map((t) => (
                <th scope="col" key={t.nombre} className={t.destacado ? 'col-top' : ''}>
                  <BrandBadge nombre={t.nombre} color={t.color} destacado={t.destacado} logo={t.logo} size={32} />
                  <span>{t.nombre}</span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Puntaje</th>
              {tiendas.map((t) => (
                <td key={t.nombre} className={t.destacado ? 'col-top' : ''}>
                  <ScoreBadge tienda={t} />
                </td>
              ))}
            </tr>
            {featureLabels.map((f) => (
              <tr key={f.key}>
                <th scope="row">{f.label}</th>
                {tiendas.map((t) => (
                  <td key={t.nombre} className={t.destacado ? 'col-top' : ''}>
                    <Celda v={t.features[f.key]} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="note">— = la tienda no lo publica en su sitio. Datos verificados en cada sitio en {CONTENT_UPDATED_LABEL}.</p>
    </div>
  )
}

// Sección separada para Mercado Libre: a propósito no usa el formato de
// tarjeta numerada del ranking, porque no es una tienda comparable a
// Moldarte o La Casa del Artesano. Es un marketplace de vendedores
// particulares, tratado como lo que es: una alternativa de último recurso.
function MercadoLibreSection() {
  return (
    <div className="marketplace-note">
      <p className="otras-title">¿Y comprar por Mercado Libre?</p>
      <div className="marketplace-box">
        <span className="marketplace-icon">
          <IconPin size={22} />
        </span>
        <div className="marketplace-copy">
          <h3>{mercadoLibre.nombre} no es una tienda, es un marketplace</h3>
          <p>{mercadoLibre.resumen}</p>
          <p>{mercadoLibre.cuando}</p>
          <p>{mercadoLibre.cuidado}</p>
          <a className="link-arrow" href={mercadoLibre.url} target="_blank" rel="nofollow noopener">
            Ver publicaciones en Mercado Libre <IconArrow size={14} />
          </a>
        </div>
      </div>
    </div>
  )
}

// `campaign` identifica la página en las UTMs (home, categoria-x,
// departamento-y). Con `categoria`, el ranking deja sólo las tiendas que de
// verdad venden esa categoría y el botón de Moldarte va a esa colección.
export default function Ranking({ campaign, categoria }: { campaign: string; categoria?: Categoria }) {
  const otras = categoria
    ? alternativas.filter((t) => !t.categorias || t.categorias.includes(categoria.slug))
    : alternativasGenerales
  const tiendas = [moldarte, ...otras]
  const moldarteHref = moldarteLink(`/collections/${categoria?.coleccion ?? 'catalogo'}`, campaign, 'ranking-card')
  return (
    <div className="ranking">
      <CardTop tienda={moldarte} href={moldarteHref} />
      <div className="filas">
        {otras.map((t, i) => (
          <Fila key={t.nombre} tienda={t} posicion={i + 2} />
        ))}
      </div>
      <Comparativa tiendas={tiendas} />
      <MercadoLibreSection />
    </div>
  )
}
