const app = require('./config');
const connection = require('./db');
const courseRoutes = require('./routes/courseRoutes');
const userRoutes = require('./routes/userRoutes');
const paymentRoutes = require('./routes/paymentRoutes');
const path = require('path');

// Serve static files
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes
app.use('/api/courses', courseRoutes);
app.use('/api/users', userRoutes);
app.use('/api/payments', paymentRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
