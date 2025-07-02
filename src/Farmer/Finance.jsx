import React from 'react';
import DashboardAsideBar from "../components/DashboardAsideBar";

const Finance = () => {
  return (
    <div className="flex min-h-screen h-screen overflow-hidden bg-green-50">
      {/* Sidebar Component */}
      <DashboardAsideBar />

      {/* Main Content */}
      <main className="flex-1 md:p-12 bg-green-700 border-green-700 overflow-y-auto ">
        <div className="bg-green-50 rounded-2xl border-2 min-h-screen border-white mx-0 px-6 py-16 sm:py-10  flex flex-col items-center justify-center gap-8">
          {/* Finance Overview Card */}
          <div className="bg-white shadow-lg p-6 rounded-lg w-full max-w-3xl ">
            <h2 className="text-xl font-bold text-green-800 mb-4 text-center">
              Finance Overview
            </h2>
            <div className="space-y-4 ">
              <div className="flex items-center justify-between">
                <span className="text-gray-600 font-medium">Total Income:</span>
                <span className="text-green-900 font-bold">$10,000</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600 font-medium">Total Expenses:</span>
                <span className="text-red-600 font-bold">$5,000</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600 font-medium">Net Profit:</span>
                <span className="text-green-900 font-bold">$5,000</span>
              </div>
            </div>
          </div>

          {/* Financial Transactions Table */}
          <div className="bg-white shadow-lg p-6 rounded-lg w-full max-w-3xl">
            <h2 className="text-xl font-bold text-green-800 mb-4 text-center">
              Recent Transactions
            </h2>
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">01/01/2023</td>
                  <td className="px-6 py-4 whitespace-nowrap">Sale of crops</td>
                  <td className="px-6 py-4 whitespace-nowrap text-green-900 font-bold">$2,000</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">01/05/2023</td>
                  <td className="px-6 py-4 whitespace-nowrap">Purchase of seeds</td>
                  <td className="px-6 py-4 whitespace-nowrap text-red-600 font-bold">-$500</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">01/10/2023</td>
                  <td className="px-6 py-4 whitespace-nowrap">Fertilizer purchase</td>
                  <td className="px-6 py-4 whitespace-nowrap text-red-600 font-bold">-$300</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Finance;
