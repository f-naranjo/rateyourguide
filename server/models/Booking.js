const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const bookingSchema = new Schema({
  owner: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  tourSession: {type: mongoose.Schema.Types.ObjectId, ref: 'TourSession'},
  status: String,
  people: Number,
}, {
  timestamps: true,
  toJSON: {
    transform: (doc, ret) => {
      ret.id = doc._id;
      delete ret._id;
      delete ret.__v;
      delete ret.createdAt;
      return ret;
    }
  }
});

const Booking = mongoose.model('Booking', bookingSchema);
module.exports = Booking;
