import React from "react";
import { motion } from "framer-motion";
import ExtensionAgentAsidebar from "../components/ExtensionAgentAsidebar";

const businesses = [
  {
    id: 1,
    name: "Green Valley Agro",
    type: "Organic Produce",
    location: "Kaduna",
    revenue: "$125,000",
    growth: "+18%",
    status: "active"
  },
  {
    id: 2,
    name: "Sunrise Poultry",
    type: "Poultry Farm",
    location: "Enugu",
    revenue: "$89,500",
    growth: "+12%",
    status: "active"
  },
  {
    id: 3,
    name: "Riverbend Fisheries",
    type: "Aquaculture",
    location: "Lagos",
    revenue: "$64,200",
    growth: "+5%",
    status: "expanding"
  },
  {
    id: 4,
    name: "Golden Grains Mill",
    type: "Processing",
    location: "Kano",
    revenue: "$210,000",
    growth: "+22%",
    status: "active"
  }
];

const stats = [
  {
    id: 1,
    title: "Total Businesses",
    value: "48",
    change: "+8%",
    trend: "up"
  },
  {
    id: 2,
    title: "Avg. Revenue",
    value: "$98,500",
    change: "+15%",
    trend: "up"
  },
  {
    id: 3,
    title: "New Investments",
    value: "$1.2M",
    change: "+32%",
    trend: "up"
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const EagriBussiness = () => {
  return (
    <div className="flex min-h-screen bg-green-50">
      <ExtensionAgentAsidebar />
      
      <main className="flex-1 p-6 h-screen md:p-10 bg-green-700 overflow-auto">
        <motion.div
          className="bg-green-50 p-6 rounded-2xl border-2 border-white shadow-lg"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {/* Header */}
          <motion.div className="flex justify-between items-center mb-8" variants={item}>
            <div>
              <h1 className="text-2xl font-bold text-green-800">Agri-Business Dashboard</h1>
              <p className="text-sm text-gray-600">Manage and track agricultural businesses</p>
            </div>
            <button className="text-sm text-white bg-green-700 hover:bg-green-600 px-4 py-2 rounded-md font-medium transition">
              Add New Business
            </button>
          </motion.div>

          {/* Stats Cards */}
          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10" variants={container}>
            {stats.map((stat) => (
              <motion.div
                key={stat.id}
                className="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition"
                variants={item}
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-sm font-medium text-gray-600 mb-1">{stat.title}</h3>
                <div className="flex items-baseline">
                  <p className="text-2xl font-bold text-green-800 mr-2">{stat.value}</p>
                  <span className={`text-sm ${stat.trend === "up" ? "text-green-500" : "text-red-500"}`}>
                    {stat.change}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Business List */}
          <motion.div variants={item}>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-green-800">Registered Businesses</h2>
              <div className="flex space-x-2">
                <button className="text-sm text-green-700 bg-green-100 px-3 py-1 rounded-md">All</button>
                <button className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-md">Active</button>
                <button className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-md">Expanding</button>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Business Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Revenue</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                  </tr>
                </thead>
                <motion.tbody className="bg-white divide-y divide-gray-200" variants={container}>
                  {businesses.map((business) => (
                    <motion.tr 
                      key={business.id} 
                      className="hover:bg-green-50 transition"
                      variants={item}
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="font-medium text-green-800">{business.name}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {business.type}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {business.location}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-bold text-green-800">{business.revenue}</div>
                        <div className={`text-xs ${business.growth.includes('+') ? 'text-green-500' : 'text-red-500'}`}>
                          {business.growth} growth
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          business.status === "active" ? "bg-green-100 text-green-800" :
                          "bg-yellow-100 text-yellow-800"
                        }`}>
                          {business.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <a href="#" className="text-green-600 hover:text-green-900 mr-3">
                          View
                        </a>
                        <a href="#" className="text-gray-600 hover:text-gray-900">
                          Edit
                        </a>
                      </td>
                    </motion.tr>
                  ))}
                </motion.tbody>
              </table>
            </div>
          </motion.div>

          {/* Chart Section */}
          <motion.div className="mt-10" variants={item}>
            <h2 className="text-xl font-bold text-green-800 mb-4">Revenue Trend</h2>
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-end h-64 gap-2">
                {["Q1", "Q2", "Q3", "Q4"].map((quarter, index) => (
                  <motion.div
                    key={quarter}
                    className="flex-1 flex flex-col items-center"
                    variants={item}
                  >
                    <motion.div
                      className={`w-12 rounded-t-md ${
                        index % 2 === 0 ? "bg-green-400" : "bg-green-300"
                      }`}
                      initial={{ height: 0 }}
                      animate={{ 
                        height: `${Math.random() * 80 + 20}%`,
                        transition: { duration: 0.8, delay: index * 0.1 }
                      }}
                    />
                    <span className="text-xs text-gray-500 mt-1">{quarter}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
};

export default EagriBussiness;
