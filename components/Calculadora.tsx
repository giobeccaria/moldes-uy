'use client'

import { useMemo, useState } from 'react'

export type Pack = { variantId: number; titulo: string; precio: number; gramos: number }
export type PacksPorMaterial = Partial<Record<MaterialKey, { principal: Pack[]; esencia?: Pack }>>

type MaterialKey = 'soja' | 'glicerina' | 'yeso' | 'resina' | 'cemento'

// Gramos de material por ml de molde. Valores orientativos de referencia:
// cera de soja ~0,86 g/ml (la regla de "peso del agua × 0,86"), glicerina
// ~1,05, yeso París a 100:65 con agua ~0,97 g de yeso + 0,63 ml de agua,
// epoxi ~1,1, mortero 1:2 ~2 g de mezcla seca.
const MATERIALES: Record<MaterialKey, { nombre: string; gPorMl: number; aguaPorMl?: number; esenciaPct?: number; nota: string }> = {
  soja: { nombre: 'Velas de cera de soja', gPorMl: 0.86, esenciaPct: 0.08, nota: 'Esencia calculada al 8 % del peso de la cera.' },
  glicerina: { nombre: 'Jabones de glicerina', gPorMl: 1.05, esenciaPct: 0.02, nota: 'Esencia calculada al 2 % del peso de la base.' },
  yeso: { nombre: 'Piezas de yeso', gPorMl: 0.97, aguaPorMl: 0.63, nota: 'Proporción de referencia 100 g de yeso cada 65 ml de agua.' },
  resina: { nombre: 'Resina epoxi', gPorMl: 1.1, nota: 'Total de resina + endurecedor; dividilo según la proporción de tu producto.' },
  cemento: { nombre: 'Macetas de cemento', gPorMl: 2.0, aguaPorMl: 0.3, nota: 'Mezcla seca de 1 parte de cemento por 2 de arena fina.' },
}

const fmt = (n: number) => Math.round(n).toLocaleString('es-UY')

// Combinación de packs que cubre los gramos pedidos con el menor sobrante.
function elegirPacks(gramos: number, packs: Pack[]) {
  const ordenados = [...packs].sort((a, b) => b.gramos - a.gramos)
  const grande = ordenados[0]
  const chico = ordenados[ordenados.length - 1]
  let nGrande = Math.floor(gramos / grande.gramos)
  let resto = gramos - nGrande * grande.gramos
  const items: { pack: Pack; cantidad: number }[] = []
  if (resto > 0) {
    if (chico !== grande && resto <= chico.gramos) items.push({ pack: chico, cantidad: 1 })
    else nGrande += 1
    resto = 0
  }
  if (nGrande > 0) items.unshift({ pack: grande, cantidad: nGrande })
  return items
}

export default function Calculadora({ packs, carritoBase }: { packs: PacksPorMaterial; carritoBase: string }) {
  const [material, setMaterial] = useState<MaterialKey>('soja')
  const [ml, setMl] = useState(150)
  const [unidades, setUnidades] = useState(10)

  const r = useMemo(() => {
    const m = MATERIALES[material]
    const vol = Math.max(0, ml) * Math.max(0, unidades) * 1.1 // 10 % de margen por pérdidas
    const gramos = vol * m.gPorMl
    const esencia = m.esenciaPct ? gramos * m.esenciaPct : 0
    const agua = m.aguaPorMl ? vol * m.aguaPorMl : 0
    const p = packs[material]
    const items = p && p.principal.length > 0 && gramos > 0 ? elegirPacks(gramos, p.principal) : []
    if (p?.esencia && esencia > 0) items.push({ pack: p.esencia, cantidad: Math.ceil(esencia / p.esencia.gramos) })
    const total = items.reduce((a, i) => a + i.pack.precio * i.cantidad, 0)
    const carrito =
      items.length > 0
        ? carritoBase.replace('__ITEMS__', items.map((i) => `${i.pack.variantId}:${i.cantidad}`).join(','))
        : null
    return { m, gramos, esencia, agua, items, total, carrito }
  }, [material, ml, unidades, packs, carritoBase])

  return (
    <div className="calc">
      <div className="calc-form">
        <label>
          <span>¿Qué vas a hacer?</span>
          <select value={material} onChange={(e) => setMaterial(e.target.value as MaterialKey)}>
            {Object.entries(MATERIALES).map(([k, v]) => (
              <option key={k} value={k}>
                {v.nombre}
              </option>
            ))}
          </select>
        </label>
        <label>
          <span>Capacidad del molde (ml)</span>
          <input type="number" inputMode="numeric" min={1} value={ml} onChange={(e) => setMl(Number(e.target.value))} />
          <small>Llená el molde con agua y pasala a una jarra medidora.</small>
        </label>
        <label>
          <span>¿Cuántas piezas?</span>
          <input type="number" inputMode="numeric" min={1} value={unidades} onChange={(e) => setUnidades(Number(e.target.value))} />
        </label>
      </div>

      <div className="calc-out" aria-live="polite">
        <p className="calc-big">
          <strong>{fmt(r.gramos)} g</strong> de {material === 'resina' ? 'resina' : material === 'cemento' ? 'mezcla seca' : material === 'yeso' ? 'yeso' : material === 'glicerina' ? 'base de glicerina' : 'cera'}
        </p>
        {r.agua > 0 && <p>+ {fmt(r.agua)} ml de agua</p>}
        {r.esencia > 0 && <p>+ {fmt(r.esencia)} g de esencia</p>}
        <p className="calc-nota">Incluye un 10 % de margen por pérdidas. {r.m.nota} Lo que indique el fabricante manda.</p>

        {r.items.length > 0 && r.carrito && (
          <div className="calc-carrito">
            <p className="pc-title">Lo que necesitás en Moldarte</p>
            <ul>
              {r.items.map((i) => (
                <li key={i.pack.variantId}>
                  <span>
                    {i.cantidad} × {i.pack.titulo}
                  </span>
                  <span>$ {fmt(i.pack.precio * i.cantidad)}</span>
                </li>
              ))}
            </ul>
            <p className="kit-total">
              Total <strong>$ {fmt(r.total)}</strong>
            </p>
            <p className="kit-envio">{r.total >= 2000 ? 'Con esto ya tenés envío gratis' : `Sumá $ ${fmt(2000 - r.total)} más y el envío es gratis`}</p>
            <a className="btn btn-primary kit-cta" href={r.carrito} target="_blank" rel="noopener">
              Armar el pedido en Moldarte
            </a>
          </div>
        )}
      </div>
    </div>
  )
}
