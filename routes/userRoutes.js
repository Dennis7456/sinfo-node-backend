const express = require('express');

const usersController = require('../controllers/usersController');

const router = express.Router();

router.get('/users', usersController.users_index);
router.get('/users/:id', usersController.user_details);

module.exports = router;