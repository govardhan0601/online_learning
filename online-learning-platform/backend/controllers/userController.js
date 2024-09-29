const { createUser } = require('../models/User');

exports.registerUser = (req, res) => {
  const userData = req.body;

  createUser(userData, (err, result) => {
    if (err) return res.status(500).json({ error: 'Error registering user' });
    res.status(201).json({ message: 'User registered successfully!', userId: result.insertId });
  });
};
