//This is the first seed file to be executed:
//It fill the DB with 20 Users, 10 Guides and about 30 tours and link
//them in blocks of 2-4 for each guide

require('dotenv').config();


const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const User = require("../models/User");
const Guide = require("../models/Guide");
const Tour = require("../models/Tour");

const bcryptSalt = 10;

mongoose
  .connect(`${process.env.DBURL}`, { useNewUrlParser: true })
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

let users = [
  {
    username: "pedro",
    password: bcrypt.hashSync("pedro", bcrypt.genSaltSync(bcryptSalt)),
    picture: 'https://i.stack.imgur.com/l60Hf.png',
    name: "Pedro",
    surname: "Hernández",
    phone: 666334455,
    email: "themail.transporter@gmail.com",
    comments: []
  },
  {
    username: "maria",
    password: bcrypt.hashSync("maria", bcrypt.genSaltSync(bcryptSalt)),
    picture: 'https://i.stack.imgur.com/l60Hf.png',
    name: "María",
    surname: "González",
    phone: 666334455,
    email: "themail.transporter@gmail.com",
    comments: []
  },
  {
    username: "alex",
    password: bcrypt.hashSync("alex", bcrypt.genSaltSync(bcryptSalt)),
    picture: 'https://i.stack.imgur.com/l60Hf.png',
    name: "Alex",
    surname: "Siguenza",
    phone: 666334455,
    email: "themail.transporter@gmail.com",
    comments: []
  },
  {
    username: "john",
    password: bcrypt.hashSync("john", bcrypt.genSaltSync(bcryptSalt)),
    picture: 'https://i.stack.imgur.com/l60Hf.png',
    name: "John",
    surname: "Malapata",
    phone: 666334455,
    email: "themail.transporter@gmail.com",
    comments: []
  },
  {
    username: "alexa",
    password: bcrypt.hashSync("alexa", bcrypt.genSaltSync(bcryptSalt)),
    picture: 'https://i.stack.imgur.com/l60Hf.png',
    name: "Alexa",
    surname: "Amazonia",
    phone: 666334455,
    email: "themail.transporter@gmail.com",
    comments: []
  },
  {
    username: "ester",
    password: bcrypt.hashSync("ester", bcrypt.genSaltSync(bcryptSalt)),
    picture: 'https://i.stack.imgur.com/l60Hf.png',
    name: "Ester",
    surname: "Píscore",
    phone: 666334455,
    email: "themail.transporter@gmail.com",
    comments: []
  },
  {
    username: "fran",
    password: bcrypt.hashSync("fran", bcrypt.genSaltSync(bcryptSalt)),
    picture: 'https://i.stack.imgur.com/l60Hf.png',
    name: "Fran",
    surname: "Thompson",
    phone: 666334455,
    email: "themail.transporter@gmail.com",
    comments: []
  },
  {
    username: "hugo",
    password: bcrypt.hashSync("hugo", bcrypt.genSaltSync(bcryptSalt)),
    picture: 'https://i.stack.imgur.com/l60Hf.png',
    name: "Hugo",
    surname: "I el Grande",
    phone: 666334455,
    email: "themail.transporter@gmail.com",
    comments: []
  },
  {
    username: "sonia",
    password: bcrypt.hashSync("sonia", bcrypt.genSaltSync(bcryptSalt)),
    picture: 'https://i.stack.imgur.com/l60Hf.png',
    name: "Sonia",
    surname: "Puentes",
    phone: 666334455,
    email: "themail.transporter@gmail.com",
    comments: []
  },
  {
    username: "daniel",
    password: bcrypt.hashSync("daniel", bcrypt.genSaltSync(bcryptSalt)),
    picture: 'https://i.stack.imgur.com/l60Hf.png',
    name: "Daniel",
    surname: "Pulpeiro",
    phone: 666334455,
    email: "themail.transporter@gmail.com",
    comments: []
  },
  {
    username: "ernesto",
    password: bcrypt.hashSync("ernesto", bcrypt.genSaltSync(bcryptSalt)),
    picture: 'https://i.stack.imgur.com/l60Hf.png',
    name: "Ernesto",
    surname: "Maniere",
    phone: 666334455,
    email: "themail.transporter@gmail.com",
    comments: []
  },
  {
    username: "fernando",
    password: bcrypt.hashSync("fernando", bcrypt.genSaltSync(bcryptSalt)),
    picture: 'https://i.stack.imgur.com/l60Hf.png',
    name: "Fernando",
    surname: "Alvarez",
    phone: 666334455,
    email: "themail.transporter@gmail.com",
    comments: []
  },
  {
    username: "carmen",
    password: bcrypt.hashSync("carmen", bcrypt.genSaltSync(bcryptSalt)),
    picture: 'https://i.stack.imgur.com/l60Hf.png',
    name: "Carmen",
    surname: "Villaclara",
    phone: 666334455,
    email: "themail.transporter@gmail.com",
    comments: []
  },
  {
    username: "martin",
    password: bcrypt.hashSync("martin", bcrypt.genSaltSync(bcryptSalt)),
    picture: 'https://i.stack.imgur.com/l60Hf.png',
    name: "Martin",
    surname: "Escorsese",
    phone: 666334455,
    email: "themail.transporter@gmail.com",
    comments: []
  },
  {
    username: "julia",
    password: bcrypt.hashSync("julia", bcrypt.genSaltSync(bcryptSalt)),
    picture: 'https://i.stack.imgur.com/l60Hf.png',
    name: "Julia",
    surname: "Gomez",
    phone: 666334455,
    email: "themail.transporter@gmail.com",
    comments: []
  },
  {
    username: "antonio",
    password: bcrypt.hashSync("antonio", bcrypt.genSaltSync(bcryptSalt)),
    picture: 'https://i.stack.imgur.com/l60Hf.png',
    name: "Antonio",
    surname: "Rodriguez",
    phone: 666334455,
    email: "themail.transporter@gmail.com",
    comments: []
  },
  {
    username: "diana",
    password: bcrypt.hashSync("diana", bcrypt.genSaltSync(bcryptSalt)),
    picture: 'https://i.stack.imgur.com/l60Hf.png',
    name: "Diana",
    surname: "Villalba",
    phone: 666334455,
    email: "themail.transporter@gmail.com",
    comments: []
  },
  {
    username: "sergio",
    password: bcrypt.hashSync("sergio", bcrypt.genSaltSync(bcryptSalt)),
    picture: 'https://i.stack.imgur.com/l60Hf.png',
    name: "Sergio",
    surname: "Marante",
    phone: 666334455,
    email: "themail.transporter@gmail.com",
    comments: []
  },
  {
    username: "josemanuel",
    password: bcrypt.hashSync("josemanuel", bcrypt.genSaltSync(bcryptSalt)),
    picture: 'https://i.stack.imgur.com/l60Hf.png',
    name: "Jose Manuel",
    surname: "Jerez",
    phone: 666334455,
    email: "themail.transporter@gmail.com",
    comments: []
  },
  {
    username: "giancarlo",
    password: bcrypt.hashSync("giancarlo", bcrypt.genSaltSync(bcryptSalt)),
    picture: 'https://i.stack.imgur.com/l60Hf.png',
    name: "Giancarlo",
    surname: "Giacometti",
    phone: 666334455,
    email: "themail.transporter@gmail.com",
    comments: []
  },


]

let guides = [
  {
    username: "javi",
    password: bcrypt.hashSync("javi", bcrypt.genSaltSync(bcryptSalt)),
    info: {
      name: "Javier Morales",
      description: "Soy un artista profesional, apasionado de su trabajo y del arte contemporáneo. Me encanta conocer gente y aprender acerca de otros artistas.",
      img: "https://tinyfac.es/data/avatars/7D3FA6C0-83C8-4834-B432-6C65ED4FD4C3-500w.jpeg",
      email: "themail.transporter@gmail.com",
      phone: 633445566,
      certification: "Not uploaded yet",
      city: "Madrid",
      languages: ["Spanish", "English"]
    },
    toursCreated: [],
    comments: [],
    rates: [7, 10],
    searchDisplays: 145,
    profileViews: 233,
    billing: [],
  },
  {
    username: "francisco",
    password: bcrypt.hashSync("francisco", bcrypt.genSaltSync(bcryptSalt)),
    info: {
      name: "Francisco Navarro",
      description: `Llevo más de 5 años realizando experiencias increibles en Madrid , Paris y Londres. Me encanta transmitir mi pasión por descubrir ciudades!`,
      img: "https://tinyfac.es/data/avatars/475605E3-69C5-4D2B-8727-61B7BB8C4699-500w.jpeg",
      email: "themail.transporter@gmail.com",
      phone: 633445566,
      certification: "Not uploaded yet",
      city: "Madrid",
      languages: ["Spanish", "English", "French"]
    },
    toursCreated: [],
    comments: [],
    rates: [4, 8, 6, 9, 9],
    searchDisplays: 120,
    profileViews: 345,
    billing: [],
  },
  {
    username: "dani",
    password: bcrypt.hashSync("dani", bcrypt.genSaltSync(bcryptSalt)),
    info: {
      name: "Daniel Hernández",
      description: "Hola! soy Daniel. Nací y crecí en la sierra de Madrid y soy un guía apasionado de la naturaleza",
      img: "https://pbs.twimg.com/profile_images/1000050491970260993/FJkauyEa.jpg",
      email: "themail.transporter@gmail.com",
      phone: 633445566,
      certification: "Not uploaded yet",
      city: "Madrid",
      languages: ["Spanish", "English", "French"]
    },
    toursCreated: [],
    comments: [],
    rates: [7, 8, 5, 6, 9, 9],
    searchDisplays: 120,
    profileViews: 345,
    billing: [],
  },
  {
    username: "lore",
    password: bcrypt.hashSync("lore", bcrypt.genSaltSync(bcryptSalt)),
    info: {
      name: "Lorena Montano",
      description: "Bailo desde que tengo uso de razón. El baile se ha convertido en mi forma de vida. Empecé a bailar desde muy pequeñita :)",
      img: "https://randomuser.me/api/portraits/women/95.jpg",
      email: "themail.transporter@gmail.com",
      phone: 633445566,
      certification: "Not uploaded yet",
      city: "Madrid",
      languages: ["Spanish", "German"]
    },
    toursCreated: [],
    comments: [],
    rates: [7, 8, 5, 8, 6, 9, 9],
    searchDisplays: 120,
    profileViews: 345,
    billing: [],
  },
  {
    username: "carlos",
    password: bcrypt.hashSync("carlos", bcrypt.genSaltSync(bcryptSalt)),
    info: {
      name: "Carlos Rodríguez",
      description: "Aquí combino mis diversos conocimientos con una ubicación única para ofrecer una experiencia igualmente única y transformadora que no dejará a nadie indiferente.",
      img: "https://tinyfac.es/data/avatars/AEF44435-B547-4B84-A2AE-887DFAEE6DDF-200w.jpeg",
      email: "themail.transporter@gmail.com",
      phone: 633445566,
      certification: "Not uploaded yet",
      city: "Madrid",
      languages: ["English", "French"]
    },
    toursCreated: [],
    comments: [],
    rates: [9, 10],
    searchDisplays: 120,
    profileViews: 345,
    billing: [],
  },
  {
    username: "manu",
    password: bcrypt.hashSync("manu", bcrypt.genSaltSync(bcryptSalt)),
    info: {
      name: "Manuel Ferrer",
      description: `Hola, soy un joven fotógrafo profesional con años de experiencia al que le apasiona su trabajo. Me encargaré de que tengas hermosos recuerdos de tu estancia en esta gran ciudad.
      Haré que sea una experiencia inolvidable.
      `,
      img: "https://images-na.ssl-images-amazon.com/images/M/MV5BOWViYjUzOWMtMzRkZi00MjNkLTk4M2ItMTVkMDg5MzE2ZDYyXkEyXkFqcGdeQXVyODQwNjM3NDA@._V1_UY256_CR36,0,172,256_AL_.jpg",
      email: "themail.transporter@gmail.com",
      phone: 633445566,
      certification: "Not uploaded yet",
      city: "Madrid",
      languages: ["Spanish", "English"]
    },
    toursCreated: [],
    comments: [],
    rates: [],
    searchDisplays: 120,
    profileViews: 345,
    billing: [],
  },
  {
    username: "laura",
    password: bcrypt.hashSync("laura", bcrypt.genSaltSync(bcryptSalt)),
    info: {
      name: "Laura Ortega",
      description: "Nacida en Madrid y tras vivir en Europa y USA durante varios años, decidí regresar a esta ciudad tan maravillosa para compartir momentos únicos con los viajeros.",
      img: "https://randomuser.me/api/portraits/women/36.jpg",
      email: "themail.transporter@gmail.com",
      phone: 633445566,
      certification: "Not uploaded yet",
      city: "Madrid",
      languages: ["Spanish", "French", "Russian"]
    },
    toursCreated: [],
    comments: [],
    rates: [7, 7, 7, 8, 9, 9],
    searchDisplays: 120,
    profileViews: 345,
    billing: [],
  },
  {
    username: "maria",
    password: bcrypt.hashSync("maria", bcrypt.genSaltSync(bcryptSalt)),
    info: {
      name: "Maria Simo",
      description: "Condemor se calle ustée al ataquerl a wan la caidita. Pupita va usté muy cargadoo torpedo fistro. Va usté muy cargadoo",
      img: "https://images-na.ssl-images-amazon.com/images/M/MV5BMDc2M2NkMTctNmQ0MS00MjQxLWFkMGItNGY1Y2Y3NzYzZjg1XkEyXkFqcGdeQXVyNjAzMTgxNjY@._V1_UY256_CR74,0,172,256_AL_.jpg",
      email: "themail.transporter@gmail.com",
      phone: 633445566,
      certification: "Not uploaded yet",
      city: "Madrid",
      languages: ["Spanish", "French", "German"]
    },
    toursCreated: [],
    comments: [],
    rates: [7, 8],
    searchDisplays: 120,
    profileViews: 345,
    billing: [],
  },
  {
    username: "alfonso",
    password: bcrypt.hashSync("alfonso", bcrypt.genSaltSync(bcryptSalt)),
    info: {
      name: "Alfonso López",
      description: "Con un diploma como guía turístico de la reconocida Escuela de Turismo Grand Sud de Toulouse, estudié para comprender y compartir con todos la historia de las Artes, desde sus inicios hasta nuestros días.",
      img: "https://randomuser.me/api/portraits/men/77.jpg",
      email: "themail.transporter@gmail.com",
      phone: 633445566,
      certification: "Not uploaded yet",
      city: "Madrid",
      languages: ["Spanish", "English", "French"]
    },
    toursCreated: [],
    comments: [],
    rates: [7, 8, 6, 10, 6],
    searchDisplays: 120,
    profileViews: 345,
    billing: [],
  },
  {
    username: "claire",
    password: bcrypt.hashSync("claire", bcrypt.genSaltSync(bcryptSalt)),
    info: {
      name: "Cristina Gómez",
      description: "Me encanta viajar y visitar ciudades y edificios que antes he admirado, explicados por compañeros arquitectos de otros países que enriquecen la experiencia y que hacen inolvidable esas horas de intercambio juntos.",
      img: "https://images-na.ssl-images-amazon.com/images/M/MV5BYWU2ZmUyOTctNjE0Zi00N2Q3LTk1ZmYtMzAxMDRmNmM3OTFhXkEyXkFqcGdeQXVyNjU1Nzk5NTE@._V1_UY256_CR13,0,172,256_AL_.jpg",
      email: "themail.transporter@gmail.com",
      phone: 633445566,
      certification: "Not uploaded yet",
      city: "Madrid",
      languages: ["Spanish", "English", "French", "Russian"]
    },
    toursCreated: [],
    comments: [],
    rates: [7, 10, 9, 8, 9],
    searchDisplays: 120,
    profileViews: 345,
    billing: [],
  },
]

let tours1 = [
  {
    img: "https://odis.homeaway.com/odis/destination/5065e1b7-b65b-4488-9f29-f4fcfaa46901.hw5.jpg",
    title: "Malasaña Rockera",
    claim: "Imperdiet mollis condimentum. Nam nec mauris posuere, mattis nulla ut, vulputate libero",
    description: "Donec imperdiet mollis condimentum. Nam nec mauris posuere, mattis nulla ut, vulputate libero. Sed ultricies lobortis bibendum. Fusce orci augue, aliquam nec accumsan id, ultrices vel sem. Cras feugiat convallis nibh in egestas. Etiam feugiat risus ante, sit amet fermentum magna pellentesque in. Sed in augue vulputate, gravida arcu quis, interdum massa. Quisque mollis euismod velit. Ut sagittis rhoncus tortor, iaculis bibendum orci dignissim eget. Curabitur volutpat, nisi sit amet condimentum sodales, nibh est finibus justo, ut placerat tortor turpis at felis. Phasellus massa diam, tempor eget sem ac, bibendum scelerisque erat. Aenean accumsan odio vel tortor facilisis, at pretium ex auctor.",
    category: ["Aventura", "Deporte", "Estilo de Vida", "Arte y Cultura", "Gastronomia", "Mar", "Naturaleza"],
    duration: 2,
    price: 25,
    meetingPoint: "google address",
    comments: [],
    rates: [7, 6, 9, 8, 8, 10],
    location: {
      address: "Madrid, España",
      coords: { lat: 40.425541, lng: -3.707295 }
    }

  },
  {
    img: "https://saposyprincesas.elmundo.es/wp-content/uploads/2016/05/asdfa.jpg",
    title: "Madrid y sus Poetas",
    claim: "Imperdiet mollis condimentum. Nam nec mauris posuere, mattis nulla ut, vulputate libero",
    description: "Donec imperdiet mollis condimentum. Nam nec mauris posuere, mattis nulla ut, vulputate libero. Sed ultricies lobortis bibendum. Fusce orci augue, aliquam nec accumsan id, ultrices vel sem. Cras feugiat convallis nibh in egestas. Etiam feugiat risus ante, sit amet fermentum magna pellentesque in. Sed in augue vulputate, gravida arcu quis, interdum massa. Quisque mollis euismod velit. Ut sagittis rhoncus tortor, iaculis bibendum orci dignissim eget. Curabitur volutpat, nisi sit amet condimentum sodales, nibh est finibus justo, ut placerat tortor turpis at felis. Phasellus massa diam, tempor eget sem ac, bibendum scelerisque erat. Aenean accumsan odio vel tortor facilisis, at pretium ex auctor.",
    category: ["Arte y Cultura", "Gastronomia"],
    duration: 4,
    price: 60,
    meetingPoint: "google address",
    comments: [],
    rates: [7, 8, 5, 6, 9, 10, 6, 7, 9],
    location: {
      address: "Madrid, España",
      coords: { lat: 40.414669, lng: -3.701145 }
    }
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKaxBz1w4tv6skMzSj7G0c6ohKqf3y7TmBfcnW6yAmjVV2H1Yb&s",
    title: "Vinos y Quesos en el Barrio de Las Letras",
    claim: "Imperdiet mollis condimentum. Nam nec mauris posuere, mattis nulla ut, vulputate libero",
    description: "Donec imperdiet mollis condimentum. Nam nec mauris posuere, mattis nulla ut, vulputate libero. Sed ultricies lobortis bibendum. Fusce orci augue, aliquam nec accumsan id, ultrices vel sem. Cras feugiat convallis nibh in egestas. Etiam feugiat risus ante, sit amet fermentum magna pellentesque in. Sed in augue vulputate, gravida arcu quis, interdum massa. Quisque mollis euismod velit. Ut sagittis rhoncus tortor, iaculis bibendum orci dignissim eget. Curabitur volutpat, nisi sit amet condimentum sodales, nibh est finibus justo, ut placerat tortor turpis at felis. Phasellus massa diam, tempor eget sem ac, bibendum scelerisque erat. Aenean accumsan odio vel tortor facilisis, at pretium ex auctor.",
    category: ["Gastronomia"],
    duration: 2,
    price: 20,
    meetingPoint: "google address",
    comments: [],
    rates: [6, 9, 10],
    location: {
      address: "Madrid, España",
      coords: { lat: 40.4167754, lng: -3.7037901999999576 }
    }
  },
  {
    img: "http://hostaloriente.es/wp-content/uploads/2019/03/madrid-1288x724.png",
    title: "La arquitectura moderna de Madrid",
    claim: "¿Alguna vez te has sentido abrumado por las bellezas que te rodean en tu vida diaria? ¿Esta increíble catedral en el centro de la ciudad de la cual no sabes nada?",
    description: `¿Alguna vez te has sentido abrumado por las bellezas que te rodean en tu vida diaria ? ¿Esta increíble catedral en el centro de la ciudad de la cual no sabes nada? ¿Este edificio que está viendo una y otra vez sin tener idea de cuándo fue construido, por qué fue construido de esta manera ?

    Todos estamos rodeados de asombrosas obras de arte, pero a menudo no podemos leerlas,  entenderlas. Un espacio anónimo a través del cual no sabemos nada. ¿Cuál es la solución?
    ¿Estudiando arquitectura? Posible pero no muy tentador.
    ¿Aprender todo sobre un solo monumento o edificio? Puede hacerlo, pero ¿podría reproducir la experiencia con cada monumento?
    ¿Y si hubiera otra manera?
    Le daré las claves principales sobre cómo leer usted mismo la arquitectura, los estilos principales de la ciudad y cómo descifrarlos usted mismo, después del final de la visita. ¡La arquitectura se convertirá lentamente en un juego para usted, una investigación en su tiempo libre, un nuevo sabor que le ayudaré a adquirir en Madrid!`,
    category: ["Arte y Cultura"],
    duration: 1,
    price: 15,
    meetingPoint: "google address",
    comments: [],
    rates: [7, 8, 5, 10],
    location: {
      address: "Madrid, España",
      coords: { lat: 40.4167754, lng: -3.7037901999999576 }
    }
  },

]

let tours2 = [
  {
    img: "http://www.escapadarural.com/blog/wp-content/uploads/2015/05/10160667504_5ae45139ac_o.jpg",
    title: "Los 7 Picos de la Sierra",
    claim: "Gracias a nuestras rutas a caballo por la Sierra, guiadas por nuestros expertos guías, descubrirás todos esos parajes vírgenes y disfrutarás de un tiempo de aventura y diversión.",
    description: `El Parque Nacional Sierra del Guadarrama ofrece paisajes increíbles y escarpados de una belleza impresionante.
    Una de las mejores maneras de descubrirlos y admirarlos es a caballo.
    Gracias a nuestras rutas a caballo por la Sierra, guiadas por nuestros expertos guías, descubrirás todos esos parajes vírgenes y disfrutarás de un tiempo de aventura y diversión.
    Ofrecemos excursiones cortas de medio día, un día o viajes largos de fin de semana o excursiones más largas. Las excursiones de fin de semana incluyen el alojamiento en un hotel rural. Disponemos de caballos para todo tipo de jinetes, desde principiantes hasta consumados.
    
    Si no ves una fecha u hora que funcione, envíame un mensaje y comprobaré si es posible.
    ¿Quieres hacer algo más largo con un picnic? Entonces compruebe esta nueva experiencia "Paseos a caballo en el Parque Natural de Madrid".`,
    category: ["Aventura", "Deporte"],
    duration: 2,
    price: 25,
    meetingPoint: "google address",
    comments: [],
    rates: [7, 6, 9, 8, 10],
    location: {
      address: "Madrid, España",
      coords: { lat: 40.4167754, lng: -3.7037901999999576 }
    }
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0339/9513/files/Best-IPA-Gear-Patrol-Lead-1440_grande.jpg?v=1522152683",
    title: "Locos por la IPA",
    claim: "Imperdiet mollis condimentum. Nam nec mauris posuere, mattis nulla ut, vulputate libero",
    description: "Donec imperdiet mollis condimentum. Nam nec mauris posuere, mattis nulla ut, vulputate libero. Sed ultricies lobortis bibendum. Fusce orci augue, aliquam nec accumsan id, ultrices vel sem. Cras feugiat convallis nibh in egestas. Etiam feugiat risus ante, sit amet fermentum magna pellentesque in. Sed in augue vulputate, gravida arcu quis, interdum massa. Quisque mollis euismod velit. Ut sagittis rhoncus tortor, iaculis bibendum orci dignissim eget. Curabitur volutpat, nisi sit amet condimentum sodales, nibh est finibus justo, ut placerat tortor turpis at felis. Phasellus massa diam, tempor eget sem ac, bibendum scelerisque erat. Aenean accumsan odio vel tortor facilisis, at pretium ex auctor.",
    category: ["Arte y Cultura", "Gastronomia"],
    duration: 4,
    price: 35,
    meetingPoint: "google address",
    comments: [],
    rates: [7, 8, 5, 6, 7, 8, 9],
    location: {
      address: "Madrid, España",
      coords: { lat: 40.4167754, lng: -3.7037901999999576 }
    }
  },
  {
    img: "https://unareceta.com/wp-content/uploads/2017/06/receta-de-muffins-con-pepitas-de-chocolate.jpg",
    title: "Muffins por malasaña",
    claim: "Imperdiet mollis condimentum. Nam nec mauris posuere, mattis nulla ut, vulputate libero",
    description: "Donec imperdiet mollis condimentum. Nam nec mauris posuere, mattis nulla ut, vulputate libero. Sed ultricies lobortis bibendum. Fusce orci augue, aliquam nec accumsan id, ultrices vel sem. Cras feugiat convallis nibh in egestas. Etiam feugiat risus ante, sit amet fermentum magna pellentesque in. Sed in augue vulputate, gravida arcu quis, interdum massa. Quisque mollis euismod velit. Ut sagittis rhoncus tortor, iaculis bibendum orci dignissim eget. Curabitur volutpat, nisi sit amet condimentum sodales, nibh est finibus justo, ut placerat tortor turpis at felis. Phasellus massa diam, tempor eget sem ac, bibendum scelerisque erat. Aenean accumsan odio vel tortor facilisis, at pretium ex auctor.",
    category: ["Gastronomia"],
    duration: 2,
    price: 23,
    meetingPoint: "google address",
    comments: [],
    rates: [6, 9, 10, 8, 8, 9],
    location: {
      address: "Madrid, España",
      coords: { lat: 40.4167754, lng: -3.7037901999999576 }
    }
  },
]

let tours3 = [
  {
    img: "http://hostaloriente.es/wp-content/uploads/2019/03/madrid-1288x724.png",
    title: "Rincones escondidos de Madrid",
    claim: "Imperdiet mollis condimentum. Nam nec mauris posuere, mattis nulla ut, vulputate libero",
    description: "Donec imperdiet mollis condimentum. Nam nec mauris posuere, mattis nulla ut, vulputate libero. Sed ultricies lobortis bibendum. Fusce orci augue, aliquam nec accumsan id, ultrices vel sem. Cras feugiat convallis nibh in egestas. Etiam feugiat risus ante, sit amet fermentum magna pellentesque in. Sed in augue vulputate, gravida arcu quis, interdum massa. Quisque mollis euismod velit. Ut sagittis rhoncus tortor, iaculis bibendum orci dignissim eget. Curabitur volutpat, nisi sit amet condimentum sodales, nibh est finibus justo, ut placerat tortor turpis at felis. Phasellus massa diam, tempor eget sem ac, bibendum scelerisque erat. Aenean accumsan odio vel tortor facilisis, at pretium ex auctor.",
    category: ["Arte y Cultura"],
    duration: 3,
    price: 12,
    meetingPoint: "google address",
    comments: [],
    rates: [7, 6, 9, 8, 10],
    location: {
      address: "Madrid, España",
      coords: { lat: 40.4167754, lng: -3.7037901999999576 }
    }
  },
  {
    img: "http://lapiedradesisifo.com/wp-content/uploads/2018/10/ministerio-aprova-modelo-de-contrato-para-musicos-e-outros-profissionais-do-entr.jpg",
    title: "Noche de Cantautores",
    claim: "Imperdiet mollis condimentum. Nam nec mauris posuere, mattis nulla ut, vulputate libero",
    description: "Donec imperdiet mollis condimentum. Nam nec mauris posuere, mattis nulla ut, vulputate libero. Sed ultricies lobortis bibendum. Fusce orci augue, aliquam nec accumsan id, ultrices vel sem. Cras feugiat convallis nibh in egestas. Etiam feugiat risus ante, sit amet fermentum magna pellentesque in. Sed in augue vulputate, gravida arcu quis, interdum massa. Quisque mollis euismod velit. Ut sagittis rhoncus tortor, iaculis bibendum orci dignissim eget. Curabitur volutpat, nisi sit amet condimentum sodales, nibh est finibus justo, ut placerat tortor turpis at felis. Phasellus massa diam, tempor eget sem ac, bibendum scelerisque erat. Aenean accumsan odio vel tortor facilisis, at pretium ex auctor.",
    category: ["Arte y Cultura", "Gastronomia"],
    duration: 4,
    price: 37,
    meetingPoint: "google address",
    comments: [],
    rates: [7, 8, 5, 6, 9, 5, 6, 10, 6, 7, 9],
    location: {
      address: "Madrid, España",
      coords: { lat: 40.4167754, lng: -3.7037901999999576 }
    }
  },
  {
    img: "http://farm4.staticflickr.com/3375/3638206797_4eac6fa140_z.jpg",
    title: "Esculturas Ecuestres: Las historias desconocidas",
    claim: "Imperdiet mollis condimentum. Nam nec mauris posuere, mattis nulla ut, vulputate libero",
    description: "Donec imperdiet mollis condimentum. Nam nec mauris posuere, mattis nulla ut, vulputate libero. Sed ultricies lobortis bibendum. Fusce orci augue, aliquam nec accumsan id, ultrices vel sem. Cras feugiat convallis nibh in egestas. Etiam feugiat risus ante, sit amet fermentum magna pellentesque in. Sed in augue vulputate, gravida arcu quis, interdum massa. Quisque mollis euismod velit. Ut sagittis rhoncus tortor, iaculis bibendum orci dignissim eget. Curabitur volutpat, nisi sit amet condimentum sodales, nibh est finibus justo, ut placerat tortor turpis at felis. Phasellus massa diam, tempor eget sem ac, bibendum scelerisque erat. Aenean accumsan odio vel tortor facilisis, at pretium ex auctor.",
    category: ["Arte y Cultura"],
    duration: 2,
    price: 10,
    meetingPoint: "google address",
    comments: [],
    rates: [6, 9, 10, 7, 7, 7],
    location: {
      address: "Madrid, España",
      coords: { lat: 40.4167754, lng: -3.7037901999999576 }
    }
  },
  {
    img: "http://www.escapadarural.com/blog/wp-content/uploads/2016/02/Sierra-Norte-de-Madrid-2.jpg",
    title: "Escalada en la Sierra",
    claim: "El Parque Nacional Sierra del Guadarrama ofrece paisajes increíbles y escarpados de una belleza impresionante.",
    description: `El Parque Nacional Sierra del Guadarrama ofrece paisajes increíbles y escarpados de una belleza impresionante.
    Una de las mejores maneras de descubrirlos y admirarlos es a caballo.
    Gracias a nuestras rutas a caballo por la Sierra, guiadas por nuestros expertos guías, descubrirás todos esos parajes vírgenes y disfrutarás de un tiempo de aventura y diversión.
    Ofrecemos excursiones cortas de medio día, un día o viajes largos de fin de semana o excursiones más largas. Las excursiones de fin de semana incluyen el alojamiento en un hotel rural. Disponemos de caballos para todo tipo de jinetes, desde principiantes hasta consumados.
    
    Si no ves una fecha u hora que funcione, envíame un mensaje y comprobaré si es posible.
    ¿Quieres hacer algo más largo con un picnic? Entonces compruebe esta nueva experiencia "Paseos a caballo en el Parque Natural de Madrid".  
    
    Traducción realizada con la versión gratuita del traductor www.DeepL.com/Translator`,
    category: ["Aventura", "Deporte"],
    duration: 4,
    price: 36,
    meetingPoint: "google address",
    comments: [],
    rates: [7, 8, 5, 10, 10, 10, 9],
    location: {
      address: "Madrid, España",
      coords: { lat: 40.4167754, lng: -3.7037901999999576 }
    }
  },

]

let tours4 = [
  {
    img: "https://blogmedia.evbstatic.com/wp-content/uploads/wpmulti/sites/21/2019/05/centros-yoga-madrid.jpg",
    title: "Yoga en el retiro",
    claim: "Imperdiet mollis condimentum. Nam nec mauris posuere, mattis nulla ut, vulputate libero",
    description: "Donec imperdiet mollis condimentum. Nam nec mauris posuere, mattis nulla ut, vulputate libero. Sed ultricies lobortis bibendum. Fusce orci augue, aliquam nec accumsan id, ultrices vel sem. Cras feugiat convallis nibh in egestas. Etiam feugiat risus ante, sit amet fermentum magna pellentesque in. Sed in augue vulputate, gravida arcu quis, interdum massa. Quisque mollis euismod velit. Ut sagittis rhoncus tortor, iaculis bibendum orci dignissim eget. Curabitur volutpat, nisi sit amet condimentum sodales, nibh est finibus justo, ut placerat tortor turpis at felis. Phasellus massa diam, tempor eget sem ac, bibendum scelerisque erat. Aenean accumsan odio vel tortor facilisis, at pretium ex auctor.",
    category: ["Deporte", "Estilo de Vida"],
    duration: 2,
    price: 18,
    meetingPoint: "google address",
    comments: [],
    rates: [7, 8, 9, 8, 10],
    location: {
      address: "Madrid, España",
      coords: { lat: 40.4167754, lng: -3.7037901999999576 }
    }
  },
  {
    img: "https://cdn2.traveler.es/uploads/images/thumbs/es/trav/3/s/2016/17/escapada_al_campo_madrileno_los_paisajes_mas_bellos_de_la_sierra_6068_1000x665.jpg",
    title: "Descenso en Mountain Bike por la sierra",
    claim: "Imperdiet mollis condimentum. Nam nec mauris posuere, mattis nulla ut, vulputate libero",
    description: "Donec imperdiet mollis condimentum. Nam nec mauris posuere, mattis nulla ut, vulputate libero. Sed ultricies lobortis bibendum. Fusce orci augue, aliquam nec accumsan id, ultrices vel sem. Cras feugiat convallis nibh in egestas. Etiam feugiat risus ante, sit amet fermentum magna pellentesque in. Sed in augue vulputate, gravida arcu quis, interdum massa. Quisque mollis euismod velit. Ut sagittis rhoncus tortor, iaculis bibendum orci dignissim eget. Curabitur volutpat, nisi sit amet condimentum sodales, nibh est finibus justo, ut placerat tortor turpis at felis. Phasellus massa diam, tempor eget sem ac, bibendum scelerisque erat. Aenean accumsan odio vel tortor facilisis, at pretium ex auctor.",
    category: ["Aventura", "Deporte"],
    duration: 2,
    price: 22,
    meetingPoint: "google address",
    comments: [],
    rates: [7, 5, 6, 10, 6, 7, 9],
    location: {
      address: "Madrid, España",
      coords: { lat: 40.4167754, lng: -3.7037901999999576 }
    }
  },
  {
    img: "https://guias-viajar.com/madrid/wp-content/uploads/2015/02/Monumento-Alfonso-XII-FB-001.jpg",
    title: "Magia al Aire Libre en el Retiro",
    claim: "Imperdiet mollis condimentum. Nam nec mauris posuere, mattis nulla ut, vulputate libero",
    description: "Donec imperdiet mollis condimentum. Nam nec mauris posuere, mattis nulla ut, vulputate libero. Sed ultricies lobortis bibendum. Fusce orci augue, aliquam nec accumsan id, ultrices vel sem. Cras feugiat convallis nibh in egestas. Etiam feugiat risus ante, sit amet fermentum magna pellentesque in. Sed in augue vulputate, gravida arcu quis, interdum massa. Quisque mollis euismod velit. Ut sagittis rhoncus tortor, iaculis bibendum orci dignissim eget. Curabitur volutpat, nisi sit amet condimentum sodales, nibh est finibus justo, ut placerat tortor turpis at felis. Phasellus massa diam, tempor eget sem ac, bibendum scelerisque erat. Aenean accumsan odio vel tortor facilisis, at pretium ex auctor.",
    category: ["Estilo de Vida", "Arte y Cultura"],
    duration: 1,
    price: 12,
    meetingPoint: "google address",
    comments: [],
    rates: [6, 9, 10, 7, 8, 7],
    location: {
      address: "Madrid, España",
      coords: { lat: 40.4167754, lng: -3.7037901999999576 }
    }
  },
]

let tours5 = [
  {
    img: "https://www.carloscondepeluqueros.com/wp-content/uploads/2019/04/cabecera-planes-por-madrid.png",
    title: "Freetour Centro",
    claim: "Imperdiet mollis condimentum. Nam nec mauris posuere, mattis nulla ut, vulputate libero",
    description: "Donec imperdiet mollis condimentum. Nam nec mauris posuere, mattis nulla ut, vulputate libero. Sed ultricies lobortis bibendum. Fusce orci augue, aliquam nec accumsan id, ultrices vel sem. Cras feugiat convallis nibh in egestas. Etiam feugiat risus ante, sit amet fermentum magna pellentesque in. Sed in augue vulputate, gravida arcu quis, interdum massa. Quisque mollis euismod velit. Ut sagittis rhoncus tortor, iaculis bibendum orci dignissim eget. Curabitur volutpat, nisi sit amet condimentum sodales, nibh est finibus justo, ut placerat tortor turpis at felis. Phasellus massa diam, tempor eget sem ac, bibendum scelerisque erat. Aenean accumsan odio vel tortor facilisis, at pretium ex auctor.",
    category: ["Arte y Cultura"],
    duration: 2,
    price: 0,
    meetingPoint: "google address",
    comments: [],
    rates: [7, 6, 9, 5, 7, 8, 8, 10],
    location: {
      address: "Madrid, España",
      coords: { lat: 40.4167754, lng: -3.7037901999999576 }
    }
  },
  {
    img: "https://farm4.staticflickr.com/3804/12290923085_ba548c4bc3_b.jpg",
    title: "Freetour Nocturno por el casco Histórico",
    claim: "Imperdiet mollis condimentum. Nam nec mauris posuere, mattis nulla ut, vulputate libero",
    description: "Donec imperdiet mollis condimentum. Nam nec mauris posuere, mattis nulla ut, vulputate libero. Sed ultricies lobortis bibendum. Fusce orci augue, aliquam nec accumsan id, ultrices vel sem. Cras feugiat convallis nibh in egestas. Etiam feugiat risus ante, sit amet fermentum magna pellentesque in. Sed in augue vulputate, gravida arcu quis, interdum massa. Quisque mollis euismod velit. Ut sagittis rhoncus tortor, iaculis bibendum orci dignissim eget. Curabitur volutpat, nisi sit amet condimentum sodales, nibh est finibus justo, ut placerat tortor turpis at felis. Phasellus massa diam, tempor eget sem ac, bibendum scelerisque erat. Aenean accumsan odio vel tortor facilisis, at pretium ex auctor.",
    category: ["Arte y Cultura"],
    duration: 2,
    price: 0,
    meetingPoint: "google address",
    comments: [],
    rates: [7, 8, 5, 6, 5, 5, 9, 10, 6, 7, 9],
    location: {
      address: "Madrid, España",
      coords: { lat: 40.4167754, lng: -3.7037901999999576 }
    }
  },
  {
    img: "https://madridsecreto.co/wp-content/uploads/2017/12/20150315-Museo-Reina-Sofia-063.jpg",
    title: "Visita guiada al Reina Sofía",
    claim: "Imperdiet mollis condimentum. Nam nec mauris posuere, mattis nulla ut, vulputate libero",
    description: "Donec imperdiet mollis condimentum. Nam nec mauris posuere, mattis nulla ut, vulputate libero. Sed ultricies lobortis bibendum. Fusce orci augue, aliquam nec accumsan id, ultrices vel sem. Cras feugiat convallis nibh in egestas. Etiam feugiat risus ante, sit amet fermentum magna pellentesque in. Sed in augue vulputate, gravida arcu quis, interdum massa. Quisque mollis euismod velit. Ut sagittis rhoncus tortor, iaculis bibendum orci dignissim eget. Curabitur volutpat, nisi sit amet condimentum sodales, nibh est finibus justo, ut placerat tortor turpis at felis. Phasellus massa diam, tempor eget sem ac, bibendum scelerisque erat. Aenean accumsan odio vel tortor facilisis, at pretium ex auctor.",
    category: ["Arte y Cultura"],
    duration: 3,
    price: 10,
    meetingPoint: "google address",
    comments: [],
    rates: [6, 9, 7, 7, 7, 10],
    location: {
      address: "Madrid, España",
      coords: { lat: 40.4167754, lng: -3.7037901999999576 }
    }
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/d/df/Escultura_La_Mano_de_Botero_de_Madrid.jpg",
    title: "Las esculturas contemporáneas de Madrid",
    claim: "Imperdiet mollis condimentum. Nam nec mauris posuere, mattis nulla ut, vulputate libero",
    description: "Donec imperdiet mollis condimentum. Nam nec mauris posuere, mattis nulla ut, vulputate libero. Sed ultricies lobortis bibendum. Fusce orci augue, aliquam nec accumsan id, ultrices vel sem. Cras feugiat convallis nibh in egestas. Etiam feugiat risus ante, sit amet fermentum magna pellentesque in. Sed in augue vulputate, gravida arcu quis, interdum massa. Quisque mollis euismod velit. Ut sagittis rhoncus tortor, iaculis bibendum orci dignissim eget. Curabitur volutpat, nisi sit amet condimentum sodales, nibh est finibus justo, ut placerat tortor turpis at felis. Phasellus massa diam, tempor eget sem ac, bibendum scelerisque erat. Aenean accumsan odio vel tortor facilisis, at pretium ex auctor.",
    category: ["Arte y Cultura"],
    duration: 3,
    price: 18,
    meetingPoint: "google address",
    comments: [],
    rates: [7, 8, 6, 7, 8, 5, 10],
    location: {
      address: "Madrid, España",
      coords: { lat: 40.4167754, lng: -3.7037901999999576 }
    }
  },

]

let tours6 = [
  {
    img: "https://ep01.epimg.net/elviajero/imagenes/2019/02/15/actualidad/1550233826_415235_1550237713_noticia_normal.jpg",
    title: "Taller de Cocina Vegana",
    claim: "Imperdiet mollis condimentum. Nam nec mauris posuere, mattis nulla ut, vulputate libero",
    description: "Donec imperdiet mollis condimentum. Nam nec mauris posuere, mattis nulla ut, vulputate libero. Sed ultricies lobortis bibendum. Fusce orci augue, aliquam nec accumsan id, ultrices vel sem. Cras feugiat convallis nibh in egestas. Etiam feugiat risus ante, sit amet fermentum magna pellentesque in. Sed in augue vulputate, gravida arcu quis, interdum massa. Quisque mollis euismod velit. Ut sagittis rhoncus tortor, iaculis bibendum orci dignissim eget. Curabitur volutpat, nisi sit amet condimentum sodales, nibh est finibus justo, ut placerat tortor turpis at felis. Phasellus massa diam, tempor eget sem ac, bibendum scelerisque erat. Aenean accumsan odio vel tortor facilisis, at pretium ex auctor.",
    category: ["Estilo de Vida", "Gastronomia"],
    duration: 2,
    price: 17,
    meetingPoint: "google address",
    comments: [],
    rates: [7, 6, 7, 7, 9, 5, 7, 8, 8, 10],
    location: {
      address: "Madrid, España",
      coords: { lat: 40.4167754, lng: -3.7037901999999576 }
    }
  },
  {
    img: "ihttps://www.atrapalo.com/common/photo/event/4/7/9/3127/366997/vertic_880_0.jpg",
    title: "Taller de Cocina Vegetariana",
    claim: "Imperdiet mollis condimentum. Nam nec mauris posuere, mattis nulla ut, vulputate libero",
    description: "Donec imperdiet mollis condimentum. Nam nec mauris posuere, mattis nulla ut, vulputate libero. Sed ultricies lobortis bibendum. Fusce orci augue, aliquam nec accumsan id, ultrices vel sem. Cras feugiat convallis nibh in egestas. Etiam feugiat risus ante, sit amet fermentum magna pellentesque in. Sed in augue vulputate, gravida arcu quis, interdum massa. Quisque mollis euismod velit. Ut sagittis rhoncus tortor, iaculis bibendum orci dignissim eget. Curabitur volutpat, nisi sit amet condimentum sodales, nibh est finibus justo, ut placerat tortor turpis at felis. Phasellus massa diam, tempor eget sem ac, bibendum scelerisque erat. Aenean accumsan odio vel tortor facilisis, at pretium ex auctor.",
    category: ["Estilo de Vida", "Gastronomia"],
    duration: 2,
    price: 19,
    meetingPoint: "google address",
    comments: [],
    rates: [7, 8, 9, 10, 6, 7, 9],
    location: {
      address: "Madrid, España",
      coords: { lat: 40.4167754, lng: -3.7037901999999576 }
    }
  },
  {
    img: "https://www.cuerpomente.com/medio/2018/05/11/carrot-cake-raw_8a3d33f9.jpg",
    title: "Taller de repostería Vegana",
    claim: "Imperdiet mollis condimentum. Nam nec mauris posuere, mattis nulla ut, vulputate libero",
    description: "Donec imperdiet mollis condimentum. Nam nec mauris posuere, mattis nulla ut, vulputate libero. Sed ultricies lobortis bibendum. Fusce orci augue, aliquam nec accumsan id, ultrices vel sem. Cras feugiat convallis nibh in egestas. Etiam feugiat risus ante, sit amet fermentum magna pellentesque in. Sed in augue vulputate, gravida arcu quis, interdum massa. Quisque mollis euismod velit. Ut sagittis rhoncus tortor, iaculis bibendum orci dignissim eget. Curabitur volutpat, nisi sit amet condimentum sodales, nibh est finibus justo, ut placerat tortor turpis at felis. Phasellus massa diam, tempor eget sem ac, bibendum scelerisque erat. Aenean accumsan odio vel tortor facilisis, at pretium ex auctor.",
    category: ["Gastronomia"],
    duration: 3,
    price: 10,
    meetingPoint: "google address",
    comments: [],
    rates: [6, 9, 7, 7, 8, 9, 7, 10],
    location: {
      address: "Madrid, España",
      coords: { lat: 40.4167754, lng: -3.7037901999999576 }
    }
  },
]

let tours7 = [
  {
    img: "https://entretenemos.com/files/categories/monologuista.jpg",
    title: "Taller de Teatro: Descubre al actor que llevas dentro",
    claim: "Imperdiet mollis condimentum. Nam nec mauris posuere, mattis nulla ut, vulputate libero",
    description: "Donec imperdiet mollis condimentum. Nam nec mauris posuere, mattis nulla ut, vulputate libero. Sed ultricies lobortis bibendum. Fusce orci augue, aliquam nec accumsan id, ultrices vel sem. Cras feugiat convallis nibh in egestas. Etiam feugiat risus ante, sit amet fermentum magna pellentesque in. Sed in augue vulputate, gravida arcu quis, interdum massa. Quisque mollis euismod velit. Ut sagittis rhoncus tortor, iaculis bibendum orci dignissim eget. Curabitur volutpat, nisi sit amet condimentum sodales, nibh est finibus justo, ut placerat tortor turpis at felis. Phasellus massa diam, tempor eget sem ac, bibendum scelerisque erat. Aenean accumsan odio vel tortor facilisis, at pretium ex auctor.",
    category: ["Arte y Cultura"],
    duration: 3,
    price: 19,
    meetingPoint: "google address",
    comments: [],
    rates: [7, 5, 7, 8, 8, 10],
    location: {
      address: "Madrid, España",
      coords: { lat: 40.4167754, lng: -3.7037901999999576 }
    }
  },
  {
    img: "http://img2.rtve.es/v/3501382?w=1600&preview=1456474335899.jpg",
    title: "Chaplin: Tiempos modernos y Coloquio",
    claim: "Imperdiet mollis condimentum. Nam nec mauris posuere, mattis nulla ut, vulputate libero",
    description: "Donec imperdiet mollis condimentum. Nam nec mauris posuere, mattis nulla ut, vulputate libero. Sed ultricies lobortis bibendum. Fusce orci augue, aliquam nec accumsan id, ultrices vel sem. Cras feugiat convallis nibh in egestas. Etiam feugiat risus ante, sit amet fermentum magna pellentesque in. Sed in augue vulputate, gravida arcu quis, interdum massa. Quisque mollis euismod velit. Ut sagittis rhoncus tortor, iaculis bibendum orci dignissim eget. Curabitur volutpat, nisi sit amet condimentum sodales, nibh est finibus justo, ut placerat tortor turpis at felis. Phasellus massa diam, tempor eget sem ac, bibendum scelerisque erat. Aenean accumsan odio vel tortor facilisis, at pretium ex auctor.",
    category: ["Arte y Cultura"],
    duration: 4,
    price: 13,
    meetingPoint: "google address",
    comments: [],
    rates: [7, 8, 9, 10, 10, 10, 6, 7, 9],
    location: {
      address: "Madrid, España",
      coords: { lat: 40.4167754, lng: -3.7037901999999576 }
    }
  },
  {
    img: "https://vdmedia.elpais.com/elpaistop/201712/1/20171201172919_1512145831_still.jpg",
    title: "Taller de Monólogos",
    claim: "Imperdiet mollis condimentum. Nam nec mauris posuere, mattis nulla ut, vulputate libero",
    description: "Donec imperdiet mollis condimentum. Nam nec mauris posuere, mattis nulla ut, vulputate libero. Sed ultricies lobortis bibendum. Fusce orci augue, aliquam nec accumsan id, ultrices vel sem. Cras feugiat convallis nibh in egestas. Etiam feugiat risus ante, sit amet fermentum magna pellentesque in. Sed in augue vulputate, gravida arcu quis, interdum massa. Quisque mollis euismod velit. Ut sagittis rhoncus tortor, iaculis bibendum orci dignissim eget. Curabitur volutpat, nisi sit amet condimentum sodales, nibh est finibus justo, ut placerat tortor turpis at felis. Phasellus massa diam, tempor eget sem ac, bibendum scelerisque erat. Aenean accumsan odio vel tortor facilisis, at pretium ex auctor.",
    category: ["Arte y Cultura"],
    duration: 2,
    price: 8,
    meetingPoint: "google address",
    comments: [],
    rates: [6, 9, 7, 7, 8, 9, 7, 10, 5, 5],
    location: {
      address: "Madrid, España",
      coords: { lat: 40.4167754, lng: -3.7037901999999576 }
    }
  },
]

let tours8 = [
  {
    img: "https://espaciocedam.es/wp-content/uploads/2015/07/Zumba-CEDAM-Badajoz.jpg",
    title: "Zumba Master",
    claim: "Imperdiet mollis condimentum. Nam nec mauris posuere, mattis nulla ut, vulputate libero",
    description: "Donec imperdiet mollis condimentum. Nam nec mauris posuere, mattis nulla ut, vulputate libero. Sed ultricies lobortis bibendum. Fusce orci augue, aliquam nec accumsan id, ultrices vel sem. Cras feugiat convallis nibh in egestas. Etiam feugiat risus ante, sit amet fermentum magna pellentesque in. Sed in augue vulputate, gravida arcu quis, interdum massa. Quisque mollis euismod velit. Ut sagittis rhoncus tortor, iaculis bibendum orci dignissim eget. Curabitur volutpat, nisi sit amet condimentum sodales, nibh est finibus justo, ut placerat tortor turpis at felis. Phasellus massa diam, tempor eget sem ac, bibendum scelerisque erat. Aenean accumsan odio vel tortor facilisis, at pretium ex auctor.",
    category: ["Deporte", "Estilo de Vida"],
    duration: 3,
    price: 19,
    meetingPoint: "google address",
    comments: [],
    rates: [7, 5, 7, 8, 9, 8, 4, 8, 10],
    location: {
      address: "Madrid, España",
      coords: { lat: 40.4167754, lng: -3.7037901999999576 }
    }
  },
  {
    img: "https://www.feda.net/wp-content/uploads/2016/08/55301893_s.jpg",
    title: "Ritmos Latinos en el Parque Eva Duarte",
    claim: "Imperdiet mollis condimentum. Nam nec mauris posuere, mattis nulla ut, vulputate libero",
    description: "Donec imperdiet mollis condimentum. Nam nec mauris posuere, mattis nulla ut, vulputate libero. Sed ultricies lobortis bibendum. Fusce orci augue, aliquam nec accumsan id, ultrices vel sem. Cras feugiat convallis nibh in egestas. Etiam feugiat risus ante, sit amet fermentum magna pellentesque in. Sed in augue vulputate, gravida arcu quis, interdum massa. Quisque mollis euismod velit. Ut sagittis rhoncus tortor, iaculis bibendum orci dignissim eget. Curabitur volutpat, nisi sit amet condimentum sodales, nibh est finibus justo, ut placerat tortor turpis at felis. Phasellus massa diam, tempor eget sem ac, bibendum scelerisque erat. Aenean accumsan odio vel tortor facilisis, at pretium ex auctor.",
    category: ["Deporte", "Arte y Cultura"],
    duration: 2,
    price: 10,
    meetingPoint: "google address",
    comments: [],
    rates: [7, 8, 9, 10, 6, 7, 9],
    location: {
      address: "Madrid, España",
      coords: { lat: 40.4167754, lng: -3.7037901999999576 }
    }
  },
  {
    img: "https://www.costacruceros.es/content/dam/costa/costa-magazine/article-images/e178b00/ventre.jpg.image.694.390.low.jpg",
    title: "Danza del Vientre al Atardecer",
    claim: "Imperdiet mollis condimentum. Nam nec mauris posuere, mattis nulla ut, vulputate libero",
    description: "Donec imperdiet mollis condimentum. Nam nec mauris posuere, mattis nulla ut, vulputate libero. Sed ultricies lobortis bibendum. Fusce orci augue, aliquam nec accumsan id, ultrices vel sem. Cras feugiat convallis nibh in egestas. Etiam feugiat risus ante, sit amet fermentum magna pellentesque in. Sed in augue vulputate, gravida arcu quis, interdum massa. Quisque mollis euismod velit. Ut sagittis rhoncus tortor, iaculis bibendum orci dignissim eget. Curabitur volutpat, nisi sit amet condimentum sodales, nibh est finibus justo, ut placerat tortor turpis at felis. Phasellus massa diam, tempor eget sem ac, bibendum scelerisque erat. Aenean accumsan odio vel tortor facilisis, at pretium ex auctor.",
    category: ["Arte y Cultura"],
    duration: 1,
    price: 12,
    meetingPoint: "google address",
    comments: [],
    rates: [6, 9, 7, 7, 8, 9, 7, 10, 7, 8, 10, 5, 5],
    location: {
      address: "Madrid, España",
      coords: { lat: 40.4167754, lng: -3.7037901999999576 }
    }
  },
]

let tours9 = [
  {
    img: "https://cdn.civitatis.com/peru/cusco/galeria/trekking-paisajes-interiores-peru.jpg",
    title: "Conoce el Parque Nacional de Madrid",
    claim: "Si quieres explorar el lado auténtico y local de Madrid diferente del centro de la ciudad lleno de turistas te recomiendo que vengas conmigo",
    description: `Si quieres explorar el lado auténtico y local de Madrid diferente del centro de la ciudad lleno de turistas te recomiendo que vengas conmigo
    Haremos senderismo un mínimo de 3 horas en el horario que más te convenga  y también haremos una visita al castillo del pueblo de Manzanares el Real. 
    La ruta se puede alargar si estás en forma y te apetece!
    
    1) Saldremos de Plaza Castilla y cogeremos un bus directo a Manzanares el Real (45 min)
    Haremos una bonita ruta por el Tranco (la Pedriza) siguiendo el río y disfrutando de los bellos paisajes de montaña.
    Visitaremos también en el pueblo el castillo de Manzanares el Real que es un palacio fortaleza de origen medieval`,
    category: ["Aventura", "Deporte", "Naturaleza"],
    duration: 4,
    price: 35,
    meetingPoint: "google address",
    comments: [],
    rates: [7, 6, 9, 8, 10],
    location: {
      address: "Madrid, España",
      coords: { lat: 40.4167754, lng: -3.7037901999999576 }
    }
  },
  {
    img: "https://portal.minervafoods.com/files/styles/blog_post_page/public/como_fazer_hamburguer_caseiro_0.jpg?itok=kxHwP-dY",
    title: "Taller de Hamburguesas Artesanales",
    claim: "Imperdiet mollis condimentum. Nam nec mauris posuere, mattis nulla ut, vulputate libero",
    description: "Donec imperdiet mollis condimentum. Nam nec mauris posuere, mattis nulla ut, vulputate libero. Sed ultricies lobortis bibendum. Fusce orci augue, aliquam nec accumsan id, ultrices vel sem. Cras feugiat convallis nibh in egestas. Etiam feugiat risus ante, sit amet fermentum magna pellentesque in. Sed in augue vulputate, gravida arcu quis, interdum massa. Quisque mollis euismod velit. Ut sagittis rhoncus tortor, iaculis bibendum orci dignissim eget. Curabitur volutpat, nisi sit amet condimentum sodales, nibh est finibus justo, ut placerat tortor turpis at felis. Phasellus massa diam, tempor eget sem ac, bibendum scelerisque erat. Aenean accumsan odio vel tortor facilisis, at pretium ex auctor.",
    category: ["Arte y Cultura", "Gastronomia"],
    duration: 1,
    price: 8,
    meetingPoint: "google address",
    comments: [],
    rates: [7, 8, 5, 6, 7, 6, 8, 9],
    location: {
      address: "Madrid, España",
      coords: { lat: 40.4167754, lng: -3.7037901999999576 }
    }
  },
  {
    img: "https://arc-photo-larazon.s3.amazonaws.com/eu-central-1-prod/public/WG7OVNX6DJDQ7PW2WG5IBC7YVY.jpg",
    title: "Remember La Movida",
    claim: "Imperdiet mollis condimentum. Nam nec mauris posuere, mattis nulla ut, vulputate libero",
    description: "Donec imperdiet mollis condimentum. Nam nec mauris posuere, mattis nulla ut, vulputate libero. Sed ultricies lobortis bibendum. Fusce orci augue, aliquam nec accumsan id, ultrices vel sem. Cras feugiat convallis nibh in egestas. Etiam feugiat risus ante, sit amet fermentum magna pellentesque in. Sed in augue vulputate, gravida arcu quis, interdum massa. Quisque mollis euismod velit. Ut sagittis rhoncus tortor, iaculis bibendum orci dignissim eget. Curabitur volutpat, nisi sit amet condimentum sodales, nibh est finibus justo, ut placerat tortor turpis at felis. Phasellus massa diam, tempor eget sem ac, bibendum scelerisque erat. Aenean accumsan odio vel tortor facilisis, at pretium ex auctor.",
    category: ["Arte y Cultura"],
    duration: 4,
    price: 22,
    meetingPoint: "google address",
    comments: [],
    rates: [6, 9, 10, 8, 8, 8, 8, 8, 9],
    location: {
      address: "Madrid, España",
      coords: { lat: 40.4167754, lng: -3.7037901999999576 }
    }
  },
]

let tours10 = [
  {
    img: "https://frasesdelavida.com/wp-content/uploads/2018/12/Frases-de-astronom%C3%ADa.jpg",
    title: "Acampada astronómica",
    claim: "2 noches bajo el cielo estrellado para descubrir los astros y sus anécdotas.",
    description: `¡La sensación una vez en la sierra de Madrid es que el tiempo finalmente se detuvo! Los sonidos, los paisajes, los olores y los gustos locales le dan un propósito a la vida en su mejor momento. Disfrutaremos de momentos de completa contemplación mientras nos conectamos con la increíble naturaleza circundante. Las inclusiones y actividades fueron planificadas y organizadas de modo que todo lo que debe preocuparse es divertirse y ser feliz. Comeremos localmente, caminaremos y navegaremos a las mejores playas y nos enfocaremos en nuestro objetivo principal: ¡tranquilidad!`,
    category: ["Naturaleza"],
    duration: 6,
    price: 35,
    meetingPoint: "google address",
    comments: [],
    rates: [7, 6, 9, 8, 10, 5, 6, 8, 8],
    location: {
      address: "Madrid, España",
      coords: { lat: 40.4167754, lng: -3.7037901999999576 }
    }
  },
  {
    img: "https://encolombia.com/wp-content/uploads/2019/05/Meditacion-Medicina-Alternativa-696x398.jpg",
    title: "Meditación en Los Morrillos",
    claim: "En el sendero de las meditaciones hacemos  un recorrido entre el campo y el bosque en 8 estaciones dentro de la reserva natural, viviendo en una estrecha conexión entre nuestro ser personal y la naturaleza.",
    description: `En el sendero de las meditaciones hacemos  un recorrido entre el campo y el bosque en 8 estaciones dentro de la reserva natural, viviendo en una estrecha conexión entre nuestro ser personal y la naturaleza. Puedes escoger un tema entre "Conócete a ti mismo" y "Las 7 fases del desarrollo personal".
    Iniciamos con una oración, sentados. En cada estación hacemos un corto ejercicio de meditación y una actividad vivencial.  Las actividades cambian según la estación:  movemos la tierra de la compostera, imaginamos una situación que se nos describe,  observamos detalles de los árboles, sentimos el ambiente del bosque, abrazamos un gran roble, construimos apachetas, despejamos plantas invasoras, caminamos descalzos sobre la grama en los senderos de meditación dinámica, y nos acostamos sobre el pastizal. Entre una estación y otra caminamos  en tramos de diferentes características: bosque nativo, camino de piedra o campo abierto. El recorrido  completo tiene 1 km aproximadamente. 
    Terminamos con un rico refrigerio en medio de una agradable conversación.`,
    category: ["Naturaleza", "Estilo de Vida"],
    duration: 3,
    price: 23,
    meetingPoint: "google address",
    comments: [],
    rates: [7, 8, 5],
    location: {
      address: "Madrid, España",
      coords: { lat: 40.4167754, lng: -3.7037901999999576 }
    }
  },
  {
    img: "http://madridmayrit.files.wordpress.com/2013/07/casa-1916.jpg",
    title: "Taller Danzas Étnicas",
    claim: "Disfruta de un taller para descubrir las danzas de nuestros ancestros",
    description: "La clase comienza con un encuentro y saludo, y luego pasa a una sesión de estiramiento con música. Después del calentamiento,vcomenzará la clase con los movimientos de base y compartirá la historia o el relato que hay detrás del baile. A medida que la clase progresa, los estudiantes aprenderán una serie de movimientos y ritmos, encadenándolos para lograr un baile completo. La clase incluirá movimiento a través del piso, música, sudor y amor. Algunas clases incluyen tambores en vivo (LD).",
    category: ["Arte y Cultura", "Naturaleza"],
    duration: 3,
    price: 16,
    meetingPoint: "google address",
    comments: [],
    rates: [6, 9, 10, 8, 9],
    location: {
      address: "Madrid, España",
      coords: { lat: 40.4167754, lng: -3.7037901999999576 }
    }
  },
  {
    img: "https://uecluster.blob.core.windows.net/images/futurosostenible/1511882795_niscs.jpg",
    title: "Jornada micológica en la Sierra",
    claim: "Difruta,identifica y aprende a recoger de manera sostenible estos maravillosos productos de la naturaleza :)",
    description: `Mi vocación es acercaros la naturaleza para que la conozcáis y la améis tanto como nosotros. A partir de ahí, acompañados por expertos micólogos, sabremos diferenciar las especies, identificaremos sus características y aprenderemos a recogerlas de manera sostenible.

    Esta ruta tendrá además el añadido del espectacular entorno que nos rodeará, especialmente bonito en otoño por sus tonos dorados, rojos y amarillos y la cantidad de frutos que surgen en esta época.`,
    category: ["Naturaleza", "Aventura"],
    duration: 4,
    price: 15,
    meetingPoint: "google address",
    comments: [],
    rates: [6, 9, 10, 8, 9, 9, 9, 9],
    location: {
      address: "Madrid, España",
      coords: { lat: 40.4167754, lng: -3.7037901999999576 }
    }
  },
]

let allGuides = []

User.deleteMany()
  .then(() => {
    return User.create(users)
  })
  .then(usersCreated => {
    console.log(`${usersCreated.length} users created with the following id:`);
    console.log(usersCreated.map(u => u._id));
  })
  .then(() => {
    // Close properly the connection to Mongoose
    //mongoose.disconnect()
  })
  .catch(err => {
    mongoose.disconnect()
    throw err
  })


Guide.deleteMany()
  .then(() => {
    return Guide.create(guides)
  })
  .then(guidesCreated => {
    console.log(`${guidesCreated.length} guides created with the following id:`);
    console.log(guidesCreated.map(u => u._id));
    guidesCreated.forEach((guide) => {
      allGuides.push(guide._id)
    })
  })
  .then(() => {
    Tour.deleteMany()
      .then(() => {
        return Tour.create(tours1)
      })
      .then(toursCreated => {
        console.log(`${toursCreated.length} tours created with the following id:`);
        console.log(toursCreated.map(u => u._id));
        toursCreated.forEach((tourCreated) => {
          Tour.findByIdAndUpdate(tourCreated._id, { owner: allGuides[0] }, { new: true }).then()
          Guide.findByIdAndUpdate(allGuides[0], { $push: { toursCreated: tourCreated._id } }).then()
        })
      })
      .then(() => {
        return Tour.create(tours2)
      })
      .then(toursCreated => {
        console.log(`${toursCreated.length} tours created with the following id:`);
        console.log(toursCreated.map(u => u._id));
        toursCreated.forEach((tourCreated) => {
          Tour.findByIdAndUpdate(tourCreated._id, { owner: allGuides[1] }, { new: true }).then()
          Guide.findByIdAndUpdate(allGuides[1], { $push: { toursCreated: tourCreated._id } }).then()
            .then()
        })
      })
      .then(() => {
        return Tour.create(tours3)
      })
      .then(toursCreated => {
        console.log(`${toursCreated.length} tours created with the following id:`);
        console.log(toursCreated.map(u => u._id));
        toursCreated.forEach((tourCreated) => {
          Tour.findByIdAndUpdate(tourCreated._id, { owner: allGuides[2] }, { new: true }).then()
          Guide.findByIdAndUpdate(allGuides[2], { $push: { toursCreated: tourCreated._id } }).then()
        })
      })
      .then(() => {
        return Tour.create(tours4)
      })
      .then(toursCreated => {
        console.log(`${toursCreated.length} tours created with the following id:`);
        console.log(toursCreated.map(u => u._id));
        toursCreated.forEach((tourCreated) => {
          Tour.findByIdAndUpdate(tourCreated._id, { owner: allGuides[3] }, { new: true }).then()
          Guide.findByIdAndUpdate(allGuides[3], { $push: { toursCreated: tourCreated._id } }).then()
        })
      })
      .then(() => {
        return Tour.create(tours5)
      })
      .then(toursCreated => {
        console.log(`${toursCreated.length} tours created with the following id:`);
        console.log(toursCreated.map(u => u._id));
        toursCreated.forEach((tourCreated) => {
          Tour.findByIdAndUpdate(tourCreated._id, { owner: allGuides[4] }, { new: true }).then()
          Guide.findByIdAndUpdate(allGuides[4], { $push: { toursCreated: tourCreated._id } }).then()
        })
      })
      .then(() => {
        return Tour.create(tours6)
      })
      .then(toursCreated => {
        console.log(`${toursCreated.length} tours created with the following id:`);
        console.log(toursCreated.map(u => u._id));
        toursCreated.forEach((tourCreated) => {
          Tour.findByIdAndUpdate(tourCreated._id, { owner: allGuides[5] }, { new: true }).then()
          Guide.findByIdAndUpdate(allGuides[5], { $push: { toursCreated: tourCreated._id } }).then()
        })
      })
      .then(() => {
        return Tour.create(tours7)
      })
      .then(toursCreated => {
        console.log(`${toursCreated.length} tours created with the following id:`);
        console.log(toursCreated.map(u => u._id));
        toursCreated.forEach((tourCreated) => {
          Tour.findByIdAndUpdate(tourCreated._id, { owner: allGuides[6] }, { new: true }).then()
          Guide.findByIdAndUpdate(allGuides[6], { $push: { toursCreated: tourCreated._id } }).then()
        })
      })
      .then(() => {
        return Tour.create(tours8)
      })
      .then(toursCreated => {
        console.log(`${toursCreated.length} tours created with the following id:`);
        console.log(toursCreated.map(u => u._id));
        toursCreated.forEach((tourCreated) => {
          Tour.findByIdAndUpdate(tourCreated._id, { owner: allGuides[7] }, { new: true }).then()
          Guide.findByIdAndUpdate(allGuides[7], { $push: { toursCreated: tourCreated._id } }).then()
        })
      })
      .then(() => {
        return Tour.create(tours9)
      })
      .then(toursCreated => {
        console.log(`${toursCreated.length} tours created with the following id:`);
        console.log(toursCreated.map(u => u._id));
        toursCreated.forEach((tourCreated) => {
          Tour.findByIdAndUpdate(tourCreated._id, { owner: allGuides[8] }, { new: true }).then()
          Guide.findByIdAndUpdate(allGuides[8], { $push: { toursCreated: tourCreated._id } }).then()
        })
      })
      .then(() => {
        return Tour.create(tours10)
      })
      .then(toursCreated => {
        console.log(`${toursCreated.length} tours created with the following id:`);
        console.log(toursCreated.map(u => u._id));
        toursCreated.forEach((tourCreated) => {
          Tour.findByIdAndUpdate(tourCreated._id, { owner: allGuides[9] }, { new: true }).then()
          Guide.findByIdAndUpdate(allGuides[9], { $push: { toursCreated: tourCreated._id } }).then()
        })
      })

  })
  .catch(err => {
    mongoose.disconnect()
    throw err
  })


