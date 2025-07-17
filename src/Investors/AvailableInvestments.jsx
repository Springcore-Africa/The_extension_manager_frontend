import React from "react";
import InvestorAsideBar from "../components/InvestorAsideBar";
import farmImg from "../assets/farm.jpeg"; // Replace with actual image path

const availableInvestments = [
  {
    id: 1,
    title: "Maize Farm Expansion",
    location: "Oyo, Nigeria",
    duration: "6 months",
    roi: "18%",
    amount: "₦300,000",
    image: farmImg,
  },
  {
    id: 2,
    title: "Poultry Farm Project",
    location: "Abuja, Nigeria",
    duration: "9 months",
    roi: "20%",
    amount: "₦500,000",
    image: farmImg,
  },
  {
    id: 3,
    title: "Irrigated Vegetable Farm",
    location: "Jos, Nigeria",
    duration: "4 months",
    roi: "15%",
    amount: "₦250,000",
    image: farmImg,
  },
];

const AvailableInvestments = () => {
  return (
    <div className="flex min-h-screen bg-green-50">
      <InvestorAsideBar />

      <main className="flex-1 p-6 md:p-10 overflow-y-auto">
        <h1 className="text-3xl font-bold text-green-800 mb-8">
          Available Investments
        </h1>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {availableInvestments.map((item) => (
            <div
              key={item.id}
              className="bg-white border-2 border-green-100 shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h2 className="text-xl font-extrabold text-green-800 mb-1">
                  {item.title}
                </h2>
                <p className="text-sm text-gray-600 mb-2">
                  <strong>Location:</strong> {item.location}
                </p>
                <div className="flex flex-wrap gap-3 text-sm font-medium text-green-900 mb-3">
                  <span className="bg-green-100 px-3 py-1 rounded-full">
                    Duration: {item.duration}
                  </span>
                  <span className="bg-green-100 px-3 py-1 rounded-full">
                    ROI: {item.roi}
                  </span>
                </div>
                <p className="text-green-800 font-bold mb-4">
                  Investment: {item.amount}
                </p>
                <button className="w-full bg-green-700 text-white py-2 rounded-lg font-semibold hover:bg-green-900 transition">
                  Invest Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default AvailableInvestments;
