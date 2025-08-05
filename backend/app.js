const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const User = require('./models/User');
const bcrypt = require('bcryptjs');

// Load environment variables
dotenv.config();

const app = express();
app.use(express.json());

// Import routes
const apiRoutes = require('./routes/api');

// Function to set up initial admin user
const createAdminUser = async () => {
  const adminUser = await User.findOne({ username: 'admin' });
  if (!adminUser) {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash('admin123', salt);
    await User.create({
      username: 'admin',
      password: hashedPassword,
      role: 'Admin',
      isActive: true,
    });
    console.log('Default admin user created.');
  }
};

// Use the central API router for all routes starting with /api
app.use('/api', apiRoutes);

// General error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

const PORT = process.env.PORT || 5000;

// Correct way to start the server and perform initial DB operations
const startServer = async () => {
  try {
    // Await the database connection before anything else
    await connectDB();
    
    // Now that the DB is connected, we can safely create the admin user
    await createAdminUser();
    
    app.listen(PORT, () => {
      console.log(`Server running on port http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
};

startServer();