import React, { useState } from 'react';
import axios from 'axios';

function CreateLedger() {
    const [name, setName] = useState('');

    const createLedger = () => {
        axios.post('/api/ledgers', { name }).then((response) => {
            alert('Ledger created!');
        });
    };

    return (
        <div>
            <h1>Create Ledger</h1>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <button onClick={createLedger}>Create</button>
        </div>
    );
}

export default CreateLedger;
