import InvestmentOne from "../assets/investor-farm1.jpg";
import InvestmentTwo from "../assets/investor-farm2.jfif";
import { Link } from "react-router-dom";
import InvestorAsideBar from "../components/InvestorAsideBar";

function InvestorDashboard() {
  return (
    <div className="flex min-h-screen bg-green-50">
      {/* Asidebar Component */}
      <InvestorAsideBar />

      {/* Main Content */}
      <main className="flex-1 md:p-8 bg-green-700 border-green-700">
        <div className="bg-green-50 rounded-2xl border-2 border-white my-0 p-13 sm:p-6 min-h-screen">
          <h1 className="text-2xl font-bold text-green-800 mb-6">Investor Dashboard</h1>
          <div className="mt-8">
            <section className="mb-10">
              <h2 className="text-xl font-semibold text-green-700 mb-4">Your Investments</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Investment Cards */}
                <div className="bg-white rounded-xl shadow p-6 flex flex-col gap-3 hover:shadow-lg transition">
                  <div className="flex items-center gap-4">
                    <img
                      src={InvestmentOne}
                      alt="Maize Farm"
                      className="w-20 h-16 rounded-lg object-cover border border-green-200"
                    />
                    <div>
                      <h3 className="font-bold text-green-800">Maize Farm Investment</h3>
                      <span className="text-xs px-2 py-1 rounded-full bg-yellow-100 text-yellow-700">
                        Ongoing
                      </span>
                    </div>
                  </div>
                  <ul className="text-sm text-gray-700 mt-2 space-y-1">
                    <li>
                      <span className="font-semibold">Amount Invested:</span> ₦500,000
                    </li>
                    <li>
                      <span className="font-semibold">Expected Returns:</span> ₦650,000
                    </li>
                    <li>
                      <span className="font-semibold">Duration:</span> 6 months
                    </li>
                    <li>
                      <span className="font-semibold">Farmer:</span> Elvis Nwachukwu
                    </li>
                    <li>
                      <span className="font-semibold">Location:</span> Oyo State
                    </li>
                  </ul>
                  <button className="mt-2 text-green-700 font-semibold hover:underline text-sm text-left">
                    View Details
                  </button>
                </div>
                <div className="bg-white rounded-xl shadow p-6 flex flex-col gap-3 hover:shadow-lg transition">
                  <div className="flex items-center gap-4">
                    <img
                      src={InvestmentTwo}
                      alt="Rice Farm"
                      className="w-20 h-16 rounded-lg object-cover border border-green-200"
                    />
                    <div>
                      <h3 className="font-bold text-green-800">Rice Farm Investment</h3>
                      <span className="text-xs px-2 py-1 rounded-full bg-green-100 text-green-700">
                        Completed
                      </span>
                    </div>
                  </div>
                  <ul className="text-sm text-gray-700 mt-2 space-y-1">
                    <li>
                      <span className="font-semibold">Amount Invested:</span> ₦300,000
                    </li>
                    <li>
                      <span className="font-semibold">Returns:</span> ₦420,000
                    </li>
                    <li>
                      <span className="font-semibold">Duration:</span> 5 months
                    </li>
                    <li>
                      <span className="font-semibold">Farmer:</span> Amina Bello
                    </li>
                    <li>
                      <span className="font-semibold">Location:</span> Kano State
                    </li>
                  </ul>
                  <button className="mt-2 text-green-700 font-semibold hover:underline text-sm text-left">
                    View Details
                  </button>
                </div>
              </div>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-green-700 mb-2">Explore More Opportunities</h2>
              <Link
                to="/available-investments"
                className="inline-block bg-green-700 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-800 transition"
              >
                View Available Investments
              </Link>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}

export default InvestorDashboard;