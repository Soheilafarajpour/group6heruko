import mongoose from 'mongoose'
import crypto from 'crypto'
const ArticleSchema = new mongoose.Schema({
  author: {
    type: String,
    required: 'Author is required'
  },
  title: {
    type: String,
    required: 'Title is required'
  },
  date: {
    type: String,
    required: 'Date is required'
  },
  annotation: {
    type: String,
    // required: 'Name is required'
  },
  journal: {
    type: String,
  },
  volume: {
    type: String,
  },
  number: {
    type: String,
  },
  pages: {
    type: String,
  },
  filelink: {
    data: Buffer,
    contentType: String
  },
  likes: [{type: mongoose.Schema.ObjectId, ref: 'User'}],
  comments: [{
    text: String,
    created: { type: Date, default: Date.now },
    postedBy: { type: mongoose.Schema.ObjectId, ref: 'User'}
  }],
  postedBy: {type: mongoose.Schema.ObjectId, ref: 'User'},
  created: {
    type: Date,
    default: Date.now
  }
})

export default mongoose.model('Article', ArticleSchema)
