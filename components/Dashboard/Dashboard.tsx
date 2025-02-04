"use client";
import React from "react";
import { DollarSign, CirclePlus, HandCoins } from "lucide-react";

function Dashboard() {
  const [balance, setBalance] = React.useState(0);

  return (
    <div className="max-w-6xl mx-4 p-6">
      <section className="flex justify-center">
        <div className="p-6 rounded-lg bg-amber-300 shadow-md mx-auto lg:mr-0 w-full max-w-5xl">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-xl font-semibold text-gray-700">
              Total Balance
            </h2>
            <button className="flex items-center justify-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
              <CirclePlus className="h-5 w-5" />
              ADD EXPENSE
            </button>
          </div>
          <div className="flex items-center m-0">
            <DollarSign className="h-6 w-6 text-green-600 mr-1" />
            <p className="text-3xl font-bold text-gray-900">
              {balance.toLocaleString()}
            </p>
          </div>
        </div>
      </section>

      <section className="my-5">
        <div className="p-6 rounded-lg bg-sky-300 shadow-md mx-auto lg:mr-0 w-full max-w-5xl">
          <div className="flex items-center gap-2 mb-4">
            <HandCoins className="h-6 w-6 text-blue-600" />
            <h2 className="text-xl font-semibold text-gray-700">Expenses</h2>
          </div>
          <div className="bg-white rounded-lg overflow-hidden">
            <ul className="flex flex-col sm:flex-row justify-between gap-4 sm:gap-36 rounded-md p-4 bg-gray-50 border-b border-gray-200">
            <li className="font-semibold text-gray-700 flex-1">Title</li>
              <li className="font-semibold text-gray-700 flex-1">Date</li>
              <li className="font-semibold text-gray-700 flex-1">Amount</li>
              <li className="font-semibold text-gray-700 flex-1">
                Description
              </li>
              <li className="font-semibold text-gray-700 flex-1">Category</li>
            </ul>
            <ul className="flex flex-col sm:flex-row justify-between gap-4 sm:gap-36 rounded-md p-4 bg-white border-b border-gray-200">
            <li className="flex-1">food</li>
              <li className="flex-1">2021-09-01</li>
              <li className="flex-1">$100</li>
              <li className="flex-1">Lunch</li>
              <li className="flex-1">Food</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
