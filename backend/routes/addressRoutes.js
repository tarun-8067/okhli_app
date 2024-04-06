const express = require('express');
const router = express.Router();
const addressController = require('../controllers/addressController');

router.post('/address', addressController.address);

module.exports = router;