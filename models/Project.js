// models/Project.js
const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  house: { type: mongoose.Schema.Types.ObjectId, ref: 'House', required: true },
  startDate: { type: Date },
  endDate: { type: Date },
  budget: { type: Number },
  status: { type: String, default: 'Pending' },
  notes: { type: String },
});

const Project = mongoose.model('Project', ProjectSchema);
module.exports = Project;
