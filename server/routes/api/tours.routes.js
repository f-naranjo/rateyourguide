const express = require("express");
const passport = require('passport');
const router = express.Router();
const uploader = require('../../configs/cloudinary.config')
const Tour = require('../../models/Tour')
const Guide = require('../../models/Guide')
const TourSession = require('../../models/TourSession')

router.get('/all', (req, res, next) => {
  Tour.find()
    .populate([
      {
        path: 'comments',
        model: 'TourComment',
        populate: {
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

router.get('/guides', (req, res, next) => {
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
    .then((guidesFound) => {
      res.status(200).json(guidesFound)
    })
    .catch(err => {
      next()
      res.status(500).json({ message: err });
    })


})

router.post('/guides/now/filter', (req, res, next) => {
  const { location, language, duration, people } = req.body;
  console.log(location, language, duration, people)
  Guide.find()
    .populate([
      {
        path: 'tourSessions',
        model: 'TourSession',
      },
      {
        path: 'toursCreated',
        model: 'Tour',
      }
    ])
    .then((guidesFound) => {
      let filterGuides = guidesFound.filter((guides) => {
        let hasSessions = []
        let now = new Date()
        let timeLimit = new Date(new Date().setUTCHours(23, 59, 00))
        console.log(now, timeLimit)
        guides.tourSessions.forEach((session) => {
          hasSessions.push(session.language === language &&
            session.maxPeople - session.currentPeople > +people &&
            session.duration <= +duration &&
            session.date > now &&
            session.date < timeLimit
          )
        })
        return hasSessions.includes(true)
      }
      )
      return filterGuides
    })
    .then((filterGuides) => {
      res.status(200).json(filterGuides)
        .catch(err => {
          next()
          res.status(500).json({ message: err });
        })
    })

})

router.get('/guide/:id', (req, res, next) => {
  Guide.findById(req.params.id)
    .populate('tourSessions')
    .populate('toursCreated')
    .then((guideFound) => {
      res.json(guideFound)
    })
})

router.get('/:id', (req, res, next) => {
  Tour.findById(req.params.id)
    .then((tourFound) => {
      res.status(200).json(tourFound)
    }).catch(function () {
      next();
      res.status(500).json({ mes: err });
    });
})

router.get('/session/:id', (req, res, next) => {
  TourSession.findById(req.params.id)
    .populate([
      {
        path: 'tour',
        model: 'Tour',
        populate: {
          path: 'comments',
          model: 'TourComment'
        }
      },
      {
        path: 'owner',
        model: 'Guide',
        
      }
    ])
    .then((tourSessionfound) => {
      res.status(200).json(tourSessionfound)
    }).catch(function () {
      next();
      res.status(500).json({ mes: err });
    });
})




module.exports = router;
