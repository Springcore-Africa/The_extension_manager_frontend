import { useState, useRef } from "react";
import ExtensionAgtDp from "../assets/extension-agt.jfif";
import DashboardAsideBar from "../components/DashboardAsideBar";

function Profile() {
  const [profilePic, setProfilePic] = useState(ExtensionAgtDp);
  const fileInputRef = useRef(null);

  // Extension Manager Profile Data
  const [extensionagt, setExtensionAgt] = useState({
    firstname: "Olaitan",
    lastname: "Jr.",
    email: "olaitan-jr.100@email.com",
    phone: "+234 123 456 7890",
    location: "Lagos, Nigeria",
    designation: "Extension Manager",
    description:
      "Experienced Extension Manager with a passion for improving agricultural practices and supporting farmers in sustainable farming methods.",
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
    setExtensionAgt((prev) => ({
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
          <div className="bg-green-50 rounded-2xl border-2 border-white mx-0 flex flex-col lg:flex-row items-start justify-center px-6 py-10 gap-8">
            {/* Extension Agent Profile Card */}
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
                {extensionagt.firstname} {extensionagt.lastname}
              </h2>
              <p className="text-green-700 font-semibold mb-2">
                {extensionagt.designation}
              </p>
              <div className="w-full space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 font-medium">Email:</span>
                  <span className="text-green-900 text-right">
                    {extensionagt.email}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 font-medium">Phone:</span>
                  <span className="text-green-900 text-right">
                    {extensionagt.phone}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 font-medium">Location:</span>
                  <span className="text-green-900 text-right">
                    {extensionagt.location}
                  </span>
                </div>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-gray-600 font-medium">Designation:</span>
                  <span className="text-gray-900 text-bold italic">
                    {extensionagt.designation}
                  </span>
                </div>
                <div className="flex flex-col text-center mt-3">
                  <span className="text-gray-600 font-medium">Description</span>
                  <span className="text-gray-900 text-bold italic">
                    {extensionagt.description}
                  </span>
                </div>
              </div>
            </div>

            {/* Extension Agent Information Form */}
            <form
              className="bg-white shadow-lg p-8 rounded-xl w-full max-w-3xl space-y-5"
              onSubmit={handleSubmit}
            >
              <h2 className="text-xl font-bold text-green-800 mb-4 text-center">
                Update Extension Agent Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-green-800 font-semibold mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstname"
                    value={extensionagt.firstname}
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
                    value={extensionagt.lastname}
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
                    value={extensionagt.email}
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
                    value={extensionagt.phone}
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
                    value={extensionagt.gender}
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
                    value={extensionagt.dob}
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
                    value={extensionagt.address}
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
                    value={extensionagt.state}
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
                    value={extensionagt.lga}
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
                    value={extensionagt.bvn}
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
                    value={extensionagt.nin}
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
                    value={extensionagt.bank}
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
                    value={extensionagt.accountNumber}
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
