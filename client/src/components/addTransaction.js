import React, { useState } from 'react';
import axios from 'axios';

function AddTransaction() {
    const [ledgerId, setLedgerId] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');
    const [type, setType] = useState('');

    const addTransaction = () => {
        axios.post('/api/transactions', { ledgerId, amount, date, type }).then((response) => {
            alert('Transaction added!');
        });
    };

    return (
        <div>
            <h1>Add Transaction</h1>
            <input type="text" placeholder="Ledger ID" value={ledgerId} onChange={(e) => setLedgerId(e.target.value)} />
            <input type="number" placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
            <select value={type} onChange={(e) => setType(e.target.value)}>
                <option value="Given">Given</option>
                <option value="Taken">Taken</option>
            </select>
            <button onClick={addTransaction}>Add</button>
        </div>
    );
}

export default AddTransaction;
