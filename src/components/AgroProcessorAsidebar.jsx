import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/logo.jpeg";
import FarmerDp from "../assets/farmer-dp.jpeg";
import {
  FaHome,
  FaUser,
  FaIndustry,
  FaFileAlt,
  FaSeedling,
} from "react-icons/fa";
import { MdManageAccounts } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";

function AgroProcessorAsidebar() {
  const [sidebar, setSidebar] = useState(false);
  const location = useLocation();

  const handleSidebar = () => setSidebar((prev) => !prev);

  const navLinks = [
    { to: "/AgroProcessorDashboard", label: "Home", icon: <FaHome /> },
    { to: "/AgroProcessor/Aprofile", label: "My Profile", icon: <FaUser /> },
    { to: "/AgroProcessor/Areport", label: "Report", icon: <FaFileAlt /> },
    { to: "/AgroProcessor/Aproducts", label: "Products", icon: <FaIndustry /> },
    { to: "/AgroProcessor/Aagribusiness", label: "Agri-Business", icon: <FaSeedling /> },
    { to: "/AgroProcessor/Aextensionworkers", label: "Extension Worker", icon: <MdManageAccounts /> },
  ];

  return (
    <div className="flex min-h-screen bg-green-50">
      {/* Hamburger for mobile */}
      <button
        className="md:hidden absolute top-4 left-4 z-30 bg-white p-2 rounded-lg shadow-lg"
        onClick={handleSidebar}
        aria-label="Open sidebar"
      >
        <span className="block w-6 h-0.5 bg-green-700 rounded mb-1"></span>
        <span className="block w-6 h-0.5 bg-green-700 rounded mb-1"></span>
        <span className="block w-6 h-0.5 bg-green-700 rounded"></span>
      </button>

      {/* Sidebar */}
      <aside
        className={`
          fixed inset-y-0 left-0 z-40 w-64 bg-green-700 text-white shadow-lg
          transform transition-transform duration-300 flex flex-col
          md:static md:translate-x-0 md:shadow-none md:flex
          ${sidebar ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <button
          className="text-3xl absolute top-4 right-6 text-white hover:text-green-900 md:hidden"
          onClick={handleSidebar}
        >
          &times;
        </button>

        <div className="mb-8 ml-2 mt-2">
          <Link to="/" className="flex items-center">
            <img
              src={Logo}
              alt="Logo"
              className="w-12 h-12 object-cover rounded-lg border-2 border-green-600 shadow-md bg-white"
            />
          </Link>
        </div>

        <div className="flex-1 flex flex-col justify-between">
          <div>
            <div className="flex flex-col items-center mb-6 relative group">
              <img
                src={FarmerDp}
                alt="Profile"
                className="rounded-full border-white border-2 w-16 h-16 mb-2 object-cover cursor-pointer"
                title="Click to change profile picture"
              />
              <h2 className="text-lg font-bold text-center">Jane Doe</h2>
              <p className="text-sm text-center">Agro-Processor</p>
            </div>
            <nav className="flex flex-col gap-2 mb-8">
              {navLinks.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`flex items-center gap-2 w-full text-left font-semibold cursor-pointer rounded-md px-3 py-1.5 transition
                    ${
                      location.pathname === item.to
                        ? "bg-gray-50 text-green-700 shadow font-bold"
                        : "hover:bg-green-500 hover:text-yellow-300 duration-200"
                    }
                    group
                  `}
                  onClick={() => setSidebar(false)}
                >
                  <span className="transition-colors duration-200 group-hover:text-yellow-300">
                    {item.icon}
                  </span>
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
          <div>
            <button
              className="w-full flex items-center justify-center gap-2 text-white border cursor-pointer border-transparent px-2 mb-4 bg-red-600 py-1 rounded-lg font-semibold hover:bg-red-700 hover:shadow-md transition text-sm sm:text-base duration-200"
            >
              <FiLogOut className="text-lg" />
              Logout
            </button>
          </div>
        </div>
      </aside>

      {/* Overlay */}
      {sidebar && (
        <div
          className="fixed inset-0 bg-black/70 bg-opacity-40 z-30 md:hidden"
          onClick={handleSidebar}
        />
      )}
    </div>
  );
}

export default AgroProcessorAsidebar;
