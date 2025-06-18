import { Link } from "react-router-dom";
import DashboardAsideBar from "../components/DashboardAsideBar";

function FarmersDashboard() {
  return (
    <div className="flex min-h-screen bg-green-50">
      {/* Asidebar Component */}
      <DashboardAsideBar />

      {/* Main Content */}
      <main className="flex-1 md:p-8 bg-green-700 border-green-700">
        <div className="bg-green-50 rounded-2xl border-2 border-white my-0 p-6">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
            <h1 className="text-xl md:text-2xl font-bold text-green-800 text-center md:text-left">
              Greenvalley Cardamom
            </h1>
            <div className="items-center md:text-left">
              <p className="text-gray-500 text-sm md:text-base">
                Date Onboarded
              </p>
              <h1 className="text-base md:text-lg">Wednesday, 4 June 2025</h1>
            </div>
            <Link
              to={"/extension-manager"}
              className="bg-green-700 cursor-pointer text-white py-2 px-4 rounded-lg font-semibold hover:bg-green-600 text-center"
            >
              Extension Agent
            </Link>
          </div>

          {/* Crop Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-8">
            <div className="bg-white rounded-xl shadow p-4">
              <p className="text-gray-500">Number of Farms</p>
              <h2 className="text-lg font-bold text-green-800">1</h2>
            </div>
            <div className="bg-white rounded-xl shadow p-4">
              <p className="text-gray-500">Total Land Size</p>
              <h2 className="text-lg font-bold text-green-800">53 Acre</h2>
            </div>
            <div className="bg-white rounded-xl shadow p-4">
              <p className="text-gray-500">Total Previous Production</p>
              <h2 className="text-lg font-bold text-green-800">1200 kg</h2>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4 md:gap-6 mb-8 items-stretch">
            {/* Crops Info */}
            <div className="flex-1 flex flex-col gap-4 md:gap-6">
              {/* Number of Crops */}
              <div className="bg-white rounded-xl shadow p-4">
                <p className="text-gray-500 border-b border-green-100 pb-2">
                  Number of Crops
                </p>
                <h2 className="text-lg font-bold text-green-800 pt-2">200</h2>
              </div>
              {/* List of Crops */}
              <div className="bg-white rounded-xl shadow p-4 h-full flex flex-col justify-between">
                <p className="text-gray-500 border-b border-green-100 pb-2 mb-2">
                  List of Crops
                </p>
                <ul className="list-disc list-inside text-green-800 flex-1">
                  <li>Maize</li>
                  <li>Sorghum</li>
                  <li>Yam</li>
                  <li>Cassava</li>
                </ul>
              </div>
            </div>

            {/* Financial Statistics */}
            <div className="bg-white flex-1 rounded-xl shadow p-6 flex flex-col justify-between min-w-[220px]">
              <p className="text-gray-600 font-semibold pb-4 border-b border-green-100 mb-4 text-center">
                FINANCIAL STATISTICS
              </p>
              <div className="flex-1 flex flex-col justify-center">
                <ul className="text-green-800 space-y-3">
                  <li>Total Combined Revenue</li>
                  <li>Total Combined Cost</li>
                  <li>Gross Combined Profit</li>
                  <li>Net Combined Profit</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Production Details */}
          <div className="bg-white rounded-xl shadow p-4 md:p-6">
            <h2 className="text-lg md:text-xl font-bold text-green-800 text-center mb-4 md:mb-6">
              OTHER STATISTICS
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 md:gap-4">
              {[
                { month: "January", amount: "2603 kg" },
                { month: "February", amount: "1500 kg" },
                { month: "April", amount: "2090 kg" },
                { month: "May", amount: "1709 kg" },
                { month: "July", amount: "2620 kg" },
                { month: "August", amount: "2110 kg" },
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <div className="bg-green-500 w-8 sm:w-10 md:w-12 h-16 sm:h-20 md:h-24 rounded-lg"></div>
                  <p className="text-xs sm:text-sm font-semibold mt-2">
                    {item.amount}
                  </p>
                  <p className="text-xs text-gray-500">{item.month}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default FarmersDashboard;
