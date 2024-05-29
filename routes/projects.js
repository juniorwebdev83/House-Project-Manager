// routes/projects.js
const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Project = require('../models/Project');

// Add a new project
router.post('/', auth, async (req, res) => {
  const { house, startDate, endDate, budget, status, notes } = req.body;
  try {
    const newProject = new Project({
      house,
      startDate,
      endDate,
      budget,
      status,
      notes,
    });
    const project = await newProject.save();
    res.json(project);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

// Get all projects
router.get('/', auth, async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

module.exports = router;
