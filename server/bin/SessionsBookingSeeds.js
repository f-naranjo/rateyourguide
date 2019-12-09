require('dotenv').config();

const mongoose = require("mongoose");
const TourSession = require("../models/TourSession");
const Booking = require("../models/Booking");

mongoose
  .connect(`${process.env.DB}`, { useNewUrlParser: true })
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });


let tourSessions = [
  {
    maxPeople: 5,
    currentPeople: 3,
    date: '2020-01-01',
    hour: '10:00',
    status: "pending"
  }
]

let bookings = new Array(50).fill("")

let bookingsGenerated = bookings.map( (booking,idx) => {
  let bookingFill ={status: "pending", people: Math.floor(Math.random() * (6 - 1+ 1) + 1)}
  return bookingFill
})


TourSession.deleteMany()
  .then(() => {
    return TourSession.create(tourSessions)
  })
  .then(tourSessionsCreated => {
    console.log(`${tourSessionsCreated.length} tourSessions created with the following id:`);
    console.log(tourSessionsCreated.map(u => u._id));
  })
  .catch(err => {
    mongoose.disconnect()
    throw err
  })

  Booking.deleteMany()
  .then(() => {
    return Booking.create(bookingsGenerated)
  })
  .then(bookingsCreated => {
    console.log(`${bookingsCreated.length} bookings created with the following id:`);
    console.log(bookingsCreated.map(u => u._id));
  })
  .catch(err => {
    mongoose.disconnect()
    throw err
  })





