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

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFarmingCostForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  return (
    <div className="flex min-h-screen bg-green-50">
      {/* Sidebar Component */}
      <DashboardAsideBar />

      {/* Main Content */}
      <main className="flex-1 md:p-8 bg-green-700 border-green-700">
        <div className="bg-green-50 rounded-2xl border-2 border-white mx-0 px-6 py-10 sm:py-10 flex flex-col items-start justify-center gap-8">

          {/* Corn - Mapping Inspection */}
          <div className="w-full bg-white shadow-lg rounded-xl p-6">
            <h2 className="text-xl font-bold text-start text-green-800 mb-4">
              Corn - Mapping Inspection
            </h2>
            
            </div>

          {/* Farming Cost Form */}
          <form
            className="bg-white shadow-lg p-8 rounded-xl w-full max-w-3xl space-y-5"
            onSubmit={handleSubmit}
          >
            <h2 className="text-xl font-bold text-green-800 mb-4 text-center">
              Farming Cost
            </h2>

            {/* Seed Cost */}
            <div className="flex gap-4">
              <div>
                <input
                  type="text"
                  name="seedPrice"
                  value={farmingCostForm.seedPrice}
                  placeholder="Seed Price"
                  onChange={handleInputChange}
                  className="w-full p-3 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  name="seedQuantity"
                  value={farmingCostForm.seedQuantity}
                  placeholder="Seed Quantity"
                  onChange={handleInputChange}
                  className="w-full p-3 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  name="totalSeedAmount"
                  value={farmingCostForm.totalSeedAmount}
                  placeholder="Total Seed Amount"
                  className="w-full p-3 border border-green-200 rounded-lg bg-gray-100 cursor-not-allowed"
                  readOnly
                  tabIndex={-1}
                />
              </div>
            </div>

            {/* Labor Cost */}
            <div className="flex gap-4">
              <div>
                <input
                  type="text"
                  name="laborPrice"
                  value={farmingCostForm.laborPrice}
                  placeholder="Labor Price"
                  onChange={handleInputChange}
                  className="w-full p-3 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  name="laborQuantity"
                  value={farmingCostForm.laborQuantity}
                  placeholder="Labor Quantity"
                  onChange={handleInputChange}
                  className="w-full p-3 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  name="totalLaborAmount"
                  value={farmingCostForm.totalLaborAmount}
                  placeholder="Total Labor Amount"
                  className="w-full p-3 border border-green-200 rounded-lg bg-gray-100 cursor-not-allowed"
                  readOnly
                  tabIndex={-1}
                />
              </div>
            </div>

            {/* Fertilizer Cost */}
            <div className="flex gap-4">
              <div>
                <input
                  type="text"
                  name="fertilizerPrice"
                  value={farmingCostForm.fertilizerPrice}
                  placeholder="Fertilizer Price"
                  onChange={handleInputChange}
                  className="w-full p-3 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  name="fertilizerQuantity"
                  value={farmingCostForm.fertilizerQuantity}
                  placeholder="Fertilizer Quantity"
                  onChange={handleInputChange}
                  className="w-full p-3 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  name="totalFertilizerAmount"
                  value={farmingCostForm.totalFertilizerAmount}
                  placeholder="Total Fertilizer Amount"
                  className="w-full p-3 border border-green-200 rounded-lg bg-gray-100 cursor-not-allowed"
                  readOnly
                  tabIndex={-1}
                />
              </div>
            </div>

            {/* Herbicide Cost */}
            <div className="flex gap-4">
              <div>
                <input
                  type="text"
                  name="herbicidePrice"
                  value={farmingCostForm.herbicidePrice}
                  placeholder="Herbicide Price"
                  onChange={handleInputChange}
                  className="w-full p-3 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  name="herbicideQuantity"
                  value={farmingCostForm.herbicideQuantity}
                  placeholder="Herbicide Quantity"
                  onChange={handleInputChange}
                  className="w-full p-3 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  name="totalHerbicideAmount"
                  value={farmingCostForm.totalHerbicideAmount}
                  placeholder="Total Herbicide Amount"
                  className="w-full p-3 border border-green-200 rounded-lg bg-gray-100 cursor-not-allowed"
                  readOnly
                  tabIndex={-1}
                />
              </div>
            </div>

            {/* Pesticide Cost */}
            <div className="flex gap-4">
              <div>
                <input
                  type="text"
                  name="pesticidePrice"
                  value={farmingCostForm.pesticidePrice}
                  placeholder="Pesticide Price"
                  onChange={handleInputChange}
                  className="w-full p-3 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  name="pesticideAmount"
                  value={farmingCostForm.pesticideAmount}
                  placeholder="Pesticide Amount"
                  onChange={handleInputChange}
                  className="w-full p-3 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  name="totalPesticideAmount"
                  value={farmingCostForm.totalPesticideAmount}
                  placeholder="Total Pesticide Amount"
                  className="w-full p-3 border border-green-200 rounded-lg bg-gray-100 cursor-not-allowed"
                  readOnly
                  tabIndex={-1}
                />
              </div>
            </div>

            {/* Others Cost */}
            <div className="flex gap-4">
              <div>
                <input
                  type="text"
                  name="othersPrice"
                  value={farmingCostForm.othersPrice}
                  placeholder="Others Price"
                  onChange={handleInputChange}
                  className="w-full p-3 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  name="othersQuantity"
                  value={farmingCostForm.othersQuantity}
                  placeholder="Others Quantity"
                  onChange={handleInputChange}
                  className="w-full p-3 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  name="totalOthersAmount"
                  value={farmingCostForm.totalOthersAmount}
                  placeholder="Total Others Amount"
                  className="w-full p-3 border border-green-200 rounded-lg bg-gray-100 cursor-not-allowed"
                  readOnly
                  tabIndex={-1}
                />
              </div>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="w-52 bg-green-700 text-white py-1.5 rounded-lg font-semibold hover:bg-green-900 transition mt-4"
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
      </main>
    </div>
  );
}

export default Farm;
