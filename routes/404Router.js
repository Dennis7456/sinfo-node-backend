const express = require('express');

const not_found_Controller = require('../controllers/404Controller');

const router = express.Router();

router.all('*', not_found_Controller.index);

module.exports = router;