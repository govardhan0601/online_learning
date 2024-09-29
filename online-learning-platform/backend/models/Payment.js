const connection = require('../db');

// Function to create a payment record
const createPayment = (paymentData, callback) => {
  const { user_id, course_id, amount } = paymentData;
  const query = `INSERT INTO payments (user_id, course_id, amount) VALUES (?, ?, ?)`;
  connection.query(query, [user_id, course_id, amount], (err, result) => {
    if (err) return callback(err);
    callback(null, result);
  });
};

module.exports = {
  createPayment
};
