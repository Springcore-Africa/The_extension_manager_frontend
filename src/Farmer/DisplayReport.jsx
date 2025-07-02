import React from "react";
import { useFarm } from "../context/FarmContext";
import DashboardAsideBar from "../components/DashboardAsideBar";

const DisplayReport = () => {
  const { farms } = useFarm();

  return (
    <div className="flex min-h-screen bg-green-50">
      <DashboardAsideBar />

      <main className="flex-1 p-8 bg-green-100">
        <h2 className="text-2xl font-bold text-green-800 mb-6">Reports</h2>

        {farms.length === 0 ? (
          <div className="text-center text-gray-600">
            <p>No farm reports available yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {farms.map((farm, index) => (
              <div
                key={index}
                className="bg-white p-5 rounded-xl shadow hover:shadow-lg border-l-4 border-green-500 transition-all duration-200"
              >
                <h3 className="text-xl font-bold text-green-700 mb-2">
                  {farm.name}
                </h3>
                <p className="text-gray-700 mb-1">📍 Location: {farm.location}</p>
                <p className="text-gray-700 mb-1">🌱 Crop: {farm.crop}</p>
                <p className="text-gray-700 mb-1">📏 Size: {farm.size}</p>
                {farm.image && (
                  <img
                    src={farm.image}
                    alt="Farm visual"
                    className="mt-4 w-full h-40 object-cover rounded-md border"
                  />
                )}
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default DisplayReport;
