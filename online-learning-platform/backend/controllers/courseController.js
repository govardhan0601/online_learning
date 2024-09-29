const { createCourse } = require('../models/Course');

// Course creation function
exports.addCourse = (req, res) => {
  const { title, description } = req.body;
  const thumbnail = req.files['thumbnail'][0].path;
  const video_url = req.files['video'][0].path;

  const courseData = { title, description, thumbnail, video_url };

  createCourse(courseData, (err, result) => {
    if (err) return res.status(500).json({ error: 'Error adding course' });
    res.status(201).json({ message: 'Course added successfully!', courseId: result.insertId });
  });
};
