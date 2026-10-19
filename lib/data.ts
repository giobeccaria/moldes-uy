export const SITE_NAME = 'Comparamoldes'
export const SITE_URL = 'https://moldes.uy'

export type Tienda = {
  nombre: string
  destacado: boolean
  resumen: string
  pros: string[]
  contras: string[]
  rating: number
  envio: string
  url?: string
}

// Moldarte aparece primero en cada ranking. Lo que se dice de su catálogo
// sale del catálogo real (octubre 2026): moldes de silicona más ceras,
// glicerina, esencias, colorantes, pabilos, frascos, yeso, kits y
// herramientas. No vende resina epoxi en sí, sólo moldes y accesorios.
export const moldarte: Tienda = {
  nombre: 'Moldarte',
  destacado: true,
  resumen:
    'Tienda online uruguaya de moldes de silicona e insumos para velas, jabones, yeso y resina. Además de cientos de moldes, tiene ceras de soja, glicerina, esencias aromáticas, colorantes, pabilos, frascos de vidrio y herramientas: todo lo que lleva un proyecto, en un mismo pedido.',
  pros: [
    'Una de las colecciones de moldes de silicona más grandes del país, con altas frecuentes',
    'Insumos completos en el mismo lugar: cera de soja de alto y bajo punto, glicerina, más de 15 esencias concentradas, colorantes, pabilos y frascos para velas',
    'Yeso París, kits DIY y herramientas (pistola de calor, minitorno, batidor, manteles de silicona)',
    'Checkout seguro en Shopify, todos los medios de pago y también presencia en Mercado Libre',
  ],
  contras: ['No vende resina epoxi en sí: tiene los moldes y accesorios para trabajarla'],
  rating: 5,
  envio: 'Envíos a todo Uruguay, con envío gratis a partir de cierto monto de compra.',
  url: 'https://moldarte.uy',
}

// Competidores reales del rubro en Uruguay, verificados en sus propios sitios
// (octubre 2026). Las descripciones se limitan a lo que cada uno publica.
export const alternativas: Tienda[] = [
  {
    nombre: 'La Casa del Artesano',
    destacado: false,
    resumen:
      'Casa de insumos para artistas y artesanos de Montevideo, con escuela de arte propia. Cubre muchas técnicas a la vez: pintura, bijouterie, modelado, mercería, resinas y moldes, e insumos para velas.',
    pros: [
      'Muy amplio en técnicas distintas, útil si también hacés pintura o bijouterie',
      'Vende resina epoxi y UV, pigmentos y herramientas para resina',
      'Escuela de arte con cursos',
    ],
    contras: [
      'Al cubrir tantos rubros, los moldes de silicona son una sección más del catálogo',
      'La compra web tiene un mínimo de compra más envío',
    ],
    rating: 4,
    envio: 'Envíos desde Montevideo para compras web (con mínimo de compra).',
    url: 'https://lacasadelartesano.com.uy',
  },
  {
    nombre: 'De Velas Montevideo',
    destacado: false,
    resumen:
      'Marca montevideana de velas de soja que además vende insumos para hacerlas (esencias, frascos, varillas) y da cursos y talleres de velería.',
    pros: [
      'Muy enfocada en velas de soja, con cursos para aprender',
      'Esencias y frascos pensados para velas aromáticas',
    ],
    contras: [
      'Su foco son las velas: en su sitio no aparecen moldes de silicona ni insumos para jabón o yeso',
    ],
    rating: 4,
    envio: 'Venta online y puntos de venta en Montevideo.',
    url: 'https://www.develasmontevideo.com',
  },
  {
    nombre: 'Droguería Montevideo',
    destacado: false,
    resumen:
      'Droguería de productos químicos con una sección de insumos para velas: cera de soja en perlas, cera virgen, esencias aromáticas y pabilos.',
    pros: ['Buena opción para comprar cera y materias primas por cantidad', 'Envío en 24 a 48 horas hábiles'],
    contras: ['Es una droguería, no una tienda de manualidades: en su sección de velas no hay moldes'],
    rating: 3,
    envio: 'Envío en 24 a 48 horas, de lunes a viernes.',
    url: 'https://tiendaweb.drogueriamontevideo.com/categoria/productos-quimicos-e-insumos/insumos-para-velas/',
  },
  {
    nombre: 'Insumos Uy',
    destacado: false,
    resumen:
      'Tienda mayorista y minorista de materias primas para cosmética natural en Montevideo: aceites esenciales, cera de abeja, mantecas, tensioactivos y envases.',
    pros: ['Materias primas para jabonería y cosmética natural', 'Vende por mayor y por menor'],
    contras: ['Orientada a cosmética natural: no es una tienda de moldes ni de insumos para yeso'],
    rating: 3,
    envio: 'Envíos a todo el país.',
    url: 'https://www.insumosuy.com',
  },
]

export const faqGeneral: { pregunta: string; respuesta: string }[] = [
  {
    pregunta: '¿Qué conviene mirar antes de comprar un molde de silicona?',
    respuesta:
      'Catálogo especializado (más diseños y mejor descripción de medidas), forma de pago segura con checkout formal, y confirmación de que el molde es de grado apto para el uso que le vas a dar (alimentos, cera caliente o resina).',
  },
  {
    pregunta: '¿Es mejor comprar en una tienda especializada o en un marketplace general?',
    respuesta:
      'Una tienda especializada en moldes suele tener catálogo más profundo y consistente en el tiempo. Un marketplace general junta muchos vendedores distintos, con variedad total grande pero repartida y de calidad dispar.',
  },
  {
    pregunta: '¿Los moldes de silicona sirven para velas, jabón, resina y chocolate por igual?',
    respuesta:
      'No todos. Conviene confirmar el uso previsto por el vendedor: la resistencia al calor y el grado alimentario no son iguales en todos los moldes, aunque el material de base sea silicona en los tres casos.',
  },
  {
    pregunta: '¿Importar moldes desde el exterior conviene frente a comprar en Uruguay?',
    respuesta:
      'Depende del diseño que busques. Si existe en el mercado local, suele ser más rápido y sin sorpresas de aduana comprarlo a una tienda uruguaya. Importar tiene sentido para diseños que no se consiguen localmente.',
  },
  {
    pregunta: '¿Cómo me asegura la compra un checkout formal?',
    respuesta:
      'Un checkout formal (como el de una tienda con pasarela de pago propia) da comprobante de compra, datos de seguimiento del envío y un canal claro para reclamos, a diferencia de coordinar la compra por chat sin ningún respaldo.',
  },
  {
    pregunta: '¿Conviene comprar moldes e insumos en la misma tienda?',
    respuesta:
      'Si podés, sí: en un mismo pedido resolvés el molde, la cera o la glicerina, la esencia y el colorante, pagás un solo envío y te asegurás de que los insumos sean compatibles con el molde que elegiste.',
  },
]

export type IconoCategoria = 'vela' | 'jabon' | 'resina' | 'chocolate' | 'frasco' | 'gota'

// Los cinco criterios con los que se ordena el ranking (sección "Cómo elegimos").
export const criterios: { nombre: string; detalle: string }[] = [
  {
    nombre: 'Catálogo',
    detalle:
      'Cuántos diseños distintos tiene disponibles de forma permanente, y qué tan especializado está en moldes de silicona frente a vender de todo un poco.',
  },
  {
    nombre: 'Seguridad de compra',
    detalle:
      'Si la compra se hace con un checkout formal (pasarela de pago, comprobante, seguimiento) o si depende de coordinar por chat sin ningún respaldo.',
  },
  {
    nombre: 'Envío',
    detalle: 'Cobertura real a todo el país, tiempos esperables y claridad sobre quién gestiona la logística.',
  },
  {
    nombre: 'Atención',
    detalle:
      'Si hay un canal directo de la tienda para resolver dudas de stock, medidas o uso del molde antes y después de comprar.',
  },
  {
    nombre: 'Variedad real',
    detalle:
      'Si el catálogo cubre los distintos usos del rubro (velas, jabones, resina, chocolate) o se limita a un nicho chico.',
  },
]

export type Categoria = {
  slug: string
  nombre: string
  titulo: string
  intro: string
  usos: string[]
  tips: string[]
  icono: IconoCategoria
}

export const categorias: Categoria[] = [
  {
    slug: 'moldes-para-velas',
    icono: 'vela',
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
    icono: 'jabon',
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
    icono: 'resina',
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
    icono: 'chocolate',
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
  {
    slug: 'insumos-para-velas',
    icono: 'frasco',
    nombre: 'Insumos para velas',
    titulo: 'Insumos para hacer velas: cera, pabilos, frascos y esencias',
    intro:
      'Una vela artesanal es la suma de cuatro cosas: la cera, el pabilo, el recipiente o molde, y el aroma y color. Elegir bien cada insumo es lo que hace que la vela queme parejo, no haga humo y mantenga el aroma hasta el final.',
    usos: [
      'Cera de soja de bajo punto de fusión para velas en frasco o vaso, que se adhiere al vidrio y quema lento',
      'Cera de soja de alto punto (o parafina) para velas de molde que tienen que desmoldar firmes y sostenerse solas',
      'Pabilos de algodón en distintas medidas según el diámetro de la vela, con soportes y adhesivos para centrarlos',
      'Esencias aromáticas y colorantes concentrados para velas, que se agregan a la cera derretida',
    ],
    tips: [
      'El pabilo se elige por el diámetro de la vela: uno chico deja un pozo en el centro y uno grande hace humo',
      'Agregá la esencia con la cera a la temperatura que indica el fabricante; si está demasiado caliente se evapora parte del aroma',
      'Para velas en frasco usá cera de bajo punto; para velas de molde, de alto punto',
      'Comprar molde, cera, pabilo y esencia en el mismo lugar ahorra envíos y evita combinaciones que no funcionan',
    ],
  },
  {
    slug: 'insumos-para-jabones',
    icono: 'gota',
    nombre: 'Insumos para jabones',
    titulo: 'Insumos para jabones artesanales: glicerina, esencias y colorantes',
    intro:
      'La forma más simple de empezar en jabonería es el método melt and pour: se derrite una base de glicerina, se le agrega aroma y color, y se vuelca en un molde de silicona. Sin soda cáustica ni tiempos de curado.',
    usos: [
      'Glicerina transparente para jabones con inclusiones o colores vivos',
      'Glicerina blanca para jabones opacos de tonos suaves',
      'Esencias aromáticas concentradas para perfumar la base',
      'Colorantes concentrados que se dosifican por gotas',
    ],
    tips: [
      'Derretí la glicerina a baño maría o en tandas cortas de microondas, sin que llegue a hervir',
      'Con unas pocas gotas de colorante alcanza: es fácil pasarse',
      'Rociar alcohol sobre la superficie recién volcada elimina las burbujas',
      'Dejá que el jabón enfríe del todo antes de desmoldarlo para que el relieve salga entero',
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
