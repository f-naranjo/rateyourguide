const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const bookingSchema = new Schema({
  owner: [{type: mongoose.Schema.Types.ObjectId, ref: 'Users'}],
  tourSession: [{type: mongoose.Schema.Types.ObjectId, ref: 'TourSessions'}],
  status:[],
  people: Number,
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Booking = mongoose.model('Booking', bookingSchema);
module.exports = Booking;
