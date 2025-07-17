import React from "react";
import InvestorAsideBar from "../components/InvestorAsideBar";

const availableFarms = [
  {
    id: "#AF101",
    name: "Sunshine Agro",
    location: "Ilorin, Kwara State",
    type: "Maize Farming",
    availability: "Available",
    fundingNeeded: "₦500,000",
  },
  {
    id: "#AF102",
    name: "Riverfront Fields",
    location: "Calabar, Cross River",
    type: "Fish Farming",
    availability: "Low",
    fundingNeeded: "₦750,000",
  },
  {
    id: "#AF103",
    name: "Hillside Harvest",
    location: "Jos, Plateau State",
    type: "Tomato Farming",
    availability: "Available",
    fundingNeeded: "₦600,000",
  },
  {
    id: "#AF104",
    name: "Golden Palm Estate",
    location: "Benin, Edo State",
    type: "Palm Oil",
    availability: "Closed",
    fundingNeeded: "₦1,200,000",
  },
];

const getAvailabilityColor = (status) => {
  switch (status) {
    case "Available":
      return "text-green-600 bg-green-100";
    case "Low":
      return "text-yellow-600 bg-yellow-100";
    case "Closed":
      return "text-red-600 bg-red-100";
    default:
      return "text-gray-600 bg-gray-100";
  }
};

const Farms = () => {
  return (
    <div className="flex min-h-screen bg-green-50">
      <InvestorAsideBar />
      <main className="flex-1 p-6 md:p-10">
        <h1 className="text-2xl font-bold text-green-800 mb-6">
          Available Farms
        </h1>

        <div className="bg-white rounded-xl shadow-md overflow-x-auto">
          <table className="w-full table-auto">
            <thead className="bg-green-700 text-white text-left text-sm">
              <tr>
                <th className="px-6 py-3">Farm ID</th>
                <th className="px-6 py-3">Farm Name</th>
                <th className="px-6 py-3">Location</th>
                <th className="px-6 py-3">Farm Type</th>
                <th className="px-6 py-3">Funding Needed</th>
                <th className="px-6 py-3">Status</th>
                <th className="px-6 py-3 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="text-sm text-gray-700">
              {availableFarms.map((farm) => (
                <tr
                  key={farm.id}
                  className="border-b hover:bg-green-50 transition duration-200"
                >
                  <td className="px-6 py-4 font-medium">{farm.id}</td>
                  <td className="px-6 py-4">{farm.name}</td>
                  <td className="px-6 py-4">{farm.location}</td>
                  <td className="px-6 py-4">{farm.type}</td>
                  <td className="px-6 py-4">{farm.fundingNeeded}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${getAvailabilityColor(
                        farm.availability
                      )}`}
                    >
                      {farm.availability}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="hover:bg-red-500 hover:text-white text-green-700 border p-2 rounded-xl cursor-pointer font-bold text-sm">
                      Close Farm
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="p-4 flex justify-between items-center text-sm text-gray-500">
            <p>Showing 1–4 of {availableFarms.length}</p>
            <div className="space-x-2">
              <button className="px-2 py-1 rounded bg-green-100 text-green-700 font-semibold hover:bg-green-200">
                &lt;
              </button>
              <button className="px-2 py-1 rounded bg-green-700 text-white font-semibold">
                1
              </button>
              <button className="px-2 py-1 rounded bg-green-100 text-green-700 font-semibold hover:bg-green-200">
                2
              </button>
              <button className="px-2 py-1 rounded bg-green-100 text-green-700 font-semibold hover:bg-green-200">
                &gt;
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Farms;
