import React, { useState } from 'react';
import ExpenseList from './Components/ExpeneseList';


const App = () => {
  const [totalBalance, setTotalBalance] = useState(10000);
  const [totalRemainingBalance, setTotalRemainingBalance] = useState(10000);
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('Food');
  const [expenses, setExpenses] = useState([]); // Array of expense objects

  const handleAddExpense = () => {
    // Create an expense object and push it to the expenses array
    const newExpense = { description, amount: parseFloat(amount), category };
    setExpenses([...expenses, newExpense]);

    // Optionally, update the total remaining balance after adding the expense
    setTotalRemainingBalance(totalRemainingBalance - newExpense.amount);

    // Reset input fields
    setDescription('');
    setAmount('');
    setCategory('Food');
  };

  return (
    <div className="max-w-[1300px] bg-slate-200 mx-auto text-center mt-5">
      {/* Total Balance and Remaining Balance */}
      <div className="grid gap-4 sm:grid-cols-2 grid-rows-2">
        <div>
          <h2 className="text-lg font-semibold text-red-500">🏦 Total Balance</h2>
          <p className="text-2xl font-bold mt-2 text-gray-900">₹{totalBalance}</p>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-red-500">💰 Remaining Balance</h2>
          <p className="text-2xl font-bold mt-2 text-gray-900">₹{totalRemainingBalance}</p>
        </div>
      </div>

      {/* Input Form */}
      <div className="grid gap-4 sm:grid-cols-2 grid-rows-2">
        <div className="mx-[10%]">
          <input
            type="text"
            className="p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter description (e.g., Grocery, Rent, Salary)"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="mx-[10%]">
          <input
            type="number"
            className="p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter amount (e.g., 500, -200)"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
      </div>

      {/* Dropdown and Submit */}
      <div className="grid gap-4 sm:grid-cols-2 grid-rows-2">
        <div className="mx-[10%]">
          <select
            className="p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="Food">Food</option>
            <option value="Travel">Travel</option>
            <option value="Shopping">Shopping</option>
            <option value="Rent">Rent</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="mx-auto">
          <button
            type="button"
            className="w-full p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={handleAddExpense} // Add expense on button click
          >
            Add Expense
          </button>
        </div>
      </div>

      {/* Expense List */}
      <ExpenseList expenses={expenses} setExpenses={setExpenses} />
    </div>
  );
};

export default App;
