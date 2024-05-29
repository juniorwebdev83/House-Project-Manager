// models/Project.js
const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  house: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'House',
    required: true
  },
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date,
    required: true
  },
  budget: {
    type: Number,
    required: true
  },
  updates: [
    {
      date: {
        type: Date,
        default: Date.now
      },
      content: {
        type: String,
        required: true
      },
      photos: [String]
    }
  ],
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Project', ProjectSchema);
