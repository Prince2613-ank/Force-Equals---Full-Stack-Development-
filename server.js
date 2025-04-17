// server.js
const express = require('express');
const app = express();
const authRoutes = require('./routes/authRoutes');
const accountRoutes = require('./routes/accountRoutes');

require('dotenv').config();
app.use(express.json());
app.use(authRoutes);       // Authentication routes
app.use(accountRoutes);    // Account routes

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

