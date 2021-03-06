// This seed is the fourth to be executed
// This seed find each guide and their tours and create
// a session for one day of the week X times for each tour.
// Then assign the guide to each session the tour related.
//**not implemented** Last, it pushes random existing users to
// each session.

require('dotenv').config();

const mongoose = require("mongoose");
const TourSession = require("../models/TourSession");
const Booking = require("../models/Booking");
const User = require("../models/User");
const Guide = require("../models/Guide");

mongoose
  .connect(`${process.env.DBURL}`, { useNewUrlParser: true })
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

function createSessions(initialDate, weeks, owner, tour) {
  let dateTransform = initialDate.split("-")
  console.log(dateTransform)
  console.log(new Date(Date.UTC(+dateTransform[0], +dateTransform[1] - 1, +dateTransform[2] - 1, +dateTransform[3], +dateTransform[4])))
  let dateInit = new Date(Date.UTC(+dateTransform[0], +dateTransform[1] - 1, +dateTransform[2] - 1, +dateTransform[3], +dateTransform[4]))

  let sessions = new Array(weeks).fill("").map((week, idx) => {
    let dataTo = new Date(dateInit.setDate(dateInit.getDate() + 7))
    console.log(dataTo)
    let languages = ["spanish","french","english","german","russian"]
    function randomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }
    return {
      owner: owner,
      tour: tour,
      date: dataTo,
      status: "pending",
      avaliability: "Empty",
      //language:"spanish",
      language: languages[randomInt(0,4)],
      maxPeople:randomInt(6,12),
      currentPeople:0,
      duration: randomInt(1,6),
    }
  })
  return sessions
}

let allGuides = []
let allToursOfGuide;
let tourSessions = []

Guide.find()
.then((guidesFound)=>{
  function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  allToursOfGuide = new Array(guidesFound.length).fill([])
  guidesFound.forEach((guide,idx)=>{
    allGuides.push(guide._id)
    allToursOfGuide[idx]=guide.toursCreated
    guide.toursCreated.forEach((tourCreated,idx)=>{
      //if hours are set to 0, it takes current hour.
      //the server has one hour less by default
      tourSessions.push(...createSessions(`2019-12-${12+(idx+1)}-${randomInt(10,18)}-00`,5,guide._id,tourCreated))
    })
  })
})
.then(()=>{
  TourSession.deleteMany()
  .then(() => {
    return TourSession.create(tourSessions)
  })
  .then(tourSessionsCreated => {
    console.log(`${tourSessionsCreated.length} tourSessions created with the following id:`);
    console.log(tourSessionsCreated.map(u => u._id));
    tourSessionsCreated.forEach((tourSession)=>{
      Guide.findByIdAndUpdate(tourSession.owner,{$push: {tourSessions:tourSession._id}}).then()
    })
  })
  .catch(err => {
    mongoose.disconnect()
    throw err
  })
})










