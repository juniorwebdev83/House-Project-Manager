// models/House.js
const mongoose = require('mongoose');

const HouseSchema = new mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  address: {
    type: String,
    required: true
  },
  contactInfo: {
    type: String,
    required: true
  },
  progress: {
    type: String,
    default: 'Not started'
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('House', HouseSchema);
