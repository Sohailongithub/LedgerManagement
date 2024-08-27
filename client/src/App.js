import React from "react";
import { Routes, Route } from 'react-router-dom';
import LedgerDashboard from "../src/components/ledgerDashboard";
import CreateLedger from "../src/components/createLedger";
import AddTransaction from "../src/components/addTransaction";

function App() {
  return (
    <Routes>
      <Route path="/" exact component={LedgerDashboard} />
      <Route path="/create-ledger" component={CreateLedger} />
      <Route path="/add-transaction" component={AddTransaction} />
    </Routes>
  );
}

export default App;
