/* eslint-disable react/prop-types */

import { useState } from "react";


const CustomerTable = ({ data, setSelectedCustomer }) => {
    const [nameFilter, setNameFilter] = useState("");
    const [amountFilter, setAmountFilter] = useState("");

    const filteredCustomers = data.customers.filter((customer) =>
      customer.name.toLowerCase().includes(nameFilter.toLowerCase())
    );

    const filteredTransactions = data.transactions.filter((transaction) =>
      amountFilter ? transaction.amount >= amountFilter : true
    );
  return (
    <>
      <input
        type="text"
        placeholder="Filter by customer name"
        value={nameFilter}
        onChange={(e) => setNameFilter(e.target.value)}
      />
      <input
        type="number"
        placeholder="Filter by transaction amount"
        value={amountFilter}
        onChange={(e) => setAmountFilter(e.target.value)}
      />
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Transactions</th>
            </tr>
          </thead>
          <tbody>
            {filteredCustomers.map((customer) => (
              <tr
                className="hover"
                key={customer.id}
                onClick={() => setSelectedCustomer(customer.id)}
              >
                <td>{customer.name}</td>
                <td>
                  {filteredTransactions
                    .filter(
                      (transaction) => transaction.customer_id === customer.id
                    )
                    .map((transaction) => (
                      <td key={transaction.id}>
                        {transaction.date}: ${transaction.amount}
                      </td>
                    ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default CustomerTable