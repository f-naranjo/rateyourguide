const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const tourSchema = new Schema({
  // owner: {type: mongoose.Schema.Types.ObjectId, ref: 'Guides'},
  owner: String,
  img: String,
  title: String,
  claim: String,
  description: String,
  duration: Number,
  category:[{type:String, enum:["Aventura","Deporte","Estilo de Vida","Arte y Cultura","Gastronomia","Mar","Naturaleza"]}],
  price: Number, 
  meetingPoint: String, 
  comments: [{type: mongoose.Schema.Types.ObjectId, ref: 'Comments'}],
  rates: []
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

const Tour = mongoose.model('Tour', tourSchema);
module.exports = Tour;
