const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// Import routes
const ledgerRoutes = require('../server/routes/ledgerRoutes');
const transactionRoutes = require('../server/routes/transactionRoutes');
const reportRoutes = require('../server/routes/reportRoutes');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://batch6:herovired@cluster0.aqifkg2.mongodb.net/ledgerDB');

// API Routes
app.use('/api/ledgers', ledgerRoutes);
app.use('/api/transactions', transactionRoutes);
app.use('/api/reports', reportRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
