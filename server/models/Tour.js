const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const tourSchema = new Schema({
  owner: [{type: mongoose.Schema.Types.ObjectId, ref: 'Guides'}],
  img: String,
  title: String,
  claim: String,
  description: Number,
  duration: Number,
  price: Number, 
  meetingPoint: String, 
  comments: [{type: mongoose.Schema.Types.ObjectId, ref: 'Comments'}],
  rates: []
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Tour = mongoose.model('Tour', tourSchema);
module.exports = Tour;
