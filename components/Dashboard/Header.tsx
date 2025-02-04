import React from 'react'

function Header() {
  return (
    <header className="bg-violet-600 shadow-lg p-6">
        <div className="max-w-4xl mx-auto flex justify-between place-items-center">
            <div>
                <h2 className="text-2xl font-bold text-white">Expense Tracker Dashboard</h2>
                <p className="text-violet-100 mt-1">Manage your expenses and track your spending</p>
            </div>
            <button className="bg-white text-violet-600 px-4 py-2 rounded-lg font-medium hover:bg-violet-50 transition-colors duration-200 flex items-center gap-4">
                <span>Sign Out</span>
            </button>
        </div>
    </header>
  )
}

export default Header;