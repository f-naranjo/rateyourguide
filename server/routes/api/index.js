const router = require('express').Router();
const Booking = require("../../models/Booking");
const Guide = require("../../models/Guide");
const GuideComment = require("../../models/GuideComment");
const Tour = require("../../models/Tour");
const TourComment = require("../../models/TourComment");
const TourSession = require("../../models/TourSession");

//const User = require("../../models/User");


router.use('/auth', require('./auth.routes'))


router.get('/all/tours', (req, res, next) => {
  Tour.find()
    .populate([
      {
        path: 'comments',
        model: 'TourComment',
        populate:{
          path: 'author',
          model: 'User'
        }
      },
      {
        path: 'owner',
        model: 'Guide',
        populate: {
          path: 'comments',
          model: 'GuideComment'
        }
      },
      {
        path: 'owner',
        model: 'Guide',
        populate: {
          path: 'tourSessions',
          model: 'TourSession',
        }
      },
      {
        path: 'owner',
        model: 'Guide',
        populate: {
          path: 'toursCreated',
          model: 'Tour',
        }
      }
    ])
    .then((toursFound) => {
      res.status(200).json(toursFound)
    })
    .catch(err => {
      res.status(500).json({ message: err });
    })
});

router.get('/all/uides',(req,res,next)=>{
  Guide.find()
  .populate([
    {
      path: 'toursCreated',
      model: 'Tour',
    },
    {
      path: 'tourSessions',
      model: 'TourSession',
    },
    {
      path: 'comments',
      model: 'GuideComment',
      populate: {
        path: 'author',
        model: 'User'
      }
    }
  ])
  .then((guidesFound)=>{
    res.status(200).json(guidesFound)
  })
  .catch(err => {
    next()
    res.status(500).json({ message: err });
  })
 
  
})

router.get('/guide/:id',(req,res,next)=>{
  Guide.findById(req.params.id)
   .populate('tourSessions')
   .populate('toursCreated')
  .then((guideFound)=>{
    res.json(guideFound)
  })
})

router.get('/tour/:id',(req,res,next)=>{
  Tour.findById(req.params.id)
  .then((tourFound)=>{
    res.status(200).json(tourFound)
  }).catch(function() {
    next();
    res.status(500).json({mes: err});
  });
})


module.exports = router;