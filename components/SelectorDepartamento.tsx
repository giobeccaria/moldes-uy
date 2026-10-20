'use client'

import { useRouter } from 'next/navigation'

// Selector en vez de una nube de 19 links: en mobile la lista ocupaba media
// pantalla. Los links reales siguen en el footer (y en <noscript> no hace
// falta: el footer ya los tiene para crawlers y sin JS).
export default function SelectorDepartamento({
  departamentos,
  actual,
}: {
  departamentos: { slug: string; nombre: string }[]
  actual?: string
}) {
  const router = useRouter()
  return (
    <label className="selector-dep">
      <span>Elegí tu departamento</span>
      <select
        value={actual ?? ''}
        onChange={(e) => e.target.value && router.push(`/comprar-moldes/${e.target.value}`)}
      >
        <option value="" disabled>
          Seleccioná…
        </option>
        {departamentos.map((d) => (
          <option key={d.slug} value={d.slug}>
            {d.nombre}
          </option>
        ))}
      </select>
    </label>
  )
}
