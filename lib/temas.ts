// Páginas por tema/diseño: complementan a las categorías por material.
// Cada tema corresponde a una colección real de moldarte.uy (campo
// `coleccion`) y el texto describe los diseños que efectivamente hay en ella.
export type Tema = {
  slug: string
  coleccion: string // handle de moldarte.uy
  nombre: string
  titulo: string // H1
  metaTitulo: string // ≤60 car.
  descripcion: string // ≤160 car.
  intro: string
  ideas: { titulo: string; texto: string }[]
  materiales: string[]
  guias: string[]
  faq: { pregunta: string; respuesta: string }[]
  temporada?: string
}

export const temas: Tema[] = [
  {
    slug: 'moldes-de-flores',
    coleccion: 'flores',
    nombre: 'Moldes de flores',
    titulo: 'Moldes de silicona de flores',
    metaTitulo: 'Moldes de silicona de flores en Uruguay',
    descripcion:
      'Moldes de silicona de rosas, peonías, margaritas, flor de loto, hortensias y suculentas para velas, jabones, yeso y resina. Ideas y consejos para usarlos.',
    intro:
      'Es la colección con más variedad de formas: rosas sueltas y en bola, peonías, margaritas, girasol, gardenia, jazmín, tulipán, hortensia y lirio de agua. También hay moldes múltiples (rosas x8, flores x7, margaritas x4) para producir en cantidad, piezas armadas como el corazón de flores o la torre de margaritas, porta velas de flor de loto y suculentas tipo echeveria. Sirven igual para una vela decorativa que para un jabón de regalo o una pieza de yeso pintada.',
    ideas: [
      {
        titulo: 'Velas flor para souvenirs',
        texto:
          'Las rosas y margaritas chicas en moldes múltiples son el souvenir clásico de casamientos, bautismos y cumpleaños de 15: sacás varias por colada y se empaquetan fácil. Usá cera de soja de alto punto de fusión o una mezcla con parafina para que los pétalos no se deformen. Tip: dejá enfriar la vela completa en el molde antes de desmoldar; los pétalos finos son lo primero que se rompe si apurás.',
      },
      {
        titulo: 'Jabones de glicerina con forma de flor',
        texto:
          'Peonías, gardenias y rosas quedan muy bien en glicerina transparente o blanca, con un color suave y esencia floral. Tip: rociá alcohol sobre la glicerina recién volcada para eliminar las burbujas de la superficie, que en un diseño con tanto detalle se notan mucho.',
      },
      {
        titulo: 'Porta velas y bandejas de yeso o cemento',
        texto:
          'Los porta velas de flor de loto (incluido el de mandala y el horno con tapa) se hacen en yeso o cemento y después se pintan o se dejan crudos. Tip: golpeá suavemente el molde contra la mesa después de volcar para que suban las burbujas, y esperá al menos 24 horas antes de usarlo con una vela encendida.',
      },
      {
        titulo: 'Suculentas y flores en resina',
        texto:
          'Las suculentas y las flores chicas sirven para hacer piezas de resina epoxi con pigmento, mica o flores secas adentro, como pisapapeles o decoración de mesa. Tip: trabajá con capas finas si la pieza es gruesa, para que la resina no levante temperatura y amarillee.',
      },
    ],
    materiales: ['moldes-para-velas', 'moldes-para-jabones', 'moldes-de-yeso', 'moldes-de-resina'],
    guias: [
      'como-hacer-velas-de-soja',
      'temperatura-cera-de-soja',
      'como-hacer-jabon-de-glicerina',
      'como-hacer-piezas-de-yeso',
      'como-usar-moldes-de-resina',
    ],
    faq: [
      {
        pregunta: '¿Con qué material se nota más el detalle de los pétalos?',
        respuesta:
          'Con yeso y con jabón de glicerina el detalle sale muy marcado. En velas también, siempre que uses una cera dura: la cera de soja para contenedor es demasiado blanda para una flor desmoldada.',
      },
      {
        pregunta: '¿Conviene un molde individual o uno múltiple?',
        respuesta:
          'Si vas a hacer souvenirs o vender en cantidad, el múltiple te ahorra tiempo porque sacás varias piezas por colada. El individual conviene para piezas grandes y protagonistas, como la peonía, la hortensia grande o el corazón de flores.',
      },
      {
        pregunta: '¿Cómo saco la vela sin romper los pétalos?',
        respuesta:
          'Dejala enfriar del todo (unas horas, según el tamaño), despegá primero los bordes de la silicona y empujá desde abajo en lugar de tirar de la vela. Si se resiste, unos minutos en la heladera ayudan a que se contraiga.',
      },
    ],
  },
  {
    slug: 'moldes-de-animales',
    coleccion: 'animales',
    nombre: 'Moldes de animales',
    titulo: 'Moldes de silicona de animales',
    metaTitulo: 'Moldes de silicona de animales en Uruguay',
    descripcion:
      'Moldes de silicona de perros, gatos, capibaras, ositos, conejos, búhos, elefantes y más, para velas, jabones, yeso y resina. Ideas y consejos de uso.',
    intro:
      'Hay de todo: perros por raza (bulldog francés, pug, caniche, salchicha, yorkshire), gatos, capibaras grande y bebé, conejos, búhos (incluido el trío que se tapa ojos, oídos y boca), elefantes, tortugas y elefante meditando, leones, ranas, mariposas y animales de mar. Muchos son figuras de pie, ideales para velas decorativas y piezas de yeso, y otros vienen en moldes múltiples chicos que rinden para souvenirs.',
    ideas: [
      {
        titulo: 'Velas de mascotas para regalar',
        texto:
          'Los perros por raza y los gatos se venden muy bien como regalo para quien tiene esa mascota. Usá cera dura y un pabilo fino centrado. Tip: ofrecé el mismo diseño en dos o tres colores, porque la gente busca el que se parezca a su perro.',
      },
      {
        titulo: 'Figuras de yeso pintadas',
        texto:
          'Capibaras, búhos y elefantes salen muy bien en yeso y después se pintan con acrílico o se dejan blancos con un toque dorado. Tip: sellá la pieza con barniz acrílico al final para que no absorba humedad ni se manche con las manos.',
      },
      {
        titulo: 'Jabones infantiles',
        texto:
          'Los animales chicos (conejos, patitos, mariposas, tortugas) en glicerina de colores son un clásico para cumpleaños infantiles y baby showers. Tip: elegí esencias suaves y en dosis bajas, y avisá que es un jabón para que nadie lo confunda con un caramelo.',
      },
      {
        titulo: 'Decoración en cemento o resina',
        texto:
          'La casita de horneros, la tortuga o el panal de abejas quedan muy bien en cemento para el jardín o el balcón, y las mini mariposas sirven para incrustar en resina. Tip: con cemento usá una mezcla fluida y vibrá bien el molde para que llene las patas y orejas.',
      },
    ],
    materiales: ['moldes-para-velas', 'moldes-para-jabones', 'moldes-de-yeso', 'moldes-de-resina'],
    guias: [
      'como-hacer-velas-de-soja',
      'como-hacer-jabon-de-glicerina',
      'como-hacer-piezas-de-yeso',
      'como-usar-moldes-de-resina',
    ],
    faq: [
      {
        pregunta: '¿Las orejas y patas finas no se rompen al desmoldar?',
        respuesta:
          'Son la parte más delicada. Esperá a que la pieza esté totalmente fría o fraguada, abrí la silicona de a poco y liberá primero las partes finas antes de sacar el cuerpo.',
      },
      {
        pregunta: '¿Qué material conviene para una figura que va a estar al sol?',
        respuesta:
          'Para exterior, cemento. La vela se ablanda con el calor y el yeso sin sellar se deteriora con la humedad. Si querés yeso afuera, sellalo bien con barniz.',
      },
      {
        pregunta: '¿Se puede usar el mismo molde para vela y para yeso?',
        respuesta:
          'Sí, la silicona aguanta los dos. Lavalo bien entre un material y otro y dejalo secar, porque restos de yeso o humedad arruinan la superficie de la vela.',
      },
    ],
  },
  {
    slug: 'moldes-de-navidad',
    coleccion: 'navidad',
    nombre: 'Moldes de Navidad',
    titulo: 'Moldes de silicona de Navidad',
    metaTitulo: 'Moldes de silicona de Navidad en Uruguay',
    descripcion:
      'Moldes de silicona navideños: pinos, Papá Noel, renos, pesebre, angelitos, copo de nieve y chirimbolos. Ideas para velas y regalos y cuándo empezar a producir.',
    intro:
      'La colección navideña tiene pinos en varios estilos (torneado, con moño, con guirnalda, con burbujas, decorado), Papá Noel, reno y ciervo, copo de nieve, galleta de jengibre, piña, muérdago y chirimbolos para colgar del árbol. Del lado religioso hay pesebre, Sagrada Familia, Virgen con el Niño y angelitos. Si vas a vender en ferias de diciembre, la clave es arrancar a producir en noviembre.',
    ideas: [
      {
        titulo: 'Calendario de producción para ferias de diciembre',
        texto:
          'Primera semana de noviembre: definí 3 o 4 diseños (por ejemplo un pino, un Papá Noel y un angelito), comprá cera, esencias y packaging, y hacé una tanda de prueba. Segunda quincena de noviembre: producción fuerte. La cera de soja necesita entre una y dos semanas de curado para que la esencia se integre y el aroma se sienta al encenderla, así que lo que hagas a fines de noviembre llega justo a las ferias. Primera semana de diciembre: etiquetado, packaging y fotos para redes. Tip: dejá un margen para reponer los diseños que más salgan en la primera feria.',
      },
      {
        titulo: 'Velas de pino y Papá Noel',
        texto:
          'Son los diseños que más rotan en las ferias. Verde, rojo, blanco y dorado, con esencia de pino, canela o vainilla. Tip: un pino en blanco con detalle dorado a pincel se ve más caro que el mismo pino en verde, y cuesta lo mismo hacerlo.',
      },
      {
        titulo: 'Pesebre y angelitos en yeso',
        texto:
          'El pesebre, la Sagrada Familia y los angelitos funcionan muy bien en yeso, blancos o pintados, como regalo o para armar el nacimiento. Tip: el yeso no necesita curado como la vela, pero sí secado completo antes de pintar: dejalo un par de días en un lugar ventilado.',
      },
      {
        titulo: 'Chirimbolos y adornos para el árbol',
        texto:
          'Los chirimbolos, el copo de nieve y la galleta de jengibre se hacen en yeso o resina con un aro o cordón para colgar. Tip: dejá el agujero del cordón marcado con un sorbete o un palillo mientras fragua, así no tenés que perforar después.',
      },
    ],
    materiales: ['moldes-para-velas', 'moldes-de-yeso', 'moldes-de-resina', 'moldes-para-jabones'],
    guias: [
      'como-hacer-velas-de-soja',
      'temperatura-cera-de-soja',
      'como-hacer-piezas-de-yeso',
      'como-usar-moldes-de-resina',
    ],
    faq: [
      {
        pregunta: '¿Cuándo tengo que empezar a hacer las velas para vender en Navidad?',
        respuesta:
          'A principios de noviembre. Entre pruebas, producción y una a dos semanas de curado de la cera de soja, si arrancás en diciembre llegás tarde a las primeras ferias.',
      },
      {
        pregunta: '¿Qué esencias se venden más en Navidad?',
        respuesta:
          'Pino, canela con manzana, vainilla y frutos rojos. Conviene tener una cítrica o fresca también, porque en Uruguay la Navidad es en pleno calor.',
      },
      {
        pregunta: '¿Las velas aguantan el calor de diciembre en una feria al aire libre?',
        respuesta:
          'Una vela de soja dura bien a temperatura ambiente, pero al sol directo se ablanda y se marca. Tené el puesto a la sombra y guardá el stock en una caja cerrada, lejos del auto al sol.',
      },
    ],
    temporada: 'Navidad 2026',
  },
  {
    slug: 'moldes-espirituales',
    coleccion: 'espiritual',
    nombre: 'Moldes espirituales',
    titulo: 'Moldes de silicona espirituales',
    metaTitulo: 'Moldes de silicona espirituales: budas, ángeles y más',
    descripcion:
      'Moldes de silicona de budas, ángeles, vírgenes, mano de Fátima, porta inciensos, atrapasueños y árbol de la vida para velas, yeso y resina.',
    intro:
      'Junta imaginería de distintas tradiciones: budas y monjes en varias posturas (meditando, orando, riendo, el totem de caras), ángeles, Virgen María, Virgen de Guadalupe, Jesús y la Sagrada Familia. Suma objetos de uso como porta inciensos y bandejas de mano de Fátima, porta velas de flor de loto, luna y corazón, colgantes atrapasueños solar y lunar, ying yang, árbol de la vida y gnomos de la suerte.',
    ideas: [
      {
        titulo: 'Porta inciensos y bandejas de yeso',
        texto:
          'La mano de Fátima, la bandeja Aura y los porta inciensos astrales se hacen en yeso o cemento y se terminan con pintura o pan de oro. Tip: si va a recibir ceniza o una vela, sellá la pieza con barniz para que no se manche y se limpie con un trapo.',
      },
      {
        titulo: 'Budas y ángeles en vela',
        texto:
          'Los budas meditando o sonriendo y los angelitos se venden mucho como vela decorativa, que en general nadie enciende. Usá cera dura para que la figura no se deforme. Tip: si sabés que es para decorar, podés sacar la vela sin pabilo y ofrecerla como figura aromática.',
      },
      {
        titulo: 'Imágenes religiosas para bautismos y comuniones',
        texto:
          'Los angelitos y la Virgen con el Niño en yeso blanco son un souvenir clásico de bautismo y primera comunión. Tip: el yeso blanco sin pintar queda muy prolijo si lo lijás suave con lija fina una vez seco.',
      },
      {
        titulo: 'Colgantes y atrapasueños en resina',
        texto:
          'Los colgantes solar y lunar y el corazón partido quedan muy bien en resina con mica, glitter o flores secas. Tip: desmoldá cuando la resina esté firme pero no del todo dura si querés pulir los bordes fácil.',
      },
    ],
    materiales: ['moldes-de-yeso', 'moldes-para-velas', 'moldes-de-resina', 'moldes-para-jabones'],
    guias: [
      'como-hacer-piezas-de-yeso',
      'como-hacer-velas-de-soja',
      'como-usar-moldes-de-resina',
    ],
    faq: [
      {
        pregunta: '¿Qué material conviene para un porta incienso?',
        respuesta:
          'Yeso o cemento. El incienso cae como ceniza caliente y la resina se puede marcar; el yeso sellado o el cemento lo aguantan sin problema.',
      },
      {
        pregunta: '¿Cómo logro el terminado dorado de las figuras?',
        respuesta:
          'Sobre yeso seco aplicás sisa (adhesivo para dorar) en las zonas que quieras y apoyás el pan de oro o las láminas doradas. Después sellás con barniz para que no se desprenda.',
      },
      {
        pregunta: '¿Las figuras grandes, como el Buda Guanyin, llevan mucho material?',
        respuesta:
          'Sí, comparado con las figuras chicas. Para calcularlo, llená el molde con agua, medí el volumen y usá ese dato para preparar el yeso o la cera justa.',
      },
    ],
  },
  {
    slug: 'moldes-de-personajes',
    coleccion: 'personajes',
    nombre: 'Moldes de personajes',
    titulo: 'Moldes de silicona de personajes',
    metaTitulo: 'Moldes de silicona de personajes en Uruguay',
    descripcion:
      'Moldes de silicona de personajes de dibujos animados, princesas, dinosaurios y figuras sonrientes para velas, jabones, yeso y resina de cumpleaños.',
    intro:
      'Es la colección para cumpleaños infantiles y regalos con onda: princesas, ratones y patos clásicos de dibujos animados, personajes de anime y videojuegos, ositos de peluche, Bob Esponja y Patricio, dinosaurios en moldes de 6 y 12, capibaras y figuras sonrientes como la tostada y el café. Varios vienen en moldes múltiples de 4 unidades, pensados para sacar souvenirs en cantidad.',
    ideas: [
      {
        titulo: 'Souvenirs de cumpleaños temáticos',
        texto:
          'Los moldes x4 son perfectos para hacer 20 o 30 souvenirs del personaje del cumple en una tarde. Jabón de glicerina de colores o yeso pintado son las opciones más baratas. Tip: armá un combo con el souvenir y una etiqueta con el nombre del cumpleañero; se vende mejor que la pieza sola.',
      },
      {
        titulo: 'Velas de personajes para la torta o la mesa',
        texto:
          'Las figuras sueltas (princesas, Papá Noel, ositos) quedan muy bien como vela decorativa para la mesa dulce. Tip: con colorante para velas podés pintar por capas, volcando un color, dejando que tome y volcando el siguiente.',
      },
      {
        titulo: 'Dinosaurios en yeso para pintar',
        texto:
          'Los dinosaurios en yeso blanco son una actividad de cumpleaños: cada chico pinta el suyo y se lo lleva. Tip: hacelos con una semana de anticipación para que el yeso esté bien seco y la pintura agarre pareja.',
      },
      {
        titulo: 'Llaveros y figuras chicas en resina',
        texto:
          'Los llaveros y los personajes chicos en resina con color o glitter sirven para souvenirs de adolescentes. Tip: poné la argolla o el tornillo mientras la resina está en gel, no cuando ya está dura.',
      },
    ],
    materiales: ['moldes-para-jabones', 'moldes-de-yeso', 'moldes-para-velas', 'moldes-de-resina'],
    guias: [
      'como-hacer-jabon-de-glicerina',
      'como-hacer-piezas-de-yeso',
      'como-hacer-velas-de-soja',
      'como-usar-moldes-de-resina',
    ],
    faq: [
      {
        pregunta: '¿Qué material es mejor para souvenirs de cumpleaños infantil?',
        respuesta:
          'Jabón de glicerina o yeso. Son baratos, rápidos y seguros para regalar a chicos. La vela queda linda pero es menos práctica para un souvenir infantil.',
      },
      {
        pregunta: '¿Cuántas piezas saco por día con un molde x4?',
        respuesta:
          'Con glicerina podés desmoldar cada una o dos horas, así que en un día de trabajo salen varias tandas. El yeso también desmolda rápido; lo que lleva tiempo es el secado antes de pintar.',
      },
      {
        pregunta: '¿Cómo pinto los detalles de las caras?',
        respuesta:
          'Sobre yeso seco, con acrílico y pincel fino. Primero una base de color, después los detalles, y al final barniz para proteger.',
      },
    ],
  },
  {
    slug: 'moldes-de-ositos',
    coleccion: 'osos',
    nombre: 'Moldes de ositos',
    titulo: 'Moldes de silicona de ositos',
    metaTitulo: 'Moldes de silicona de ositos en Uruguay',
    descripcion:
      'Moldes de silicona de ositos teddy, osito floral con corazón o moño, oso panda y oso de peluche para velas, jabones y yeso. Ideas para souvenirs.',
    intro:
      'Una colección chica pero muy usada: ositos teddy en tamaño grande, pequeño y bebé, osos de peluche, oso panda y los ositos florales, que vienen cubiertos de rosas y con un corazón o un moño. Son el diseño estrella para baby showers, nacimientos, San Valentín y Día de la Madre.',
    ideas: [
      {
        titulo: 'Velas de osito para baby shower',
        texto:
          'El teddy bebé o pequeño en tonos pastel (celeste, rosa, crema) es el souvenir más pedido para baby showers y nacimientos. Usá cera de soja dura o una mezcla con parafina. Tip: el acabado mate o aterciopelado se logra con cera de soja a baja temperatura de volcado, revisá la guía de temperaturas.',
      },
      {
        titulo: 'Osito floral para San Valentín y Día de la Madre',
        texto:
          'El osito cubierto de rosas con corazón es un regalo que se vende solo en esas fechas. En rojo, rosa o blanco con esencia de rosas o vainilla. Tip: tené stock unas semanas antes de la fecha, porque la demanda se concentra en pocos días.',
      },
      {
        titulo: 'Jabones de osito',
        texto:
          'Los ositos en glicerina de colores sirven para souvenirs y para combos de regalo con otros jabones. Tip: si usás glicerina transparente, poné muy poco colorante para que se siga viendo el relieve.',
      },
    ],
    materiales: ['moldes-para-velas', 'moldes-para-jabones', 'moldes-de-yeso'],
    guias: [
      'como-hacer-velas-de-soja',
      'temperatura-cera-de-soja',
      'como-hacer-jabon-de-glicerina',
      'como-hacer-piezas-de-yeso',
    ],
    faq: [
      {
        pregunta: '¿Qué tamaño de osito conviene para souvenirs?',
        respuesta:
          'El bebé o el pequeño: usan menos cera, se desmoldan rápido y entran en una cajita o bolsita. El grande conviene para regalo individual.',
      },
      {
        pregunta: '¿Por qué mi vela de osito queda con la superficie brillante y con marcas?',
        respuesta:
          'Suele ser temperatura de volcado alta o enfriamiento muy rápido. Bajá unos grados la temperatura al volcar y dejala enfriar a temperatura ambiente, no en la heladera.',
      },
      {
        pregunta: '¿El osito floral se puede hacer en yeso?',
        respuesta:
          'Sí, y queda muy bien pintado: el relieve de las rosas toma la pintura y se puede resaltar con un pincel seco de otro color.',
      },
    ],
  },
  {
    slug: 'moldes-de-macetas-chicas',
    coleccion: 'macetas',
    nombre: 'Moldes de macetas chicas',
    titulo: 'Moldes de silicona de macetas chicas',
    metaTitulo: 'Moldes de macetas chicas para suculentas',
    descripcion:
      'Moldes de silicona de macetas chicas para suculentas y cactus: niñas florales, geométricas x3, con plato, cajas y alhajeros. Para yeso, cemento y resina.',
    intro:
      'La colección tiene macetas de figura (las niñas soñadoras, pensativas e invernal con el pelo de flores, la calavera), sets x3 en forma de flor, círculo, cuadrado, corazón y octógono, y diseños con plato como Gema y Flora. También hay formas de doble uso, como cajas y alhajeros que funcionan como maceta, y algunas lisas y cilíndricas más grandes. Están pensadas para suculentas, cactus y plantas chicas de interior.',
    ideas: [
      {
        titulo: 'Macetas niña con suculenta',
        texto:
          'Las macetas niña en yeso o cemento, con una suculenta que hace de pelo, son uno de los regalos más vistosos de la colección. Tip: si van con planta, sellá el interior con impermeabilizante y poné una capa de piedritas en el fondo, porque el yeso absorbe agua y se debilita.',
      },
      {
        titulo: 'Sets x3 para vender en combo',
        texto:
          'Los moldes x3 (flor, círculo, cuadrado, corazón, octogonal) te dan tres macetitas iguales por colada: ideales para combos con suculentas o para souvenirs. Tip: con cemento, usá una mezcla fina (cemento con arena tamizada) para que las paredes delgadas no se desgranen.',
      },
      {
        titulo: 'Cajas y alhajeros que también son maceta',
        texto:
          'Royalty, Diamantis, rombos o Circus funcionan como caja con tapa, alhajero, caramelera o maceta. En resina quedan como alhajero de lujo; en yeso o cemento, como maceta o porta objetos. Tip: en resina, poné glitter o mica solo en la última capa para que se vea por fuera.',
      },
      {
        titulo: 'Porta velas y porta lápices',
        texto:
          'La mini maceta hexagonal, la calavera y el bowl también sirven como porta lápices o porta vela. Tip: si va a llevar una vela adentro, usá cemento o yeso sellado, no resina, porque el calor la marca.',
      },
    ],
    materiales: ['moldes-para-macetas', 'moldes-de-yeso', 'moldes-de-resina', 'moldes-para-velas'],
    guias: [
      'como-hacer-macetas-de-cemento',
      'como-hacer-piezas-de-yeso',
      'como-usar-moldes-de-resina',
    ],
    faq: [
      {
        pregunta: '¿Yeso o cemento para una maceta con planta?',
        respuesta:
          'Cemento si la vas a regar seguido o va afuera. El yeso es más fácil y toma mejor el detalle, pero tenés que impermeabilizarlo bien por dentro y usarlo con plantas de poco riego, como suculentas.',
      },
      {
        pregunta: '¿Hay que hacerle agujero de drenaje?',
        respuesta:
          'Para suculentas conviene. Podés dejarlo marcado con un tapón o sorbete mientras fragua, o hacerlo después con taladro y mecha para cerámica. Si no lleva agujero, poné piedritas en el fondo y regá poco.',
      },
      {
        pregunta: '¿Estos moldes sirven para macetas grandes de cemento?',
        respuesta:
          'Esta colección está pensada para macetas chicas y medianas. Para macetas grandes de cemento mirá la categoría de moldes para macetas, que trata específicamente ese trabajo.',
      },
    ],
  },
  {
    slug: 'moldes-deco',
    coleccion: 'deco',
    nombre: 'Moldes deco',
    titulo: 'Moldes de silicona para decoración',
    metaTitulo: 'Moldes de silicona para decoración en Uruguay',
    descripcion:
      'Moldes de silicona de bandejas, floreros, porta velas, velones, nudos y figuras deco para yeso, cemento, resina y velas. Ideas para decorar la casa.',
    intro:
      'La colección de decoración junta los moldes pensados para objetos de la casa: bandejas ovaladas, perladas y en forma de nube, hoja o pluma, jarrones y floreros (acanalado, hexagonal, gota, anillo, rizo), porta velas de luna, corazón y casa, velones cilíndricos, velas torneadas y de nudo, almejas de mar, porta fotos y relojes. Además de los moldes, en la colección vas a encontrar insumos como pabilos, esencias, colorantes, frascos de vidrio, yeso y papel de oro.',
    ideas: [
      {
        titulo: 'Bandejas y jaboneras de yeso o cemento',
        texto:
          'Las bandejas ovaladas, perladas, nube, hoja y pluma son de los productos más vendidos en ferias deco: sirven de bandeja de joyas, jabonera o posavasos. Tip: en yeso, agregá pigmento a la mezcla o hacé un efecto mármol con dos colores apenas mezclados; sellá con barniz si va a mojarse.',
      },
      {
        titulo: 'Floreros y jarrones con tubo de vidrio',
        texto:
          'Los jarrones de yeso o cemento se combinan con un tubo de ensayo adentro para poner agua y flores frescas o secas. Tip: si no usás tubo, el yeso tiene que estar impermeabilizado por dentro o se va a desarmar con el agua.',
      },
      {
        titulo: 'Velas escultóricas',
        texto:
          'La vela torneada, el nudo doble, los velones y la columna geométrica son las velas que más se ven en tiendas de diseño. Usá cera de soja dura o mezcla con parafina para que el relieve quede definido. Tip: los velones cilíndricos necesitan un pabilo más grueso; probá el quemado antes de vender.',
      },
      {
        titulo: 'Almejas y piezas en resina',
        texto:
          'Las almejas de mar, la caja almeja y las bandejas quedan muy bien en resina con mica perlada o láminas doradas. Tip: tapá la pieza mientras cura para que no se le pegue polvo, que en resina transparente se nota.',
      },
    ],
    materiales: ['moldes-de-yeso', 'moldes-para-velas', 'moldes-de-resina', 'moldes-para-macetas', 'moldes-para-jabones'],
    guias: [
      'como-hacer-piezas-de-yeso',
      'como-hacer-velas-de-soja',
      'como-usar-moldes-de-resina',
      'como-hacer-macetas-de-cemento',
    ],
    faq: [
      {
        pregunta: '¿Qué material elijo para una bandeja deco?',
        respuesta:
          'Yeso si querés detalle y terminaciones (mármol, dorado, colores pastel); cemento si buscás un look más crudo y resistente; resina si querés brillo o transparencia.',
      },
      {
        pregunta: '¿Puedo usar un florero de yeso con agua?',
        respuesta:
          'Solo si está bien impermeabilizado por dentro o si usás un tubo de vidrio adentro. El yeso sin sellar absorbe el agua y se deteriora.',
      },
      {
        pregunta: '¿Qué pabilo uso para un velón cilíndrico?',
        respuesta:
          'Uno acorde al diámetro: cuanto más ancho el velón, más grueso o con más hebras el pabilo. Hacé una prueba de quemado de un par de horas para ver que el charco de cera llegue casi al borde sin hacer humo.',
      },
    ],
  },
]

export function findTema(slug: string) {
  return temas.find((t) => t.slug === slug)
}
