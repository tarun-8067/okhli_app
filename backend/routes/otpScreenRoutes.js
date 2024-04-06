const express = require('express');
const router = express.Router();
const otpScreenController = require('../controllers/otpScreenController');

router.post('/otpScreen', otpScreenController.verify);

module.exports = router;