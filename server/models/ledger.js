const mongoose = require('mongoose');
const LedgerSchema = new mongoose.Schema({
    name: { type: String, required: true },
});

module.exports = mongoose.model('Ledger', LedgerSchema);
