import React from 'react';
import './App.css';
import History from './History';
import { TransactionProvider } from './transContext';
function App() {
  return (
    <div className="cont">
      <br/>
      <TransactionProvider>
        <History/>
      </TransactionProvider>
    </div>
  );
}

export default App;
