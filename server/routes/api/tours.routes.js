const express = require("express");
const passport = require('passport');
const router = express.Router();
const uploader = require('../../configs/cloudinary.config')
const Tour = require('../../models/Tour')
const Guide = require('../../models/Guide')

router.get('/all', (req, res, next) => {
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
      next()
      res.status(500).json({ message: err });
    })
});

router.get('/guides',(req,res,next)=>{
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

router.get('/:id',(req,res,next)=>{
  Tour.findById(req.params.id)
  .then((tourFound)=>{
    res.status(200).json(tourFound)
  }).catch(function() {
    next();
    res.status(500).json({mes: err});
  });
})




module.exports = router;
