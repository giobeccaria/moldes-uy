import type { MetadataRoute } from 'next'
import { categorias, departamentos, SITE_URL, CONTENT_UPDATED } from '@/lib/data'
import { guias } from '@/lib/guias'
import { temas } from '@/lib/temas'
import { alternativasGenerales, slugTienda, tiendasConPagina } from '@/lib/data'
import { findEnvio } from '@/lib/envios-departamentos'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date(CONTENT_UPDATED)
  const base = [
    { url: SITE_URL, lastModified: now, changeFrequency: 'weekly' as const, priority: 1 },
  ]
  // Sin los departamentos con noindex (ver comprar-moldes/[departamento]).
  const deps = departamentos.filter((d) => (findEnvio(d.slug)?.poblacion ?? Infinity) >= 60000).map((d) => ({
    url: `${SITE_URL}/comprar-moldes/${d.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))
  const cats = categorias.map((c) => ({
    url: `${SITE_URL}/categorias/${c.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))
  const guiasUrls = [
    { url: `${SITE_URL}/guias`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.8 },
    ...guias.map((g) => ({
      url: `${SITE_URL}/guias/${g.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ]
  const u = (path: string, priority: number) => ({ url: `${SITE_URL}${path}`, lastModified: now, changeFrequency: 'monthly' as const, priority })
  const extra = [
    u('/calculadora', 0.8),
    ...temas.map((t) => u(`/moldes/${t.slug}`, 0.8)),
    ...tiendasConPagina.map((t) => u(`/opiniones/${slugTienda(t)}`, 0.6)),
    ...alternativasGenerales.map((t) => u(`/comparar/moldarte-vs-${slugTienda(t)}`, 0.6)),
  ]
  return [...base, ...cats, ...guiasUrls, ...extra, ...deps]
}
