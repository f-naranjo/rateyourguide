const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const guideSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true, minlength: 2 },
  info:{
    name: String,
    description: String,
    img: { type: String, default: 'https://i.stack.imgur.com/l60Hf.png' },
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
  comments: [{type: mongoose.Schema.Types.ObjectId, ref: 'GuideComments'}],
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
