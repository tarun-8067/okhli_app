const express = require('express');
const router = express.Router();
const fetchProfileController = require('../controllers/fetchProfileController');

router.post('/fetchProfile', fetchProfileController.fetch);

module.exports = router;