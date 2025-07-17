import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ExtensionAgentAsidebar from "../components/ExtensionAgentAsidebar";

const farms = [
  {
    id: 1,
    name: "Green Valley Farm",
    location: "Kaduna",
    crop: "Maize",
    size: "25 Acres",
  },
  {
    id: 2,
    name: "Sunshine Agro",
    location: "Enugu",
    crop: "Cassava",
    size: "40 Acres",
  },
  {
    id: 3,
    name: "Riverbend Crops",
    location: "Ibadan",
    crop: "Yam",
    size: "18 Acres",
  },
  {
    id: 3,
    name: "Riverbend Crops",
    location: "Ibadan",
    crop: "Yam",
    size: "18 Acres",
  },
  {
    id: 3,
    name: "Riverbend Crops",
    location: "Ibadan",
    crop: "Yam",
    size: "18 Acres",
  },
  {
    id: 3,
    name: "Riverbend Crops",
    location: "Ibadan",
    crop: "Yam",
    size: "18 Acres",
  },
  {
    id: 3,
    name: "Riverbend Crops",
    location: "Ibadan",
    crop: "Yam",
    size: "18 Acres",
  },
  {
    id: 3,
    name: "Riverbend Crops",
    location: "Ibadan",
    crop: "Yam",
    size: "18 Acres",
  },
  {
    id: 3,
    name: "Riverbend Crops",
    location: "Ibadan",
    crop: "Yam",
    size: "18 Acres",
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

const Efarms = () => {
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
          <motion.div
            className="flex justify-between items-center mb-8"
            variants={item}
          >
            <h1 className="text-2xl font-bold text-green-800">
              Assigned Farms
            </h1>
            <span className="text-sm text-gray-600">
              Total Farms: {farms.length}
            </span>
          </motion.div>

          {/* Farm Cards */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
            variants={container}
          >
            {farms.map((farm) => (
              <motion.div
                key={farm.id}
                className="bg-white rounded-xl shadow-md p-5 hover:shadow-xl transition"
                variants={item}
                whileHover={{ scale: 1.02 }}
              >
                <h2 className="text-lg font-bold text-green-800 mb-2">
                  {farm.name}
                </h2>
                <p className="text-sm text-gray-600 mb-1">
                  <strong>Location:</strong> {farm.location}
                </p>
                <p className="text-sm text-gray-600 mb-1">
                  <strong>Crop:</strong> {farm.crop}
                </p>
                <p className="text-sm text-gray-600 mb-3">
                  <strong>Size:</strong> {farm.size}
                </p>
                <Link
                  to={`/extension-farms/${farm.id}`}
                  className="text-sm text-white bg-green-700 hover:bg-green-600 px-4 py-2 rounded-md inline-block font-medium transition"
                >
                  View Details
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
};

export default Efarms;
