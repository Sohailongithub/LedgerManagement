const express = require('express');
const Transaction = require('../models/transaction');
const router = express.Router();

// Add Transaction
router.post('/', async (req, res) => {
    try {
        const transaction = new Transaction(req.body);
        await transaction.save();
        res.status(201).json(transaction);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Get Transactions by Ledger ID and Date Range
router.get('/:ledgerId', async (req, res) => {
    try {
        const { ledgerId } = req.params;
        const { startDate, endDate } = req.query;
        const transactions = await Transaction.find({
            ledger: ledgerId,
            date: { $gte: new Date(startDate), $lte: new Date(endDate) },
        });
        res.status(200).json(transactions);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;
