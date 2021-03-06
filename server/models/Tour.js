const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const TourSession = require('./TourSession')
const tourSchema = new Schema({
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'Guide' },
  img: String,
  title: String,
  claim: String,
  description: String,
  category: [{ type: String, enum: ["Aventura", "Deporte", "Estilo de Vida", "Arte y Cultura", "Gastronomia", "Mar", "Naturaleza"] }],
  price: Number,
  meetingPoint: String,
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'TourComment' }],
  rates: [],
  location: {}
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

tourSchema.pre('remove', function(next) {
  TourSession.remove({tour: this._id}).exec();
  next();
});



const Tour = mongoose.model('Tour', tourSchema);
module.exports = Tour;
