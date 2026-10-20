// Datos de envío por departamento para las páginas "Dónde comprar moldes de silicona en <Departamento>".
//
// Fuentes (verificadas el 2026-10-20):
// - Agencias DAC: https://www.dac.com.uy/agencias (listado oficial agrupado por departamento).
//   Se normalizaron los nombres de agencia a la localidad donde están (p. ej. "Ancap San Ramon" -> San Ramón,
//   "Terminal Paysandu" / "Paysandu Norte" -> Paysandú). Varias agencias en una misma ciudad cuentan una sola vez
//   en `agenciasDac`; el total de puntos DAC del departamento está en `agenciasTotal`.
//   En Montevideo la lista es de barrios/zonas (todas las agencias están en la capital).
// - Población: INE, Censo 2023 (población residente al 31/5/2023), Tabla 1 de
//   https://www5.ine.gub.uy/documents/CENSO%202023/Poblaci%C3%B3n%20estimada,%20crecimiento%20intercensal%20y%20estructura%20por%20sexo%20y%20edad.pdf
//   (la suma de los 19 departamentos da 3.499.451, el total país).
// - DAC NO publica plazos ni zonas de entrega diferenciadas por departamento (revisado /servicios, /tarifas,
//   /terminos), por eso no hay un campo de plazo propio: usar el plazo general de Moldarte.

export type EnvioDepartamento = {
  slug: string // mismo slug que lib/data.ts
  capital: string
  poblacion?: number // censo 2023 (INE)
  agenciasDac: string[] // localidades con agencia DAC verificadas
  agenciasTotal?: number // cantidad de agencias/puntos DAC listados en el departamento
  fuente: string // URL de donde salió la lista de agencias
}

const FUENTE_DAC = 'https://www.dac.com.uy/agencias'

export const enviosDepartamentos: EnvioDepartamento[] = [
  {
    slug: 'montevideo',
    capital: 'Montevideo',
    poblacion: 1302954,
    agenciasDac: [
      'Ciudad Vieja',
      'Pocitos',
      'Tres Cruces',
      'Avenida Italia',
      'La Comercial',
      'Rondeau',
      'Paso Molino',
      'Millán',
      'Cerro',
      'Sayago',
      'Piedras Blancas',
      'Mercado Modelo',
      'Camino Corrales (Funsa)',
      'Ruta 5 km 16 (Perimetral)',
    ],
    agenciasTotal: 14,
    fuente: FUENTE_DAC,
  },
  {
    slug: 'canelones',
    capital: 'Canelones',
    poblacion: 608956,
    agenciasDac: [
      'Canelones',
      'Las Piedras',
      'La Paz',
      'Progreso',
      'Pando',
      'Barros Blancos',
      'Ciudad de la Costa (Shangrilá)',
      'El Pinar',
      'Salinas',
      'Parque del Plata',
      'San Luis',
      'Migues',
      'San Jacinto',
      'Tala',
      'San Ramón',
      'Santa Lucía',
      'Toledo',
    ],
    agenciasTotal: 18,
    fuente: FUENTE_DAC,
  },
  {
    slug: 'maldonado',
    capital: 'Maldonado',
    poblacion: 212951,
    agenciasDac: [
      'Maldonado',
      'Punta del Este',
      'La Barra',
      'San Carlos',
      'Piriápolis',
      'Pan de Azúcar',
      'Aiguá',
      'Balneario Buenos Aires',
      'La Capuera',
    ],
    agenciasTotal: 10,
    fuente: FUENTE_DAC,
  },
  {
    slug: 'salto',
    capital: 'Salto',
    poblacion: 136197,
    agenciasDac: ['Salto'],
    agenciasTotal: 2, // Salto Terminal y Salto Cerrito
    fuente: FUENTE_DAC,
  },
  {
    slug: 'paysandu',
    capital: 'Paysandú',
    poblacion: 121843,
    agenciasDac: ['Paysandú', 'Guichón', 'Quebracho'],
    agenciasTotal: 5,
    fuente: FUENTE_DAC,
  },
  {
    slug: 'colonia',
    capital: 'Colonia del Sacramento',
    poblacion: 135797,
    agenciasDac: [
      'Colonia del Sacramento',
      'Carmelo',
      'Nueva Palmira',
      'Juan Lacaze',
      'Rosario',
      'Nueva Helvecia',
      'Colonia Valdense',
      'Tarariras',
      'Ombúes de Lavalle',
      'Miguelete',
      'Conchillas',
    ],
    agenciasTotal: 12,
    fuente: FUENTE_DAC,
  },
  {
    slug: 'rivera',
    capital: 'Rivera',
    poblacion: 109300,
    agenciasDac: ['Rivera', 'Tranqueras', 'Minas de Corrales', 'Vichadero'],
    agenciasTotal: 5,
    fuente: FUENTE_DAC,
  },
  {
    slug: 'artigas',
    capital: 'Artigas',
    poblacion: 77487,
    agenciasDac: ['Artigas', 'Bella Unión'],
    agenciasTotal: 3,
    fuente: FUENTE_DAC,
  },
  {
    slug: 'cerro-largo',
    capital: 'Melo',
    poblacion: 91025,
    agenciasDac: ['Melo', 'Río Branco', 'Fraile Muerto'],
    agenciasTotal: 3,
    fuente: FUENTE_DAC,
  },
  {
    slug: 'durazno',
    capital: 'Durazno',
    poblacion: 62011,
    agenciasDac: ['Durazno', 'Sarandí del Yí', 'La Paloma'],
    agenciasTotal: 5,
    fuente: FUENTE_DAC,
  },
  {
    slug: 'flores',
    capital: 'Trinidad',
    poblacion: 26271,
    agenciasDac: ['Trinidad'],
    agenciasTotal: 1,
    fuente: FUENTE_DAC,
  },
  {
    slug: 'florida',
    capital: 'Florida',
    poblacion: 70325,
    agenciasDac: [
      'Florida',
      'Sarandí Grande',
      'Fray Marcos',
      'Casupá',
      '25 de Mayo',
      '25 de Agosto',
      'Cardal',
      'Independencia',
    ],
    agenciasTotal: 8,
    fuente: FUENTE_DAC,
  },
  {
    slug: 'lavalleja',
    capital: 'Minas',
    poblacion: 59175,
    agenciasDac: ['Minas', 'José Pedro Varela', 'José Batlle y Ordóñez', 'Solís de Mataojo', 'Mariscala'],
    agenciasTotal: 5,
    fuente: FUENTE_DAC,
  },
  {
    slug: 'rocha',
    capital: 'Rocha',
    poblacion: 80707,
    agenciasDac: [
      'Rocha',
      'Chuy',
      'Castillos',
      'Lascano',
      'La Paloma',
      'Punta del Diablo',
      'La Coronilla',
      'Cebollatí',
      'Velázquez',
    ],
    agenciasTotal: 9,
    fuente: FUENTE_DAC,
  },
  {
    slug: 'rio-negro',
    capital: 'Fray Bentos',
    poblacion: 57334,
    agenciasDac: ['Fray Bentos', 'Young', 'Nuevo Berlín', 'San Javier'],
    agenciasTotal: 4,
    fuente: FUENTE_DAC,
  },
  {
    slug: 'san-jose',
    capital: 'San José de Mayo',
    poblacion: 119714,
    agenciasDac: [
      'San José de Mayo',
      'Ciudad del Plata',
      'Libertad',
      'Ecilda Paullier',
      'Puntas de Valdez',
      'Villa Rodríguez',
    ],
    agenciasTotal: 7,
    fuente: FUENTE_DAC,
  },
  {
    slug: 'soriano',
    capital: 'Mercedes',
    poblacion: 83685,
    agenciasDac: [
      'Mercedes',
      'Dolores',
      'Cardona',
      'José Enrique Rodó',
      'Palmitas',
      'Risso',
      'Santa Catalina',
      'Cañada Nieto',
      'Palo Solo',
    ],
    agenciasTotal: 10,
    fuente: FUENTE_DAC,
  },
  {
    slug: 'tacuarembo',
    capital: 'Tacuarembó',
    poblacion: 96013,
    agenciasDac: ['Tacuarembó', 'Paso de los Toros', 'San Gregorio de Polanco', 'Tambores', 'Caraguatá'],
    agenciasTotal: 6,
    fuente: FUENTE_DAC,
  },
  {
    slug: 'treinta-y-tres',
    capital: 'Treinta y Tres',
    poblacion: 47706,
    agenciasDac: ['Treinta y Tres', 'Vergara', 'Santa Clara de Olimar', 'Cerro Chato', 'Rincón'],
    agenciasTotal: 5,
    fuente: FUENTE_DAC,
  },
]

export function findEnvio(slug: string) {
  return enviosDepartamentos.find((e) => e.slug === slug)
}
