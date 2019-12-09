const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password: String,
  name: String,
  surname: String,
  phone: Number,
  email: String,
  tourSessions: [{type: mongoose.Schema.Types.ObjectId, ref: 'TourSessions'}],
  comments: [{type: mongoose.Schema.Types.ObjectId, ref: 'Comments'}]
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const User = mongoose.model('User', userSchema);
module.exports = User;
