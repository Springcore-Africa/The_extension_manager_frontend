import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ExtensionAgentAsidebar from "../components/ExtensionAgentAsidebar";

// Framer Motion variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const ExtensionAgentDashboard = () => {
  return (
    <div className="flex min-h-screen bg-green-50 overflow-hidden">
      {/* Sidebar */}
      <ExtensionAgentAsidebar />

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-8 bg-green-700 overflow-auto">
        <motion.div
          className="bg-amber-400 rounded-2xl border-2 border-white p-6 shadow-xl"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {/* Header */}
          <motion.div
            className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4"
            variants={item}
          >
            <h1 className="text-xl md:text-2xl font-extrabold text-black">
              Extension Agent Dashboard
            </h1>
            <div className="text-center md:text-left">
              <p className="text-gray-500 text-sm">Date Joined</p>
              <h2 className="text-base md:text-lg text-green-900 font-semibold">
                Friday, 5 July 2025
              </h2>
            </div>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link
                to="/farmer-dashboard"
                className="bg-gradient-to-r from-green-700 to-green-600 hover:from-green-600 hover:to-green-500 text-white py-2 px-4 rounded-lg font-semibold shadow-md transition duration-300"
              >
                View Farmers
              </Link>
            </motion.div>
          </motion.div>

          {/* Summary Cards */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8"
            variants={container}
          >
            {[
              { label: "Total Assigned Farmers", value: "15" },
              { label: "Total Visits Made", value: "42" },
              { label: "Open Issues Reported", value: "5" },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                variants={item}
                whileHover={{ scale: 1.03 }}
                className="bg-white rounded-xl shadow-lg p-5 border hover:border-green-300 transition"
              >
                <p className="text-gray-500 mb-1">{stat.label}</p>
                <h2 className="text-xl font-bold text-green-800">{stat.value}</h2>
              </motion.div>
            ))}
          </motion.div>

          {/* Middle Section: Assigned Farmers, Visit Stats, Chat */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
            variants={container}
          >
            {/* Assigned Farmers */}
            <motion.div
              className="bg-white rounded-xl shadow-lg p-6"
              variants={item}
            >
              <p className="text-green-700 font-semibold text-lg border-b border-green-200 pb-2 mb-4">
                Assigned Farmers
              </p>
              <ul className="list-disc list-inside text-green-900 space-y-2 text-sm leading-relaxed">
                <li>John Doe</li>
                <li>Mary Johnson</li>
                <li>Emeka Obi</li>
                <li>Bisi Adebayo</li>
              </ul>
            </motion.div>

            {/* Visit Stats */}
            <motion.div
              className="bg-white rounded-xl shadow-lg p-6"
              variants={item}
            >
              <p className="text-green-700 font-semibold text-lg text-center border-b border-green-200 pb-2 mb-4">
                Visit Statistics
              </p>
              <ul className="text-green-800 space-y-3 text-center text-sm">
                <li>
                  <span className="font-medium">Visits This Week:</span> 6
                </li>
                <li>
                  <span className="font-medium">Visits This Month:</span> 18
                </li>
                <li>
                  <span className="font-medium">Pending Visits:</span> 4
                </li>
              </ul>
            </motion.div>

            {/* Chat with Farmers */}
            <motion.div
              className="bg-white rounded-xl shadow-lg p-6 flex flex-col justify-between"
              variants={item}
            >
              <p className="text-green-700 font-semibold text-lg border-b border-green-200 pb-2 mb-4 text-center">
                Chat with Farmers
              </p>
              <div className="flex flex-col gap-3 text-sm h-full overflow-y-auto max-h-60">
                <div className="flex justify-between items-start bg-green-100 p-3 rounded-lg">
                  <div>
                    <p className="font-medium text-green-900">John Doe</p>
                    <p className="text-xs text-gray-600">"Need help with pesticide..."</p>
                  </div>
                  <span className="text-xs text-gray-400">2m ago</span>
                </div>

                <div className="flex justify-between items-start bg-green-50 p-3 rounded-lg">
                  <div>
                    <p className="font-medium text-green-900">Mary Johnson</p>
                    <p className="text-xs text-gray-600">"Crop is not growing well..."</p>
                  </div>
                  <span className="text-xs text-gray-400">10m ago</span>
                </div>

                <div className="flex justify-between items-start bg-green-100 p-3 rounded-lg">
                  <div>
                    <p className="font-medium text-green-900">Emeka Obi</p>
                    <p className="text-xs text-gray-600">"Scheduled a visit next week."</p>
                  </div>
                  <span className="text-xs text-gray-400">1h ago</span>
                </div>
              </div>
              <Link
                to="/messages"
                className="mt-4 bg-green-700 text-white py-2 px-4 rounded-md text-center font-semibold text-sm hover:bg-green-600 transition"
              >
                Open Chat
              </Link>
            </motion.div>
          </motion.div>

          {/* Reports Overview */}
          <motion.div
            className="bg-white rounded-xl shadow-lg p-6"
            variants={item}
          >
            <h2 className="text-xl font-bold text-green-800 text-center mb-6">
              FIELD REPORTS
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
              {[
                { month: "January", reports: 8 },
                { month: "February", reports: 5 },
                { month: "April", reports: 6 },
                { month: "May", reports: 4 },
                { month: "June", reports: 7 },
                { month: "July", reports: 3 },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  className="flex flex-col items-center"
                  whileHover={{ scale: 1.05 }}
                  variants={item}
                >
                  <div className="bg-green-500 w-10 md:w-12 h-20 md:h-24 rounded-lg shadow-inner" />
                  <p className="text-sm font-semibold mt-2 text-green-800">
                    {item.reports} Reports
                  </p>
                  <p className="text-xs text-gray-500">{item.month}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
};

export default ExtensionAgentDashboard;
