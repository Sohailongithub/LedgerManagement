import React, { useState, useEffect } from 'react';
import axios from 'axios';

function LedgerDashboard() {
    const [ledgers, setLedgers] = useState([]);
    const [transactions, setTransactions] = useState([]);
    const [selectedLedger, setSelectedLedger] = useState(null);

    useEffect(() => {
        axios.get('/api/ledgers').then((response) => setLedgers(response.data));
    }, []);

    const fetchTransactions = (ledgerId) => {
        setSelectedLedger(ledgerId);
        axios.get(`/api/transactions/${ledgerId}`).then((response) => setTransactions(response.data));
    };

    return (
        <div>
            <h1>Ledger Dashboard</h1>
            <ul>
                {ledgers.map((ledger) => (
                    <li key={ledger._id} onClick={() => fetchTransactions(ledger._id)}>
                        {ledger.name}
                    </li>
                ))}
            </ul>
            {selectedLedger && (
                <div>
                    <h2>Transactions</h2>
                    <ul>
                        {transactions.map((transaction) => (
                            <li key={transaction._id}>
                                {transaction.date}: {transaction.type} - ${transaction.amount}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default LedgerDashboard;
