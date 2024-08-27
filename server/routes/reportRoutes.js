const express = require('express');
const pdf = require('html-pdf');
const Transaction = require('../models/transaction');
const router = express.Router();

// Generate PDF Report
router.get('/pdf/:ledgerId', async (req, res) => {
    try {
        const { ledgerId } = req.params;
        const { startDate, endDate } = req.query;
        const transactions = await Transaction.find({
            ledger: ledgerId,
            date: { $gte: new Date(startDate), $lte: new Date(endDate) },
        });

        // Simple PDF generation (This would be HTML-based)
        const html = `<h1>Transactions Report</h1>
                      <ul>${transactions.map(t => `<li>${t.date}: ${t.type} - $${t.amount}</li>`).join('')}</ul>`;

        pdf.create(html).toStream((err, stream) => {
            if (err) return res.status(500).json({ error: err.message });
            res.setHeader('Content-type', 'application/pdf');
            stream.pipe(res);
        });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;
