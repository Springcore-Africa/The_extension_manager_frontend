import React from "react";
import { useFarm } from "../context/FarmContext";
import DashboardAsideBar from "../components/DashboardAsideBar";
import { useNavigate } from "react-router-dom";

const Reports = () => {
  const { farms } = useFarm();
  const navigate = useNavigate();

  const handleFarmClick = (farmIndex) => {
    // Navigate to DisplayReport page with farm index in state
    navigate("/Farmer/DisplayReport", { state: { farmIndex } });
  };

  return (
    <div className="flex min-h-screen bg-green-50">
      <DashboardAsideBar />
      <main className="flex-1 md:p-8 bg-green-700 border-green-700 overflow-y-auto">
        <div className="bg-green-50 rounded-2xl border-2 border-white my-0 p-4 min-h-screen">
          <h1 className="text-2xl font-bold text-green-800 mb-4">Farm Reports</h1>

          {farms.length === 0 ? (
            <p className="text-gray-600">No farms to report yet.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
              {farms.map((farm, idx) => (
                <div
                  key={idx}
                  onClick={() => handleFarmClick(idx)}
                  className="cursor-pointer bg-white shadow rounded-lg p-4 border-l-4 border-green-600 hover:shadow-lg transition"
                >
                  <img
                    src={farm.image}
                    alt="Farm"
                    className="w-full h-40 object-cover rounded mb-4"
                  />
                  <h2 className="text-lg font-semibold text-green-700 mb-2">
                    {farm.name}
                  </h2>
                  <p className="text-sm text-gray-600">📍 {farm.location}</p>
                  <p className="text-sm text-gray-600">🌾 {farm.crop}</p>
                  <p className="text-sm text-gray-600">📏 {farm.size}</p>
                  <p className="mt-2 text-sm font-medium text-green-800">
                    {farm.reports?.length
                      ? `${farm.reports.length} report${farm.reports.length > 1 ? "s" : ""}`
                      : "No reports yet"}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Reports;
