import { useState, useRef } from "react";
import FarmerDp from "../assets/farmer-dp.jpeg";
import DashboardAsideBar from "../components/DashboardAsideBar";

function Profile() {
  const [profilePic, setProfilePic] = useState(FarmerDp);
  const fileInputRef = useRef(null);

  // Farmer Profile Data
  const [farmer, setFarmer] = useState({
    firstname: "Elvis",
    lastname: "Nwachukwu",
    email: "elvis.nwachukwu@email.com",
    phone: "+234 803 123 4567",
    location: "Enugu, Nigeria",
    designation: "Farmer",
    description:
      "Experienced farmer specializing in maize and yam cultivation. Passionate about sustainable agriculture and community development. Always looking to improve farming techniques and yield. Enjoys sharing knowledge with fellow farmers and participating in agricultural workshops.",
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
    setFarmer((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit logic here
    alert("Account updated successfully!");
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
                {farmer.firstname} {farmer.lastname}
              </h2>
              <p className="text-green-700 font-semibold mb-2">
                {farmer.designation}
              </p>
              <div className="w-full space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 font-medium">Email:</span>
                  <span className="text-green-900 text-right">
                    {farmer.email}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 font-medium">Phone:</span>
                  <span className="text-green-900 text-right">
                    {farmer.phone}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 font-medium">Location:</span>
                  <span className="text-green-900 text-right">
                    {farmer.location}
                  </span>
                </div>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-gray-600 font-medium">Designation:</span>
                  <span className="text-gray-900 text-bold italic">
                    {farmer.designation}
                  </span>
                </div>
                <div className="flex flex-col text-center mt-3">
                  <span className="text-gray-600 font-medium">Description</span>
                  <span className="text-gray-900 text-bold italic">
                    {farmer.description}
                  </span>
                </div>
              </div>
            </div>

            {/* Farmer Information Form */}
            <form
              className="bg-white shadow-lg p-8 rounded-xl w-full max-w-3xl space-y-5"
              onSubmit={handleSubmit}
            >
              <h2 className="text-xl font-bold text-green-800 mb-4 text-center">
                Update Farmer Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-green-800 font-semibold mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstname"
                    value={farmer.firstname}
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
                    value={farmer.lastname}
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
                    value={farmer.email}
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
                    value={farmer.phone}
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
                    value={farmer.gender}
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
                    value={farmer.dob}
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
                    value={farmer.address}
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
                    value={farmer.state}
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
                    value={farmer.lga}
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
                    value={farmer.farmSize}
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
                    value={farmer.crops}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
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
                    value={farmer.bvn}
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
                    value={farmer.nin}
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
                    value={farmer.bank}
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
                    value={farmer.accountNumber}
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
    </>
  );
}

export default Profile;
