import React, { useState } from 'react';

function ExpenseList() {
  const [expenses, setExpenses] = useState([
    { description: 'Bought Vegetables', amount: 200, category: 'Food' },
    { description: 'Monthly Rent', amount: -1500, category: 'Rent' },
  ]);

  const handleDelete = (index) => {
    const updatedExpenses = expenses.filter((_, i) => i !== index);
    setExpenses(updatedExpenses);
  };

  return (
    <div className="max-w-4xl mx-auto p-4 mt-8">
      {/* Expense Table */}
      <table className="min-w-full table-auto border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="px-4 py-2 text-left border-b">Description</th>
            <th className="px-4 py-2 text-left border-b">Amount</th>
            <th className="px-4 py-2 text-left border-b">Category</th>
            <th className="px-4 py-2 text-left border-b">Action</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense, index) => (
            <tr key={index} className="hover:bg-gray-100">
              <td className="px-4 py-2 border-b">{expense.description}</td>
              <td className="px-4 py-2 border-b">{expense.amount > 0 ? `₹${expense.amount}` : `-₹${Math.abs(expense.amount)}`}</td>
              <td className="px-4 py-2 border-b">{expense.category}</td>
              <td className="px-4 py-2 border-b">
                <button
                  onClick={() => handleDelete(index)}
                  className="text-red-500 hover:text-red-700"
                >
                  ❌
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ExpenseList;
