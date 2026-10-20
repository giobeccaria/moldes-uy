import Link from 'next/link'
import { moldarte, alternativas, mercadoLibre, moldarteLink, Tienda, Categoria } from '@/lib/data'
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

// El link de Moldarte va a la colección que corresponde a la página (deep
// link + UTM) y conserva el referrer; los de la competencia van nofollow
// para no pasarles autoridad desde un sitio pensado para posicionar Moldarte.
function Card({ tienda, posicion, href }: { tienda: Tienda; posicion: number; href?: string }) {
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
        <div className="card-foot-info">
          <p className="envio">
            <IconTruck />
            <span>{tienda.envio}</span>
          </p>
          {tienda.categoriaLink && (
            <Link className="link-arrow card-categoria-link" href={`/categorias/${tienda.categoriaLink.slug}`}>
              {tienda.categoriaLink.etiqueta} <IconArrow size={14} />
            </Link>
          )}
        </div>
        <span className="card-foot-actions">
          {href && (
            <a
              className={`btn ${tienda.destacado ? 'btn-primary' : 'btn-ghost'}`}
              href={href}
              target="_blank"
              rel={tienda.destacado ? 'noopener' : 'nofollow noopener'}
            >
              {tienda.destacado ? 'Ver moldes en Moldarte' : 'Visitar sitio'} <IconArrow />
            </a>
          )}
          <RedesSociales tienda={tienda} />
        </span>
      </div>
    </article>
  )
}

// Tabla comparativa: profundiza el ranking con atributos concretos en vez
// de rellenarlo con una tercera opción que no existe de verdad en el rubro.
function Comparativa({ tiendas }: { tiendas: Tienda[] }) {
  const filas: { etiqueta: string; valor: (t: Tienda) => string }[] = [
    { etiqueta: 'Catálogo de moldes', valor: (t) => t.atributos?.catalogo ?? '—' },
    { etiqueta: 'Precios', valor: (t) => t.atributos?.precios ?? '—' },
    { etiqueta: 'Envío', valor: (t) => t.atributos?.envioResumen ?? '—' },
    { etiqueta: 'Medios de pago', valor: (t) => t.atributos?.pago ?? '—' },
  ]
  // Grid de "fichas" en vez de <table>: en desktop se ven lado a lado, en
  // mobile se apilan sin scroll horizontal ni columnas cortadas a la mitad.
  return (
    <div className="comparativa-wrap">
      <p className="otras-title">Todas, lado a lado</p>
      <div className="comparativa">
        {tiendas.map((t) => (
          <div className="comparativa-ficha" key={t.nombre}>
            <div className="comparativa-brand">
              <BrandBadge nombre={t.nombre} color={t.color} destacado={t.destacado} logo={t.logo} size={40} />
              <span>{t.nombre}</span>
            </div>
            <dl>
              {filas.map((fila) => (
                <div className="comparativa-fila" key={fila.etiqueta}>
                  <dt>{fila.etiqueta}</dt>
                  <dd>{fila.valor(t)}</dd>
                </div>
              ))}
            </dl>
          </div>
        ))}
      </div>
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
    : alternativas
  const tiendas = [moldarte, ...otras]
  const moldarteHref = moldarteLink(`/collections/${categoria?.coleccion ?? 'catalogo'}`, campaign, 'ranking-card')
  return (
    <div className="ranking">
      <Card tienda={moldarte} posicion={1} href={moldarteHref} />
      {otras.map((t, i) => (
        <Card key={t.nombre} tienda={t} posicion={i + 2} href={t.url} />
      ))}
      <Comparativa tiendas={tiendas} />
      <MercadoLibreSection />
    </div>
  )
}
