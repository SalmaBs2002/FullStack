const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');
require('dotenv').config();
const cors = require('cors');
const sequelize = require('./models/db');

// Middleware
app.use(cors());
app.use(express.json()); // Ensure this comes before your routes

// Logging Middleware
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// Routes
app.use('/api', userRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Database Sync
sequelize.sync({ alter: true })
  .then(() => console.log('Database synchronized'))
  .catch((err) => console.error('Error syncing database:', err));