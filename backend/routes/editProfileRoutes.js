const express = require('express');
const router = express.Router();
const editProfileController = require('../controllers/editProfileController');

router.post('/editProfile', editProfileController.edit);

module.exports = router;