import React from "react";
import AgroProcessorAsidebar from "../components/AgroProcessorAsidebar";
import workerImg from "../assets/farmer-dp.jpeg"; // Replace with actual image if available

const extensionWorkersData = [
  {
    id: 1,
    name: "Adeola Bamidele",
    role: "Crop Specialist – Maize & Cassava",
    description:
      "Based in Oyo State, Adeola supports over 100 smallholder farmers with field visits, pest control advice, and improved crop strategies.",
    image: workerImg,
  },
  {
    id: 2,
    name: "Joseph Emeka",
    role: "Livestock Extension Officer",
    description:
      "Operating in Benue, Joseph provides animal health care, vaccination schedules, and feed planning for poultry and cattle farmers.",
    image: workerImg,
  },
  {
    id: 3,
    name: "Fatima Lawal",
    role: "Soil & Irrigation Advisor",
    description:
      "Fatima assists farmers in Kano with soil testing, irrigation methods, and fertilizer optimization for dry season farming.",
    image: workerImg,
  },
];

const Aextensionworkers = () => {
  return (
    <div className="flex min-h-screen bg-green-50">
      <AgroProcessorAsidebar />

      <main className="flex-1 p-6 md:p-10 overflow-y-auto">
        <h1 className="text-3xl font-bold text-green-800 mb-8">
          Extension Workers
        </h1>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {extensionWorkersData.map((worker) => (
            <div
              key={worker.id}
              className="bg-white border-2 border-green-100 shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition"
            >
              <img
                src={worker.image}
                alt={worker.name}
                className="w-full h-44 object-cover"
              />
              <div className="p-5">
                <h2 className="text-xl font-bold text-green-800 mb-1">
                  {worker.name}
                </h2>
                <h3 className="text-sm text-green-600 font-semibold mb-2">
                  {worker.role}
                </h3>
                <p className="text-gray-700 text-sm mb-4">{worker.description}</p>
                <button className="w-full bg-green-700 text-white py-2 rounded-lg font-semibold hover:bg-green-900 transition">
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Aextensionworkers;
