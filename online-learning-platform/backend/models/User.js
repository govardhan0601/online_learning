const connection = require('../db');

// Function to create a user in the database
const createUser = (userData, callback) => {
  const { username, email, password } = userData;
  const query = `INSERT INTO users (username, email, password) VALUES (?, ?, ?)`;
  connection.query(query, [username, email, password], (err, result) => {
    if (err) return callback(err);
    callback(null, result);
  });
};

module.exports = {
  createUser
};
