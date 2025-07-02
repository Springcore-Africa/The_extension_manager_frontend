import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import DashboardAsideBar from "../components/DashboardAsideBar";
import FarmImage from "../assets/maize-farm.jpg";
import CornVector from "../assets/corn-vector.png";
import { useFarm } from "../context/FarmContext";
import FarmerDp from "../assets/farmer-dp.jpeg";
import { Link } from "react-router-dom";

function MyFarms() {
  const { farms, addFarm } = useFarm();

  // Modal state
  const [showModal, setShowModal] = useState(false);
  const [newFarm, setNewFarm] = useState({
    name: "",
    location: "",
    size: "",
    crop: "",
    image: "",
  });

  // Handle input change in modal
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewFarm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle farm image change
  const handleFarmImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (ev) => {
        setNewFarm((prev) => ({
          ...prev,
          image: ev.target.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle add farm
const handleAddFarm = (e) => {
  e.preventDefault();
  const newFarmData = {
    ...newFarm,
    image: newFarm.image || FarmImage,
  };

  addFarm(newFarmData);                        // global

  setNewFarm({ name: "", location: "", size: "", crop: "", image: "" });
  setShowModal(false);
};


  return (
    <>
      <div className="flex min-h-screen bg-green-50">
        {/* Asidebar Component on the left */}
        <DashboardAsideBar />

        {/* Main Content */}
        <main className="flex-1 md:p-8 bg-green-700 border-green-700">
          <div className="bg-green-50 rounded-2xl border-2 border-white my-0 p-6 min-h-screen flex flex-col items-center justify-center">
            {farms.length === 0 ? (
              <div className="flex flex-col items-center justify-center w-full h-full py-24">
                {/* Animated agricultural vector image */}
                <div className="mb-6">
                  <img
                    src={CornVector}
                    alt="No farms"
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
                    animation: bounce 1.1s infinite cubic-bezier(.28,.84,.42,1);
                    }`}
                  </style>
                </div>
                <h2 className="text-2xl font-bold text-green-700 mb-2 text-center">
                  You don't have any farms yet.
                </h2>
                <p className="text-gray-600 mb-6 text-center max-w-md">
                  Welcome, you haven't created a farm yet. Click the button
                  below to add your very first farm and start managing your
                  crops.
                </p>
                <button
                  onClick={() => setShowModal(true)}
                  className="bg-green-700 flex items-center gap-2 cursor-pointer text-white py-2 px-6 rounded-lg font-semibold hover:bg-green-600 text-center shadow"
                >
                  <span>Add Farm</span>
                  <FaPlus className="text-base" />
                </button>
              </div>
            ) : (
              <>
                <div className="flex flex-col md:flex-row justify-end items-center mb-8 gap-4 w-full">
                  <button
                    onClick={() => setShowModal(true)}
                    className="bg-green-700 flex items-center gap-2 cursor-pointer text-white py-2 px-4 rounded-lg font-semibold hover:bg-green-600 text-center"
                  >
                    <span>Add Farm</span>
                    <FaPlus className="text-base" />
                  </button>
                </div>
                {/* Farm Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-8 w-full">
                  {farms.map((farm, idx) => (
                    <Link to="/farm" className="block" key={idx}>
                      <div className="bg-white flex-1 shadow p-6 flex flex-col justify-between min-w-[220px] rounded-xl transition-transform duration-200 hover:scale-105 hover:shadow-2xl relative">
                        <div className="flex justify-center mb-4 relative">
                          <img
                            src={farm.image}
                            alt="Farm-img"
                            className="w-90 h-50  rounded-lg border-1 border-green-600 object-cover"
                          />
                          {/* Farmer DP at extreme bottom right */}
                          <img
                            src={FarmerDp}
                            alt="Farmer"
                            className="absolute"
                            style={{
                              width: "56px",
                              height: "56px",
                              right: "21px",
                              bottom: "0",
                              zIndex: 10,
                              clipPath: "circle(50% at 50% 50%)",
                              background: "#fff",
                              border: "3px solid #fff",
                              objectFit: "cover",
                              boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
                            }}
                          />
                        </div>
                         <p className="text-gray-600 font-semibold pb-4 border-b border-green-100 mb-4 text-center">
                           {farm.name}
                         </p>
                         <div className="flex-1 flex flex-col justify-center">
                         <ul className="text-green-800 space-y-3 flex flex-col text-center">
                            <li>{farm.location}</li>
                            <li>{farm.size}</li>
                            <li>{farm.crop}</li>
                          </ul>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Modal */}
          {showModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-green-900/90 via-green-700/80 to-yellow-200/80">
              {/* Add a background image overlay for extra effect */}
              <div
                className="absolute inset-0 bg-cover bg-center opacity-70"
                aria-hidden="true"
              ></div>
              <div className="relative bg-white/90 backdrop-blur-md rounded-xl shadow-2xl p-8 max-w-md w-[370px] sm:w-full">
                <button
                  className="absolute top-2 right-3 text-gray-500 hover:text-red-600 text-xl font-bold"
                  onClick={() => setShowModal(false)}
                  aria-label="Close"
                >
                  &times;
                </button>
                <h2 className="text-lg font-bold text-green-800 mb-4 text-center">
                  Add New Farm
                </h2>
                <form onSubmit={handleAddFarm} className="space-y-4">
                  {/* Farm Image Upload */}
                  <div className="flex flex-col items-center mb-4">
                    <div className="relative group mb-2">
                      <img
                        src={
                          newFarm.image ||
                          "https://via.placeholder.com/112x112?text=Farm"
                        }
                        alt="Farm"
                        className="w-20 h-15 rounded-lg border-2 border-green-600 object-cover cursor-pointer"
                        onClick={() =>
                          document.getElementById("farm-image-input").click()
                        }
                        title="Click to change farm picture"
                      />
                      <input
                        id="farm-image-input"
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleFarmImageChange}
                      />
                      <span className="absolute bottom-2 right-2 bg-white text-green-700 rounded-full p-1 text-xs opacity-0 group-hover:opacity-100 transition">
                        ✏️
                      </span>
                    </div>
                    <span className="text-xs text-gray-500">
                      Click image to update
                    </span>
                  </div>
                  <div>
                    <label className="block text-green-800 font-semibold mb-1">
                      Farm Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={newFarm.name}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-green-800 font-semibold mb-1">
                      Location
                    </label>
                    <input
                      type="text"
                      name="location"
                      value={newFarm.location}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-green-800 font-semibold mb-1">
                      Farm Size
                    </label>
                    <select
                      name="size"
                      value={newFarm.size}
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
                      Crop Planted
                    </label>
                    <input
                      type="text"
                      name="crop"
                      value={newFarm.crop}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-green-700 text-white py-3 rounded-lg font-semibold cursor-pointer hover:bg-green-900 transition mt-2"
                  >
                    Add Farm
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

export default MyFarms;
