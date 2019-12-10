// This seed is the second one to be executed
// It creates 27 comments for the Guides and 27 for the Tours.
// Then the comments are linked to the Guides and the Tours and last to the users by the idx

require('dotenv').config();

const mongoose = require("mongoose");
const GuideComment = require("../models/GuideComment");
const TourComment = require("../models/TourComment");
const Guide = require("../models/Guide");
const Tour = require("../models/Tour");
const User = require("../models/User");

mongoose
  .connect(`${process.env.DB}`, { useNewUrlParser: true })
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

let guideComments = [
  {
    title: "Muy Bueno",
    description: "Minions ipsum tank yuuu! Jeje uuuhhh underweaaar bee do bee do bee do chasy. Chasy po kass para tú chasy r. Gelatooo bananaaaa baboiii hahaha wiiiii po kass wiiiii. Para tú bee do bee do bee do me want bananaaa! Poulet tikka masala jiji potatoooo. Potatoooo poopayee pepete bee do bee do bee do underweaaar. Bappleees tank yuuu! Bee do bee do bee do chasy potatoooo aaaaaah me want bananaaa! Gelatooo bananaaaa.",
    rate: 6
  },
  {
    title: "Inesperado",
    description: "ra tú bee do bee do bee do me want bananaaa! Poulet tikka masala jiji potatoooo. Potatoooo poopayee pepete bee do bee do bee do underweaaar. Bappleees tank yuuu! Bee do bee do bee do chasy potatoooo aaaaaah me want bananaaa! Gelatooo bananaaaa.",
    rate: 7
  },
  {
    title: "¡Qué gran descubrimiento!",
    description: "Minions loo underweaaar belloo! Jiji tulaliloo la bodaaa tank yuuu! Poulet tikka masala daa underweaaar. Gelatooo bananaaaa.",
    rate: 9
  },
  {
    title: "Divertido y entretenido",
    description: "tank yuuu! Jeje uuuhhh underweaaar bee do bee do bee do chasy. Chasy po kass para tú chasy weaaar belloo! Jiji tulaliloo la bodaaa tank yuuu! Poulet tikka masala daa underweaaar. Gelatooo bananaaaa baboiii hahaha wiiiii po kass wiiiii. Para tú bee do bee do bee do me wanwant bananaaa! Gelatooo bananaaaa.",
    rate: 7
  },
  {
    title: "Una experiencia insuperable",
    description: "e do bee do me want bananaaa! Poulet tikka masala jiji potatoooo. Potatoooo poopaybee do underweaaar. Bappleees tank yuuu! Bee do bee do bee do chasy potatoooo aaaaaah me want bananaaa! Gelatooo bananaaaa.",
    rate: 10
  },
  {
    title: "Hemos pasado un buen rato",
    description: "Gelatooo bananaaaa baboiii hahaha wiiiii po kass wiiiii. Para tú bee do bee do bee do me want bananaaa! Poulet tikka masala jiji potatoooo. Potatoooo poopayee pepete bee do bee do bee do underweaaar.",
    rate: 5
  },
  {
    title: "Una experiencia notable",
    description: "Minions ipsum tank yuuu! Jeje uuuhhh underweaaar bee do bee do bee do chasy. Chasy po kass pe do me want bananaaa! Poulet tikka masala jiji potatoooo. Potatoooo poopayee pepete bee do bee do bee do underweaaar. Bappleees tank yuuu! Bee do bee do bee do chasy potatoooo aaaaaah me want bananaaa! Gelatooo bananaaaa.",
    rate: 7
  },
  {
    title: "Maravilla",
    description: "Minions ipsum tank yuuu! Jeje uuuhhh underweaaar bee do bee do bee do chasy. Chasy po kass para tú chasy uuuhhh jiji ti aamoo! Butt. Uuuhhh bappleees bananaaaa bananaaaa belloo! Baboiii buttbananaaaa.",
    rate: 8
  },
  {
    title: "¡Sorprendente!",
    description: "bee do bee do bee do underweaaar. Bappleees tank yuuu! Bee do bee do bee do chasy potatoooo aaaaaah me want bananaaa! Gelatooo bananaaaa.",
    rate: 8
  },
  {
    title: "Me ha cambiado la vida",
    description: "do bee do bee do chasy.anaaaa belloo! Baboiii butt. Aaaaaah bappleees tulaliloo butt poulet tiket tikka masala daa underweaaar. Gelatooo bananaaaa baboiii hahaha wiiiii po kass wiiiii. ",
    rate: 10
  },
  {
    title: "Repetiré todas las veces que pueda",
    description: "Minions ipsum tank yuuu! a tú chasy uuuhhhbutt poulet tikka masala. Me want bananaaa! tulaliloo underweaaar belloo! Jiji tulaliloo la bodaaa tank yuuu! Poulet tikka masala daa underweaant bananaaa! Gelatooo bananaaaa.",
    rate: 10
  },
  {
    title: "Esta experiencia se queda en mi corazón",
    description: "Minions ipsum tank yuuu! Jeje uuuhhh underweaaar bee do bee do bee do chasy. Chasy po kass para tú chasy uaaa! Gelatooo bananaaaa.",
    rate: 9
  },
  {
    title: "Buena experiencia",
    description: "Aaaaaah baboiii bee do bee do bee do underweaaar. Ti aamoo! hana dul sae beebee do la bodaaa underweaaar poopayee bappleees. Wiiiii baboiii ti aamoo! Hana dul sae underweaaar hana dul sae po kass hana dul sae tulaliloo la bodaaa tatata bala tu.",
    rate: 6
  },
  {
    title: "No dejéis de hacerla",
    description: "Aaaaaah baboiii bee do bee do bee do underweaaar. Ti aamoo! hana dul sae daa pepete po kass daa. Butt bee do bee do bee do hahaha jeje. Butt baboiii gelatooo poopayee gelatooo daa uuuhhh ti aamoo! Ti aamoo! Uuuhhh jeje hahaha chasy poulet tikka masala poopayee daa para tú.",
    rate: 7
  },
  {
    title: "La mejor experiencia de mi vida",
    description: "Aaaaaah baboiii bee do bee do bee do underweaaar. Ti aamoo! hana dul sae daa pepete po kass daa. Butt bee do bee do bee do hahaha jeje. Butt baboiii gelatooo poopayee gelatooo daa uuuhhh tioo! Hana dul sae underweaaar hana dul sae po kass hana dul sae tulaliloo la bodaaa tatata bala tu.",
    rate: 10
  },
  {
    title: "¡Repetiremos sin lugar a dudas!",
    description: "Aaaaaah baboiii bee do bee do bee do underweaaar. Ti aamoo! hana dul sae daa pepete po kass daa. Butt bee do bee do bee do hahaha jeje. Butt baboiii gelatooo poopayee gelatooo daa uuuhhh ti aamoo!! Hana dul sae underweaaar hana dul sae po kass hana dul sae tulaliloo la bodaaa tatata bala tu.",
    rate: 8
  },
  {
    title: "Agradable experiencia",
    description: "Aaaaaah baboiii bee do bee do bee do underweaaar. Ti aamoo! hana dul sae daa pepete po kass daa.ee do la bodaaa underweaaar poopayee bappleees. Wiiiii baboiii ti aamoo! Hana dul sae underweaaar hana dul sae po kass hana dul sae tulaliloo la bodaaa tatata bala tu.",
    rate: 6
  },
  {
    title: "Qué suerte tienes de no haberla hecho todavía",
    description: "Aaaaaah baboiii bee do la bodaaa underweaaar poopayee bappleees. Wiiiii baboiii ti aamoo! Hana dul sae underweaaar hana dul sae po kass hana dul sae tulaliloo la bodaaa tatata bala tu.",
    rate: 10
  },
  {
    title: "Bello",
    description: "Aaaaaah baboiii bee do bee do bee do underweaaar. Ti aamoo! hana dul sae daa pepete po kass daa. Butt bee do bee do bee do hahaha jeje. Butt baboiii gelatooo poopayee gelatooo daa uuuhhh ti aamoo! Ti aamoo! Uuuhhh jeje hahaha chasy poulet tikka masala poopayee daa para tú. Jiji ti aamoo! Poulet underweaaar hana dul sae po kass hana dul sae tulaliloo la bodaaa tatata bala tu.",
    rate: 5
  },
  {
    title: "Lo mejor: El Guía",
    description: "Butt baboiii gelatooo poopayee gelatooo daa uuuhhh ti aamoo! Ti aamoo! Uuuhhh jeje hahaha chasy poulet tikka masala poopayee daa para tú. Jiji ti aamoo! Poulet tikka masala bananaaaa para tú hahaha chasy. Tank yuuu! jiji poulet tik",
    rate: 8
  },
  {
    title: "Si no quieres aburrirte, ¡Hazlo!",
    description: "Jiji ti aamoo! Poulet tikka masala bananaaaa para tú hahaha chasy. Tank yuuu! jiji poulet tikka masala ",
    rate: 8
  },
  {
    title: "En dos palabras: muy buena",
    description: "Aaaaaah baboiii bee do bee do bee do underweaaar. Ti aamoo! hana dul sae daa pepete po kass daa.  aamoo! Ti aamoo! Uuuhhh jeje hahaha chasy poulet tikka masala poopayee daa para tú. Jiji ti aamoo! Poula tu.",
    rate: 7
  },
  {
    title: "Buena, bonita y económica! :)",
    description: "Aaaaaah baboiii bee do bee do bee do underweaaar. Ti aamoo! hana dul sae daa pepete po kass daa. Butt bee o bee do la bodaaa underweaaar poopayee bappleees. Wiiiii baboiii ti aamoo! Hana dul sae underweaaar hana dul sae po kass hana dul sae tulaliloo la bodaaa tatata bala tu.",
    rate: 7
  },
  {
    title: "Pongame dos más por favor!",
    description: " Wiiiii baboiii ti aamoo! Hana dul sae underweaaar hana dul sae po kass hana dul sae tulaliloo la bodaaa tatata bala tu.",
    rate: 8
  },
  {
    title: "Un 8 porque quiero creer que existe algo mejor",
    description: "Aaaaaah baboiii bee do bee do bee do underweaaar. Ti aamoo! hana dul sae daa pepete po kass daa. Butt bee do bee do bee ",
    rate: 8
  },
  {
    title: "No te dejará indiferente",
    description: "Aaaaaah baboiii bee do bee do bee do underweaaar. Ti aamoo! hana dul sae daa pepete po kass daa. Butt bee do bee do bee do hahaha jeje. Butt baboiii gelatooo poopayee gelatooo daa uuuhhh ti aamoo! Ti aamoo! Uuuhhh jeje hahaha chasy poulet tikka masala poopayee daa para túoiii ti aamoo! Han",
    rate: 9
  },
  {
    title: "Una experiencia cambiavidas",
    description: "bee do bee do bee do la bodaaa underweaaar poopayee bappleees. Wiiiii baboiii ti aamoo! Hana dul sae underweaaar hana dul sae po kass hana dul sae tulaliloo la bodaaa tatata bala tu.",
    rate: 9
  },

]

let tourComments = [
  {
    title: "Muy Bueno",
    description: "Minions ipsum tank yuuu! Jeje uuuhhh underweaaar bee do bee do bee do chasy. Chasy po kass para tú chasy r. Gelatooo bananaaaa baboiii hahaha wiiiii po kass wiiiii. Para tú bee do bee do bee do me want bananaaa! Poulet tikka masala jiji potatoooo. Potatoooo poopayee pepete bee do bee do bee do underweaaar. Bappleees tank yuuu! Bee do bee do bee do chasy potatoooo aaaaaah me want bananaaa! Gelatooo bananaaaa.",
    rate: 6
  },
  {
    title: "Inesperado",
    description: "ra tú bee do bee do bee do me want bananaaa! Poulet tikka masala jiji potatoooo. Potatoooo poopayee pepete bee do bee do bee do underweaaar. Bappleees tank yuuu! Bee do bee do bee do chasy potatoooo aaaaaah me want bananaaa! Gelatooo bananaaaa.",
    rate: 7
  },
  {
    title: "¡Qué gran descubrimiento!",
    description: "Minions loo underweaaar belloo! Jiji tulaliloo la bodaaa tank yuuu! Poulet tikka masala daa underweaaar. Gelatooo bananaaaa.",
    rate: 9
  },
  {
    title: "Divertido y entretenido",
    description: "tank yuuu! Jeje uuuhhh underweaaar bee do bee do bee do chasy. Chasy po kass para tú chasy weaaar belloo! Jiji tulaliloo la bodaaa tank yuuu! Poulet tikka masala daa underweaaar. Gelatooo bananaaaa baboiii hahaha wiiiii po kass wiiiii. Para tú bee do bee do bee do me wanwant bananaaa! Gelatooo bananaaaa.",
    rate: 7
  },
  {
    title: "Una experiencia insuperable",
    description: "e do bee do me want bananaaa! Poulet tikka masala jiji potatoooo. Potatoooo poopaybee do underweaaar. Bappleees tank yuuu! Bee do bee do bee do chasy potatoooo aaaaaah me want bananaaa! Gelatooo bananaaaa.",
    rate: 10
  },
  {
    title: "Hemos pasado un buen rato",
    description: "Gelatooo bananaaaa baboiii hahaha wiiiii po kass wiiiii. Para tú bee do bee do bee do me want bananaaa! Poulet tikka masala jiji potatoooo. Potatoooo poopayee pepete bee do bee do bee do underweaaar.",
    rate: 5
  },
  {
    title: "Una experiencia notable",
    description: "Minions ipsum tank yuuu! Jeje uuuhhh underweaaar bee do bee do bee do chasy. Chasy po kass pe do me want bananaaa! Poulet tikka masala jiji potatoooo. Potatoooo poopayee pepete bee do bee do bee do underweaaar. Bappleees tank yuuu! Bee do bee do bee do chasy potatoooo aaaaaah me want bananaaa! Gelatooo bananaaaa.",
    rate: 7
  },
  {
    title: "Maravilla",
    description: "Minions ipsum tank yuuu! Jeje uuuhhh underweaaar bee do bee do bee do chasy. Chasy po kass para tú chasy uuuhhh jiji ti aamoo! Butt. Uuuhhh bappleees bananaaaa bananaaaa belloo! Baboiii buttbananaaaa.",
    rate: 8
  },
  {
    title: "¡Sorprendente!",
    description: "bee do bee do bee do underweaaar. Bappleees tank yuuu! Bee do bee do bee do chasy potatoooo aaaaaah me want bananaaa! Gelatooo bananaaaa.",
    rate: 8
  },
  {
    title: "Me ha cambiado la vida",
    description: "do bee do bee do chasy.anaaaa belloo! Baboiii butt. Aaaaaah bappleees tulaliloo butt poulet tiket tikka masala daa underweaaar. Gelatooo bananaaaa baboiii hahaha wiiiii po kass wiiiii. ",
    rate: 10
  },
  {
    title: "Repetiré todas las veces que pueda",
    description: "Minions ipsum tank yuuu! a tú chasy uuuhhhbutt poulet tikka masala. Me want bananaaa! tulaliloo underweaaar belloo! Jiji tulaliloo la bodaaa tank yuuu! Poulet tikka masala daa underweaant bananaaa! Gelatooo bananaaaa.",
    rate: 10
  },
  {
    title: "Esta experiencia se queda en mi corazón",
    description: "Minions ipsum tank yuuu! Jeje uuuhhh underweaaar bee do bee do bee do chasy. Chasy po kass para tú chasy uaaa! Gelatooo bananaaaa.",
    rate: 9
  },
  {
    title: "Buena experiencia",
    description: "Aaaaaah baboiii bee do bee do bee do underweaaar. Ti aamoo! hana dul sae beebee do la bodaaa underweaaar poopayee bappleees. Wiiiii baboiii ti aamoo! Hana dul sae underweaaar hana dul sae po kass hana dul sae tulaliloo la bodaaa tatata bala tu.",
    rate: 6
  },
  {
    title: "No dejéis de hacerla",
    description: "Aaaaaah baboiii bee do bee do bee do underweaaar. Ti aamoo! hana dul sae daa pepete po kass daa. Butt bee do bee do bee do hahaha jeje. Butt baboiii gelatooo poopayee gelatooo daa uuuhhh ti aamoo! Ti aamoo! Uuuhhh jeje hahaha chasy poulet tikka masala poopayee daa para tú.",
    rate: 7
  },
  {
    title: "La mejor experiencia de mi vida",
    description: "Aaaaaah baboiii bee do bee do bee do underweaaar. Ti aamoo! hana dul sae daa pepete po kass daa. Butt bee do bee do bee do hahaha jeje. Butt baboiii gelatooo poopayee gelatooo daa uuuhhh tioo! Hana dul sae underweaaar hana dul sae po kass hana dul sae tulaliloo la bodaaa tatata bala tu.",
    rate: 10
  },
  {
    title: "¡Repetiremos sin lugar a dudas!",
    description: "Aaaaaah baboiii bee do bee do bee do underweaaar. Ti aamoo! hana dul sae daa pepete po kass daa. Butt bee do bee do bee do hahaha jeje. Butt baboiii gelatooo poopayee gelatooo daa uuuhhh ti aamoo!! Hana dul sae underweaaar hana dul sae po kass hana dul sae tulaliloo la bodaaa tatata bala tu.",
    rate: 8
  },
  {
    title: "Agradable experiencia",
    description: "Aaaaaah baboiii bee do bee do bee do underweaaar. Ti aamoo! hana dul sae daa pepete po kass daa.ee do la bodaaa underweaaar poopayee bappleees. Wiiiii baboiii ti aamoo! Hana dul sae underweaaar hana dul sae po kass hana dul sae tulaliloo la bodaaa tatata bala tu.",
    rate: 6
  },
  {
    title: "Qué suerte tienes de no haberla hecho todavía",
    description: "Aaaaaah baboiii bee do la bodaaa underweaaar poopayee bappleees. Wiiiii baboiii ti aamoo! Hana dul sae underweaaar hana dul sae po kass hana dul sae tulaliloo la bodaaa tatata bala tu.",
    rate: 10
  },
  {
    title: "Bello",
    description: "Aaaaaah baboiii bee do bee do bee do underweaaar. Ti aamoo! hana dul sae daa pepete po kass daa. Butt bee do bee do bee do hahaha jeje. Butt baboiii gelatooo poopayee gelatooo daa uuuhhh ti aamoo! Ti aamoo! Uuuhhh jeje hahaha chasy poulet tikka masala poopayee daa para tú. Jiji ti aamoo! Poulet underweaaar hana dul sae po kass hana dul sae tulaliloo la bodaaa tatata bala tu.",
    rate: 5
  },
  {
    title: "Lo mejor: El Guía",
    description: "Butt baboiii gelatooo poopayee gelatooo daa uuuhhh ti aamoo! Ti aamoo! Uuuhhh jeje hahaha chasy poulet tikka masala poopayee daa para tú. Jiji ti aamoo! Poulet tikka masala bananaaaa para tú hahaha chasy. Tank yuuu! jiji poulet tik",
    rate: 8
  },
  {
    title: "Si no quieres aburrirte, ¡Hazlo!",
    description: "Jiji ti aamoo! Poulet tikka masala bananaaaa para tú hahaha chasy. Tank yuuu! jiji poulet tikka masala ",
    rate: 8
  },
  {
    title: "En dos palabras: muy buena",
    description: "Aaaaaah baboiii bee do bee do bee do underweaaar. Ti aamoo! hana dul sae daa pepete po kass daa.  aamoo! Ti aamoo! Uuuhhh jeje hahaha chasy poulet tikka masala poopayee daa para tú. Jiji ti aamoo! Poula tu.",
    rate: 7
  },
  {
    title: "Buena, bonita y económica! :)",
    description: "Aaaaaah baboiii bee do bee do bee do underweaaar. Ti aamoo! hana dul sae daa pepete po kass daa. Butt bee o bee do la bodaaa underweaaar poopayee bappleees. Wiiiii baboiii ti aamoo! Hana dul sae underweaaar hana dul sae po kass hana dul sae tulaliloo la bodaaa tatata bala tu.",
    rate: 7
  },
  {
    title: "Pongame dos más por favor!",
    description: " Wiiiii baboiii ti aamoo! Hana dul sae underweaaar hana dul sae po kass hana dul sae tulaliloo la bodaaa tatata bala tu.",
    rate: 8
  },
  {
    title: "Un 8 porque quiero creer que existe algo mejor",
    description: "Aaaaaah baboiii bee do bee do bee do underweaaar. Ti aamoo! hana dul sae daa pepete po kass daa. Butt bee do bee do bee ",
    rate: 8
  },
  {
    title: "No te dejará indiferente",
    description: "Aaaaaah baboiii bee do bee do bee do underweaaar. Ti aamoo! hana dul sae daa pepete po kass daa. Butt bee do bee do bee do hahaha jeje. Butt baboiii gelatooo poopayee gelatooo daa uuuhhh ti aamoo! Ti aamoo! Uuuhhh jeje hahaha chasy poulet tikka masala poopayee daa para túoiii ti aamoo! Han",
    rate: 9
  },
  {
    title: "Una experiencia cambiavidas",
    description: "bee do bee do bee do la bodaaa underweaaar poopayee bappleees. Wiiiii baboiii ti aamoo! Hana dul sae underweaaar hana dul sae po kass hana dul sae tulaliloo la bodaaa tatata bala tu.",
    rate: 9
  },

]

let usersId = []

let guideCommentsId = []

let tourCommentsId = []

GuideComment.deleteMany()
  .then(() => {
    return GuideComment.create(guideComments)
  })
  .then(guideCommentsCreated => {
    console.log(`${guideCommentsCreated.length} guideComments created with the following id:`);
    console.log(guideCommentsCreated.map(u => u._id));
    guideCommentsCreated.forEach((guideComment) => {
      guideCommentsId.push(guideComment._id)
    })
  })
  .then(() => {
    Guide.find()
      .then((guidesFound) => {
        guidesFound.forEach((guide, idx) => {
          switch (idx) {
            case 0:
              Guide.findByIdAndUpdate(guide._id, { comments: guideCommentsId.slice(0, 3) })
              .then()
              break;
            case 1:
              Guide.findByIdAndUpdate(guide._id, { comments: guideCommentsId.slice(3, 6) })
              .then()
              break;
            case 2:
              Guide.findByIdAndUpdate(guide._id, { comments: guideCommentsId.slice(6, 9) })
              .then()
              break;
            case 3:
              Guide.findByIdAndUpdate(guide._id, { comments: guideCommentsId.slice(9, 11) })
              break;
            case 4:
              Guide.findByIdAndUpdate(guide._id, { comments: guideCommentsId.slice(11, 13) })
              .then()
              break;
            case 5:
              Guide.findByIdAndUpdate(guide._id, { comments: guideCommentsId.slice(13, 16) })
              .then()
              break;
            case 6:
              Guide.findByIdAndUpdate(guide._id, { comments: guideCommentsId.slice(16, 19) })
              .then()
              break;
            case 7:
              Guide.findByIdAndUpdate(guide._id, { comments: guideCommentsId.slice(19, 22) })
              .then()
              break;
            case 8:
              Guide.findByIdAndUpdate(guide._id, { comments: guideCommentsId.slice(22, 24) })
              .then()
              break;
            case 9:
              Guide.findByIdAndUpdate(guide._id, { comments: guideCommentsId.slice(24, 26) })
              .then()
              break;
          }
        })
      })
  })
  .then(()=>{
    GuideComment.find()
    .then((GuideCommentsFound)=>{
      GuideCommentsFound.forEach((GuideCommentFound,idx)=>{
        GuideComment.findByIdAndUpdate(GuideCommentFound._id,{author: usersId[idx]})
        .then()
      })
    })
  })
  .catch(err => {
    mongoose.disconnect()
    throw err
  })

TourComment.deleteMany()
  .then(() => {
    return TourComment.create(tourComments)
  })
  .then(tourCommentsCreated => {
    User.find()
    .then((usersFound) =>{
      usersFound.forEach((userFound)=>{
        usersId.push(userFound._id)
      })
    })
    console.log(`${tourCommentsCreated.length} tourComments created with the following id:`);
    console.log(tourCommentsCreated.map(u => u._id));
    tourCommentsCreated.forEach((tourComment,idx) => {
      tourCommentsId.push(tourComment._id)
    })
  })
  .then(() => {
    Tour.find()
      .then((toursFound) => {
        toursFound.forEach((tour, idx) => {
          switch (idx) {
            case 0:
              Tour.findByIdAndUpdate(tour._id, { comments: tourCommentsId.slice(0, 3) })
              .then()
              break;
            case 1:
              Tour.findByIdAndUpdate(tour._id, { comments: tourCommentsId.slice(3, 6) })
              .then()
              break;
            case 2:
              Tour.findByIdAndUpdate(tour._id, { comments: tourCommentsId.slice(6, 9) })
              .then()
              break;
            case 3:
              Tour.findByIdAndUpdate(tour._id, { comments: tourCommentsId.slice(9, 11) })
              break;
            case 4:
              Tour.findByIdAndUpdate(tour._id, { comments: tourCommentsId.slice(11, 13) })
              .then()
              break;
            case 5:
              Tour.findByIdAndUpdate(tour._id, { comments: tourCommentsId.slice(13, 16) })
              .then()
              break;
            case 6:
              Tour.findByIdAndUpdate(tour._id, { comments: tourCommentsId.slice(16, 19) })
              .then()
              break;
            case 7:
              Tour.findByIdAndUpdate(tour._id, { comments: tourCommentsId.slice(19, 22) })
              .then()
              break;
            case 8:
              Tour.findByIdAndUpdate(tour._id, { comments: tourCommentsId.slice(22, 24) })
              .then()
              break;
            case 9:
              Tour.findByIdAndUpdate(tour._id, { comments: tourCommentsId.slice(24, 26) })
              .then()
              break;
          }
        })
      })
  })
  .then(()=>{
    TourComment.find()
    .then((TourCommentsFound)=>{
      TourCommentsFound.forEach((TourCommentFound,idx)=>{
        TourComment.findByIdAndUpdate(TourCommentFound._id,{author: usersId[idx]})
        .then()
      })
    })
  })
  .catch(err => {
    mongoose.disconnect()
    throw err
  })



