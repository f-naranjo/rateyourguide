const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const tourCommentSchema = new Schema({
  author: {type: mongoose.Schema.Types.ObjectId, ref: 'Users'},
  relatedTo:{type: mongoose.Schema.Types.ObjectId, ref: 'Tours'},
  title: String,
  description: String,
  rate: Number
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

const TourComment = mongoose.model('TourComment', tourCommentSchema);
module.exports = TourComment;
