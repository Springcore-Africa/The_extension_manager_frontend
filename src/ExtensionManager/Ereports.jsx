import React from "react";
import { motion } from "framer-motion";
import ExtensionAgentAsidebar from "../components/ExtensionAgentAsidebar"; // Adjust path as needed

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const chartItemVariants = {
  hidden: { opacity: 0, scaleY: 0, transformOrigin: 'bottom' },
  show: { opacity: 1, scaleY: 1, transition: { duration: 0.8 } }
};

const Ereports = () => {
  const reportsData = [
    {
      id: 1,
      title: "Monthly Farm Production Report",
      date: "June 2023",
      status: "completed",
      progress: 100,
      downloadUrl: "#",
      lastUpdated: "2 days ago"
    },
    {
      id: 2,
      title: "Soil Analysis Summary",
      date: "May 2023",
      status: "pending",
      progress: 65,
      downloadUrl: "#",
      lastUpdated: "1 week ago"
    },
    {
      id: 3,
      title: "Annual Financial Report",
      date: "2022",
      status: "completed",
      progress: 100,
      downloadUrl: "#",
      lastUpdated: "3 months ago"
    }
  ];

  const topMetrics = [
    {
      id: 1,
      name: "Reports Generated",
      value: "247",
      change: "+12%",
      trend: "up"
    },
    {
      id: 2,
      name: "Avg. Completion Time",
      value: "3.2 days",
      change: "-18%",
      trend: "down"
    },
    {
      id: 3,
      name: "Active Reports",
      value: "14",
      change: "+5%",
      trend: "up"
    }
  ];

  return (
    <div className="flex min-h-screen bg-green-50">
      {/* Imported AsideBar from your existing components */}
      <ExtensionAgentAsidebar />
      
      <main className="flex-1 p-6 h-screen md:p-10 bg-green-700 overflow-auto">
        <motion.div
          className="bg-green-50 p-6 rounded-2xl border-2 border-white shadow-lg"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {/* Header */}
          <motion.div className="flex justify-between items-center mb-8" variants={itemVariants}>
            <div>
              <h1 className="text-2xl font-bold text-green-800">Reports Dashboard</h1>
              <p className="text-sm text-gray-600">View and manage all farm reports</p>
            </div>
            <button className="text-sm text-white bg-green-700 hover:bg-green-600 px-4 py-2 rounded-md font-medium transition">
              Generate New Report
            </button>
          </motion.div>

          {/* Stats Cards */}
          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10" variants={containerVariants}>
            {topMetrics.map((metric) => (
              <motion.div
                key={metric.id}
                className="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-sm font-medium text-gray-600 mb-1">{metric.name}</h3>
                <div className="flex items-baseline">
                  <p className="text-2xl font-bold text-green-800 mr-2">{metric.value}</p>
                  <span className={`text-sm ${metric.trend === "up" ? "text-green-500" : "text-red-500"}`}>
                    {metric.change}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Reports List */}
          <motion.div variants={itemVariants}>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-green-800">Recent Reports</h2>
              <div className="flex space-x-2">
                <button className="text-sm text-green-700 bg-green-100 px-3 py-1 rounded-md">All</button>
                <button className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-md">Completed</button>
                <button className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-md">In Progress</button>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Report Title</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Progress</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                  </tr>
                </thead>
                <motion.tbody className="bg-white divide-y divide-gray-200" variants={containerVariants}>
                  {reportsData.map((report) => (
                    <motion.tr 
                      key={report.id} 
                      className="hover:bg-green-50 transition"
                      variants={itemVariants}
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="font-medium text-green-800">{report.title}</div>
                        <div className="text-xs text-gray-500">Updated {report.lastUpdated}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {report.date}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          report.status === "completed" ? "bg-green-100 text-green-800" :
                          report.status === "pending" ? "bg-yellow-100 text-yellow-800" :
                          "bg-blue-100 text-blue-800"
                        }`}>
                          {report.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <motion.div 
                            className={`h-2.5 rounded-full ${
                              report.progress === 100 ? "bg-green-500" :
                              report.progress > 50 ? "bg-blue-500" : "bg-yellow-500"
                            }`}
                            initial={{ width: 0 }}
                            animate={{ width: `${report.progress}%` }}
                            transition={{ duration: 1 }}
                          />
                        </div>
                        <div className="text-xs text-gray-500 mt-1">{report.progress}%</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        {report.status === "completed" ? (
                          <a href={report.downloadUrl} className="text-green-600 hover:text-green-900 mr-3">
                            Download
                          </a>
                        ) : null}
                        <a href="#" className="text-gray-600 hover:text-gray-900">
                          Details
                        </a>
                      </td>
                    </motion.tr>
                  ))}
                </motion.tbody>
              </table>
            </div>
          </motion.div>

          {/* Chart Section */}
          <motion.div className="mt-10" variants={itemVariants}>
            <h2 className="text-xl font-bold text-green-800 mb-4">Reports Overview</h2>
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-end h-64 gap-2">
                {["Jan", "Feb", "Mar", "Apr", "May", "Jun"].map((month, index) => (
                  <motion.div
                    key={month}
                    className="flex-1 flex flex-col items-center"
                    variants={chartItemVariants}
                  >
                    <motion.div
                      className={`w-10 rounded-t-md ${
                        index % 2 === 0 ? "bg-green-400" : "bg-green-300"
                      }`}
                      initial={{ height: 0 }}
                      animate={{ 
                        height: `${Math.random() * 80 + 20}%`,
                        transition: { duration: 0.8, delay: index * 0.1 }
                      }}
                    />
                    <span className="text-xs text-gray-500 mt-1">{month}</span>
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

export default Ereports;
