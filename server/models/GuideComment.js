const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const guideCommentSchema = new Schema({
  author: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  relatedTo:{type: mongoose.Schema.Types.ObjectId, ref: 'Guide'},
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

const GuideComment = mongoose.model('GuideComment', guideCommentSchema);
module.exports = GuideComment;
