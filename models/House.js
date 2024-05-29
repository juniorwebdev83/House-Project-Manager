// models/House.js
const mongoose = require('mongoose');

const HouseSchema = new mongoose.Schema({
  address: { type: String, required: true },
  contactInfo: { type: String, required: true },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  progress: { type: String, default: 'Not Started' },
  photos: { type: [String], default: [] },
});

const House = mongoose.model('House', HouseSchema);
module.exports = House;
