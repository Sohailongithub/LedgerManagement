const express = require('express');
const Ledger = require('../models/ledger');
const router = express.Router();

// Create Ledger
router.post('/', async (req, res) => {
    console.log('POST /api/ledgers called');  
    console.log('Request Body:', req.body); 
    try {
        const ledger = new Ledger({ name: req.body.name });
        await ledger.save();
        res.status(201).json(ledger);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;
