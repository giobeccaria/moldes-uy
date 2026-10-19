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
  // Color de marca para el badge del ranking (fallback: círculo de color +
  // iniciales cuando no hay logo real disponible).
  color: string
  // Logo real de la marca (PNG o SVG en /public/brands), cuando existe uno
  // de buena calidad y descargable desde el sitio oficial de la tienda.
  logo?: string
  // Redes sociales reales de la tienda (sólo cuentas propias verificadas,
  // nunca inventadas). Un marketplace como Mercado Libre no tiene cuenta
  // propia por "tienda" en este sentido, así que queda sin este campo.
  redes?: { instagram?: string; facebook?: string }
  // Atributos de comparación (sólo para las tiendas especializadas del
  // ranking principal). Datos verificables, no relleno: catálogo contado
  // sobre el catálogo real, pago y envío descritos como están publicados.
  atributos?: {
    catalogo: string
    precios: string
    envioResumen: string
    pago: string
  }
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
    'Insumos completos en el mismo lugar: cera de soja de alto y bajo punto, glicerina, 18 esencias concentradas distintas, 12 colorantes, 13 pabilos y frascos para velas',
    'Yeso París, kits DIY y herramientas (pistola de calor, minitorno, batidor, manteles de silicona)',
    'Checkout seguro en Shopify, todos los medios de pago y también presencia en Mercado Libre',
  ],
  contras: ['No vende resina epoxi en sí: tiene los moldes y accesorios para trabajarla'],
  rating: 5,
  envio: 'Envíos a todo Uruguay, con envío gratis a partir de cierto monto de compra.',
  url: 'https://moldarte.uy',
  color: '#b5603c',
  logo: '/brands/moldarte-instagram.jpg',
  redes: {
    instagram: 'https://www.instagram.com/moldarte.uy',
    facebook: 'https://www.facebook.com/moldarte.uy/',
  },
  atributos: {
    catalogo: 'Más de 375 moldes de silicona distintos en catálogo activo (de un total de 488 productos), sin contar los insumos',
    precios: 'Moldes chicos y medianos desde rangos accesibles, con precios publicados por producto (sin coordinar por chat)',
    envioResumen: 'A todo el país, con envío gratis desde cierto monto',
    pago: 'Checkout propio con tarjeta, transferencia y todos los medios habituales',
  },
}

// Competidores reales del rubro en Uruguay, verificados en sus propios sitios
// (octubre 2026). La Casa del Artesano sigue siendo la única tienda local
// especializada en manualidades que también vende moldes de silicona. Las
// otras cuatro (Liderplast, Zanetti, Casa Jorge, Sodimac) son bazares o
// cadenas de artículos para el hogar que tienen moldes de silicona en su
// catálogo de cocina, verificados visitando cada categoría y viendo
// productos concretos listados (no sólo el título de la sección). No son
// especialistas en manualidades: su fuerte es repostería, chocolate o
// hielo, no necesariamente velas, jabón o resina con la profundidad de
// Moldarte o La Casa del Artesano, y así se los describe. Mercado Libre no
// es una tienda comparable y se trata aparte, ver `mercadoLibre`.
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
      'Al cubrir tantos rubros, los moldes de silicona son una sección más del catálogo, no el foco',
      'La compra web tiene un mínimo de compra más envío',
    ],
    rating: 4,
    envio: 'Envíos desde Montevideo para compras web (con mínimo de compra).',
    url: 'https://lacasadelartesano.com.uy',
    color: '#9c4221',
    logo: '/brands/lacasadelartesano.svg',
    redes: {
      instagram: 'https://www.instagram.com/lacasadelartesanouy/',
      facebook: 'https://www.facebook.com/lacasadelartesanouruguay/',
    },
    atributos: {
      catalogo: 'Moldes de silicona como una sección dentro de un catálogo multi-rubro (pintura, bijouterie, mercería, resinas)',
      precios: 'Precios por producto en el sitio, sujetos a un mínimo de compra para envío',
      envioResumen: 'Despacho desde Montevideo, con mínimo de compra',
      pago: 'Checkout web con mínimo de compra; compra en salón sin ese mínimo',
    },
  },
  {
    nombre: 'Zanetti',
    destacado: false,
    resumen:
      'Tienda de decoración y bazar de Montevideo, con local en Colonia 917 y venta online con checkout propio. Tiene una docena de moldes de silicona con formas decorativas (flores, mariposas, corazones, lazos, rosas, pétalos) dentro de su sección de decoración.',
    pros: [
      'Catálogo online con checkout propio y varios medios de pago (tarjetas, Redpagos, Pago Despues)',
      'Formas decorativas (flores, mariposas, rosas, lazos) que sirven para jabón, resina o repostería por igual',
      'Local físico en Montevideo además de la venta online',
    ],
    contras: [
      'Es un bazar de decoración, no una tienda de manualidades: los moldes de silicona son una sección chica (una docena de modelos) dentro de un catálogo mucho más amplio de artículos de decoración',
      'No vende insumos de manualidades (ceras, glicerina, resina): sólo el molde',
    ],
    rating: 3,
    envio: 'Venta online con checkout propio; también atiende en su local de Montevideo.',
    url: 'https://www.zanetti.com.uy/decoracion/moldes-de-silicona',
    color: '#2f6b4f',
    atributos: {
      catalogo: 'Alrededor de una docena de moldes de silicona decorativos (flores, mariposas, corazones, lazos), sin insumos de manualidades',
      precios: 'Precios por producto publicados en el sitio, entre $270 y $390 aproximadamente',
      envioResumen: 'Venta online con checkout propio; retiro o compra también en el local de Colonia 917',
      pago: 'Tarjetas de crédito y débito, Redpagos y Pago Despues',
    },
  },
  {
    nombre: 'Liderplast',
    destacado: false,
    resumen:
      'Bazar uruguayo con cuatro locales en Montevideo (Centro, Cordón, Goes y Paso Molino). Dentro de un catálogo grande de moldes de cocina (más de 100 entre aluminio y silicona), tiene algunos moldes de silicona para repostería, como bombones con forma de corazón o almeja.',
    pros: [
      'Cuatro locales físicos en Montevideo para comprar o retirar en persona',
      'Catálogo de bazar grande, con checkout propio y carrito de compra online',
      'Precios accesibles en los moldes de silicona que tiene',
    ],
    contras: [
      'Los moldes de silicona que vimos en catálogo son pocos (un puñado de diseños de bombón) frente a un catálogo de más de 100 moldes mayormente de aluminio para repostería',
      'Es un bazar de cocina y hogar, no una tienda de manualidades: no vende insumos para velas, jabón ni resina',
    ],
    rating: 3,
    envio: 'Venta online con checkout propio y retiro o compra en cualquiera de sus cuatro locales de Montevideo.',
    url: 'https://www.liderplast.com.uy/productos/productos.php?path=0.2882.2915&secc=productos',
    color: '#1f5fa8',
    atributos: {
      catalogo: 'Un puñado de moldes de silicona para repostería (bombones con forma de corazón, almeja) dentro de un catálogo de más de 100 moldes de cocina',
      precios: 'Precios publicados por producto, desde $27 hasta rangos similares a otras tiendas de bazar',
      envioResumen: 'Venta online con despacho, o retiro/compra en los locales de Centro, Cordón, Goes y Paso Molino',
      pago: 'Checkout propio con carrito de compra; también venta directa en los locales',
    },
  },
  {
    nombre: 'Casa Jorge',
    destacado: false,
    resumen:
      'Tienda de artículos de cocina y bazar con venta online y atención por WhatsApp. En su categoría de moldes (84 productos en total) tiene varios modelos de silicona: molde genérico, mini torta, esfera, corazones y una placa de silicona para repostería; el resto del catálogo son moldes de aluminio para torta, budín y empanada.',
    pros: [
      'Varios modelos de silicona distintos (mini torta, esfera, corazones, placa) dentro de su categoría de moldes',
      'Checkout online con carrito de compra propio',
      'Atención directa por WhatsApp para consultas antes de comprar',
    ],
    contras: [
      'Es una tienda de cocina y bazar, no de manualidades: los moldes de silicona están pensados para repostería, no para velas, jabón o resina',
      'El sitio no publica una dirección física de local; el único contacto visible es WhatsApp',
    ],
    rating: 3,
    envio: 'Venta online con checkout propio; consultas y seguimiento por WhatsApp.',
    url: 'https://www.casajorge.com.uy/hogar/cocina/moldes/1',
    color: '#c0392b',
    atributos: {
      catalogo: 'Cinco modelos de molde de silicona para repostería dentro de una categoría de 84 moldes, mayormente de aluminio',
      precios: 'Precios publicados por producto, entre $45,90 y $239,90 en los modelos de silicona',
      envioResumen: 'Venta online con carrito y checkout; no publica retiro en local',
      pago: 'Checkout propio online; consultas por WhatsApp',
    },
  },
  {
    nombre: 'Sodimac',
    destacado: false,
    resumen:
      'Cadena grande de mejoras para el hogar con locales en Uruguay y venta online con despacho a domicilio o retiro en tienda. En su sección de moldes tiene sobre todo piezas de cocina (muffins, budín, pan, helado), con algunos modelos de silicona entre ellas.',
    pros: [
      'Cadena grande con locales físicos y logística propia de despacho y retiro',
      'Checkout online con carrito, igual que el resto de su catálogo de hogar',
      'Precios accesibles en los pocos moldes de silicona que tiene',
    ],
    contras: [
      'Los moldes de silicona que vimos son muy pocos (muffins, helado) y están mezclados con moldes de aluminio para hornear: no hay una sección de manualidades',
      'No vende moldes decorativos para jabón, vela o resina, sólo moldes de cocina',
    ],
    rating: 2,
    envio: 'Despacho a domicilio o retiro en tienda, según el producto.',
    url: 'https://www.sodimac.com.uy/sodimac-uy/category/cat990006/moldes/',
    color: '#f39200',
    atributos: {
      catalogo: 'Catálogo de moldes de cocina (muffins, budín, pan, helado), con pocos modelos de silicona entre moldes de aluminio',
      precios: 'Precios publicados por producto, entre $49 y $959 según el artículo',
      envioResumen: 'Despacho a domicilio o retiro en tienda, según disponibilidad del producto',
      pago: 'Checkout propio online, igual que el resto del catálogo de la cadena',
    },
  },
]

// Mercado Libre Uruguay no es una tienda: es un marketplace donde venden
// particulares. Se trata en una sección aparte de la página, no dentro del
// ranking de tiendas, para no mezclar un catálogo curado con publicaciones
// sueltas de terceros sin continuidad garantizada.
export const mercadoLibre = {
  nombre: 'Mercado Libre Uruguay',
  resumen:
    'En Mercado Libre hay vendedores particulares que publican moldes de silicona sueltos para velas, jabón o resina. No es una tienda con catálogo propio: cada publicación es de un vendedor distinto, sin continuidad garantizada entre una compra y la siguiente.',
  cuando:
    'Tiene sentido mirarlo cuando buscás un diseño muy puntual que no está en el catálogo de ninguna tienda especializada, o como último recurso si no encontrás lo que necesitás en otro lado. No lo pondríamos como primera opción: no hay catálogo curado, no hay garantía de que el vendedor repita stock, y la calidad de cada molde depende de quién lo vende.',
  cuidado:
    'Antes de comprar ahí conviene revisar las fotos reales del molde (no de catálogo genérico), las valoraciones del vendedor y que la publicación aclare el grado del material (si es apto para alimentos, para cera caliente, etc.), algo que una tienda especializada ya deja claro en su ficha de producto.',
  url: 'https://listado.mercadolibre.com.uy/molde-silicona',
}

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
  {
    pregunta: '¿Por qué mi molde de silicona quedó pegajoso después de un tiempo?',
    respuesta:
      'Es un residuo que deja el material trabajado (sobre todo jabón en frío o cera con fragancia) sobre la silicona, no una falla del molde. Se lava con agua caliente y un desengrasante suave, secando bien antes de guardarlo. Si vuelve a quedar pegajoso apenas seco, ahí sí es la silicona perdiendo su acabado por uso prolongado.',
  },
  {
    pregunta: '¿Se puede reutilizar el mismo molde para velas y para jabones?',
    respuesta:
      'Entra el mismo material en los dos usos, pero conviene no alternarlo si el molde absorbió fragancia concentrada: ese olor puede pasar al siguiente producto. Lo más prolijo es destinar un molde a cada uso cuando se trabaja con esencias fuertes.',
  },
  {
    pregunta: '¿Cuánto dura un molde de silicona con buen uso?',
    respuesta:
      'Depende del uso, pero con buen cuidado (lavado sin abrasivos, secado completo y sin forzar el desmolde) un molde de silicona rinde para decenas de piezas. Las señales de que ya cumplió su vida útil son pérdida de flexibilidad, grietas finas en los bordes y que cueste cada vez más desmoldar aunque esté limpio.',
  },
  {
    pregunta: '¿Qué diferencia real tiene la silicona de grado alimentario?',
    respuesta:
      'No transfiere olor, sabor ni residuo al producto y tolera bien el rango de temperatura de uso en cocina. Importa cuando el molde se usa para algo que se come (chocolate, repostería) o para jabón que va a estar en contacto con la piel; para resina o yeso decorativo no es un requisito excluyente.',
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
  // Contenido de oficio: lo que sabe alguien que de verdad trabaja con el
  // material, no una lista más de tips genéricos. Se muestra sólo en la
  // página de la categoría (no se repite en el home).
  oficio: { titulo: string; texto: string }[]
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
    oficio: [
      {
        titulo: 'A qué temperatura verter la cera sin arruinar el molde',
        texto:
          'La silicona aguanta mucho más calor que el que necesita cualquier cera, así que el molde no es lo que te limita la temperatura: lo es el resultado final de la vela. Verter la cera de soja demasiado caliente no derrite el molde, pero sí puede generar más contracción al enfriar y piezas que salen con rajaduras finas o una superficie opaca ("frosting") en vez de lisa. Lo habitual es fundir y verter a una temperatura moderada, bastante por debajo del punto de ebullición, y dejar enfriar la pieza a temperatura ambiente, sin apurar el proceso metiéndola en la heladera: un enfriado brusco es lo que más deforma el relieve fino de un molde nuevo.',
      },
      {
        titulo: 'Por qué un molde empieza a costar para desmoldar',
        texto:
          'Si al principio la vela salía sola y con el uso empieza a trabarse, no es necesariamente que el molde esté roto: puede ser residuo de cera acumulado en los detalles finos, que se limpia con agua tibia y un jabón neutro, sin usar nada abrasivo que raye la superficie interna. Si después de limpiarlo bien sigue sin soltar la pieza, ahí sí es señal de que la silicona perdió elasticidad por el uso y conviene pensar en reemplazarlo.',
      },
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
    oficio: [
      {
        titulo: 'Cómo desmoldar sin romper el detalle fino',
        texto:
          'El jabón más lindo se arruina en el último paso si se desmolda antes de tiempo. Dejalo enfriar del todo a temperatura ambiente (apurarlo en el freezer puede generar condensación que opaca la superficie) y, para sacarlo, estirá apenas los bordes de la silicona hacia afuera en vez de tirar del jabón hacia arriba: eso despega el aire entre la pieza y el molde sin forzar los relieves finos, que son los que primero se rompen.',
      },
      {
        titulo: 'Por qué un molde queda pegajoso después de un tiempo',
        texto:
          'Es algo que pasa sobre todo con jabón en frío: la soda cáustica y algunos aceites esenciales con el tiempo dejan un residuo graso en la superficie de la silicona que se siente pegajoso al tacto. No es que el molde esté fallado; se saca lavando con agua caliente y un poco de alcohol o detergente desengrasante, secando bien antes de guardarlo. Si queda pegajoso apenas lavado y seco, probablemente la silicona ya perdió su acabado original por uso prolongado.',
      },
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
    oficio: [
      {
        titulo: 'Cómo evitar burbujas de aire al verter',
        texto:
          'Las burbujas se generan al mezclar los dos componentes y se agrandan si la resina se vierte de golpe. Mezclá despacio y durante más tiempo del que parece necesario, raspando bien los bordes y el fondo del vaso, y después volcá el líquido despacio y desde baja altura, dejando que corra por la pared del molde en vez de caer directo al centro. Si después de eso quedan burbujas chicas en la superficie, pasar el calor leve de un encendedor o una pistola de calor a unos centímetros (sin tocar la resina) las hace subir y reventar en segundos.',
      },
      {
        titulo: 'Ángulos cerrados: el punto donde más se traba la pieza',
        texto:
          'Un molde con rincones muy marcados o paredes rectas y profundas genera vacío al desmoldar, y ahí es donde más piezas finas se rompen o quedan con marcas blancas de tensión. Ayuda desmoldar recién cuando la resina curó del todo (no sólo cuando ya no está pegajosa al tacto, sino pasadas las horas de curado completo que indique el fabricante) y despegar por secciones, aflojando primero un borde y dejando que entre aire, en vez de tirar de un extremo mientras el resto sigue pegado.',
      },
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
    oficio: [
      {
        titulo: 'Silicona de grado alimentario: cuándo importa de verdad',
        texto:
          'No toda silicona es igual aunque se vea y se sienta parecida. La de grado alimentario está hecha para no transferir nada al producto ni retener olores ni sabores de un uso a otro, y tolera bien el rango de temperatura con el que se trabaja chocolate y repostería. Para chocolate y cualquier cosa que se coma, importa de verdad: no es un detalle menor, es lo que define si el molde es apto o no para ese uso. Un mismo molde de grado alimentario que ya usaste para jabón perfumado no es buena idea reutilizarlo para chocolate, por más que esté limpio: el aroma concentrado del jabón queda en la silicona y pasa al producto.',
      },
      {
        titulo: 'Por qué el chocolate sale sin brillo o con marcas blancas',
        texto:
          'Si el bombón sale opaco o con vetas blancas, generalmente no es un problema del molde sino del temperado: el chocolate necesita pasar por una curva de temperatura específica para que la manteca de cacao cristalice de forma pareja. Un molde de silicona de buena calidad ayuda porque desmolda limpio y no retiene grasa en la superficie, pero no corrige un temperado mal hecho. Enfriar en heladera apenas unos minutos antes de desmoldar sí ayuda a que la pieza contraiga levemente y salga entera.',
      },
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
    oficio: [
      {
        titulo: '¿Se puede reutilizar un molde de velas para jabones?',
        texto:
          'Técnicamente sí entran los dos en el mismo molde de silicona, pero conviene no mezclarlos si el molde no es de grado alimentario o si ya absorbió olor a cera perfumada: la fragancia concentrada de una vela queda en la silicona y puede pasar a un jabón melt and pour hecho después. Si vas a alternar usos, lo más prolijo es tener un molde dedicado a cada cosa, sobre todo cuando las esencias son fuertes.',
      },
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
    oficio: [
      {
        titulo: 'Por qué un jabón de glicerina te queda con burbujas',
        texto:
          'La glicerina derretida atrapa aire fácilmente al mezclarla con esencia y color. Rociar un poco de alcohol en aerosol sobre la superficie recién volcada en el molde revienta esas burbujas chicas antes de que se sellen al enfriar, y es más efectivo que intentar revolver más despacio.',
      },
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
