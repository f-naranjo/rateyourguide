const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password: String,
  name: String,
  surname: String,
  phone: Number,
  email: String,
  tourSessions: [{type: mongoose.Schema.Types.ObjectId, ref: 'TourSession'}],
  comments: [{type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}]
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

const User = mongoose.model('User', userSchema);
module.exports = User;
