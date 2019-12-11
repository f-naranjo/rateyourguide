const router = require('express').Router();
const Booking = require("../../models/Booking");
const Guide = require("../../models/Guide");
const GuideComment = require("../../models/GuideComment");
const Tour = require("../../models/Tour");
const TourComment = require("../../models/TourComment");
const TourSession = require("../../models/TourSession");



router.use('/auth', require('./auth.routes'))
router.use('/tours', require('./tours.routes'))



module.exports = router;