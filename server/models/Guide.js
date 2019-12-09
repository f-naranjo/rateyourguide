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
    languages:[{
      type: String,
      enum: ["Spanish","English","French","German","Russian"]}]
  },
  tourSessions: [{type: mongoose.Schema.Types.ObjectId, ref: 'TourSessions'}],
  toursCreated: [{type: mongoose.Schema.Types.ObjectId, ref: 'Tours'}],
  comments: [{type: mongoose.Schema.Types.ObjectId, ref: 'Comments'}],
  rates: [],
  searchDisplays: Number,
  profileViews: Number,
  billing:[],
},{
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

const Guide = mongoose.model('Guide', guideSchema);
module.exports = Guide;
