// routes/projects.js
const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Project = require('../models/Project');

// @route   POST api/projects
// @desc    Create a new project
// @access  Private
router.post('/', auth, async (req, res) => {
  const { house, startDate, endDate, budget } = req.body;

  try {
    const newProject = new Project({
      house,
      startDate,
      endDate,
      budget
    });

    const project = await newProject.save();
    res.json(project);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   GET api/projects
// @desc    Get all projects for a house
// @access  Private
router.get('/:houseId', auth, async (req, res) => {
  try {
    const projects = await Project.find({ house: req.params.houseId });
    res.json(projects);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
