import React, { useState, useEffect } from 'react';
import { api } from '../services/api';

function TransactionList() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    api.get('/transactions')
      .then(res => setTransactions(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>Transactions</h1>
      <ul>
        {transactions.map(transaction => (
          <li key={transaction._id}>
            {transaction.productId.name} - {transaction.quantity} - {transaction.type}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TransactionList;