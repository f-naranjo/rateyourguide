// This seed is the third one to be executed
// It creates a new Array of 50 bookings and then they are linked to
// the users that we have created previously.



require('dotenv').config();

const mongoose = require("mongoose");
const TourSession = require("../models/TourSession");
const Booking = require("../models/Booking");
const User = require("../models/User");

mongoose
  .connect(`${process.env.DB}`, { useNewUrlParser: true })
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

let bookings = new Array(50).fill("")

let bookingsGenerated = bookings.map((booking, idx) => {
  let bookingFill = { status: "pending", people: Math.floor(Math.random() * (6 - 1 + 1) + 1) }
  return bookingFill
})

let bookingsId = []

Booking.deleteMany()
  .then(() => {
    return Booking.create(bookingsGenerated)
  })
  .then(bookingsCreated => {
    console.log(`${bookingsCreated.length} bookings created with the following id:`);
    console.log(bookingsCreated.map(u => u._id));
    bookingsCreated.forEach((bookingCreated) => {
      bookingsId.push(bookingCreated._id)
    })
  })
  .then(() => {
    User.find()
      .then((usersFound) => {
        usersFound.forEach((user, idx) => {
          switch (idx) {
            case 0:
              User.findByIdAndUpdate(user._id, { bookings: bookingsId.slice(0, 3) })
                .then()
              break;
            case 1:
              User.findByIdAndUpdate(user._id, { bookings: bookingsId.slice(3, 6) })
                .then()
              break;
            case 2:
              User.findByIdAndUpdate(user._id, { bookings: bookingsId.slice(6, 9) })
                .then()
              break;
            case 3:
              User.findByIdAndUpdate(user._id, { bookings: bookingsId.slice(9, 11) })
              break;
            case 4:
              User.findByIdAndUpdate(user._id, { bookings: bookingsId.slice(11, 13) })
                .then()
              break;
            case 5:
              User.findByIdAndUpdate(user._id, { bookings: bookingsId.slice(13, 16) })
                .then()
              break;
            case 6:
              User.findByIdAndUpdate(user._id, { bookings: bookingsId.slice(16, 19) })
                .then()
              break;
            case 7:
              User.findByIdAndUpdate(user._id, { bookings: bookingsId.slice(19, 22) })
                .then()
              break;
            case 8:
              User.findByIdAndUpdate(user._id, { bookings: bookingsId.slice(22, 24) })
                .then()
              break;
            case 9:
              User.findByIdAndUpdate(user._id, { bookings: bookingsId.slice(24, 26) })
                .then()
              break;
            case 10:
              User.findByIdAndUpdate(user._id, { bookings: bookingsId.slice(26, 30) })
                .then()
              break;
            case 11:
              User.findByIdAndUpdate(user._id, { bookings: bookingsId.slice(30, 32) })
                .then()
              break;
            case 12:
              User.findByIdAndUpdate(user._id, { bookings: bookingsId.slice(32, 34) })
                .then()
              break;
            case 13:
              User.findByIdAndUpdate(user._id, { bookings: bookingsId.slice(34, 36) })
                .then()
              break;
            case 14:
              User.findByIdAndUpdate(user._id, { bookings: bookingsId.slice(36, 37) })
                .then()
              break;
            case 15:
              User.findByIdAndUpdate(user._id, { bookings: bookingsId.slice(37, 38) })
                .then()
              break;
            case 16:
              User.findByIdAndUpdate(user._id, { bookings: bookingsId.slice(38, 40) })
                .then()
              break;
            case 17:
              User.findByIdAndUpdate(user._id, { bookings: bookingsId.slice(40, 43) })
                .then()
              break;
            case 18:
              User.findByIdAndUpdate(user._id, { bookings: bookingsId.slice(43, 47) })
                .then()
              break;
            case 19:
              User.findByIdAndUpdate(user._id, { bookings: bookingsId.slice(47, 49) })
                .then()
              break;
          }
        })
      })
  })
  .catch(err => {
    mongoose.disconnect()
    throw err
  })





