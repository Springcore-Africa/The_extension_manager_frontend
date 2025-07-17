import React from "react";
import { motion } from "framer-motion";
import ExtensionAgentAsidebar from "../components/ExtensionAgentAsidebar";

const financialStats = [
  {
    id: 1,
    title: "Total Revenue",
    amount: "$48,325",
    change: "+12.5%",
    trend: "up",
    period: "last month",
  },
  {
    id: 2,
    title: "Expenses",
    amount: "$23,460",
    change: "-5.2%",
    trend: "down",
    period: "last month",
  },
  {
    id: 3,
    title: "Net Profit",
    amount: "$24,865",
    change: "+24.8%",
    trend: "up",
    period: "last month",
  },
];

const recentTransactions = [
  {
    id: 1,
    description: "Farm Equipment Purchase",
    amount: "$4,500",
    type: "expense",
    date: "May 15, 2023",
    status: "completed",
  },
  {
    id: 2,
    description: "Crop Sales Revenue",
    amount: "$12,800",
    type: "income",
    date: "May 12, 2023",
    status: "completed",
  },
  {
    id: 3,
    description: "Loan Payment",
    amount: "$2,300",
    type: "expense",
    date: "May 5, 2023",
    status: "completed",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const chartItem = {
  hidden: { opacity: 0, scaleY: 0, transformOrigin: "bottom" },
  show: { opacity: 1, scaleY: 1, transition: { duration: 0.8 } },
};

const Efinance = () => {
  return (
    <div className="flex min-h-screen bg-green-50">
      {/* Added Aside Bar from Efarms */}
      <ExtensionAgentAsidebar />
      
      {/* Main Content */}
      <main className="flex-1 p-6 h-screen md:p-10 bg-green-700 overflow-auto">
        <motion.div
          className="bg-green-50 p-6 rounded-2xl border-2 border-white shadow-lg"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {/* Header */}
          <motion.div
            className="flex justify-between items-center mb-8"
            variants={item}
          >
            <h1 className="text-2xl font-bold text-green-800">
              Financial Dashboard
            </h1>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">
                Last Updated: Today, 10:45 AM
              </span>
              <button className="text-sm text-green-700 bg-green-100 hover:bg-green-200 px-4 py-2 rounded-md font-medium transition">
                Refresh Data
              </button>
            </div>
          </motion.div>

          {/* Stats Cards - Green Theme */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10"
            variants={container}
          >
            {financialStats.map((stat) => (
              <motion.div
                key={stat.id}
                className={`bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition ${
                  stat.trend === "up" ? "border-t-4 border-green-500" : "border-t-4 border-red-500"
                }`}
                variants={item}
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-sm font-medium text-gray-600 mb-1">
                  {stat.title}
                </h3>
                <div className="flex items-baseline mb-1">
                  <p className="text-2xl font-bold text-green-800 mr-2">
                    {stat.amount}
                  </p>
                  <span
                    className={`text-sm font-medium ${
                      stat.trend === "up" ? "text-green-500" : "text-red-500"
                    }`}
                  >
                    {stat.change}
                  </span>
                </div>
                <p className="text-xs text-gray-500">
                  Compared to {stat.period}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Charts Section */}
          <motion.div className="mb-10" variants={item}>
            <h2 className="text-xl font-bold text-green-800 mb-4">Revenue Trend</h2>
            <div className="bg-white rounded-xl shadow-md p-6">
              {/* Placeholder for chart */}
              <div className="flex items-end h-64 gap-1">
                {[10, 25, 40, 30, 55, 45, 70].map((value, index) => (
                  <motion.div
                    key={index}
                    className="bg-green-400 w-8 rounded-t-sm"
                    style={{ height: `${value}%` }}
                    variants={chartItem}
                    initial="hidden"
                    animate="show"
                  />
                ))}
                <div>
                    <p className="text-xs text-gray-500 mt-2">INDUSTRY TRENDS</p>
                    <h3 className="text-lg font-semibold text-green-800">Agriculture</h3>
                    <p className="text-sm text-gray-600">Growing demand for organic produce</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Recent Transactions */}
          <motion.div variants={item}>
            <h2 className="text-xl font-bold text-green-800 mb-4">Recent Transactions</h2>
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Description
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Amount
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                  </tr>
                </thead>
                <motion.tbody 
                  className="bg-white divide-y divide-gray-200"
                  variants={container}
                >
                  {recentTransactions.map((transaction) => (
                    <motion.tr
                      key={transaction.id}
                      className="hover:bg-green-50 transition"
                      variants={item}
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {transaction.description}
                      </td>
                      <td
                        className={`px-6 py-4 whitespace-nowrap text-sm font-bold ${
                          transaction.type === "income"
                            ? "text-green-600"
                            : "text-red-600"
                        }`}
                      >
                        {transaction.amount}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {transaction.date}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          {transaction.status}
                        </span>
                      </td>
                    </motion.tr>
                  ))}
                </motion.tbody>
              </table>
            </div>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
};

export default Efinance;
