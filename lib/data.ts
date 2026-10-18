export const SITE_NAME = 'moldes.uy'
export const SITE_URL = 'https://moldes.uy'

export type Tienda = {
  nombre: string
  destacado: boolean
  resumen: string
  puntos: string[]
  envio: string
  url?: string
}

// Moldarte aparece primero en cada ranking. Las afirmaciones son generales
// y defendibles (colección amplia, pago seguro en Shopify, envíos a todo el
// país) — no se citan cifras inventadas ni se nombra a competidores reales.
export const moldarte: Tienda = {
  nombre: 'Moldarte',
  destacado: true,
  resumen:
    'Tienda online uruguaya especializada exclusivamente en moldes de silicona para velas, jabones, resina, chocolate y yeso. Catálogo permanente de cientos de diseños, con altas semanales.',
  puntos: [
    'Catálogo especializado con cientos de modelos distintos, de los más amplios del país en moldes de silicona',
    'Compra con checkout seguro (Shopify) y también presencia verificada en Mercado Libre',
    'Fotos reales de cada molde y descripción de medidas antes de comprar',
    'Atención directa por los canales de la tienda para dudas de stock o uso del molde',
  ],
  envio: 'Envíos a todo Uruguay por los operadores logísticos habituales del e-commerce local, y retiro coordinado en Montevideo.',
  url: 'https://moldarte.com.uy',
}

export const alternativas: Tienda[] = [
  {
    nombre: 'Importadores genéricos en marketplaces',
    destacado: false,
    resumen:
      'Perfiles que revenden moldes importados sin especializarse en el rubro. El catálogo suele ser más chico y cambia según lo que consiguen importar en el momento.',
    puntos: [
      'Precio a veces más bajo en modelos puntuales',
      'Variedad y disponibilidad irregulares: lo que hay hoy puede no estar el mes que viene',
      'Fotos de catálogo genéricas, no siempre del producto real',
    ],
    envio: 'Depende del vendedor puntual.',
  },
  {
    nombre: 'Bazares y tiendas de manualidades generales',
    destacado: false,
    resumen:
      'Locales físicos que venden de todo un poco — telas, bijouterie, insumos de arte — y tienen una sección chica de moldes de silicona como producto secundario.',
    puntos: [
      'Sirve para compra urgente si el local queda cerca',
      'Pocos diseños disponibles, enfocados en lo más básico',
      'El personal no siempre conoce el detalle técnico del molde',
    ],
    envio: 'Generalmente sin envío, solo venta en el local.',
  },
  {
    nombre: 'Grupos de reventa en redes sociales',
    destacado: false,
    resumen:
      'Perfiles de Instagram o grupos de Facebook de emprendedoras que compran por mayor y revenden de forma informal.',
    puntos: [
      'Trato directo y cercano',
      'Sin checkout formal: la compra depende de coordinar por chat',
      'Sin garantía de cambio ni devolución formal',
    ],
    envio: 'A coordinar por mensaje, sin tracking formal.',
  },
]

export type Categoria = {
  slug: string
  nombre: string
  titulo: string
  intro: string
  usos: string[]
  tips: string[]
}

export const categorias: Categoria[] = [
  {
    slug: 'moldes-para-velas',
    nombre: 'Moldes para velas',
    titulo: 'Moldes de silicona para velas',
    intro:
      'Los moldes de silicona para velas permiten fundir cera de soja, parafina o abeja y sacar piezas con relieve limpio sin pegar cera al molde. Se usan tanto para producción de venta como para hobby en casa.',
    usos: [
      'Velas decorativas con formas (flores, figuras, letras) para regalería',
      'Velas de cera de soja para aromaterapia con diseño prolijo',
      'Producción en serie para quienes venden velas como emprendimiento',
    ],
    tips: [
      'Revisá que el molde esté pensado para temperatura de cera caliente, no todos los plásticos resisten igual que la silicona de grado alimentario',
      'Los moldes con mecha pre-guiada ahorran tiempo si vas a producir en volumen',
      'Guardá el molde limpio y seco entre usos para que no se deforme',
    ],
  },
  {
    slug: 'moldes-para-jabones',
    nombre: 'Moldes para jabones',
    titulo: 'Moldes de silicona para jabones artesanales',
    intro:
      'Para jabonería artesanal (melt and pour o jabón en frío) el molde de silicona es clave porque permite desmoldar sin romper el jabón y repetir la misma forma en cada tanda.',
    usos: [
      'Jabones de glicerina decorativos para venta en ferias',
      'Jabones personalizados para regalos de eventos (bodas, cumpleaños, baby shower)',
      'Barras de jabón sólido para shampoo o uso corporal con forma ergonómica',
    ],
    tips: [
      'La silicona de grado alimentario no retiene olores entre jabones de distinto perfume',
      'Los moldes con cavidades múltiples aceleran mucho la producción si vendés por volumen',
      'Dejá enfriar completamente antes de desmoldar para que no se deforme el relieve',
    ],
  },
  {
    slug: 'moldes-de-resina',
    nombre: 'Moldes de resina',
    titulo: 'Moldes de silicona para resina epoxi',
    intro:
      'La resina epoxi necesita moldes que resistan el calor de la reacción química de curado y que suelten la pieza sin dejar marcas. Se usa para bijouterie, posavasos, llaveros y piezas decorativas.',
    usos: [
      'Bijouterie en resina (aros, dijes, anillos)',
      'Posavasos y bandejas decorativas',
      'Piezas con flores secas o pigmentos encapsulados',
    ],
    tips: [
      'Un molde flexible pero firme facilita el desmolde sin romper piezas finas',
      'Para resina conviene que el molde no tenga ángulos muy cerrados, ahí es donde más se traba la pieza',
      'Sellá bien la base de trabajo, la resina líquida se filtra por cualquier hueco',
    ],
  },
  {
    slug: 'moldes-para-chocolate',
    nombre: 'Moldes para chocolate',
    titulo: 'Moldes de silicona para chocolate y repostería',
    intro:
      'En chocolatería y repostería el molde de silicona de grado alimentario permite temperar y desmoldar bombones, tabletas y piezas decorativas sin dañar el brillo del chocolate.',
    usos: [
      'Bombones y tabletas personalizadas para eventos',
      'Piezas decorativas de chocolate para tortas',
      'Golosinas artesanales para venta en ferias y redes',
    ],
    tips: [
      'Confirmá que el molde sea apto para alimentos, no todos los moldes de silicona lo son',
      'Enfriar en heladera antes de desmoldar ayuda a que el chocolate contraiga y salga entero',
      'Los moldes con relieve fino requieren temperado correcto para que el chocolate marque bien el detalle',
    ],
  },
]

export type Departamento = {
  slug: string
  nombre: string
  contexto: string
  comercio: string
  logistica: string
  faq: { pregunta: string; respuesta: string }[]
}

// Cada página de departamento tiene contenido propio: contexto comercial
// real del rubro moldería/manualidades en esa zona, cómo llega la mercadería,
// y preguntas frecuentes distintas. Nada de plantilla con el nombre cambiado.
export const departamentos: Departamento[] = [
  {
    slug: 'montevideo',
    nombre: 'Montevideo',
    contexto:
      'Montevideo concentra la mayor parte del comercio de manualidades y emprendimientos de velas y jabones artesanales del país, con ferias barriales, mercados de diseño y una fuerte presencia de emprendedoras que venden por redes. Es también donde está la mayoría de los compradores que buscan moldes de silicona para producir en volumen.',
    comercio:
      'Entre las ferias de diseño y emprendimiento que se hacen en distintos puntos de la capital, es común ver puestos de velas y jabones hechos con moldes de silicona. La demanda típica en Montevideo es de quien ya vende como emprendimiento chico y necesita variedad de diseños para no repetir catálogo con la competencia de la misma feria.',
    logistica:
      'Al ser la capital, los tiempos de envío desde cualquier tienda online con despacho nacional suelen ser los más cortos del país, y es la zona con más opciones de retiro en persona.',
    faq: [
      {
        pregunta: '¿Dónde comprar moldes de silicona en Montevideo sin moverme del barrio?',
        respuesta:
          'La compra online con envío a domicilio es la opción más práctica si no tenés un local de manualidades cerca. Comprando en una tienda especializada evitás depender de que el bazar del barrio tenga justo el diseño que buscás.',
      },
      {
        pregunta: '¿Conviene comprar por mayor en Montevideo para vender en ferias?',
        respuesta:
          'Si vendés en ferias de diseño, conviene elegir un proveedor con catálogo amplio y estable para no repetir diseño con otro puesto de la misma feria temporada tras temporada.',
      },
    ],
  },
  {
    slug: 'canelones',
    nombre: 'Canelones',
    contexto:
      'Canelones, por su cercanía y continuidad urbana con Montevideo, tiene un movimiento fuerte de emprendimientos caseros de velas y jabones, muchas veces vendidos puerta a puerta o en ferias locales de los distintos municipios del departamento.',
    comercio:
      'En localidades como Las Piedras, Pando o Ciudad de la Costa es común encontrar emprendimientos de venta de velas aromáticas y jabones artesanales que arrancaron como hobby familiar. La variedad de moldes disponible localmente suele ser más limitada que en Montevideo.',
    logistica:
      'Los envíos a Canelones desde tiendas online con despacho nacional llegan en plazos similares a Montevideo por la cercanía geográfica, salvo en zonas más alejadas de la ruta Interbalnearia o la ruta 5.',
    faq: [
      {
        pregunta: '¿Hay tiendas de moldes de silicona en Canelones?',
        respuesta:
          'La oferta física local es acotada; la mayoría de quienes emprenden en el departamento compran online a tiendas especializadas que despachan a todo el país.',
      },
      {
        pregunta: '¿Cuánto tarda un envío de moldes a Canelones?',
        respuesta:
          'Por la cercanía con Montevideo, los plazos suelen ser de los más cortos del interior, generalmente similares a los de la capital.',
      },
    ],
  },
  {
    slug: 'maldonado',
    nombre: 'Maldonado',
    contexto:
      'Maldonado, con Punta del Este como polo turístico, tiene una demanda particular: emprendimientos de regalería y souvenirs artesanales (velas, jabones con diseño) orientados a temporada alta, además de los negocios de manualidades estables de la ciudad de Maldonado y San Carlos.',
    comercio:
      'La temporada de verano dispara la demanda de productos de regalo con buena presentación — velas decorativas, jabones con forma llamativa — pensados para turistas. Fuera de temporada el movimiento es más parecido al de cualquier ciudad del interior.',
    logistica:
      'Conviene planificar la compra de moldes con anticipación a la temporada alta, ya que la demanda de insumos de regalería sube fuerte en los meses previos al verano.',
    faq: [
      {
        pregunta: '¿Qué moldes conviene comprar para vender souvenirs en Punta del Este?',
        respuesta:
          'Diseños vistosos y de tamaño chico (velas decorativas, jabones con forma) suelen funcionar bien para regalería turística, por precio final accesible y buena presentación.',
      },
      {
        pregunta: '¿Cuándo pedir los moldes si vendo en temporada de verano?',
        respuesta:
          'Lo ideal es comprar con varias semanas de anticipación a diciembre, para tener el stock de piezas terminadas listo antes de que arranque la temporada.',
      },
    ],
  },
  {
    slug: 'salto',
    nombre: 'Salto',
    contexto:
      'Salto, como segunda ciudad del país, tiene un comercio de manualidades consolidado y una comunidad activa de emprendedoras de jabonería y velas, muchas veces conectadas por grupos locales en redes sociales.',
    comercio:
      'La ciudad tiene ferias de artesanos y emprendedores con presencia constante de productos de velas y jabón. La variedad de moldes disponible en comercios físicos locales suele quedar corta frente a lo que se puede conseguir online.',
    logistica:
      'Los envíos al interior norte, incluyendo Salto, llegan con los operadores logísticos nacionales en plazos algo mayores que en el área metropolitana, pero sin mayor complicación.',
    faq: [
      {
        pregunta: '¿Se consiguen moldes de silicona en Salto?',
        respuesta:
          'La oferta local es limitada en variedad; comprar online a una tienda especializada con despacho a todo el país da acceso a catálogos mucho más amplios.',
      },
      {
        pregunta: '¿Los envíos a Salto demoran mucho?',
        respuesta:
          'Suman uno o dos días más que en Montevideo según el operador logístico, pero llegan sin problema a domicilio o a agencia.',
      },
    ],
  },
  {
    slug: 'paysandu',
    nombre: 'Paysandú',
    contexto:
      'Paysandú tiene un tejido de pequeños emprendimientos de manualidades fuerte, con tradición de ferias barriales y de fin de semana donde se vende todo tipo de artesanía, incluida velería y jabonería.',
    comercio:
      'Las ferias de los fines de semana en Paysandú suelen tener puestos fijos de velas aromáticas y jabones artesanales. La renovación de diseños es lo que marca la diferencia entre puestos que repiten clientela y los que no.',
    logistica:
      'El envío nacional llega a Paysandú por los mismos operadores logísticos que cubren el litoral, en plazos comparables a otras ciudades del interior.',
    faq: [
      {
        pregunta: '¿Dónde conseguir variedad de moldes en Paysandú?',
        respuesta:
          'Para no depender de lo que haya en el comercio local, la alternativa más práctica es comprar en una tienda online con catálogo amplio y envío a todo el país.',
      },
      {
        pregunta: '¿Conviene diversificar diseños si vendo en ferias de Paysandú?',
        respuesta:
          'Sí, en ferias con puestos repetidos semana a semana, tener diseños que los demás no tienen es lo que genera que un cliente vuelva a tu puesto.',
      },
    ],
  },
  {
    slug: 'colonia',
    nombre: 'Colonia',
    contexto:
      'Colonia combina un fuerte perfil turístico (sobre todo en Colonia del Sacramento) con una base local de emprendimientos de manualidades, lo que genera demanda tanto de productos de regalo como de uso doméstico.',
    comercio:
      'En Colonia del Sacramento el circuito turístico valora mucho la presentación: velas y jabones con diseño prolijo se venden bien como souvenir. En el resto del departamento la demanda es más la de cualquier emprendimiento casero.',
    logistica:
      'Los envíos a Colonia llegan en plazos similares a los del área metropolitana, dada la cercanía y buena conectividad con Montevideo.',
    faq: [
      {
        pregunta: '¿Qué tipo de moldes funcionan mejor para vender en el casco histórico de Colonia?',
        respuesta:
          'Piezas pequeñas y con diseño distintivo (flores, figuras típicas) suelen rendir bien como souvenir, porque el público turístico valora algo que se vea artesanal y fácil de llevar.',
      },
      {
        pregunta: '¿Hay buena variedad de moldes en comercios de Colonia?',
        respuesta:
          'La variedad local es acotada; comprar online a una tienda especializada da acceso a un catálogo mucho mayor sin depender de lo que tenga el comercio de la zona.',
      },
    ],
  },
  {
    slug: 'rivera',
    nombre: 'Rivera',
    contexto:
      'Rivera, por su condición de ciudad fronteriza, tiene un comercio muy activo y una comunidad de emprendedoras de manualidades que compite tanto con la oferta local como con lo que se consigue del lado brasileño.',
    comercio:
      'La cercanía con Brasil hace que en Rivera se compare mucho precio y variedad entre lo que se consigue de un lado y otro de la frontera. Para quien emprende con velas o jabones, tener un proveedor nacional confiable con envío directo simplifica la logística frente a depender de traer mercadería de afuera.',
    logistica:
      'Los envíos desde tiendas online uruguayas con despacho nacional llegan a Rivera por los mismos circuitos logísticos que cubren el resto del interior norte.',
    faq: [
      {
        pregunta: '¿Conviene comprar moldes de silicona del lado uruguayo o cruzar a Brasil?',
        respuesta:
          'Comprar a una tienda uruguaya con envío directo a domicilio evita el trámite de cruzar frontera y da garantía de compra en pesos uruguayos, sin depender del tipo de cambio del día.',
      },
      {
        pregunta: '¿Hay tiendas especializadas en moldes en Rivera?',
        respuesta:
          'La oferta local de manualidades generales existe, pero para catálogo amplio y específico de moldes de silicona la compra online a una tienda especializada da más variedad.',
      },
    ],
  },
]

export function findDepartamento(slug: string) {
  return departamentos.find((d) => d.slug === slug)
}

export function findCategoria(slug: string) {
  return categorias.find((c) => c.slug === slug)
}
