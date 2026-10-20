import type { Guia } from './guias'

// Segunda tanda de guías del oficio. Mismo formato y criterio que `guias`:
// cada una resuelve la pregunta completa y deriva a la colección de
// moldarte.uy que hace falta para hacerlo.
export const guiasExtra: Guia[] = [
  {
    slug: 'que-pabilo-usar-segun-diametro',
    titulo: 'Qué pabilo usar según el diámetro de la vela (y cómo comprobarlo)',
    metaTitulo: 'Qué pabilo usar según el diámetro de la vela',
    descripcion:
      'Cómo elegir el grosor de pabilo según el diámetro de la vela: tabla orientativa y prueba de quema para detectar pozo, llama alta u hongo.',
    coleccion: 'insumos',
    categoria: 'insumos-para-velas',
    intro:
      'El pabilo es lo que decide cómo quema una vela. Con la misma cera y la misma esencia, un pabilo chico deja un túnel en el medio y uno grande hace humo y hollín. El punto de partida es el diámetro de la vela, pero la única forma de confirmarlo es prenderla y mirar. Acá va una tabla orientativa y el método para testear.',
    materiales: [
      'Pabilos de algodón encerado en dos o tres grosores, para comparar',
      'La cera que vas a usar (soja, parafina o abeja: cada una pide distinto)',
      'Frascos o moldes del diámetro final de tu vela',
      'Regla o calibre para medir el diámetro y la altura de la llama',
      'Tijera o cortapabilos',
      'Cuaderno o planilla para anotar cada prueba',
    ],
    secciones: [
      {
        titulo: 'Por qué el diámetro manda',
        parrafos: [
          'Una vela bien hecha forma, en cada encendido, un pozo de cera líquida que llega a los bordes. El tamaño de ese pozo depende del calor de la llama, y el calor depende del grosor del pabilo. Por eso la medida que importa es el diámetro de la superficie que se quema, no la altura de la vela.',
          'Medí el diámetro interno del frasco o el diámetro de la vela de molde en la parte más ancha que va a quemar. Si el frasco se angosta arriba, como algunos vasos, el pabilo se elige para el ancho del cuerpo, no de la boca.',
        ],
      },
      {
        titulo: 'Tabla orientativa por diámetro',
        parrafos: [
          'Hasta 5 cm: pabilo fino. Son las velas chicas, de vaso de shot o latitas. Un pabilo grueso acá recalienta el recipiente y hace llama alta.',
          'De 5 a 7,5 cm: pabilo medio. Es el rango de la mayoría de los frascos de vela de tamaño estándar y de muchas velas de molde.',
          'De 7,5 a 10 cm: pabilo grueso. Con cera de soja, que es más difícil de fundir de borde a borde, conviene probar el grosor más alto que te recomiende el fabricante para ese rango.',
          'Más de 10 cm: un solo pabilo rara vez alcanza. Lo habitual es pasar a dos o tres pabilos repartidos, cada uno cubriendo una parte de la superficie.',
          'Estos rangos son una guía para empezar. Cada línea de pabilos tiene su propia numeración, y la ficha del fabricante indica para qué diámetro y qué tipo de cera sirve cada medida: esa ficha manda sobre cualquier tabla genérica.',
        ],
      },
      {
        titulo: 'Lo que cambia la medida además del diámetro',
        parrafos: [
          'El tipo de cera: la soja y la cera de abeja son más densas al quemar y en general piden un pabilo más grueso que la parafina para el mismo diámetro. La cera de abeja, en particular, necesita bastante más pabilo del que uno espera.',
          'La esencia y el colorante: mucha carga de esencia o colorantes oscuros pueden tapar el pabilo y hacer hongo. Si subís el porcentaje de esencia, volvé a testear: a veces hay que bajar un grosor.',
          'La forma de la vela: en una vela de molde con relieve, lo que querés es que el pabilo funda el centro sin derretir las paredes, para que el diseño se mantenga. Ahí conviene un pabilo un poco más justo que en un frasco.',
        ],
      },
      {
        titulo: 'Cómo hacer la prueba de quema',
        parrafos: [
          'Hacé al menos dos velas de prueba por cada grosor, con la cera, esencia y frasco definitivos, y dejalas curar como harías con las de verdad. Cortá el pabilo a unos 5 mm y prendelas en un lugar sin corrientes de aire.',
          'Una regla práctica muy usada: el primer encendido debería durar alrededor de una hora por cada 2,5 cm de diámetro. Una vela de 7,5 cm, unas tres horas. Al final de ese tiempo, el pozo líquido tiene que haber llegado a los bordes y tener alrededor de 1 cm de profundidad.',
          'Anotá cada hora: ancho del pozo, altura de la llama, si hay humo y cómo queda el pabilo. Después apagala, dejala enfriar y repetí el ciclo varias veces: un pabilo puede andar bien al principio y fallar cuando la vela baja.',
        ],
      },
      {
        titulo: 'Cómo leer el resultado: pozo, llama alta y hongo',
        parrafos: [
          'Pozo o túnel: la cera se funde solo alrededor del pabilo y deja una pared sin quemar en el borde. El pabilo es chico. Pasá un grosor más arriba. El túnel se arma en los primeros encendidos y después es muy difícil de corregir, por eso la primera quema larga importa tanto.',
          'Llama alta, que baila o hace humo negro: el pabilo es grande o está largo. Primero cortalo a 5 mm y volvé a probar; si sigue, bajá un grosor. Una llama sana suele quedar entre 1 y 2,5 cm de alto. Un frasco que se calienta tanto que cuesta tocarlo también es señal de pabilo grande.',
          'Hongo: se forma una bolita de carbón en la punta del pabilo. Un poco es normal después de varias horas, pero si aparece rápido indica pabilo grande o mucha carga de esencia o colorante. Cortá el pabilo antes de cada encendido y, si se repite, probá un grosor menos.',
        ],
      },
    ],
    faq: [
      {
        pregunta: '¿Puedo usar el mismo pabilo para todas mis velas?',
        respuesta:
          'Solo si todas tienen el mismo diámetro, la misma cera y la misma carga de esencia. Si cambia cualquiera de esas tres cosas, conviene volver a testear.',
      },
      {
        pregunta: '¿Por qué mi vela hace un pozo en el medio y no se funde hasta el borde?',
        respuesta:
          'El pabilo es chico para el diámetro, o el primer encendido fue muy corto. Probá un grosor más y dejá que la primera quema dure hasta que el pozo llegue a los bordes.',
      },
      {
        pregunta: '¿A qué largo se corta el pabilo?',
        respuesta:
          'A unos 5 mm antes de cada encendido. Un pabilo largo hace llama alta, humo y hongo aunque el grosor sea el correcto.',
      },
    ],
    lecturas: [
      { titulo: 'Cómo hacer velas perfectas con moldes de silicona', ruta: '/blogs/blog/como-hacer-velas-perfectas-con-moldes-de-silicona' },
      { titulo: '¿Tus velas no quedan perfectas? El secreto está en la temperatura de vertido', ruta: '/blogs/blog/tus-velas-no-quedan-perfectas-el-secreto-esta-en-la-temperatura-de-vertido' },
    ],
  },
  {
    slug: 'cera-de-soja-parafina-o-cera-de-abeja',
    titulo: 'Cera de soja, parafina o cera de abeja: cuál usar para tus velas',
    metaTitulo: 'Cera de soja, parafina o cera de abeja: cuál elegir',
    descripcion:
      'Soja, parafina y abeja comparadas: para qué sirve cada cera, cuál va en molde y cuál en frasco, cómo llevan el aroma, precio relativo y mezclas.',
    coleccion: 'insumos',
    categoria: 'insumos-para-velas',
    intro:
      'No hay una cera mejor que las otras: hay una cera adecuada para cada vela. La soja, la parafina y la cera de abeja se comportan distinto al fundir, al enfriar, al llevar esencia y al quemar. Elegir bien te ahorra la mitad de los problemas antes de prender el fuego.',
    materiales: [
      'Cera de soja (de bajo punto para frasco o de alto punto para molde)',
      'Parafina en escamas o pastillas',
      'Cera de abeja, en pastillas o en bloque',
      'Estearina, si vas a trabajar parafina en molde',
      'Balanza de cocina, para mezclas en proporción',
      'Termómetro y jarra para baño maría',
    ],
    secciones: [
      {
        titulo: 'Cera de soja: la de frasco por excelencia',
        parrafos: [
          'Es una cera vegetal, de quema lenta y limpia, que se trabaja a temperaturas moderadas y se lava fácil de los utensilios con agua caliente y detergente. La versión de bajo punto de fusión es blanda y cremosa, se pega bien al vidrio y es la más usada para velas en frasco.',
          'Para molde existe soja de alto punto o mezclas de soja pensadas para pilares, que endurecen lo suficiente para sostenerse solas. Su punto débil es la estética: tiende a formar escarcha blanca en la superficie (frosting) y no da colores tan intensos como la parafina.',
          'Lleva bien la esencia, aunque el aroma con la vela prendida suele ser algo más suave que en parafina y mejora mucho con una o dos semanas de curado.',
        ],
      },
      {
        titulo: 'Parafina: la más versátil y la que más perfuma',
        parrafos: [
          'Es un derivado del petróleo, dura, con buena definición en molde y colores vivos y parejos. Es la que mejor proyecta el aroma con la vela prendida y, en general, la más económica de las tres.',
          'En molde se contrae bastante al enfriar, por eso casi siempre pide un segundo vertido para rellenar el hundimiento alrededor del pabilo. Para velas de molde se suele mezclar con estearina, que la endurece, la hace más opaca y facilita el desmolde; la proporción depende de la parafina y la indica el proveedor.',
          'Hay parafinas formuladas para frasco, más blandas. Si la usás en frasco, asegurate de que sea una de esas: la de molde se despega del vidrio al enfriar.',
        ],
      },
      {
        titulo: 'Cera de abeja: natural, dura y con aroma propio',
        parrafos: [
          'Es la más dura de las tres y la de quema más larga, con una llama brillante. Tiene un aroma suave a miel y un color amarillento natural; también se consigue blanqueada.',
          'Por su dureza es muy buena para molde: copia detalle fino y se desmolda bien de la silicona. En frasco se contrae y tiende a despegarse, salvo que la mezcles con algo más blanda.',
          'No lleva grandes cantidades de esencia y su propio aroma compite con el que agregues, por eso muchas velas de abeja se hacen sin perfume. Necesita pabilos bastante más gruesos que la soja o la parafina para el mismo diámetro. Es, por lejos, la más cara.',
        ],
      },
      {
        titulo: 'Molde o frasco: cuál va en cada caso',
        parrafos: [
          'Velas de molde de silicona: soja de alto punto, parafina con estearina o cera de abeja. Las tres endurecen y se sostienen solas. Si el diseño tiene mucho relieve, la parafina con estearina y la abeja son las que mejor copian el detalle.',
          'Velas en frasco, vaso o lata: soja de bajo punto o parafina de frasco. Se adhieren al recipiente y quedan con superficie lisa.',
          'Tealights y velas chicas: cualquiera funciona, pero la parafina es la opción más usada por costo y por cómo se comporta en tamaños chicos.',
        ],
      },
      {
        titulo: 'Mezclas: lo mejor de dos ceras',
        parrafos: [
          'Soja con parafina: mejora la proyección del aroma y reduce la escarcha de la soja. Es una de las mezclas más comunes en frascos comerciales.',
          'Soja con cera de abeja: un porcentaje chico de abeja endurece la soja y la vuelve más apta para molde, sin perder el carácter vegetal. Muchos artesanos arrancan probando entre un 10 y un 30 % de abeja sobre el total y ajustan según el resultado.',
          'Cuando mezclás, hacé una tanda chica primero y testeá la quema: el pabilo y la temperatura de vertido pueden cambiar respecto de cada cera por separado. Si la mezcla viene hecha de fábrica, seguí la ficha del fabricante.',
        ],
      },
    ],
    faq: [
      {
        pregunta: '¿Cuál es la cera más fácil para empezar?',
        respuesta:
          'Para frasco, la soja de bajo punto: se trabaja a temperatura moderada y perdona errores. Para molde de silicona, la parafina con estearina o una soja de alto punto.',
      },
      {
        pregunta: '¿Qué cera perfuma más?',
        respuesta:
          'En general la parafina es la que mejor proyecta el aroma con la vela prendida. La soja perfuma bien pero más suave, y la cera de abeja lleva poca esencia y tiene aroma propio.',
      },
      {
        pregunta: '¿Puedo usar cera de frasco en un molde?',
        respuesta:
          'No conviene. Las ceras de frasco están hechas para quedar blandas y adherirse al vidrio: en un molde salen blandas, se deforman y se marcan al desmoldar.',
      },
    ],
    lecturas: [
      { titulo: 'Guía de Materiales: ¿Cómo elegir la cera ideal para tus velas?', ruta: '/blogs/blog/guia-de-materiales-como-elegir-la-cera-ideal-para-tus-velas' },
      { titulo: '¿Cómo elegir el molde ideal para tus creaciones? Descubrí sus diferencias', ruta: '/blogs/blog/como-elegir-el-molde-ideal-para-tus-creaciones-descubri-sus-diferencias' },
    ],
  },
  {
    slug: 'cuanta-esencia-por-kilo-de-cera',
    titulo: 'Cuánta esencia por kilo de cera: velas, jabón de glicerina y difusores',
    metaTitulo: 'Cuánta esencia por kilo de cera: porcentajes y cálculo',
    descripcion:
      'Cuánta esencia lleva cada producto: velas de soja, parafina y abeja, jabón de glicerina y difusores. Porcentajes orientativos y ejemplos de cálculo en gramos.',
    coleccion: 'esencias',
    categoria: 'insumos-para-velas',
    intro:
      'La pregunta más repetida en el taller es cuánta esencia poner. La respuesta corta es un porcentaje sobre el peso, y ese porcentaje cambia mucho según el producto: no es lo mismo una vela que un jabón o un difusor. Acá van los rangos orientativos de cada uno y cómo pasarlos a gramos sin errores.',
    materiales: [
      'Balanza de cocina digital, que pese de a 1 g',
      'Esencia aromática apta para el producto que vas a hacer',
      'La ficha técnica y la ficha de seguridad de la esencia',
      'Jarra o vaso para pesar la esencia aparte',
      'Calculadora o planilla',
    ],
    secciones: [
      {
        titulo: 'Pesá, no midas en mililitros',
        parrafos: [
          'Los porcentajes se calculan en peso. Las esencias no pesan lo mismo que el agua: un mililitro puede pesar bastante menos o algo más de un gramo según la fórmula. Medir con cucharita o jeringa en mililitros da resultados que cambian de una esencia a otra.',
          'Poné la jarra en la balanza, tarala a cero y agregá la esencia hasta el peso que calculaste. Lo mismo con la cera: pesala sólida, antes de fundir.',
        ],
      },
      {
        titulo: 'Velas: según la cera',
        parrafos: [
          'Cera de soja: entre el 6 y el 10 % del peso de la cera, es decir 60 a 100 g por kilo. Para una primera tanda, 8 % es un buen punto de partida.',
          'Parafina: suele trabajarse con algo menos, alrededor del 3 al 6 %. Proyecta bien el aroma y, pasado cierto punto, no retiene más esencia: el exceso sale a la superficie.',
          'Cera de abeja: lleva poca esencia, en general no más del 3 al 5 %, y su propio aroma compite con el que agregues.',
          'Cada cera tiene una carga máxima de esencia que indica el fabricante. No la superes: la vela suda aceite, hace humo o el pabilo hace hongo. Y la esencia se agrega siempre por debajo de su punto de inflamación, que figura en su ficha.',
        ],
      },
      {
        titulo: 'Jabón de glicerina y difusores',
        parrafos: [
          'Jabón de glicerina (base para fundir y verter): lo habitual va del 1 al 3 % del peso de la base. Es un producto que va sobre la piel, así que la esencia tiene que ser de uso cosmético y el máximo lo fija su ficha, que suele indicar el porcentaje permitido para jabones. Mejor quedarse corto que pasarse: el exceso irrita y puede hacer que la base sude.',
          'Difusores de varillas: acá la esencia es buena parte de la mezcla. El rango orientativo va del 15 al 30 % de esencia sobre el total, con el resto de base para difusor. Por debajo perfuma poco; por encima la mezcla se vuelve espesa y sube peor por las varillas. La base que uses suele traer su proporción recomendada.',
          'Una esencia para velas no es automáticamente apta para jabón, ni al revés. Revisá en la ficha para qué usos está aprobada cada una.',
        ],
      },
      {
        titulo: 'Cómo calcularlo: porcentaje sobre la cera',
        parrafos: [
          'La forma más usada en velas es calcular la esencia sobre el peso de la cera: gramos de esencia = gramos de cera × porcentaje. Para 1 kg de cera de soja al 8 %: 1000 × 0,08 = 80 g de esencia.',
          'Ejemplo con una tanda chica: 500 g de cera al 8 % llevan 500 × 0,08 = 40 g de esencia. Al 6 % serían 30 g; al 10 %, 50 g.',
          'Si querés partir del peso final de la vela, dividí por 1 más el porcentaje. Para una vela de 200 g al 8 %: cera = 200 ÷ 1,08 ≈ 185 g, y esencia = 185 × 0,08 ≈ 15 g. Sumados dan los 200 g que entran en el frasco.',
        ],
      },
      {
        titulo: 'Ejemplos para jabón y difusor',
        parrafos: [
          'Jabón de glicerina: 1 kg de base al 2 % lleva 1000 × 0,02 = 20 g de esencia. Si hacés una sola barra de 100 g, son 2 g: con cantidades así de chicas, una balanza de precisión ayuda mucho.',
          'Difusor de 100 g de mezcla final al 20 %: 20 g de esencia y 80 g de base. Acá el porcentaje es sobre el total, no sobre la base, porque así lo expresan casi todas las fórmulas de difusor.',
          'Anotá siempre el porcentaje, la esencia y el lote de cada tanda. Si una sale muy bien o muy mal, vas a saber exactamente qué repetir o qué corregir.',
        ],
      },
    ],
    faq: [
      {
        pregunta: '¿Si pongo más esencia la vela huele más?',
        respuesta:
          'Hasta cierto punto. Pasada la carga máxima de la cera, el exceso no se integra: suda en la superficie, hace humo y puede apagar el pabilo. Si huele poco, revisá primero el curado, la temperatura a la que agregaste la esencia y el pabilo.',
      },
      {
        pregunta: '¿Cuántos gramos de esencia lleva 1 kg de cera de soja?',
        respuesta:
          'Entre 60 y 100 g, según la esencia y la cera. Un 8 %, es decir 80 g, es un buen punto para empezar.',
      },
      {
        pregunta: '¿Puedo usar la misma esencia para velas y jabones?',
        respuesta:
          'Solo si su ficha la aprueba para los dos usos. Para jabón tiene que ser apta para contacto con la piel, y el porcentaje máximo lo indica el fabricante.',
      },
    ],
    lecturas: [
      { titulo: 'Guía Maestra: Cómo Crear Velas con Moldes de Silicona en 3 Simples Pasos', ruta: '/blogs/blog/guia-maestra-como-crear-velas-con-moldes-de-silicona-en-3-simples-pasos' },
      { titulo: 'Guía de Materiales: ¿Cómo elegir la cera ideal para tus velas?', ruta: '/blogs/blog/guia-de-materiales-como-elegir-la-cera-ideal-para-tus-velas' },
    ],
  },
  {
    slug: 'efecto-marmol-en-yeso',
    titulo: 'Cómo lograr efecto mármol y terrazo en piezas de yeso',
    metaTitulo: 'Efecto mármol en yeso: vetas y terrazo en molde',
    descripcion:
      'Cómo hacer piezas de yeso con efecto mármol o terrazo en molde de silicona: qué pigmentos usar, técnica de vetas, terrazo con trozos, lijado y sellado.',
    coleccion: 'yeso',
    categoria: 'moldes-de-yeso',
    intro:
      'El efecto mármol en yeso es más simple de lo que parece, pero no se puede corregir: el yeso fragua en minutos y las vetas quedan como quedaron. La clave es tener todo preparado antes de mezclar y revolver lo justo. El terrazo, en cambio, se arma en dos etapas y se revela recién al lijar.',
    materiales: [
      'Yeso artístico o cerámico, de fraguado fino',
      'Molde de silicona',
      'Pigmento en polvo para yeso u óxidos minerales (negro, gris, ocre, terracota)',
      'Dos o tres vasos para mezclar y palitos o espátulas',
      'Balanza y agua a temperatura ambiente',
      'Lijas al agua de grano medio y fino',
      'Sellador acrílico al agua o barniz mate o satinado',
    ],
    secciones: [
      {
        titulo: 'Pigmentos: qué usar y cuánto',
        parrafos: [
          'Lo más confiable son los pigmentos en polvo pensados para yeso o cemento y los óxidos minerales: dan color estable y no alteran el fraguado. Las pinturas acrílicas en pequeña cantidad también sirven para vetas finas, pero en exceso agregan agua y debilitan la pieza.',
          'Para el mármol clásico alcanza con blanco y un negro o gris para las vetas. Para tonos cálidos, ocre o terracota sobre una base blanca o arena.',
          'Usá poco: el pigmento es un sólido que se suma al yeso, y pasarse vuelve la pieza más frágil. Como referencia, unos pocos gramos por cada 100 g de yeso ya dan un color intenso. Disolvé el polvo primero en una parte del agua de la mezcla para que no queden grumos.',
        ],
      },
      {
        titulo: 'Prepará todo antes de mezclar',
        parrafos: [
          'Pesá el yeso y el agua según la proporción que indique el fabricante. Muchos yesos artísticos rondan 2 partes de yeso por 1 de agua en peso, pero cambia según el producto y manda su ficha.',
          'Dejá el molde limpio, seco y apoyado en una superficie nivelada, y el pigmento ya disuelto. Desde que el yeso toca el agua tenés pocos minutos de trabajo, así que nada de buscar cosas a mitad del proceso.',
          'Espolvoreá siempre el yeso sobre el agua, no al revés, dejá que se hidrate un minuto y recién ahí revolvé, despacio, para no meter aire.',
        ],
      },
      {
        titulo: 'Técnica de vetas: el efecto mármol',
        parrafos: [
          'Separá un poco de la mezcla, más o menos un quinto, en otro vaso y agregale el pigmento oscuro. Volcá la base blanca en el molde hasta la mitad, agregá unas gotas o un hilo de la mezcla pigmentada y pasá un palillo una o dos veces en forma de S. Completá con el resto de la base y repetí.',
          'Otra forma es volcar las dos mezclas a la vez desde vasos distintos, alternando, para que las vetas se formen solas al llenar el molde. Da un resultado más natural y menos dibujado.',
          'El error más común es revolver de más: en dos o tres pasadas las vetas desaparecen y la pieza queda gris pareja. Menos es más. Golpeá suave el molde contra la mesa para que suban las burbujas, sin agitarlo.',
        ],
      },
      {
        titulo: 'Terrazo: trozos de color en una base lisa',
        parrafos: [
          'Primero hacé los trozos: colá una plancha fina de yeso pigmentado, de pocos milímetros, en uno o varios colores. Cuando esté seca, rompela en pedacitos irregulares de distintos tamaños.',
          'Prepará la mezcla base, incorporá los trozos y volcá en el molde. También podés distribuir los trozos dentro del molde vacío y volcar la base encima. Como los trozos quedan cubiertos por una película de yeso, en el desmolde casi no se ven.',
          'El terrazo se revela al lijar. Con la pieza ya seca, pasá lija al agua de grano medio sobre la cara visible hasta que aparezcan los cortes de los trozos, y terminá con grano fino para dejarla suave. Lijar en húmedo evita levantar polvo.',
        ],
      },
      {
        titulo: 'Secado y sellado',
        parrafos: [
          'Desmoldá cuando la pieza esté firme y fría al tacto, y dejala secar del todo antes de lijar o sellar: según el tamaño y la humedad del ambiente, puede llevar de uno a varios días. Una pieza de yeso seca pesa notablemente menos que recién desmoldada.',
          'El yeso es poroso y se mancha con facilidad. Un sellador acrílico al agua o un barniz mate o satinado, en dos manos finas, lo protege y realza el color de las vetas. Si la pieza va a estar en un lugar húmedo o va a contener algo, sellá todas las caras, también la base.',
          'Aun sellado, el yeso no es apto para contacto con alimentos ni para estar en agua. Para portavelas, usá siempre un tealight con su cápsula o un vaso de vidrio adentro.',
        ],
      },
    ],
    faq: [
      {
        pregunta: '¿Puedo usar témpera o acrílico para pigmentar el yeso?',
        respuesta:
          'En poca cantidad, sí, sobre todo para vetas. En exceso agregan agua y aglutinantes que debilitan la pieza y pueden alterar el fraguado. Para colorear toda la masa conviene pigmento en polvo u óxido.',
      },
      {
        pregunta: '¿Por qué las vetas me quedaron borrosas?',
        respuesta:
          'Por revolver de más o por volcar el pigmento cuando la base ya estaba muy espesa. Dos o tres pasadas de palillo alcanzan, y conviene hacerlo apenas la mezcla está lista.',
      },
      {
        pregunta: '¿Hace falta sellar las piezas de yeso?',
        respuesta:
          'Para decoración en interiores no es obligatorio, pero sin sellar el yeso absorbe manchas y humedad. Un sellador acrílico al agua las protege y realza el color.',
      },
    ],
    lecturas: [
      { titulo: 'Adiós a las burbujas: El secreto para lograr piezas de yeso impecables', ruta: '/blogs/blog/adios-a-las-burbujas-el-secreto-para-lograr-piezas-de-yeso-impecables' },
      { titulo: '¿Burbujas en tus piezas de yeso? No las tires, ¡así podés arreglarlas!', ruta: '/blogs/blog/burbujas-en-tus-piezas-de-yeso-no-las-tires-asi-podes-arreglarlas' },
      { titulo: '¿Cuánto rinde una bolsa de 500g de yeso artístico? Descubrilo acá', ruta: '/blogs/blog/cuanto-rinde-una-bolsa-de-500g-de-yeso-artistico-descubrilo-aca' },
    ],
  },
  {
    slug: 'como-hacer-velas-para-vender',
    titulo: 'Cómo hacer velas para vender: costos, precio y producción',
    metaTitulo: 'Cómo hacer velas para vender: costos y precio',
    descripcion:
      'Emprendimiento de velas en Uruguay: costeo por unidad, precio para ferias e Instagram, producción en tandas, curado, stock y rotulado.',
    coleccion: 'velas',
    categoria: 'moldes-para-velas',
    intro:
      'Hacer una vela linda es una cosa; venderla sin perder plata es otra. La mayoría de los emprendimientos de velas que no funcionan no fallan por la calidad, sino porque nunca calcularon cuánto les cuesta cada unidad. Esta guía va de los números al rotulado, con ejemplos en cifras redondas inventadas solo para mostrar el cálculo.',
    materiales: [
      'Balanza digital y termómetro',
      'Cera, esencia y pabilos de proveedores que puedas repetir en el tiempo',
      'Frascos o moldes de silicona en cantidad suficiente para una tanda',
      'Etiquetas y packaging',
      'Una planilla de costos y otra de lotes',
      'Espacio para curar y guardar stock, fresco y sin sol directo',
    ],
    secciones: [
      {
        titulo: 'Costeo por unidad: sumá todo, también lo chico',
        parrafos: [
          'El costo de una vela es la suma de cada cosa que lleva: cera, esencia, pabilo (con su base metálica si usás), frasco y tapa o el desgaste del molde, colorante, etiqueta, caja o bolsa, y hasta el papel de seda o la tarjeta. Calculá cada insumo por gramo o por unidad y multiplicá por lo que usa una vela.',
          'Ejemplo con números inventados: si el kilo de cera te sale 400, cada gramo cuesta 0,40; una vela con 185 g de cera son 74. Si la esencia te sale 1.000 el kilo, los 15 g de esa vela son 15. Sumá pabilo 10, frasco 60, etiqueta y packaging 25: el costo de materiales queda en 184.',
          'Agregale un margen de merma, entre un 5 y un 10 %, por velas que salen mal, cera que queda en la jarra y pruebas. Y no te olvides de los gastos que no van en la vela pero salen de tu bolsillo: gas o luz, comisiones de la plataforma de cobro, envíos que absorbés, el puesto de la feria.',
        ],
      },
      {
        titulo: 'Cómo fijar el precio',
        parrafos: [
          'Un error muy común es poner precio mirando a la competencia sin saber el propio costo. Primero tu costo total por unidad (materiales, merma y gastos repartidos), después tu tiempo, y recién ahí el margen.',
          'Una referencia muy usada en productos artesanales es que el precio de venta al público sea al menos entre 2 y 3 veces el costo de materiales. Siguiendo el ejemplo, con un costo de 184 el precio quedaría entre 370 y 550. Si vendés también a tiendas por mayor, ese precio mayorista tiene que dejarte ganancia y el de venta al público tiene que ser bastante más alto, porque la tienda también necesita su margen.',
          'Ferias e Instagram no tienen el mismo costo. En la feria pagás el puesto y tu día; por Instagram, las comisiones de cobro, el tiempo de responder mensajes y a veces el envío. Hacé la cuenta de cuántas velas necesitás vender para cubrir esos costos fijos antes de decidir si una feria te conviene.',
        ],
      },
      {
        titulo: 'Producción en tandas',
        parrafos: [
          'Producir de a una vela es caro en tiempo. Trabajá en tandas del tamaño de tu jarra: fundís una vez, perfumás una vez y llenás varios frascos o moldes seguidos. Tener varios moldes iguales rinde mucho más que tener muchos diseños distintos.',
          'Antes de producir para vender, definí una receta cerrada por producto: cera, porcentaje de esencia, pabilo, temperatura de vertido. Testeá la quema completa de cada combinación y no la cambies sin volver a testear. Un cliente que compra dos veces la misma vela espera que queme igual.',
          'Llevá una planilla de lotes: fecha, receta, cantidad y cualquier observación. Si aparece un problema, sabés qué tanda revisar.',
        ],
      },
      {
        titulo: 'Curado y stock',
        parrafos: [
          'Las velas de soja necesitan una o dos semanas de curado para dar todo el aroma, y la parafina también mejora con unos días. Planificá con ese tiempo: para una feria o una fecha especial, la producción tiene que estar lista con anticipación.',
          'Guardá el stock en un lugar fresco, seco y sin sol directo: el calor ablanda las velas de molde y el sol decolora los colorantes. Taparlas o guardarlas en caja ayuda a conservar el aroma.',
          'Empezá con pocos productos y poco stock de cada uno. Es mejor quedarte sin una vela que tener cajas de un aroma que no se vende.',
        ],
      },
      {
        titulo: 'Rotulado y advertencias',
        parrafos: [
          'Cada vela debería llevar, como mínimo, el nombre del producto o del aroma, el peso neto, tu nombre o marca y un contacto, y el número de lote. El lote es lo que te permite rastrear una tanda si hay un reclamo.',
          'Sumá las advertencias de uso seguro: no dejar la vela encendida sin vigilancia, mantenerla lejos de niños, mascotas y cortinas, apoyarla sobre una superficie resistente al calor y cortar el pabilo a unos 5 mm antes de cada encendido. Si la esencia tiene alérgenos declarados en su ficha de seguridad, es buena práctica indicarlo.',
          'Las exigencias formales para vender (facturación, registro de la actividad, habilitaciones para ferias) cambian y dependen de tu caso. Antes de crecer, consultá con un contador o en los organismos que correspondan cuál es el régimen adecuado, por ejemplo si te sirve el monotributo.',
        ],
      },
    ],
    faq: [
      {
        pregunta: '¿Cuánto cobrar una vela artesanal?',
        respuesta:
          'Depende de tu costo, no del de otros. Calculá materiales, merma y gastos por unidad; como referencia, el precio al público suele estar al menos entre 2 y 3 veces el costo de materiales.',
      },
      {
        pregunta: '¿Qué velas conviene hacer para empezar a vender?',
        respuesta:
          'Pocas referencias con una receta testeada: una o dos velas en frasco y uno o dos diseños de molde, en tres o cuatro aromas. Así comprás insumos en mayor cantidad y controlás mejor la calidad.',
      },
      {
        pregunta: '¿Cuánto tiempo antes tengo que producir para una feria?',
        respuesta:
          'Al menos dos semanas antes si trabajás con soja, para que las velas curen y den todo su aroma. Con parafina alcanza con unos días, pero conviene no dejarlo para último momento.',
      },
    ],
    lecturas: [
      { titulo: 'Guía Maestra: Cómo Crear Velas con Moldes de Silicona en 3 Simples Pasos', ruta: '/blogs/blog/guia-maestra-como-crear-velas-con-moldes-de-silicona-en-3-simples-pasos' },
      { titulo: '¿Qué se puede usar para desmoldar velas? Descubre las mejores opciones', ruta: '/blogs/blog/que-se-puede-usar-para-desmoldar-velas-descubre-las-mejores-opciones' },
      { titulo: 'Guía de Limpieza: Cómo Mantener tus Moldes de Silicona como Nuevos', ruta: '/blogs/blog/guia-de-limpieza-como-mantener-tus-moldes-de-silicona-como-nuevos' },
    ],
  },
]
