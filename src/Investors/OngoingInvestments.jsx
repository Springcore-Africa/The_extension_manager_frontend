import React from "react";
import InvestorAsideBar from "../components/InvestorAsideBar";

const dummyFarms = [
  {
    id: "#F102",
    name: "GreenField Agro",
    location: "Ibadan, Oyo State",
    date: "04 Jul 2025",
    amount: "₦850,000",
    status: "Active",
  },
  {
    id: "#F103",
    name: "AquaGrow Farm",
    location: "Abeokuta, Ogun State",
    date: "15 Jun 2025",
    amount: "₦420,000",
    status: "Pending",
  },
  {
    id: "#F104",
    name: "Palm Valley",
    location: "Nsukka, Enugu State",
    date: "02 Jul 2025",
    amount: "₦600,000",
    status: "Active",
  },
  {
    id: "#F105",
    name: "Green Ridge Ranch",
    location: "Lokoja, Kogi State",
    date: "29 Jun 2025",
    amount: "₦990,000",
    status: "Completed",
  },
  {
    id: "#F105",
    name: "Green Ridge Ranch",
    location: "Lokoja, Kogi State",
    date: "29 Jun 2025",
    amount: "₦990,000",
    status: "Completed",
  },
  {
    id: "#F105",
    name: "Red Ridge Ranch",
    location: "Lokoja, Kogi State",
    date: "29 Jun 2025",
    amount: "₦990,000",
    status: "Pending",
  },
];

const getStatusColor = (status) => {
  switch (status) {
    case "Active":
      return "text-green-600 bg-green-100";
    case "Pending":
      return "text-yellow-600 bg-yellow-100";
    case "Completed":
      return "text-gray-500 bg-gray-100";
    default:
      return "text-gray-500 bg-gray-100";
  }
};

const OngoingInvestments = () => {
  return (
    <div className="flex min-h-screen bg-green-50">
      <InvestorAsideBar />
      <main className="flex-1 p-6 md:p-10">
        <h1 className="text-2xl font-bold text-green-800 mb-6">
          Ongoing Investments
        </h1>

        <div className="bg-white rounded-xl shadow-md overflow-x-auto">
          <table className="w-full table-auto">
            <thead className="bg-green-700 text-white text-left text-sm">
              <tr>
                <th className="px-6 py-3">Farm ID</th>
                <th className="px-6 py-3">Farm Name</th>
                <th className="px-6 py-3">Location</th>
                <th className="px-6 py-3">Start Date</th>
                <th className="px-6 py-3">Investment</th>
                <th className="px-6 py-3">Status</th>
                <th className="px-6 py-3 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="text-sm text-gray-700">
              {dummyFarms.map((farm) => (
                <tr
                  key={farm.id}
                  className="border-b hover:bg-green-50 transition duration-200"
                >
                  <td className="px-6 py-4 font-medium">{farm.id}</td>
                  <td className="px-6 py-4">{farm.name}</td>
                  <td className="px-6 py-4">{farm.location}</td>
                  <td className="px-6 py-4">{farm.date}</td>
                  <td className="px-6 py-4">{farm.amount}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(
                        farm.status
                      )}`}
                    >
                      {farm.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-green-700 hover:text-green-900 font-semibold text-sm">
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="p-4 flex justify-between items-center text-sm text-gray-500">
            <p>Showing 1-4 of {dummyFarms.length}</p>
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

export default OngoingInvestments;
