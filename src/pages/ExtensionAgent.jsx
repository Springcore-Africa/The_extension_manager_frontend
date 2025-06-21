import { useState, useRef } from "react";
import AgentDp from "../assets/extension-agt.jfif";
import DashboardAsideBar from "../components/DashboardAsideBar";

function ExtensionAgent() {
  const [profilePic, setProfilePic] = useState(AgentDp);
  const fileInputRef = useRef(null);

  // Exention Agent Profile Data
  const [exentionagent, setexentionagent] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    location: "",
    designation: "",
    description: "",
    role: "",
    gender: "",
    dob: "",
    address: "",
    state: "",
    lga: "",
    farmSize: "",
    crops: "",
    bvn: "",
    nin: "",
    bank: "",
    accountNumber: "",
  });

  // Success modal state
  const [showSuccess, setShowSuccess] = useState(false);

  // Handle profile picture change
  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (ev) => setProfilePic(ev.target.result);
      reader.readAsDataURL(file);
    }
  };

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setexentionagent((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccess(true);
  };

  // Update profile card info after modal closes
  const handleCloseSuccess = () => {
    setShowSuccess(false);
  };

  return (
    <>
      <div className="flex min-h-screen bg-green-50">
        {/* Sidebar Component */}
        <DashboardAsideBar />

        {/* Main Content */}
        <main className="flex-1 md:p-8 bg-green-700 border-green-700">
          <div className="bg-green-50 rounded-2xl border-2 border-white mx-0 px-6 py-10 sm:py-10 flex flex-col lg:flex-row items-start justify-center gap-8">
            {/* Farmer Profile Card */}
            <div className="bg-white shadow p-6 rounded-lg flex flex-col items-center w-full max-w-xs mb-8 lg:mb-0">
              <div className="relative group mb-4">
                <img
                  src={profilePic}
                  alt="Profile"
                  className="w-28 h-28 rounded-full border-2 border-green-600 object-cover cursor-pointer"
                  onClick={() => fileInputRef.current.click()}
                  title="Click to change profile picture"
                />
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleProfilePicChange}
                />
                <span className="absolute bottom-2 right-2 bg-white text-green-700 rounded-full p-1 text-xs opacity-0 group-hover:opacity-100 transition">
                  ✏️
                </span>
              </div>
              <h2 className="text-xl font-bold text-green-800 mb-1">
                {exentionagent.firstname} {exentionagent.lastname}
              </h2>
              <p className="text-green-700 font-semibold mb-2">
                {exentionagent.designation}
              </p>
              <div className="w-full space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 font-medium">Email:</span>
                  <span className="text-green-900 text-right">
                    {exentionagent.email}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 font-medium">Phone:</span>
                  <span className="text-green-900 text-right">
                    {exentionagent.phone}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 font-medium">Location:</span>
                  <span className="text-green-900 text-right">
                    {exentionagent.location}
                  </span>
                </div>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-gray-600 font-medium">
                    Designation:
                  </span>
                  <span className="text-gray-900 text-bold italic">
                    {exentionagent.designation}
                  </span>
                </div>
                <div className="flex flex-col text-center mt-3">
                  <span className="text-gray-600 font-medium">Description</span>
                  <span className="text-gray-900 text-bold italic">
                    {exentionagent.description}
                  </span>
                </div>
              </div>
            </div>

            {/* Exention Agent Information Form */}
            <form
              className="bg-white shadow-lg p-8 rounded-xl w-full max-w-3xl space-y-5"
              onSubmit={handleSubmit}
            >
              <h2 className="text-xl font-bold text-green-800 mb-4 text-center">
                Update exentionagent Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* ...existing form fields... */}
                <div>
                  <label className="block text-green-800 font-semibold mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstname"
                    value={exentionagent.firstname}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                    required
                  />
                </div>
                <div>
                  <label className="block text-green-800 font-semibold mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastname"
                    value={exentionagent.lastname}
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
                    value={exentionagent.email}
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
                    type="tel"
                    name="phone"
                    value={exentionagent.phone}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                    required
                  />
                </div>
                <div>
                  <label className="block text-green-800 font-semibold mb-1">
                    Gender
                  </label>
                  <select
                    name="gender"
                    value={exentionagent.gender}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                    required
                  >
                    <option value="">Select</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
                <div>
                  <label className="block text-green-800 font-semibold mb-1">
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    name="dob"
                    value={exentionagent.dob}
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
                    value={exentionagent.address}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                    required
                  />
                </div>
                <div>
                  <label className="block text-green-800 font-semibold mb-1">
                    State
                  </label>
                  <input
                    type="text"
                    name="state"
                    value={exentionagent.state}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                    required
                  />
                </div>
                <div>
                  <label className="block text-green-800 font-semibold mb-1">
                    LGA
                  </label>
                  <input
                    type="text"
                    name="lga"
                    value={exentionagent.lga}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                    required
                  />
                </div>
                <div>
                  <label className="block text-green-800 font-semibold mb-1">
                    Farm Size
                  </label>
                  <input
                    type="text"
                    name="farmSize"
                    value={exentionagent.farmSize}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                    required
                  />
                </div>
                <div>
                  <label className="block text-green-800 font-semibold mb-1">
                    Crops Grown
                  </label>
                  <input
                    type="text"
                    name="crops"
                    value={exentionagent.crops}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                    required
                  />
                </div>
                {/* --- New Designation Field --- */}
                <div>
                  <label className="block text-green-800 font-semibold mb-1">
                    Designation
                  </label>
                  <input
                    type="text"
                    name="designation"
                    value={exentionagent.designation}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                    required
                  />
                </div>
                {/* --- New Description Field --- */}
                <div className="md:col-span-2">
                  <label className="block text-green-800 font-semibold mb-1">
                    Description
                  </label>
                  <textarea
                    name="description"
                    value={exentionagent.description}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                    rows={3}
                    required
                  />
                </div>
                <div>
                  <label className="block text-green-800 font-semibold mb-1">
                    BVN
                  </label>
                  <input
                    type="text"
                    name="bvn"
                    value={exentionagent.bvn}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                  />
                </div>
                <div>
                  <label className="block text-green-800 font-semibold mb-1">
                    NIN
                  </label>
                  <input
                    type="text"
                    name="nin"
                    value={exentionagent.nin}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                  />
                </div>
                <div>
                  <label className="block text-green-800 font-semibold mb-1">
                    Bank Name
                  </label>
                  <input
                    type="text"
                    name="bank"
                    value={exentionagent.bank}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                  />
                </div>
                <div>
                  <label className="block text-green-800 font-semibold mb-1">
                    Account Number
                  </label>
                  <input
                    type="text"
                    name="accountNumber"
                    value={exentionagent.accountNumber}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-green-700 text-white py-3 rounded-lg font-semibold hover:bg-green-900 transition mt-4"
              >
                Update Account
              </button>
            </form>
          </div>
        </main>
      </div>

      {/* Success Modal */}
      {showSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-xl shadow-2xl p-8 max-w-sm w-full flex flex-col items-center relative">
            <button
              className="absolute top-2 right-3 text-gray-500 hover:text-red-600 text-xl font-bold"
              onClick={handleCloseSuccess}
              aria-label="Close"
            >
              &times;
            </button>
            <svg
              className="w-16 h-16 text-green-600 mb-4"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="2"
                fill="#dcfce7"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12l2 2 4-4"
                stroke="#16a34a"
                strokeWidth="2.5"
                fill="none"
              />
            </svg>
            <h2 className="text-xl font-bold text-green-700 mb-2 text-center">
              Profile Updated!
            </h2>
            <p className="text-gray-700 text-center mb-4">
              Your exentionagent profile has been updated successfully.
            </p>
            <button
              onClick={handleCloseSuccess}
              className="bg-green-700 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-800 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default ExtensionAgent;
