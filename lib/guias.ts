// Guías del oficio: el contenido informacional ("cómo hacer…") es donde está
// el volumen de búsqueda y donde Moldarte no compite con su propia tienda.
// Cada guía resuelve la pregunta completa y deriva a la colección de
// moldarte.uy que hace falta para hacerlo (campo `coleccion`).
export type Guia = {
  slug: string
  titulo: string
  // <title> y description propios: más cortos y con la keyword adelante.
  metaTitulo: string
  descripcion: string
  coleccion: string
  // Categoría relacionada de moldes.uy, para el link interno.
  categoria: string
  intro: string
  materiales: string[]
  secciones: { titulo: string; parrafos: string[] }[]
  faq: { pregunta: string; respuesta: string }[]
}

export const guias: Guia[] = [
  {
    slug: 'como-hacer-velas-de-soja',
    titulo: 'Cómo hacer velas de soja en molde de silicona, paso a paso',
    metaTitulo: 'Cómo hacer velas de soja en molde de silicona (paso a paso)',
    descripcion:
      'Guía completa para hacer velas de cera de soja con molde de silicona: qué cera usar, temperaturas, cuánta esencia poner, cómo colocar el pabilo y cómo desmoldar sin marcas.',
    coleccion: 'velas',
    categoria: 'moldes-para-velas',
    intro:
      'Una vela de soja en molde de silicona es de los primeros proyectos que sale bien con poca inversión: un molde, cera, pabilo, esencia y un termómetro de cocina. Lo que separa una vela prolija de una con grietas, pozos o sin aroma son tres o cuatro detalles de temperatura y de elección de cera, y están todos acá.',
    materiales: [
      'Molde de silicona para velas (con el diseño que quieras sacar)',
      'Cera de soja de alto punto de fusión: la de bajo punto es para frascos y queda blanda fuera de un recipiente',
      'Pabilo de algodón encerado, de un grosor acorde al diámetro de la vela',
      'Esencia aromática para velas (no aceites de uso cosmético)',
      'Colorante para velas, opcional',
      'Termómetro de cocina, una jarra o recipiente para fundir y una olla para baño maría',
      'Palitos o pinzas para centrar el pabilo',
    ],
    secciones: [
      {
        titulo: 'Elegí la cera correcta: alto punto para molde, bajo punto para frasco',
        parrafos: [
          'La cera de soja viene en dos familias. La de bajo punto de fusión está hecha para velas en frasco o vaso: se pega al vidrio, quema lento y queda cremosa. Si la volcás en un molde, la vela sale blanda, se deforma al desmoldar y se marca con los dedos.',
          'Para molde de silicona necesitás cera de soja de alto punto (a veces vendida como "pilar" o "APF"), que endurece firme y se sostiene sola. Si tu vela tiene mucho relieve fino, una cera de alto punto es la diferencia entre que el detalle salga entero o se quede pegado en el molde.',
        ],
      },
      {
        titulo: 'Fundí la cera a baño maría, sin pasarte de temperatura',
        parrafos: [
          'Fundí la cera a baño maría, nunca a fuego directo. Como referencia, la mayoría de las ceras de soja se funden completas entre 70 y 80 °C; pasarse mucho de ahí amarillenta la cera y hace que la esencia se evapore antes de tiempo. El rango exacto lo da el fabricante de la cera que uses, y conviene respetarlo.',
          'Un termómetro de cocina de los de punzón alcanza. Hacer velas "a ojo" es la causa número uno de velas con grietas o con superficie irregular.',
        ],
      },
      {
        titulo: 'Agregá la esencia en el momento justo',
        parrafos: [
          'La esencia se agrega con la cera fundida, ya fuera del fuego, alrededor de los 80 a 85 °C en la mayoría de las ceras de soja. Revolvé suave durante uno o dos minutos para que se integre bien: si no se liga con la cera, el aroma queda flojo cuando la vela está prendida.',
          'La cantidad habitual está entre el 6 y el 10 % del peso de la cera (60 a 100 g de esencia por kilo). Más no siempre es mejor: pasarse puede hacer que la vela "sude" aceite en la superficie o que haga humo. Si es tu primera tanda, arrancá en 8 %.',
          'El colorante va en el mismo momento. Con colorante concentrado para velas, unas pocas gotas o virutas alcanzan: es fácil pasarse y que la vela quede con un tono artificial.',
        ],
      },
      {
        titulo: 'Colocá el pabilo antes de verter',
        parrafos: [
          'En los moldes de silicona el pabilo se pasa por el agujero de la base del molde (o se hace uno con una aguja gruesa) y se sostiene centrado arriba con un palito o una pinza. Tiene que quedar recto y tenso: un pabilo corrido quema la vela de costado.',
          'El grosor depende del diámetro de la vela. Un pabilo chico deja un pozo en el centro y la vela se apaga ahogada; uno grande hace llama alta y humo. Si no sabés cuál elegir, el fabricante del pabilo suele indicar para qué diámetros sirve cada medida.',
        ],
      },
      {
        titulo: 'Verté despacio y a la temperatura de vertido',
        parrafos: [
          'Dejá bajar la temperatura antes de volcar. Para cera de soja de alto punto en molde, un vertido entre 60 y 70 °C suele dar buena superficie; verter muy caliente provoca contracción fuerte y un hundimiento en el centro, y muy frío deja marcas y líneas en la cara de la vela.',
          'Volcá despacio y apoyando el chorro contra la pared del molde, para no meter aire. Si al enfriar se forma un pozo alrededor del pabilo, guardá un poco de cera y hacé un segundo vertido corto para nivelar.',
        ],
      },
      {
        titulo: 'Desmoldá en frío y dejala curar',
        parrafos: [
          'Esperá a que la vela esté completamente fría, en general varias horas o de un día para el otro según el tamaño. No la metas a la heladera para apurar: el cambio brusco la fisura.',
          'Para desmoldar, abrí el molde despacio desde los bordes y empujá la vela desde la base, sin tirar del pabilo. La silicona tiene que doblarse alrededor de la pieza, no la pieza forzarse contra la silicona.',
          'La vela de soja mejora el aroma con el curado: dejala reposar una o dos semanas en un lugar fresco antes de prenderla o venderla. Cortá el pabilo a unos 5 mm antes del primer uso.',
        ],
      },
    ],
    faq: [
      {
        pregunta: '¿Puedo usar cera de soja de frasco en un molde de silicona?',
        respuesta:
          'No es lo ideal. La cera de bajo punto está formulada para quedar blanda y adherirse al vidrio, así que en un molde sale blanda y se deforma. Para molde conviene cera de soja de alto punto.',
      },
      {
        pregunta: '¿Por qué mi vela de soja salió con grietas o con la superficie rugosa?',
        respuesta:
          'Casi siempre es temperatura: verter muy caliente o muy frío, o enfriar demasiado rápido (corrientes de aire, heladera). Verter dentro del rango que indica la cera y dejar enfriar a temperatura ambiente lo resuelve en la mayoría de los casos.',
      },
      {
        pregunta: '¿Cuánta esencia lleva una vela de soja?',
        respuesta:
          'Entre el 6 y el 10 % del peso de la cera, es decir 60 a 100 g de esencia por kilo. Para empezar, 8 % es un buen punto. Pasarse puede hacer que la vela suelte aceite o humo.',
      },
    ],
  },
  {
    slug: 'temperatura-cera-de-soja',
    titulo: 'Temperatura de la cera de soja: cuándo fundir, cuándo perfumar y cuándo verter',
    metaTitulo: 'Temperatura de la cera de soja: tabla para velas',
    descripcion:
      'A qué temperatura se funde la cera de soja, cuándo agregar la esencia y a qué temperatura verter en frasco o en molde de silicona. Tabla de referencia y errores típicos.',
    coleccion: 'insumos',
    categoria: 'insumos-para-velas',
    intro:
      'La temperatura es lo que más cambia el resultado de una vela de soja, y es lo que más se hace a ojo. Esta es una tabla de referencia para las tres etapas (fundir, perfumar, verter) y qué pasa cuando te salís del rango. Los valores son orientativos: cada fabricante de cera publica los suyos, y esos mandan.',
    materiales: [
      'Termómetro de cocina (de punzón o infrarrojo)',
      'Cera de soja de bajo punto para frascos o de alto punto para moldes',
      'Esencia aromática para velas',
      'Jarra de fundir y olla para baño maría',
    ],
    secciones: [
      {
        titulo: 'Tabla de referencia',
        parrafos: [
          'Fundir: entre 70 y 80 °C, a baño maría. Por encima de 90 °C la cera se amarillenta y pierde calidad.',
          'Agregar esencia y colorante: alrededor de 80 a 85 °C, fuera del fuego, revolviendo uno o dos minutos.',
          'Verter en frasco (cera de bajo punto): entre 50 y 60 °C. Más caliente favorece que la cera se despegue del vidrio y queden "manchas húmedas".',
          'Verter en molde de silicona (cera de alto punto): entre 60 y 70 °C. Más frío deja líneas en la superficie; más caliente aumenta el hundimiento central.',
        ],
      },
      {
        titulo: 'Por qué importa la temperatura de la esencia',
        parrafos: [
          'La esencia necesita que la cera esté lo bastante caliente para ligarse, pero no tanto como para evaporarse. Si la agregás muy fría, queda separada y la vela huele poco prendida; si la agregás hirviendo, perdés parte del aroma en el aire de tu cocina.',
          'También importa el punto de inflamación de la esencia (lo indica su ficha): nunca la agregues con la cera por encima de ese valor.',
        ],
      },
      {
        titulo: 'Errores típicos y cómo se ven',
        parrafos: [
          'Superficie con grietas o cráteres: vertido muy caliente o enfriado muy rápido.',
          'Manchas en el vidrio (zonas donde la cera se despegó): vertido caliente, frasco frío o cambios de temperatura del ambiente. Calentar apenas el frasco antes de verter ayuda.',
          'Escarcha blanca en la superficie (frosting): es propio de la soja y no afecta el uso; se reduce vertiendo un poco más frío y dejando enfriar sin corrientes de aire.',
          'Poco aroma: esencia agregada fría, poca cantidad o falta de curado. Las velas de soja necesitan una o dos semanas de reposo para dar todo el aroma.',
        ],
      },
      {
        titulo: 'El ambiente también cuenta',
        parrafos: [
          'En invierno, en una cocina fría, la cera se enfría mucho más rápido entre la jarra y el molde. Si notás líneas o burbujas que antes no tenías, verté unos grados más caliente o templá el molde o el frasco antes. En verano pasa lo contrario: la vela tarda más en fraguar y conviene esperar más antes de desmoldar.',
        ],
      },
    ],
    faq: [
      {
        pregunta: '¿A qué temperatura se derrite la cera de soja?',
        respuesta:
          'Depende de la formulación: las de bajo punto para frasco empiezan a fundir alrededor de 45 a 55 °C y las de alto punto para molde algo más arriba. Para trabajarla se funde completa entre 70 y 80 °C.',
      },
      {
        pregunta: '¿Se puede fundir la cera de soja en el microondas?',
        respuesta:
          'No es recomendable: calienta desparejo y es fácil pasarse de temperatura sin darte cuenta. El baño maría con termómetro es más seguro y más controlable.',
      },
      {
        pregunta: '¿Hace falta termómetro para hacer velas?',
        respuesta:
          'Sí, si querés resultados repetibles. Es barato y es la diferencia entre adivinar y saber por qué una tanda salió bien o mal.',
      },
    ],
  },
  {
    slug: 'como-hacer-jabon-de-glicerina',
    titulo: 'Cómo hacer jabón de glicerina en molde de silicona (sin soda cáustica)',
    metaTitulo: 'Cómo hacer jabón de glicerina casero en molde de silicona',
    descripcion:
      'Paso a paso para hacer jabones de glicerina con el método melt and pour: cómo fundir la base, cuánta esencia y colorante usar, cómo evitar burbujas y por qué el jabón "suda".',
    coleccion: 'jabones',
    categoria: 'moldes-para-jabones',
    intro:
      'El jabón de glicerina con método melt and pour ("fundir y verter") es la forma más simple de arrancar en jabonería: se compra una base ya saponificada, se funde, se perfuma, se colorea y se vuelca en el molde. No hay soda cáustica ni semanas de curado, y en una tarde tenés jabones listos para regalar o vender.',
    materiales: [
      'Molde de silicona para jabones',
      'Base de glicerina transparente o blanca (opaca)',
      'Esencia apta para uso cosmético',
      'Colorante para jabón (no de velas: no es apto para la piel)',
      'Alcohol en aerosol (rociador)',
      'Recipiente apto para microondas o baño maría y una espátula',
      'Film para envolver',
    ],
    secciones: [
      {
        titulo: 'Cortá y fundí la base sin que hierva',
        parrafos: [
          'Cortá la glicerina en cubos chicos para que funda parejo. Fundila a baño maría o en tandas cortas de microondas (de 20 a 30 segundos), revolviendo entre tanda y tanda. No la dejes hervir: la base se pone espesa, amarillenta y se llena de burbujas.',
          'Como referencia, la mayoría de las bases trabaja bien fundida entre 60 y 70 °C. Si el envase de tu base indica otra cosa, seguí el envase.',
        ],
      },
      {
        titulo: 'Esencia y color: menos es más',
        parrafos: [
          'La esencia se agrega con la base ya fundida y fuera del calor. Lo habitual es entre el 1 y el 3 % del peso de la base (10 a 30 g por kilo). Pasarse irrita la piel y puede hacer que el jabón quede blando o turbio.',
          'El colorante se dosifica de a gotas. En glicerina transparente, con muy poco ya tenés un color intenso; en base blanca los tonos quedan pastel.',
        ],
      },
      {
        titulo: 'Verté y eliminá las burbujas con alcohol',
        parrafos: [
          'Volcá la base en el molde despacio. Inmediatamente después, rociá un poco de alcohol sobre la superficie: revienta las burbujas chicas antes de que se sellen al enfriar. Es el truco más efectivo para que la cara del jabón quede lisa.',
          'Si vas a hacer capas de colores, rociá alcohol también sobre la capa ya fraguada antes de volcar la siguiente, para que se peguen entre sí.',
        ],
      },
      {
        titulo: 'Desmoldá cuando esté completamente frío',
        parrafos: [
          'Dejá enfriar a temperatura ambiente entre una y dos horas según el tamaño. Con los moldes de mucho relieve, unos minutos en el freezer justo antes de desmoldar ayudan a que el detalle salga entero.',
          'Doblá el molde desde los bordes y empujá desde la base. Si el jabón se resiste, todavía está tibio en el centro: esperá más.',
        ],
      },
      {
        titulo: 'Envolvé los jabones: la glicerina "suda"',
        parrafos: [
          'La glicerina atrae la humedad del ambiente y forma gotitas en la superficie. En Uruguay, con la humedad que tenemos buena parte del año, esto pasa en uno o dos días si el jabón queda al aire. Envolvelo en film apenas esté frío para que llegue prolijo a quien lo use.',
        ],
      },
    ],
    faq: [
      {
        pregunta: '¿Se puede hacer jabón de glicerina sin soda cáustica?',
        respuesta:
          'Sí: con el método melt and pour se usa una base de glicerina que ya pasó por la saponificación. Vos sólo la fundís, la perfumás y la volcás en el molde.',
      },
      {
        pregunta: '¿Por qué mi jabón de glicerina tiene gotitas de agua?',
        respuesta:
          'Es la glicerina absorbiendo la humedad del ambiente. No es una falla: se evita envolviendo el jabón en film apenas se enfría y guardándolo en un lugar seco.',
      },
      {
        pregunta: '¿Puedo usar el colorante de velas para jabón?',
        respuesta:
          'No. El colorante de velas no está pensado para estar en contacto con la piel. Usá colorantes específicos para jabón o cosmética.',
      },
    ],
  },
  {
    slug: 'como-hacer-piezas-de-yeso',
    titulo: 'Cómo hacer piezas de yeso en molde de silicona: proporción, desmolde y pintura',
    metaTitulo: 'Cómo hacer piezas de yeso en molde de silicona',
    descripcion:
      'Guía para sacar bandejas, figuras y adornos de yeso con molde de silicona: proporción de agua y yeso, cómo evitar burbujas, cuándo desmoldar y cómo pintar o sellar.',
    coleccion: 'yeso',
    categoria: 'moldes-de-yeso',
    intro:
      'El yeso es el material más barato y más rápido para sacar piezas de un molde de silicona: fragua en minutos, no necesita horno y una vez pintado se ve tan bien como piezas mucho más caras. Bandejas, porta sahumerios, letras, figuras: con un molde y un kilo de yeso sale una tanda entera.',
    materiales: [
      'Molde de silicona para yeso',
      'Yeso París o yeso cerámico fino (no yeso de construcción)',
      'Agua a temperatura ambiente',
      'Recipiente y espátula para mezclar, balanza de cocina',
      'Pintura acrílica y sellador, para la terminación',
    ],
    secciones: [
      {
        titulo: 'La proporción de agua y yeso',
        parrafos: [
          'Como punto de partida, la mayoría de los yesos tipo París trabaja bien con 60 a 70 ml de agua cada 100 g de yeso. La mezcla tiene que quedar como un yogur líquido: que corra, pero que cubra la espátula.',
          'Agua de más hace que la mezcla sea fácil de volcar, pero la pieza sale blanda, se raya y se quiebra en los bordes finos. Si el envase de tu yeso indica una proporción, esa manda.',
        ],
      },
      {
        titulo: 'Mezclá sin meter aire',
        parrafos: [
          'Poné primero el agua y espolvoreá el yeso encima, dejándolo hundirse solo durante un minuto. Recién ahí mezclá, con movimientos lentos y sin batir. Batir mete aire y el aire termina como agujeritos en la cara de la pieza.',
          'Trabajá rápido: el yeso empieza a espesar en pocos minutos. Prepará sólo lo que vas a volcar en esa tanda.',
        ],
      },
      {
        titulo: 'Verté y sacá las burbujas',
        parrafos: [
          'Volcá primero un poco de mezcla y pasala con un pincel por los detalles finos del molde, para que no quede aire atrapado en los recovecos. Después llená el resto.',
          'Golpeá suave el molde contra la mesa durante un minuto: las burbujas suben a la superficie, que es la base de la pieza y no se ve.',
        ],
      },
      {
        titulo: 'Desmoldá cuando esté frío y firme',
        parrafos: [
          'El yeso se calienta mientras fragua. Cuando ya se enfrió y está firme al tacto, en general entre 30 minutos y una hora para piezas chicas, se puede desmoldar doblando la silicona desde los bordes.',
          'Desmoldar no es estar seco. Antes de pintar o sellar, dejá la pieza uno o dos días en un lugar ventilado para que pierda la humedad.',
        ],
      },
      {
        titulo: 'Terminación: pintura y sellado',
        parrafos: [
          'El yeso seco es poroso: absorbe la pintura y se ensucia con facilidad. Una mano de sellador o de pintura base antes del color hace que el acrílico cubra parejo. Para piezas que van a estar en contacto con agua o con velas (porta velas, bandejas), terminá con un barniz o sellador al agua.',
        ],
      },
    ],
    faq: [
      {
        pregunta: '¿Qué yeso se usa para moldes de silicona?',
        respuesta:
          'Yeso París o yeso cerámico fino. El yeso de construcción tiene grano más grueso y deja la superficie porosa y con grumos.',
      },
      {
        pregunta: '¿Cuánto tarda en secar el yeso en el molde?',
        respuesta:
          'Para desmoldar, entre 30 minutos y una hora en piezas chicas. Para pintar, conviene esperar uno o dos días a que la pieza pierda toda la humedad.',
      },
      {
        pregunta: '¿El yeso daña el molde de silicona?',
        respuesta:
          'No, la silicona aguanta muy bien el yeso. Lo que acorta la vida del molde es forzar el desmolde con la pieza todavía blanda o dejar restos de yeso secos en los detalles.',
      },
    ],
  },
  {
    slug: 'como-hacer-macetas-de-cemento',
    titulo: 'Cómo hacer macetas de cemento con molde de silicona',
    metaTitulo: 'Cómo hacer macetas de cemento con molde de silicona',
    descripcion:
      'Paso a paso para hacer macetas de cemento o concreto en molde de silicona: qué mezcla usar, cómo evitar los agujeritos, cuándo desmoldar y cómo curarlas para que no se partan.',
    coleccion: 'concreto',
    categoria: 'moldes-para-macetas',
    intro:
      'Las macetas de cemento hechas en molde de silicona son de los productos más vendidos en ferias y en redes: el material cuesta poco, la pieza se ve de diseño y un mismo molde saca decenas de macetas. El secreto no está en la mezcla sino en dos pasos que casi todos apuran: sacar el aire y curar la pieza.',
    materiales: [
      'Molde de silicona para macetas (con contramolde para el hueco interior)',
      'Cemento portland y arena fina, o un mortero listo de grano fino',
      'Agua, balde y espátula',
      'Desmoldante o un poco de aceite, para moldes con mucho relieve',
      'Guantes: el cemento fresco irrita la piel',
      'Nylon o bolsa para el curado',
    ],
    secciones: [
      {
        titulo: 'Preparar la mezcla',
        parrafos: [
          'Para piezas chicas funciona bien una parte de cemento por dos de arena fina, o directamente un mortero listo de grano fino. La arena gruesa no copia el detalle del molde y deja la superficie áspera.',
          'Agregá el agua de a poco hasta lograr una pasta espesa que se pueda volcar. Agua de más hace la mezcla fácil de trabajar pero la pieza sale débil y con fisuras.',
        ],
      },
      {
        titulo: 'Llenar el molde y sacar el aire',
        parrafos: [
          'Llená el molde hasta la mitad, golpeá los costados y después completá. Colocá el contramolde (la pieza que forma el hueco de la maceta) y sostenelo con algo de peso para que no flote.',
          'Vibrá el molde varios minutos: golpeando los costados o apoyándolo sobre algo que vibre. Las burbujas que no salgan ahora van a ser los agujeritos de la superficie.',
        ],
      },
      {
        titulo: 'Desmoldar a las 24 a 48 horas',
        parrafos: [
          'Dejá fraguar la pieza tapada y a la sombra entre 24 y 48 horas. Desmoldá con cuidado, doblando la silicona y sacando primero el contramolde.',
          'Si aparecen agujeritos, se tapan con una pasta de cemento fino y agua, y se lijan cuando secan.',
        ],
      },
      {
        titulo: 'El curado: lo que hace que no se parta',
        parrafos: [
          'El cemento sigue ganando resistencia durante días. Si la maceta se seca rápido al sol o al viento, se fisura. Mantenela húmeda o envuelta en nylon unos días más antes de usarla.',
          'Antes de plantar, dejala un día en agua o lavala bien: el cemento nuevo es alcalino y algunas plantas lo sienten. Y no te olvides del agujero de drenaje si el molde no lo trae.',
        ],
      },
    ],
    faq: [
      {
        pregunta: '¿Qué mezcla se usa para macetas de cemento en molde de silicona?',
        respuesta:
          'Una parte de cemento portland por dos de arena fina, o un mortero listo de grano fino. Lo importante es que la arena sea fina para que copie el detalle.',
      },
      {
        pregunta: '¿Cuánto tarda en secar una maceta de cemento?',
        respuesta:
          'Se desmolda a las 24 a 48 horas, pero conviene curarla (mantenerla húmeda o tapada) varios días más antes de usarla para que gane resistencia y no se fisure.',
      },
      {
        pregunta: '¿Por qué mi maceta de cemento salió con agujeritos?',
        respuesta:
          'Son burbujas de aire atrapadas contra el molde. Se evitan vibrando el molde varios minutos después de llenarlo; las que queden se tapan con pasta de cemento fino.',
      },
    ],
  },
  {
    slug: 'como-usar-moldes-de-resina',
    titulo: 'Cómo usar moldes de silicona con resina epoxi sin burbujas ni piezas pegajosas',
    metaTitulo: 'Resina epoxi en molde de silicona: guía para principiantes',
    descripcion:
      'Cómo trabajar resina epoxi en moldes de silicona: proporción de mezcla, cómo evitar burbujas, cuánto espesor por capa, tiempos de desmolde y por qué la pieza queda pegajosa.',
    coleccion: 'resina',
    categoria: 'moldes-de-resina',
    intro:
      'La resina epoxi en molde de silicona da piezas brillantes y transparentes que con yeso o cemento no se consiguen: posavasos, bandejas, llaveros, letras con flores o pigmentos adentro. Es también el material menos tolerante: un error de proporción o de temperatura deja la pieza pegajosa para siempre. Estas son las reglas que evitan perder material.',
    materiales: [
      'Molde de silicona para resina (brillante por dentro si querés piezas brillantes)',
      'Resina epoxi de dos componentes, del tipo adecuado al espesor de la pieza',
      'Vasos medidores o balanza, palitos para mezclar',
      'Guantes de nitrilo y un lugar ventilado',
      'Pistola de calor o soplete chico, para las burbujas',
      'Pigmentos o inclusiones (flores secas, glitter), opcional',
    ],
    secciones: [
      {
        titulo: 'La proporción es exacta, no aproximada',
        parrafos: [
          'Cada resina tiene su proporción de mezcla entre resina y endurecedor (1:1, 2:1, 3:1…) y puede ser en volumen o en peso. Usá exactamente la que indica tu producto: si te pasás o te quedás corto, la pieza no cura del todo y queda pegajosa, y eso no tiene arreglo.',
          'Mezclá despacio durante unos tres minutos, raspando paredes y fondo del vaso. La resina sin mezclar que queda pegada en la pared es la causa típica de manchas blandas en la pieza.',
        ],
      },
      {
        titulo: 'Elegí la resina según el espesor',
        parrafos: [
          'Hay resinas para recubrimiento (capas finas, de pocos milímetros) y resinas para colada (piezas de varios centímetros). Si volcás una resina de capa fina en un molde profundo, genera mucho calor al curar, se pone amarilla, se fisura o hasta deforma el molde.',
          'Si tu resina es de capa fina y la pieza es gruesa, hacé varias capas, esperando entre cada una lo que indique el fabricante.',
        ],
      },
      {
        titulo: 'Burbujas: calor suave en la superficie',
        parrafos: [
          'Después de verter, pasá la pistola de calor o un soplete chico a distancia sobre la superficie durante unos segundos: las burbujas suben y revientan. No te quedes quieto en un punto, porque podés quemar la resina o dañar el molde.',
          'Templar los dos componentes a baño maría tibio antes de mezclar (los envases cerrados) baja la viscosidad y hace que suelten el aire solas.',
        ],
      },
      {
        titulo: 'Temperatura del ambiente y desmolde',
        parrafos: [
          'La resina cura bien entre 20 y 25 °C. En invierno, en una habitación fría, tarda mucho más y puede quedar turbia o con la superficie pegajosa. Si trabajás en los meses fríos, buscá el ambiente más templado de la casa.',
          'El desmolde depende del producto: en general entre 24 y 72 horas. La pieza puede estar dura en la superficie y todavía blanda adentro, así que respetá el tiempo del fabricante aunque parezca lista.',
        ],
      },
      {
        titulo: 'Cuidar el molde de silicona',
        parrafos: [
          'Los moldes de silicona no necesitan desmoldante con resina epoxi. Limpialos con cinta adhesiva para levantar restos y guardalos sin doblar. La resina, con el tiempo, va opacando el brillo interior del molde: es normal y es la vida útil del molde.',
        ],
      },
    ],
    faq: [
      {
        pregunta: '¿Por qué mi resina quedó pegajosa?',
        respuesta:
          'Casi siempre es proporción incorrecta, mezcla insuficiente o ambiente frío. Si la proporción estuvo mal, la pieza no se recupera; si fue el frío, a veces termina de curar llevándola a un lugar más templado.',
      },
      {
        pregunta: '¿Los moldes de silicona necesitan desmoldante para resina?',
        respuesta:
          'No. La resina epoxi no se pega a la silicona. Sólo conviene limpiar el molde y guardarlo sin polvo.',
      },
      {
        pregunta: '¿Qué espesor puedo hacer de una sola vez?',
        respuesta:
          'Depende del tipo de resina: las de recubrimiento admiten capas de pocos milímetros y las de colada varios centímetros. El dato está en la ficha del producto.',
      },
    ],
  },
]

export function findGuia(slug: string) {
  return guias.find((g) => g.slug === slug)
}
