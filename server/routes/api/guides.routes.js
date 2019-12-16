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
    console.log(tourCreated._id)
    console.log(userId)
    newTour = tourCreated
    Guide.findByIdAndUpdate(
      userId,
      { $push: { toursCreated: tourCreated._id } },{new:true},function(err){
        console.log(err)
      }
    )
    // .then(updatedGuide => {
    //   res.status(200).json(tourCreated)
    // });
  })
})

router.delete('/tour/delete/:id',(req,res,next) =>{
  
})



module.exports = router;
