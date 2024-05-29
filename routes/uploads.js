// routes/uploads.js
const express = require('express');
const router = express.Router();
const multer = require('multer');
const auth = require('../middleware/auth');
const House = require('../models/House');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({ storage: storage });

router.post('/:houseId', [auth, upload.single('photo')], async (req, res) => {
  try {
    const house = await House.findById(req.params.houseId);
    if (!house) {
      return res.status(404).json({ msg: 'House not found' });
    }
    house.photos = house.photos || [];
    house.photos.push(req.file.path);
    await house.save();
    res.json(house);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

module.exports = router;
