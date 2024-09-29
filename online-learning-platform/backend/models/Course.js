const connection = require('../db');

// Function to create a course in the database
const createCourse = (courseData, callback) => {
  const { title, description, thumbnail, video_url } = courseData;
  const query = `INSERT INTO courses (title, description, thumbnail, video_url) VALUES (?, ?, ?, ?)`;
  connection.query(query, [title, description, thumbnail, video_url], (err, result) => {
    if (err) return callback(err);
    callback(null, result);
  });
};

module.exports = {
  createCourse
};
