import React from "react";
import ExpenseList from "./Components/ExpeneseList";

const App = () => {
  return (
    <div className="max-w-[1300px] bg-slate-200 mx-auto text-center mt-5">
      {/* /////////////////////////////////////////     total baalnce // remaing balance                            ///////////////////////////////////////////// */}
      <div className="grid  gap-4  sm:grid-cols-2  grid-rows-2">
        <div>
          <h2 className="text-lg font-semibold">🏦 Total Balance</h2>
          <p className="text-2xl font-bold mt-2">₹5000</p>{" "}
        </div>
        <div>
        
          <h2 className="text-lg font-semibold">💰 Remaining Balance</h2>
          <p className="text-2xl font-bold mt-2">₹2000</p>{" "}
        </div>
      </div>
      {/* ///////////////////////////////////////////////////////////////////////// */}



      {/*////////////////////////////////////////////   here input filed  start  /////////////////////////////////////////*/}
      <div className="grid  gap-4  sm:grid-cols-2  grid-rows-2">
        <div className="mx-[10%]">
          <input
            type="text"
            className="p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter description (e.g., Grocery, Rent, Salary)"
          />
        </div>

        <div className="mx-[10%]">
          {" "}
          <input
            type="number"
            className="p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter amount (e.g., 500, -200)"
          />
        </div>
      </div>
         
         
         {/* ////////////////////////drop down     and    sumbit   */}
         <div className="grid  gap-4  sm:grid-cols-2  grid-rows-2">
        <div className="mx-[10%]">
        <select
  className="p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500">
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
  className="w-full p-3  bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
// assuming you have handleSubmit defined
>
  Add Expense
</button>
        </div>

      </div>

<ExpenseList/>







    </div>
  );
};

export default App;
