const express = require("express");
const passport = require('passport');
const router = express.Router();
const uploader = require('../../configs/cloudinary.config')
const Tour = require('../../models/Tour')
const Guide = require('../../models/Guide')
const TourSession = require('../../models/TourSession')
const User = require('../../models/User')
const Booking = require('../../models/Booking')


router.get('/:id', (req, res, next) => {
  Guide.findById(req.params.id)
    .populate('tourSessions')
    .populate('toursCreated')
    .populate('comments')
    .then((guideFound) => {
      res.status(200).json(guideFound)
    })
})

router.get('/sessions/guide/:id', (req, res, next) => {
  TourSession.find({owner:req.params.id})
  .populate([
    {
      path: 'bookings',
      model: 'Booking',
      populate: {
       path:'owner',
       model:'User'
      }
    },
    {
      path: 'tour',
      model: 'Tour',
    }
  ])
    .then((guideFound) => {
      res.status(200).json(guideFound)
    })
})


router.post('/session/create', (req, res, next) => {
  console.log("-----Session del front----")
  console.log(req.body)
  console.log("----------------")
  const { owner, tour, maxPeople, duration, language, date } = req.body
  let session = {
    owner: owner,
    tour: tour,
    bookings: [],
    maxPeople: maxPeople,
    duration: duration,
    language: language,
    currentPeople: 0,
    date: date,
    status: "pending"
  }
  TourSession.create(session)
  .then((sessionCreated)=>{
    console.log("-----Session Creada----")
    console.log(sessionCreated)
    console.log(sessionCreated._id)
    Guide.findByIdAndUpdate(
      owner,
      { $push: { tourSessions: sessionCreated._id } }
    )
    .then((updatedGuide)=>{
      console.log(updatedGuide)})
      res.status(200).json(updatedGuide)
  })
})

router.post('/tour/create', (req, res, next) => {
  console.log("--------->")
  console.log(req.body)
  console.log("<-------")

  const { userId, img, title, claim, description, price, location } = req.body;
  let newTour;
  let tour = {
    owner: userId,
    img: img,
    title: title,
    claim: claim,
    description: description,
    category: ["Aventura", "Deporte", "Estilo de Vida", "Arte y Cultura", "Gastronomia", "Mar", "Naturaleza"],
    price: +price,
    location: location,
  }
  Tour.create(tour)
    .then((tourCreated) => {
      console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
      console.log(tourCreated._id)
      console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
      console.log(userId)
      console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
      newTour = tourCreated
      Guide.findByIdAndUpdate(
        userId,
        { $push: { toursCreated: tourCreated._id } }
      )
        .then((updatedGuide) => {
          res.status(200).json(updatedGuide)
        });
    })
})

router.post('/tour/edit', (req, res, next) => {
  const { userId, tourId, img, title, claim, description, price, location } = req.body;
  let tour = {
    owner: userId,
    img: img,
    title: title,
    claim: claim,
    description: description,
    category: ["Aventura", "Deporte", "Estilo de Vida", "Arte y Cultura", "Gastronomia", "Mar", "Naturaleza"],
    price: +price,
    location: location,
  }
  Tour.findByIdAndUpdate(tourId, tour)
    .then((updatedGuide) => {
      res.status(200).json(updatedGuide)
    });
})

router.post('/profile/edit', (req, res, next) => {
  const { guideId, info } = req.body;
  Guide.findByIdAndUpdate(guideId, { info: info })
    .then((updatedGuide) => {
      res.status(200).json(updatedGuide)
    });
})

router.get('/tour/:id/delete', (req, res, next) => {
  Tour.findByIdAndDelete(req.params.id)
    .then((deletedTour) => {
      Guide.findByIdAndUpdate(deletedTour.owner, { $pull: { toursCreated: deletedTour.id } })
        .then(deletedTour => res.json(deletedTour))
    })
    .catch(function () {
      next();
      throw new Error("Hmmmmm.... problems!");
    });
})

router.get('/session/:id/delete', (req, res, next) => {
  TourSession.findByIdAndDelete(req.params.id)
    .then((deletedSession) => {
      console.log("SESION BORRADA CORRECTAMENTE")
      Guide.findByIdAndUpdate(deletedSession.owner, { $pull: { toursSessions: deletedSession._id } })
        .then((deletedTour) => {
          console.log("GUIA ACTUALIZADO CON SESION ELIMINADA")
          res.json(deletedTour)
        })
    })
    .catch(function () {
      next();
      throw new Error("Hmmmmm.... problems!");
    });
})

router.post('/session/confirm', (req, res, next) => {
  const {id} = req.body;
  TourSession.findByIdAndUpdate(id, { status: "confirmed" })
    .then((updatedGuide) => {
      console.log("SESION CONFIRMADA CORRECTAMENTE")
      res.status(200).json(updatedGuide)
    });
})





module.exports = router;
