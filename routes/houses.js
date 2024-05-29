// routes/houses.js
const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const House = require('../models/House');

// @route   POST api/houses
// @desc    Register a new house
// @access  Private
router.post('/', auth, async (req, res) => {
  const { address, contactInfo } = req.body;

  try {
    const newHouse = new House({
      owner: req.user.id,
      address,
      contactInfo
    });

    const house = await newHouse.save();
    res.json(house);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   GET api/houses
// @desc    Get all houses for logged in user
// @access  Private
router.get('/', auth, async (req, res) => {
  try {
    const houses = await House.find({ owner: req.user.id });
    res.json(houses);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
