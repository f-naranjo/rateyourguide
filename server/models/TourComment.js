const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const tourCommentSchema = new Schema({
  author: [{type: mongoose.Schema.Types.ObjectId, ref: 'Users'}],
  relatedTo:[{type: mongoose.Schema.Types.ObjectId, ref: 'Tours'}],
  title: String,
  description: String,
  rate: Number
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const TourComment = mongoose.model('TourComment', tourCommentSchema);
module.exports = TourComment;
