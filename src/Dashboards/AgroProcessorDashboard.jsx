import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import AgroProcessorAsidebar from "../components/AgroProcessorAsidebar";
import ProcessingOne from "../assets/maize-farm.jpg";
import ProcessingTwo from "../assets/maize-farm.jpg";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const AgroProcessorDashboard = () => {
  return (
    <div className="flex min-h-screen bg-green-50">
      {/* Asidebar */}
      <AgroProcessorAsidebar />

      {/* Main Content */}
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="flex-1 md:p-8 bg-green-700 border-green-700"
      >
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="bg-green-50 rounded-2xl border-2 border-white p-6 min-h-screen"
        >
          <h1 className="text-2xl font-bold text-green-800 mb-6">
            Agro-Processor Dashboard
          </h1>

          <div className="mt-8">
            {/* Ongoing Jobs */}
            <section className="mb-10">
              <h2 className="text-xl font-semibold text-green-700 mb-4">
                Your Processing Jobs
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Card 1 */}
                <motion.div
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-xl shadow p-6 flex flex-col gap-3 hover:shadow-lg transition"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={ProcessingOne}
                      alt="Cassava Processing"
                      className="w-20 h-16 rounded-lg object-cover border border-green-200"
                    />
                    <div>
                      <h3 className="font-bold text-green-800">Cassava Processing</h3>
                      <span className="text-xs px-2 py-1 rounded-full bg-yellow-100 text-yellow-700">
                        Ongoing
                      </span>
                    </div>
                  </div>
                  <ul className="text-sm text-gray-700 mt-2 space-y-1">
                    <li>
                      <span className="font-semibold">Farmer:</span> John Okoro
                    </li>
                    <li>
                      <span className="font-semibold">Quantity:</span> 3 tons
                    </li>
                    <li>
                      <span className="font-semibold">Expected Completion:</span> 2 weeks
                    </li>
                    <li>
                      <span className="font-semibold">Location:</span> Edo State
                    </li>
                  </ul>
                  <button className="mt-2 text-green-700 font-semibold hover:underline text-sm text-left">
                    View Details
                  </button>
                </motion.div>

                {/* Card 2 */}
                <motion.div
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="bg-white rounded-xl shadow p-6 flex flex-col gap-3 hover:shadow-lg transition"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={ProcessingTwo}
                      alt="Tomato Processing"
                      className="w-20 h-16 rounded-lg object-cover border border-green-200"
                    />
                    <div>
                      <h3 className="font-bold text-green-800">Tomato Paste Project</h3>
                      <span className="text-xs px-2 py-1 rounded-full bg-green-100 text-green-700">
                        Completed
                      </span>
                    </div>
                  </div>
                  <ul className="text-sm text-gray-700 mt-2 space-y-1">
                    <li>
                      <span className="font-semibold">Farmer:</span> Fatima Yusuf
                    </li>
                    <li>
                      <span className="font-semibold">Quantity:</span> 2.5 tons
                    </li>
                    <li>
                      <span className="font-semibold">Duration:</span> 10 days
                    </li>
                    <li>
                      <span className="font-semibold">Location:</span> Kaduna State
                    </li>
                  </ul>
                  <button className="mt-2 text-green-700 font-semibold hover:underline text-sm text-left">
                    View Report
                  </button>
                </motion.div>
              </div>
            </section>

            {/* Explore New Jobs */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <h2 className="text-xl font-semibold text-green-700 mb-2">
                Browse New Processing Requests
              </h2>
              <Link
                to="/agroprocessor/requests"
                className="inline-block bg-green-700 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-800 transition"
              >
                View Requests
              </Link>
            </motion.section>
          </div>
        </motion.div>
      </motion.main>
    </div>
  );
};

export default AgroProcessorDashboard;
