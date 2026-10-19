export const SITE_NAME = 'moldes.uy'
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
  // Color de marca para el badge del ranking (cada competidor se identifica
  // por color + iniciales, Moldarte usa su propio símbolo).
  color: string
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
  color: '#1f4e79',
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
    color: '#9c4221',
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
    color: '#7a5c1e',
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
    color: '#1d6e5c',
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
    color: '#6b3fa0',
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
  {
    slug: 'artigas',
    nombre: 'Artigas',
    contexto:
      'Artigas es el departamento más al norte del país, con una economía ligada a la agricultura, la minería y el comercio fronterizo con Brasil en Bella Unión y la propia capital departamental. Los emprendimientos de manualidades conviven ahí con una oferta comercial muy orientada a lo agropecuario.',
    comercio:
      'En la ciudad de Artigas el circuito de ferias y emprendimientos es más chico que en el litoral o el sur, así que quien arranca con velas o jabones artesanales suele depender más de la venta directa por redes que de una feria fija semanal.',
    logistica:
      'Por ser el punto más alejado de Montevideo, los envíos con operadores logísticos nacionales tardan algo más que al resto del interior; conviene agrupar compras de insumos para no fraccionar varios envíos chicos.',
    faq: [
      {
        pregunta: '¿Cuánto tarda en llegar un pedido de moldes a Artigas?',
        respuesta:
          'Al ser el departamento más alejado de la capital, el envío nacional puede sumar uno o dos días más que a Montevideo o el litoral; conviene planificarlo con margen si es para una fecha puntual.',
      },
      {
        pregunta: '¿Conviene comprar varios insumos juntos si estoy en Artigas?',
        respuesta:
          'Sí: agrupar cera, moldes, esencias y colorantes en un mismo pedido evita pagar varios envíos separados hacia el extremo norte del país.',
      },
    ],
  },
  {
    slug: 'cerro-largo',
    nombre: 'Cerro Largo',
    contexto:
      'Cerro Largo, con Melo como capital, es otro departamento de frontera con Brasil, con una economía de base agropecuaria y una comunidad de emprendedoras de manualidades que suele moverse por recomendación y grupos de vecinos más que por locales especializados.',
    comercio:
      'En Melo las ferias vecinales y los bazares de barrio son el canal habitual para vender velas y jabones artesanales a pequeña escala; la variedad de moldes en el comercio físico local es limitada frente a lo que ofrece una tienda online nacional.',
    logistica:
      'El envío nacional a Cerro Largo llega por los mismos circuitos que cubren el este del interior, con plazos algo mayores que en el área metropolitana pero sin mayor complicación logística.',
    faq: [
      {
        pregunta: '¿Dónde conseguir variedad de moldes en Melo?',
        respuesta:
          'La oferta local de manualidades es acotada en diseños de moldes de silicona; comprar online a una tienda especializada da acceso a un catálogo más amplio sin depender del bazar de la zona.',
      },
      {
        pregunta: '¿Se puede pagar con los medios habituales desde Cerro Largo?',
        respuesta:
          'Sí, un checkout formal online acepta los mismos medios de pago que en cualquier otro departamento; no depende de la ubicación del comprador.',
      },
    ],
  },
  {
    slug: 'durazno',
    nombre: 'Durazno',
    contexto:
      'Durazno, en el centro geográfico del país, tiene una economía agropecuaria fuerte y una ciudad capital con un comercio local activo donde conviven bazares tradicionales con emprendimientos más nuevos de jabonería y velería artesanal.',
    comercio:
      'La ciudad de Durazno tiene ferias de emprendedores en distintas fechas del año, además de una demanda estable de productos de regalo (velas, jabones) para fechas como el Día de la Madre o fin de año.',
    logistica:
      'Por su ubicación central, Durazno recibe envíos nacionales en plazos intermedios, generalmente sin la demora adicional que sí afecta a los departamentos más alejados de las rutas principales.',
    faq: [
      {
        pregunta: '¿Conviene comprar moldes con anticipación a fechas como el Día de la Madre en Durazno?',
        respuesta:
          'Sí, para tener tiempo de producir las piezas y no depender de un envío de último momento, conviene pedir los moldes e insumos con varias semanas de anticipación a la fecha de venta.',
      },
      {
        pregunta: '¿Hay buena oferta de insumos para jabonería en Durazno?',
        respuesta:
          'La oferta física local es limitada; la mayoría de quienes hacen jabonería artesanal en el departamento compran glicerina, esencias y colorantes a tiendas online con despacho nacional.',
      },
    ],
  },
  {
    slug: 'flores',
    nombre: 'Flores',
    contexto:
      'Flores es el departamento menos poblado del país, con Trinidad como capital. El comercio de manualidades ahí es chico pero existe, apoyado sobre todo en la venta directa entre vecinos y en alguna feria puntual.',
    comercio:
      'Al ser un departamento chico, en Trinidad no suele haber un local dedicado específicamente a moldes de silicona: quien emprende con velas o jabones generalmente combina compra online con algún insumo que consigue en una mercería general.',
    logistica:
      'Los envíos nacionales llegan a Flores por los mismos operadores logísticos que cubren el centro del país, sin mayor demora pese a ser un departamento de baja densidad de reparto.',
    faq: [
      {
        pregunta: '¿Hay tiendas de moldes de silicona en Trinidad?',
        respuesta:
          'La oferta local específica de moldes es prácticamente inexistente al ser un departamento chico; comprar online a una tienda especializada con envío nacional es la opción más práctica.',
      },
      {
        pregunta: '¿Los envíos a Flores tardan más por ser un departamento chico?',
        respuesta:
          'No necesariamente: al estar sobre el corredor central del país, los plazos de envío suelen ser similares a los de otros departamentos del interior sur.',
      },
    ],
  },
  {
    slug: 'florida',
    nombre: 'Florida',
    contexto:
      'Florida combina una ciudad capital con comercio consolidado y una zona rural extensa. Los emprendimientos de velas y jabones artesanales conviven con ferias tradicionales y con la demanda de regalería ligada a eventos religiosos y turismo local.',
    comercio:
      'La ciudad de Florida tiene ferias de artesanos con presencia constante de productos de regalo con forma trabajada, y una demanda puntual más alta alrededor de fechas con afluencia de visitantes a la ciudad.',
    logistica:
      'Por su cercanía relativa con Montevideo sobre la ruta 5, los envíos nacionales a Florida llegan en plazos parecidos a los del área metropolitana.',
    faq: [
      {
        pregunta: '¿Qué tipo de moldes funcionan bien para vender en ferias de Florida?',
        respuesta:
          'Piezas de buena presentación y tamaño chico a mediano (velas decorativas, jabones con forma) suelen funcionar bien como producto de regalo en ferias de artesanos.',
      },
      {
        pregunta: '¿Cuánto tardan los envíos de moldes a Florida?',
        respuesta:
          'Por la cercanía con Montevideo sobre la ruta 5, los plazos de entrega suelen ser de los más cortos del interior.',
      },
    ],
  },
  {
    slug: 'lavalleja',
    nombre: 'Lavalleja',
    contexto:
      'Lavalleja, con Minas como capital, tiene una identidad fuerte ligada a la artesanía y el turismo de sierras, lo que hace que la regalería artesanal (incluidos velas y jabones con diseño) tenga una demanda más sostenida que en otros departamentos de tamaño similar.',
    comercio:
      'Minas es conocida por su tradición de dulces y artesanías, y esa cultura de producto local con identidad propia se traslada también a quienes hacen velas y jabones artesanales para vender a turistas que visitan la zona de las sierras.',
    logistica:
      'Los envíos nacionales a Lavalleja llegan en plazos similares a los del área metropolitana por su cercanía con Montevideo y Canelones.',
    faq: [
      {
        pregunta: '¿Conviene apostar a diseños con identidad local para vender en Minas?',
        respuesta:
          'Sí, dado el perfil turístico de la ciudad, los productos con un toque distintivo (forma, aroma, presentación) suelen diferenciarse mejor que una pieza genérica.',
      },
      {
        pregunta: '¿Hay tiendas de insumos para manualidades en Lavalleja?',
        respuesta:
          'La oferta física es limitada en variedad de moldes de silicona específicos; comprar online a una tienda especializada da acceso a un catálogo más amplio y actualizado.',
      },
    ],
  },
  {
    slug: 'rocha',
    nombre: 'Rocha',
    contexto:
      'Rocha tiene el perfil turístico más marcado de la costa este, con balnearios como La Paloma y Punta del Diablo, lo que genera una demanda de temporada alta muy parecida a la de Maldonado pero en una escala más chica y con un perfil de comprador más bohemio.',
    comercio:
      'En temporada de verano, las ferias artesanales de los balnearios rochenses tienen fuerte presencia de velas aromáticas, jabones artesanales y bijouterie en resina, pensados para un público turístico que busca producto local y con identidad.',
    logistica:
      'Fuera de temporada alta el movimiento comercial baja mucho, así que conviene anticipar la compra de moldes e insumos antes de que arranque el verano, cuando la demanda logística se concentra en pocos meses.',
    faq: [
      {
        pregunta: '¿Qué moldes conviene tener para vender en los balnearios de Rocha en temporada?',
        respuesta:
          'Diseños con estética natural o artesanal (formas orgánicas, texturas) suelen conectar bien con el perfil de comprador de balnearios como La Paloma o Punta del Diablo.',
      },
      {
        pregunta: '¿Cuándo conviene comprar los insumos si vendo en la costa rochense?',
        respuesta:
          'Lo ideal es tener el stock de moldes e insumos listo antes de diciembre, porque en plena temporada alta el tiempo para producir se achica mucho.',
      },
    ],
  },
  {
    slug: 'rio-negro',
    nombre: 'Río Negro',
    contexto:
      'Río Negro, con Fray Bentos como capital, tiene una economía ligada al puerto y a la industria forestal y agroindustrial, con un comercio local donde la manualidad artesanal convive con una oferta general de bazar y mercería.',
    comercio:
      'En Fray Bentos y Young la venta de velas y jabones artesanales suele darse más por encargo y redes sociales que por local fijo, con una demanda que crece en fechas de regalo como fin de año.',
    logistica:
      'Los envíos nacionales a Río Negro llegan por los mismos circuitos logísticos que cubren el litoral oeste, en plazos comparables a los de Paysandú o Colonia.',
    faq: [
      {
        pregunta: '¿Hay mucha variedad de moldes en comercios de Fray Bentos o Young?',
        respuesta:
          'La variedad local es acotada; comprar a una tienda online especializada con despacho nacional da acceso a un catálogo mucho más amplio.',
      },
      {
        pregunta: '¿Los envíos a Río Negro demoran mucho más que a Montevideo?',
        respuesta:
          'Suman algún día más según el operador logístico, pero llegan sin mayor complicación tanto a domicilio como a agencia.',
      },
    ],
  },
  {
    slug: 'san-jose',
    nombre: 'San José',
    contexto:
      'San José, por su cercanía con Montevideo y su fuerte tradición agroindustrial (lechería, producción láctea), tiene un tejido de emprendimientos familiares donde las manualidades con velas y jabones suelen empezar como actividad complementaria.',
    comercio:
      'En la ciudad de San José de Mayo y en localidades como Libertad y Ciudad del Plata hay ferias vecinales con presencia constante de productos artesanales, incluidos velas y jabones con diseño propio.',
    logistica:
      'Por su cercanía con Montevideo, los envíos nacionales a San José llegan en plazos muy similares a los del área metropolitana.',
    faq: [
      {
        pregunta: '¿Conviene comprar moldes online estando tan cerca de Montevideo?',
        respuesta:
          'Sí, porque el catálogo de una tienda especializada online suele ser mucho más amplio que el de cualquier bazar físico, incluso estando cerca de la capital.',
      },
      {
        pregunta: '¿Hay demanda de velas y jabones artesanales en San José?',
        respuesta:
          'Sí, sobre todo en ferias vecinales y como producto de regalo en fechas puntuales, con una demanda que acompaña el crecimiento de localidades como Ciudad del Plata.',
      },
    ],
  },
  {
    slug: 'soriano',
    nombre: 'Soriano',
    contexto:
      'Soriano, con Mercedes como capital, tiene una economía agropecuaria sólida y un comercio local donde las manualidades conviven con una fuerte tradición de ferias de pueblo y mercados de productores.',
    comercio:
      'En Mercedes y Dolores las ferias de fin de semana suelen tener puestos de productos artesanales, con una demanda de velas y jabones que crece especialmente antes de fiestas y fin de año.',
    logistica:
      'Los envíos nacionales a Soriano llegan por los circuitos que cubren el litoral oeste, en plazos comparables a los de Río Negro o Colonia.',
    faq: [
      {
        pregunta: '¿Dónde conseguir moldes de silicona en Mercedes o Dolores?',
        respuesta:
          'La oferta local de manualidades generales existe, pero para un catálogo amplio y específico de moldes conviene comprar online a una tienda especializada con envío nacional.',
      },
      {
        pregunta: '¿Conviene vender en las ferias de pueblo de Soriano con moldes propios?',
        respuesta:
          'Sí, tener diseños propios y no repetidos ayuda a diferenciarse en ferias donde varios puestos venden productos similares.',
      },
    ],
  },
  {
    slug: 'tacuarembo',
    nombre: 'Tacuarembó',
    contexto:
      'Tacuarembó, en el centro-norte del país, tiene una identidad cultural fuerte ligada a la tradición gaucha y folclórica, lo que se refleja también en una demanda de artesanía y regalería con identidad local durante eventos como la Patria Gaucha.',
    comercio:
      'Durante fiestas tradicionales como la Patria Gaucha, la demanda de productos de regalería artesanal (velas, jabones, piezas decorativas) sube fuerte, con compradores que buscan algo con identidad local más que un producto genérico.',
    logistica:
      'Por su ubicación en el centro-norte, los envíos nacionales a Tacuarembó llegan en plazos algo mayores que al área metropolitana, similares a los de Rivera o Salto.',
    faq: [
      {
        pregunta: '¿Conviene anticipar la compra de moldes antes de la Patria Gaucha?',
        respuesta:
          'Sí, dado el pico de demanda de regalería artesanal durante la fiesta, conviene tener el stock de piezas terminadas listo con varias semanas de anticipación.',
      },
      {
        pregunta: '¿Hay tiendas especializadas en moldes de silicona en Tacuarembó?',
        respuesta:
          'La oferta local específica es limitada; comprar online a una tienda con catálogo amplio y despacho nacional da más variedad de diseños.',
      },
    ],
  },
  {
    slug: 'treinta-y-tres',
    nombre: 'Treinta y Tres',
    contexto:
      'Treinta y Tres, en el este del país, tiene una economía de base agropecuaria y forestal, con un comercio de manualidades más chico que el de los departamentos costeros vecinos pero con una comunidad de emprendedoras activa en redes sociales.',
    comercio:
      'En la ciudad de Treinta y Tres la venta de velas y jabones artesanales se da sobre todo por encargo directo y redes, más que por local físico dedicado, con picos de demanda en fechas de regalo.',
    logistica:
      'Los envíos nacionales a Treinta y Tres llegan por los circuitos que cubren el este del país, en plazos comparables a los de Cerro Largo o Rocha.',
    faq: [
      {
        pregunta: '¿Hay oferta local de moldes de silicona en Treinta y Tres?',
        respuesta:
          'La oferta física local es acotada; la mayoría de quienes emprenden en el departamento compran moldes e insumos online a tiendas con despacho a todo el país.',
      },
      {
        pregunta: '¿Cómo se paga una compra online desde Treinta y Tres?',
        respuesta:
          'Con los mismos medios de pago que en cualquier otro departamento: un checkout formal no depende de la ubicación del comprador, sólo de la tienda elegida.',
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
