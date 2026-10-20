import { NextResponse, type NextRequest } from 'next/server'

// Sólo el dominio real se indexa. Cualquier otro host (el de EasyPanel,
// sslip.io, previews) responde con X-Robots-Tag: noindex para que Google no
// indexe una copia con canonical apuntando a otro lado.
const HOSTS_INDEXABLES = new Set(['moldes.uy', 'www.moldes.uy'])

export function proxy(request: NextRequest) {
  const host = (request.headers.get('x-forwarded-host') ?? request.headers.get('host') ?? '').split(':')[0]
  // Una sola versión indexable: www redirige (301) al dominio sin www.
  if (host === 'www.moldes.uy') {
    const url = new URL(request.nextUrl.pathname + request.nextUrl.search, 'https://moldes.uy')
    return NextResponse.redirect(url, 301)
  }
  const res = NextResponse.next()
  if (!HOSTS_INDEXABLES.has(host)) res.headers.set('X-Robots-Tag', 'noindex, nofollow')
  return res
}

export const config = {
  matcher: '/((?!_next/static|_next/image|favicon.ico).*)',
}
