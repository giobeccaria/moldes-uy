import type { MetadataRoute } from 'next'
import { categorias, departamentos, SITE_URL } from '@/lib/data'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const base = [
    { url: SITE_URL, lastModified: now, changeFrequency: 'weekly' as const, priority: 1 },
  ]
  const deps = departamentos.map((d) => ({
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
  return [...base, ...deps, ...cats]
}
