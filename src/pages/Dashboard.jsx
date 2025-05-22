import React from 'react';
import farmer from '../assets/farmer.png';
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div className="flex min-h-screen bg-green-50">
      {/* Sidebar */}
      <aside className="w-64 bg-green-700 text-white flex flex-col justify-between rounded-r-3xl p-6">
        <div>
          <div className="flex items-center gap-3 mb-10">
            <img
              src={farmer} // replace with profile image
              alt="Profile"
              className="rounded-full w-12 h-12"
            />
            <div>
              <h2 className="text-lg font-bold">Elvis Nwachukwu</h2>
              <p className="text-sm">Farm Manager</p>
            </div>
          </div>

          <nav className="space-y-6">
            <button className="text-left w-full font-semibold">🏠 Dashboard</button>
            <button className="text-left w-full font-semibold">🌾 All Farms</button>
            <button className="text-left w-full font-semibold">🏛️ Gov Subsidies</button>
            <button className="text-left w-full font-semibold">⚙️ Settings</button>
          </nav>

          <div className="mt-10">
            <p className="text-sm text-green-100 mb-2">You can manage multiple farms here</p>
            <button className="bg-white text-green-700 font-bold py-2 px-4 rounded-lg w-full">
              + Add Farm
            </button>
          </div>
        </div>
        <Link to="/" className="cursor-pointer">
                          <button className="text-black mb-4 border border-green-600 px-2 bg-white py-1 rounded-lg font-semibold hover:bg-green-500 hover:text-white transition text-sm sm:text-base">
                            Go Home
                          </button>
                        </Link>
        <div className="text-center">
          <img
            src="https://via.placeholder.com/100" // replace with bottom image
            alt="Illustration"
            className="mx-auto"
          />
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-green-800">Greenvalley Cardamom</h1>
          <button className="bg-green-700 text-white py-2 px-4 rounded-lg font-semibold">
            + Add Crop
          </button>
        </div>

        {/* Crop Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow p-4">
            <p className="text-gray-500">Crop name</p>
            <h2 className="text-lg font-bold">Ugwu</h2>
          </div>
          <div className="bg-white rounded-xl shadow p-4">
            <p className="text-gray-500">Area</p>
            <h2 className="text-lg font-bold">53 Acre</h2>
          </div>
          <div className="bg-white rounded-xl shadow p-4">
            <p className="text-gray-500">Last Production</p>
            <h2 className="text-lg font-bold">1200 kg</h2>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow p-6 space-y-4">
            <div className="flex justify-between">
              <p className="text-gray-600">Air temperature</p>
              <p className="text-red-500 font-bold">38°C</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-600">Water content</p>
              <p className="text-green-500 font-bold">32%</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-600">pH Value</p>
              <p className="text-yellow-500 font-bold">8</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center justify-center">
            <p className="text-gray-600 mb-2">Financial statistics</p>
            <div className="relative">
              <div className="w-32 h-32 rounded-full border-8 border-green-500 flex items-center justify-center text-2xl font-bold">
                78%
              </div>
              <p className="text-center mt-2 text-green-700 font-semibold">Achieved</p>
            </div>
            <div className="flex justify-between w-full mt-4">
              <div>
                <p className="text-gray-500 text-sm">Current profit</p>
                <p className="text-green-700 font-bold">50,000N</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm">Expected profit</p>
                <p className="text-green-700 font-bold">182,000N</p>
              </div>
            </div>
          </div>
        </div>

        {/* Production Details */}
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-bold text-green-800 mb-6">Production details</h2>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
            {[
              { month: 'January', amount: '2603 kg' },
              { month: 'February', amount: '1500 kg' },
              { month: 'April', amount: '2090 kg' },
              { month: 'May', amount: '1709 kg' },
              { month: 'July', amount: '2620 kg' },
              { month: 'August', amount: '2110 kg' },
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <div className="bg-green-500 w-8 sm:w-12 h-24 rounded-lg"></div>
                <p className="text-sm font-semibold mt-2">{item.amount}</p>
                <p className="text-xs text-gray-500">{item.month}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
