const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const guideCommentSchema = new Schema({
  author: [{type: mongoose.Schema.Types.ObjectId, ref: 'Users'}],
  relatedTo:[{type: mongoose.Schema.Types.ObjectId, ref: 'Guides'}],
  title: String,
  description: String,
  rate: Number
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const GuideComment = mongoose.model('GuideComment', guideCommentSchema);
module.exports = GuideComment;
