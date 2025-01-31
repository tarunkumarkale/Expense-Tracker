import React from 'react';

const ExpenseList = ({ expenses, setExpenses }) => {
  const handleDelete = (index) => {
    const updatedExpenses = expenses.filter((_, i) => i !== index);
    setExpenses(updatedExpenses); // Remove the expense from the list
  };

  return (
    <div className="max-w-4xl mx-auto p-4 mt-8">
      {/* Responsive Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left border-b text-[10px] sm:text-sm">Description</th>
              <th className="px-4 py-2 text-left border-b text-[10px] sm:text-sm">Amount</th>
              <th className="px-4 py-2 text-left border-b text-[10px] sm:text-sm">Category</th>
              <th className="px-4 py-2 text-left border-b text-[10px] sm:text-sm">Action</th>
            </tr>
          </thead>
          <tbody>
            {expenses.length > 0 ? (
              expenses.map((expense, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="px-4 py-2 border-b text-[10px] sm:text-sm">{expense.description}</td>
                  <td className="px-4 py-2 border-b text-[10px] sm:text-sm">
                    {expense.amount > 0 ? `₹${expense.amount}` : `-₹${Math.abs(expense.amount)}`}
                  </td>
                  <td className="px-4 py-2 border-b text-[10px] sm:text-sm">{expense.category}</td>
                  <td className="px-4 py-2 border-b text-[10px] sm:text-sm">
                    <button
                      onClick={() => handleDelete(index)} // Delete button functionality
                      className="text-red-500 hover:text-red-700"
                    >
                      ❌
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center py-4 text-gray-500">
                  No expenses added yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ExpenseList;
