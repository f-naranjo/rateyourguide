const express = require("express");
const passport = require('passport');
const router = express.Router();
const uploader = require('../../configs/cloudinary.config')
const Tour = require('../../models/Tour')
const Guide = require('../../models/Guide')
const TourSession = require('../../models/TourSession')

router.get('/:id', (req, res, next) => {
  Guide.findById(req.params.id)
    .populate('tourSessions')
    .populate('toursCreated')
    .populate('comments')
    .then((guideFound) => {
      res.status(200).json(guideFound)
    })
})

router.post('/tour/create', (req, res, next) => {
  const { userId, img, title, claim, description, price, meetingPoint } = req.body;
  let newTour;
  let tour = {
    owner: userId,
    img: img,
    title: title,
    claim: claim,
    description: description,
    category: ["Aventura", "Deporte", "Estilo de Vida", "Arte y Cultura", "Gastronomia", "Mar", "Naturaleza"],
    price: +price,
    meetingPoint: meetingPoint,
  }
  Tour.create(tour)
  .then((tourCreated)=>{
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
  const { userId, img, title, claim, description, price, meetingPoint } = req.body;
  let tour = {
    owner: userId,
    img: img,
    title: title,
    claim: claim,
    description: description,
    category: ["Aventura", "Deporte", "Estilo de Vida", "Arte y Cultura", "Gastronomia", "Mar", "Naturaleza"],
    price: +price,
    meetingPoint: meetingPoint,
  }
  Tour.findByIdAndUpdate(userId,tour)
    .then((updatedGuide) => {
      res.status(200).json(updatedGuide)
    });
})

router.post('/profile/edit', (req, res, next) => {
  const {guideId, info } = req.body;
  Guide.findByIdAndUpdate(guideId,{info:info})
    .then((updatedGuide) => {
      res.status(200).json(updatedGuide)
    });
})

router.get('/tour/:id/delete',(req,res,next) =>{
  Tour.findByIdAndDelete(req.params.id)
    .then((deletedTour)=>{
      Guide.findByIdAndUpdate(deletedTour.owner,{$pull:{toursCreated: deletedTour.id}})
      .then(deletedTour => res.json(deletedTour))
    })
    .catch(function() {
      next();
      throw new Error("Hmmmmm.... problems!");
    });
})



module.exports = router;
