import React from "react";
import InvestorAsideBar from "../components/InvestorAsideBar";
import FarmerDp from "../assets/farmer-dp.jpeg";

const farmersData = [
  {
    id: 1,
    name: "Emeka Obi",
    designation: "Crop Farmer",
    email: "emeka@example.com",
    phone: "+234 803 000 1111",
    location: "Abia, Nigeria",
    image: FarmerDp,
  },
  {
    id: 2,
    name: "Amina Yusuf",
    designation: "Livestock Farmer",
    email: "amina@example.com",
    phone: "+234 809 222 3344",
    location: "Kano, Nigeria",
    image: FarmerDp,
  },
  {
    id: 3,
    name: "John Paul",
    designation: "Mixed Farming",
    email: "johnpaul@example.com",
    phone: "+234 802 123 9876",
    location: "Benue, Nigeria",
    image: FarmerDp,
  },
];

function Farmers() {
  return (
    <div className="flex min-h-screen bg-green-50">
      <InvestorAsideBar />

      <main className="flex-1 p-6 md:p-10 overflow-y-auto">
        <h1 className="text-3xl font-bold text-green-800 mb-8">Our Farmers</h1>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {farmersData.map((farmer) => (
            <div
              key={farmer.id}
              className="bg-white border-2 border-green-100 shadow-md rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-lg transition"
            >
              <img
                src={farmer.image}
                alt={farmer.name}
                className="w-24 h-24 rounded-full border-4 border-green-600 object-cover shadow mb-4"
              />
              <h2 className="text-xl font-extrabold text-green-800 mb-1">
                {farmer.name}
              </h2>
              <p className="text-green-700 font-semibold mb-2">
                {farmer.designation}
              </p>
              <p className="text-gray-700 text-sm mb-1">
                <strong>Email:</strong> {farmer.email}
              </p>
              <p className="text-gray-700 text-sm mb-1">
                <strong>Phone:</strong> {farmer.phone}
              </p>
              <p className="text-gray-700 text-sm">
                <strong>Location:</strong> {farmer.location}
              </p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Farmers;
