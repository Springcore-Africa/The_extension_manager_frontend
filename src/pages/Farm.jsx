import { useState } from "react";
import DashboardAsideBar from "../components/DashboardAsideBar";

function Farm() {
  const [farmingCostForm, setFarmingCostForm] = useState({
    seedPrice: "",
    seedQuantity: "",
    totalSeedAmount: "",
    laborPrice: "",
    laborQuantity: "",
    totalLaborAmount: "",
    fertilizerPrice: "",
    fertilizerQuantity: "",
    totalFertilizerAmount: "",
    herbicidePrice: "",
    herbicideQuantity: "",
    totalHerbicideAmount: "",
    pesticidePrice: "",
    pesticideAmount: "",
    totalPesticideAmount: "",
    othersPrice: "",
    othersQuantity: "",
    totalOthersAmount: "",
  });

  const [showModal, setShowModal] = useState(false);

  // For inspection type and completed checkbox
  const [inspection, setInspection] = useState({
    inspectionType: "",
    inspectionCompleted: false,
  });

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name === "inspectionType" || name === "inspectionCompleted") {
      setInspection((prev) => ({
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      }));
    } else {
      setFarmingCostForm((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  return (
    <>
      <div className="flex min-h-screen bg-green-50">
        {/* Sidebar Component */}
        <DashboardAsideBar />

        {/* Main Content */}
        <main className="flex-1 md:p-4 bg-green-700 border-green-700">
          <div className="bg-green-50 rounded-2xl border-2 border-white mx-auto px-2 sm:px-4 py-4 sm:py-8 flex flex-col items-center justify-center gap-8 min-h-screen w-full">
            {/* Corn - Mapping Inspection */}
            <div className="w-full max-w-4xl bg-white shadow-lg rounded-xl p-2 sm:p-6 mt-13 sm:mt-2">
              <h2 className="text-lg sm:text-xl font-bold text-start text-gray-700 mb-4">
                Corn - Mapping Inspection
              </h2>

              {/* Crop Info */}
              <div className="border-2 border-green-100 rounded-lg p-2 sm:p-4 mb-8">
                <h1 className="text-md font-bold text-green-600 mb-3">
                  General Details
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-4 md:gap-6 mb-6">
                  <div className="bg-white rounded-xl shadow p-2">
                    <p className="text-gray-500">Field Number</p>
                    <h2 className="text-lg font-bold text-gray-700">5501B</h2>
                  </div>
                  <div className="bg-white rounded-xl shadow p-2">
                    <p className="text-gray-500">Field Name</p>
                    <h2 className="text-lg font-bold text-gray-700">
                      Newcastle
                    </h2>
                  </div>
                  <div className="bg-white rounded-xl shadow p-2">
                    <p className="text-gray-500">Pedigree</p>
                    <h2 className="text-lg font-bold text-gray-700">
                      TB6454GJZ x TR5675
                    </h2>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-4 md:gap-6 mb-8">
                  <div className="bg-white rounded-xl shadow p-2">
                    <p className="text-gray-500">Seed Class</p>
                    <h2 className="text-lg font-bold text-gray-700">
                      Certified
                    </h2>
                  </div>
                  <div className="bg-white rounded-xl shadow p-2">
                    <p className="text-gray-500">Acres</p>
                    <h2 className="text-lg font-bold text-gray-700">53</h2>
                  </div>
                  <div className="bg-white rounded-xl shadow p-2">
                    <p className="text-gray-500">Variety</p>
                    <h2 className="text-lg font-bold text-gray-700">ICA1234</h2>
                  </div>
                </div>
              </div>

              {/* Inspection Type, Checkbox, and Farming Costs Form in the same box */}
              <form
                className="bg-white p-2 sm:p-6 border-2 border-green-100 rounded-lg mb-8 w-full max-w-3xl space-y-5"
                onSubmit={handleSubmit}
              >
                <div className="mb-6">
                  <h1 className="text-md font-bold text-green-600 mb-3">
                    Inspection Type
                  </h1>
                  <select
                    name="inspectionType"
                    value={inspection.inspectionType}
                    onChange={handleInputChange}
                    className="w-full sm:w-80 p-3 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 mb-3"
                    required
                  >
                    <option value="">Select Inspection Type</option>
                    <option value="Pre-planting">Pre-planting</option>
                    <option value="Mid-season">Mid-season</option>
                    <option value="Harvest">Harvest</option>
                    <option value="Post-harvest">Post-harvest</option>
                  </select>
                  <div className="flex items-center gap-2 mt-2">
                    <input
                      type="checkbox"
                      id="inspection-completed"
                      name="inspectionCompleted"
                      checked={inspection.inspectionCompleted}
                      onChange={handleInputChange}
                      className="accent-green-600 cursor-pointer"
                    />
                    <label
                      htmlFor="inspection-completed"
                      className="text-green-800"
                    >
                      Inspection Completed
                    </label>
                  </div>
                </div>

                <h1 className="text-md font-bold text-green-600 mb-3">
                  Farming Costs
                </h1>

                {/* Seed Cost */}
                <div className="flex flex-col sm:flex-row gap-2 mb-2">
                  <input
                    type="text"
                    name="seedPrice"
                    value={farmingCostForm.seedPrice}
                    placeholder="Seed Price"
                    onChange={handleInputChange}
                    className="flex-1 p-3 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                    required
                  />
                  <input
                    type="text"
                    name="seedQuantity"
                    value={farmingCostForm.seedQuantity}
                    placeholder="Seed Quantity"
                    onChange={handleInputChange}
                    className="flex-1 p-3 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                    required
                  />
                  <input
                    type="text"
                    name="totalSeedAmount"
                    value={farmingCostForm.totalSeedAmount}
                    placeholder="Total Seed Amount"
                    className="flex-1 p-3 border border-green-200 rounded-lg bg-gray-100 cursor-not-allowed mb-5 sm:mb-2"
                    readOnly
                    tabIndex={-1}
                  />
                </div>

                {/* Labor Cost */}
                <div className="flex flex-col sm:flex-row gap-2 mb-2">
                  <input
                    type="text"
                    name="laborPrice"
                    value={farmingCostForm.laborPrice}
                    placeholder="Labor Price"
                    onChange={handleInputChange}
                    className="flex-1 p-3 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                    required
                  />
                  <input
                    type="text"
                    name="laborQuantity"
                    value={farmingCostForm.laborQuantity}
                    placeholder="Labor Quantity"
                    onChange={handleInputChange}
                    className="flex-1 p-3 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                    required
                  />
                  <input
                    type="text"
                    name="totalLaborAmount"
                    value={farmingCostForm.totalLaborAmount}
                    placeholder="Total Labor Amount"
                    className="flex-1 p-3 border border-green-200 rounded-lg bg-gray-100 cursor-not-allowed mb-5 sm:mb-2"
                    readOnly
                    tabIndex={-1}
                  />
                </div>

                {/* Fertilizer Cost */}
                <div className="flex flex-col sm:flex-row gap-2 mb-2">
                  <input
                    type="text"
                    name="fertilizerPrice"
                    value={farmingCostForm.fertilizerPrice}
                    placeholder="Fertilizer Price"
                    onChange={handleInputChange}
                    className="flex-1 p-3 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                    required
                  />
                  <input
                    type="text"
                    name="fertilizerQuantity"
                    value={farmingCostForm.fertilizerQuantity}
                    placeholder="Fertilizer Quantity"
                    onChange={handleInputChange}
                    className="flex-1 p-3 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                    required
                  />
                  <input
                    type="text"
                    name="totalFertilizerAmount"
                    value={farmingCostForm.totalFertilizerAmount}
                    placeholder="Total Fertilizer Amount"
                    className="flex-1 p-3 border border-green-200 rounded-lg bg-gray-100 cursor-not-allowed mb-5 sm:mb-2"
                    readOnly
                    tabIndex={-1}
                  />
                </div>

                {/* Herbicide Cost */}
                <div className="flex flex-col sm:flex-row gap-2 mb-2">
                  <input
                    type="text"
                    name="herbicidePrice"
                    value={farmingCostForm.herbicidePrice}
                    placeholder="Herbicide Price"
                    onChange={handleInputChange}
                    className="flex-1 p-3 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                    required
                  />
                  <input
                    type="text"
                    name="herbicideQuantity"
                    value={farmingCostForm.herbicideQuantity}
                    placeholder="Herbicide Quantity"
                    onChange={handleInputChange}
                    className="flex-1 p-3 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                    required
                  />
                  <input
                    type="text"
                    name="totalHerbicideAmount"
                    value={farmingCostForm.totalHerbicideAmount}
                    placeholder="Total Herbicide Amount"
                    className="flex-1 p-3 border border-green-200 rounded-lg bg-gray-100 cursor-not-allowed mb-5 sm:mb-2"
                    readOnly
                    tabIndex={-1}
                  />
                </div>

                {/* Pesticide Cost */}
                <div className="flex flex-col sm:flex-row gap-2 mb-2">
                  <input
                    type="text"
                    name="pesticidePrice"
                    value={farmingCostForm.pesticidePrice}
                    placeholder="Pesticide Price"
                    onChange={handleInputChange}
                    className="flex-1 p-3 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                    required
                  />
                  <input
                    type="text"
                    name="pesticideAmount"
                    value={farmingCostForm.pesticideAmount}
                    placeholder="Pesticide Amount"
                    onChange={handleInputChange}
                    className="flex-1 p-3 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                    required
                  />
                  <input
                    type="text"
                    name="totalPesticideAmount"
                    value={farmingCostForm.totalPesticideAmount}
                    placeholder="Total Pesticide Amount"
                    className="flex-1 p-3 border border-green-200 rounded-lg bg-gray-100 cursor-not-allowed mb-5 sm:mb-2"
                    readOnly
                    tabIndex={-1}
                  />
                </div>

                {/* Others Cost */}
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="text"
                    name="othersPrice"
                    value={farmingCostForm.othersPrice}
                    placeholder="Others Price"
                    onChange={handleInputChange}
                    className="flex-1 p-3 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                    required
                  />
                  <input
                    type="text"
                    name="othersQuantity"
                    value={farmingCostForm.othersQuantity}
                    placeholder="Others Quantity"
                    onChange={handleInputChange}
                    className="flex-1 p-3 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                    required
                  />
                  <input
                    type="text"
                    name="totalOthersAmount"
                    value={farmingCostForm.totalOthersAmount}
                    placeholder="Total Others Amount"
                    className="flex-1 p-3 border border-green-200 rounded-lg bg-gray-100 cursor-not-allowed mb-5 sm:mb-2"
                    readOnly
                    tabIndex={-1}
                  />
                </div>

                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="w-full sm:w-52 bg-green-700 text-white py-2 rounded-lg font-semibold cursor-pointer hover:bg-green-900 transition mt-4"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>

            {/* Success Modal */}
            {showModal && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
                {/* Background image overlay */}
                <div
                  className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=600&q=80')] bg-cover bg-center opacity-40"
                  aria-hidden="true"
                ></div>
                <div className="relative bg-white/90 backdrop-blur-md rounded-xl shadow-lg p-8 w-full max-w-sm text-center">
                  <button
                    className="absolute top-2 right-3 text-gray-500 hover:text-red-600 text-xl font-bold"
                    onClick={() => setShowModal(false)}
                    aria-label="Close"
                  >
                    &times;
                  </button>
                  <h2 className="text-2xl font-bold text-green-700 mb-2">
                    Success!
                  </h2>
                  <p className="text-green-800 mb-4">
                    Farming Cost has been successfully updated!!!
                  </p>
                  <button
                    className="bg-green-700 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-900 transition"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </>
  );
}

export default Farm;