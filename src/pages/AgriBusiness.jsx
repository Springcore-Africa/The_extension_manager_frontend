import { useState } from "react";
import DashboardAsideBar from "../components/DashboardAsideBar";
import AgriBizVector from "../assets/agri-business-vector.png";
import { FaPlus, FaUserEdit } from "react-icons/fa";

function AgriBusiness() {
  // Start with no businesses
  const [businesses, setBusinesses] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [newBiz, setNewBiz] = useState({
    name: "",
    state: "",
    lga: "",
    address: "",
    farmsize: "",
    owner: "",
    email: "",
    phone: "",
    registration: "",
    registrationdate: "",
    type: "",
    yearlyproduction: "",
    employees: "",
    website: "",
    
  });
  const [activeBiz, setActiveBiz] = useState(null);

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBiz((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle add or update business
  const handleAddBusiness = (e) => {
    e.preventDefault();
    const created = { ...newBiz, id: Date.now() };
    setBusinesses([created]);
    setActiveBiz(created);
    setShowModal(false);
    setEditMode(false);
    setNewBiz({
      name: "",
    state: "",
    lga: "",
    street: "",
    farmsize: "",
    address: "",
    owner: "",
    email: "",
    phone: "",
    registration: "",
    registrationdate: "",
    type: "",
    yearlyproduction: "",
    employees: "",
    website: "",
    });
  };

  // Handle edit business (populate form with current business)
  const handleEditBusiness = () => {
    setEditMode(true);
    setShowModal(true);
    setNewBiz({ ...activeBiz });
  };

  // Handle update business
  const handleUpdateBusiness = (e) => {
    e.preventDefault();
    setActiveBiz({ ...newBiz });
    setBusinesses([{ ...newBiz }]);
    setShowModal(false);
    setEditMode(false);
    setNewBiz({
    name: "",
    state: "",
    lga: "",
    address: "",
    farmsize: "",
    owner: "",
    email: "",
    phone: "",
    registration: "",
    registrationdate: "",
    type: "",
    yearlyproduction: "",
    employees: "",
    website: "",
    });
  };

  return (
    <>
      <div className="flex min-h-screen bg-green-50">
        <DashboardAsideBar />

        <main className="flex-1 md:p-8 bg-green-700 border-green-700">
          <div className="bg-green-50 rounded-2xl border-2 border-white mx-0 flex flex-col items-center justify-center px-6 py-10 min-h-screen">
            {/* If no business, show warm message */}
            {!businesses.length || !activeBiz ? (
              <div className="flex flex-col items-center justify-center w-full h-full py-24">
                <div className="mb-6">
                  <img
                    src={AgriBizVector}
                    alt="No agri-business"
                    className="w-28 h-28 animate-bounce-fast drop-shadow-lg transition-transform duration-500 hover:scale-110"
                    style={{
                      animation:
                        "bounce 1s infinite cubic-bezier(.28,.84,.42,1)",
                    }}
                  />
                  <style>
                    {`
                      @keyframes bounce {
                        0%, 100% { transform: translateY(0);}
                        20% { transform: translateY(-18px);}
                        40% { transform: translateY(-28px);}
                        60% { transform: translateY(-18px);}
                        80% { transform: translateY(-8px);}
                      }
                      .animate-bounce-fast {
                        animation: bounce 1s infinite cubic-bezier(.28,.84,.42,1);
                      }
                    `}
                  </style>
                </div>
                <h2 className="text-2xl font-bold text-green-700 mb-2 text-center">
                  You don't have any Agri-Business yet.
                </h2>
                <p className="text-gray-600 mb-6 text-center max-w-md">
                  Welcome! You haven't created an agri-business yet. Click the
                  button below to add your very first business and start your
                  journey.
                </p>
                <button
                  onClick={() => {
                    setShowModal(true);
                    setEditMode(false);
                  }}
                  className="bg-green-700 flex items-center gap-2 cursor-pointer text-white py-2 px-6 rounded-lg font-semibold hover:bg-green-600 text-center shadow"
                >
                  <span>Add Agri-Business</span>
                  <FaPlus className="text-base" />
                </button>
              </div>
            ) : (
              // Show the created agri-business details and profile card
              <div className="w-full max-w-4xl flex flex-col lg:flex-row gap-8 items-start">
                {/* Profile Card */}
                <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center w-full max-w-xs mb-8 lg:mb-0">
                  <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center mb-3">
                    <FaUserEdit className="text-green-700 text-5xl" />
                  </div>
                  <h2 className="text-xl font-bold text-green-800 mb-1">
                    {activeBiz.owner}
                  </h2>
                  <p className="text-green-700 font-semibold mb-2">
                    Agri-Business Owner
                  </p>
                  <div className="w-full space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 font-medium">Email:</span>
                      <span className="text-green-900 text-right">
                        {activeBiz.email}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 font-medium">Phone:</span>
                      <span className="text-green-900 text-right">
                        {activeBiz.phone}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 font-medium">
                        Address:
                      </span>
                      <span className="text-green-900 text-right">
                        {activeBiz.address || "N/A"}
                      </span>
                    </div>
                  </div>
                </div>
                {/* Business Details & Update Form */}
                <div className="flex-1 bg-white shadow-lg rounded-xl p-8 flex flex-col items-center w-full">
                  <h2 className="text-2xl font-bold text-green-800 mb-2 text-center">
                    {activeBiz.name}
                  </h2>
                  <p className="text-green-700 font-semibold mb-2 text-center">
                    {activeBiz.type}
                  </p>
                  <div className="mb-2 text-center">
                    <span className="text-gray-600 font-medium">
                      Location:{" "}
                    </span>
                    <span className="text-green-900">{activeBiz.location}</span>
                  </div>
                  <div className="mb-2 text-center">
                    <span className="text-gray-600 font-medium">
                      Description
                    </span>
                    <div className="text-gray-900 italic">
                      {activeBiz.description}
                    </div>
                  </div>
                  <div className="mb-2 text-center">
                    <span className="text-gray-600 font-medium">
                      Years in Business:{" "}
                    </span>
                    <span className="text-green-900">
                      {activeBiz.years || "N/A"}
                    </span>
                  </div>
                  <div className="mb-2 text-center">
                    <span className="text-gray-600 font-medium">
                      CAC Registration No:{" "}
                    </span>
                    <span className="text-green-900">
                      {activeBiz.registration || "N/A"}
                    </span>
                  </div>
                  <div className="mb-2 text-center">
                    <span className="text-gray-600 font-medium">
                      No. of Employees:{" "}
                    </span>
                    <span className="text-green-900">
                      {activeBiz.employees || "N/A"}
                    </span>
                  </div>
                  <div className="mb-2 text-center">
                    <span className="text-gray-600 font-medium">Website: </span>
                    <span className="text-green-900">
                      {activeBiz.website || "N/A"}
                    </span>
                  </div>
                  <button
                    onClick={handleEditBusiness}
                    className="bg-green-700 mt-4 flex items-center gap-2 cursor-pointer text-white py-2 px-6 rounded-lg font-semibold hover:bg-green-600 text-center shadow"
                  >
                    <span>Update Agri-Business</span>
                    <FaUserEdit className="text-base" />
                  </button>
                  {/* Update Form (shown in modal) */}
                </div>
              </div>
            )}
          </div>

          {/* Modal for adding/editing agri-business */}
          {showModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-green-900/90 via-green-700/80 to-yellow-200/80">
              <div
                className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80')] bg-cover bg-center opacity-70"
                aria-hidden="true"
              ></div>
              <div className="relative bg-white/90 backdrop-blur-md rounded-xl shadow-2xl p-8 max-w-md w-[370px] sm:w-full max-h-[90vh] overflow-y-auto">
                <button
                  className="absolute top-2 right-3 text-gray-500 hover:text-red-600 text-xl font-bold"
                  onClick={() => {
                    setShowModal(false);
                    setEditMode(false);
                  }}
                  aria-label="Close"
                >
                  &times;
                </button>
                <h2 className="text-lg font-bold text-green-800 mb-4 text-center">
                  {editMode ? "Update Agri-Business" : "Add New Agri-Business"}
                </h2>
                <form
                  onSubmit={editMode ? handleUpdateBusiness : handleAddBusiness}
                  className="space-y-4"
                >
                  <div>
                    <label className="block text-green-800 font-semibold mb-1">
                      Business Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={newBiz.name}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-green-800 font-semibold mb-1">
                      Business Location (State)
                    </label>
                    <input
                      type="text"
                      name="type"
                      value={newBiz.state}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-green-800 font-semibold mb-1">
                      Business Location (LGA)
                    </label>
                    <input
                      type="text"
                      name="type"
                      value={newBiz.lga}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-green-800 font-semibold mb-1">
                      Address
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={newBiz.address}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                      placeholder="Business Address"
                    />
                  </div>
                  <div>
                    <label className="block text-green-800 font-semibold mb-1">
                      Farm Size
                    </label>
                    <select
                      name="size"
                      value={newBiz.size}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                      required
                    >
                      <option value="">Select Size</option>
                      <option value="Small (0-2 acres)">
                        Small (0-2 acres)
                      </option>
                      <option value="Medium (2-10 acres)">
                        Medium (2-10 acres)
                      </option>
                      <option value="Large (10+ acres)">
                        Large (10+ acres)
                      </option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-green-800 font-semibold mb-1">
                      Owner Name
                    </label>
                    <input
                      type="text"
                      name="owner"
                      value={newBiz.owner}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-green-800 font-semibold mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={newBiz.email}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-green-800 font-semibold mb-1">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      name="phone"
                      value={newBiz.phone}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-green-800 font-semibold mb-1">
                      CAC Registration Number
                    </label>
                    <input
                      type="text"
                      name="registration"
                      value={newBiz.registration}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                      placeholder="e.g. RC1234567"
                    />
                  </div>
                  <div>
                    <label className="block text-green-800 font-semibold mb-1">
                      CAC Registration Date
                    </label>
                    <input
                      type="date"
                      name="registration"
                      value={newBiz.registrationdate}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                    />
                  </div>
                  <div>
                    <label className="block text-green-800 font-semibold mb-1">
                      Type of Agricultural Product
                    </label>
                    <input
                      type="text"
                      name="product"
                      value={newBiz.type}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                      min={1}
                    />
                  </div>
                  <div>
                    <label className="block text-green-800 font-semibold mb-1">
                      Average Yearly Production (in tons)
                    </label>
                    <input
                      type="number"
                      name="yearlyproduction"
                      value={newBiz.yearlyproduction}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                      min={1}
                    />
                  </div>
                  <div>
                    <label className="block text-green-800 font-semibold mb-1">
                      Number of Employees
                    </label>
                    <input
                      type="number"
                      name="employees"
                      value={newBiz.employees}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                      min={1}
                    />
                  </div>
                  <div>
                    <label className="block text-green-800 font-semibold mb-1">
                     Product Description
                    </label>
                    <textarea
                      name="description"
                      value={newBiz.description}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                      rows={3}
                      required
                      placeholder="Short description of the product"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-green-700 text-white py-3 rounded-lg font-semibold hover:bg-green-900 transition mt-2"
                  >
                    {editMode ? "Update Agri-Business" : "Add Agri-Business"}
                  </button>
                </form>
              </div>
            </div>
          )}
        </main>
      </div>
    </>
  );
}

export default AgriBusiness;
