const express = require('express');
const router = express.Router();
const multer = require('multer');
const { addCourse } = require('../controllers/courseController');

// Multer configuration for file upload
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage: storage });

// Route for adding a new course
router.post('/add', upload.fields([{ name: 'thumbnail', maxCount: 1 }, { name: 'video', maxCount: 1 }]), addCourse);

module.exports = router;
