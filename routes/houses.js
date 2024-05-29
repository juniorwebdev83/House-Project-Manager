// routes/houses.js
const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const House = require('../models/House');

// Register a new house
router.post('/', auth, async (req, res) => {
  const { address, contactInfo } = req.body;
  try {
    const newHouse = new House({
      address,
      contactInfo,
      owner: req.user.id,
    });
    const house = await newHouse.save();
    res.json(house);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

// Get all houses for the logged-in user
router.get('/', auth, async (req, res) => {
  try {
    const houses = await House.find({ owner: req.user.id });
    res.json(houses);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

module.exports = router;
