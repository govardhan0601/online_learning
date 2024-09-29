const express = require('express');
const router = express.Router();
const { processPayment } = require('../controllers/paymentController');

// Route for processing payment
router.post('/process', processPayment);

module.exports = router;
