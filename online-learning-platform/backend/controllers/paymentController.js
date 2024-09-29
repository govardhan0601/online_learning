const { createPayment } = require('../models/Payment');

// Function to handle payment
exports.processPayment = (req, res) => {
  const paymentData = req.body;

  createPayment(paymentData, (err, result) => {
    if (err) return res.status(500).json({ error: 'Error processing payment' });
    res.status(201).json({ message: 'Payment processed successfully!', paymentId: result.insertId });
  });
};
