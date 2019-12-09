const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const guideSchema = new Schema({
  info:{
    name: String,
    description: String,
    img: String,
    email: String,
    phone: Number,
    certification: String,
    city: String,
    languages:{
      type: String,
      enum: ["Spanish","English","French","German","Russian"]}
  },
  tourSessions: [{type: mongoose.Schema.Types.ObjectId, ref: 'TourSessions'}],
  toursCreated: [{type: mongoose.Schema.Types.ObjectId, ref: 'Tours'}],
  comments: [{type: mongoose.Schema.Types.ObjectId, ref: 'Comments'}],
  rates: [],
  searchDisplays: Number,
  profileViews: Number,
  billing:[],
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Guide = mongoose.model('Guide', guideSchema);
module.exports = Guide;
