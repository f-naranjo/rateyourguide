const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const tourSessionSchema = new Schema({
  owner: {type: mongoose.Schema.Types.ObjectId, ref: 'Guide'},
  tour:{type: mongoose.Schema.Types.ObjectId, ref: 'Tour'},
  bookings: [{type: mongoose.Schema.Types.ObjectId, ref: 'Booking'}],
  maxPeople: String,
  currentPeople: Number,
  date: String,
  hour: String,
  status:{
    type: String,
    enum:["pending","confirmed","deleted","out of date"]
  }
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const TourSession = mongoose.model('TourSession', tourSessionSchema);
module.exports = TourSession;
