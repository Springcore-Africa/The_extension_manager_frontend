import React from "react";
import AgroProcessorAsidebar from "../components/AgroProcessorAsidebar";
import farmImg from "../assets/farm.jpeg"; // Replace with actual images if available

const agriBusinessData = [
  {
    id: 1,
    title: "Agro-Processing Center",
    description:
      "Support the setup of an agro-processing facility for maize, cassava, and oil palm produce. Location: Ogun State.",
    image: farmImg,
  },
  {
    id: 2,
    title: "Cold Storage Chain",
    description:
      "Invest in solar-powered cold rooms that reduce post-harvest loss for fruits and vegetables. Location: Jos, Plateau.",
    image: farmImg,
  },
  {
    id: 3,
    title: "AgriTech Platform",
    description:
      "Empower farmers through digital farm management tools, training, and market access via a scalable mobile platform.",
    image: farmImg,
  },
];

const Aagribusiness = () => {
  return (
    <div className="flex min-h-screen bg-green-50">
      <AgroProcessorAsidebar />

      <main className="flex-1 p-6 md:p-10 overflow-y-auto">
        <h1 className="text-3xl font-bold text-green-800 mb-8">
          All Agri-Business Ventures
        </h1>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {agriBusinessData.map((item) => (
            <div
              key={item.id}
              className="bg-white border-2 border-green-100 shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-44 object-cover"
              />
              <div className="p-5">
                <h2 className="text-xl font-bold text-green-800 mb-2">
                  {item.title}
                </h2>
                <p className="text-gray-700 text-sm mb-4">{item.description}</p>
                <button className="w-full bg-green-700 text-white py-2 rounded-lg font-semibold hover:bg-green-900 transition">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Aagribusiness;
