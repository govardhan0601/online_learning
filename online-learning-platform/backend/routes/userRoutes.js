const express = require('express');
const router = express.Router();
const { registerUser } = require('../controllers/userController');

// Route for user registration
router.post('/register', registerUser);

module.exports = router;
