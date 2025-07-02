import DashboardAsideBar from "../components/DashboardAsideBar";

const DisplayReport = () => {

  return (
    <div className="flex min-h-screen h-screen overflow-hidden bg-green-50">
      {/* Sidebar Component */}
      <DashboardAsideBar />

      {/* Main Content */}
      <main className="flex-1 md:p-12 bg-green-700 border-green-700 overflow-y-auto">
        <div className="bg-green-50 rounded-2xl border-2 min-h-screen border-white mx-0 px-6 py-16 sm:py-10 flex flex-col items-center justify-center gap-8">
          <h1 className="text-2xl font-bold text-green-800 mb-4">Report Details</h1>
          <div className="bg-white shadow-lg p-6 rounded-lg w-full max-w-3xl">
            <p className="text-gray-600">This is where the report details will be displayed.</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DisplayReport;
