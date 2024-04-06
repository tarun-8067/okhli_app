const express = require('express');
const router = express.Router();
const myAddressController = require('../controllers/myAddressController');

router.post('/myAddress', myAddressController.myAddress);

module.exports = router;