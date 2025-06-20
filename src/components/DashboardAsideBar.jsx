import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/logo.jpeg";
import FarmerDp from "../assets/farmer-dp.jpeg";
import {
  FaHome,
  FaUser,
  FaMoneyBillWave,
  FaFileAlt,
  FaSeedling,
} from "react-icons/fa";
import { GiFarmTractor } from "react-icons/gi";
import { MdManageAccounts } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";

function DashboardAsideBar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  // Sidebar Navlinks
  const navLinks = [
    { to: "/farmersdashboard", label: "Home", icon: <FaHome /> },
    { to: "/profile", label: "My Profile", icon: <FaUser /> },
    { to: "/myfarms", label: "My Farms", icon: <GiFarmTractor /> },
    {
      to: "/extension-manager",
      label: "My Extension Agent",
      icon: <MdManageAccounts />,
    },
    { to: "/finance", label: "My Finance", icon: <FaMoneyBillWave /> },
    { to: "/reports", label: "Reports", icon: <FaFileAlt /> },
    { to: "/agribusiness", label: "Agri-Business", icon: <FaSeedling /> },
  ];

  return (
    <>
      {/* Hamburger menu for mobile */}
      <button
        className="md:hidden absolute top-4 left-4 z-30 bg-white p-2 rounded-lg shadow-lg"
        onClick={() => setSidebarOpen(true)}
        aria-label="Open sidebar"
      >
        <svg
          className="w-6 h-6 text-green-700"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-green-700 text-white flex-col p-2 transform transition-transform duration-300
          md:static md:flex md:translate-x-0
          ${sidebarOpen ? "flex translate-x-0" : "hidden -translate-x-full"}
        `}
      >
        {/* Close button for mobile */}
        <button
          className="md:hidden absolute top-4 right-4 text-white bg-green-800 rounded-full p-1"
          onClick={() => setSidebarOpen(false)}
          aria-label="Close sidebar"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Logo */}
        <div className="mb-8 ml-2 mt-2">
          <Link to="/" className="flex items-center">
            <img
              src={Logo}
              alt="Logo"
              className="w-12 h-12 object-cover rounded-lg border-2 border-green-600 shadow-md bg-white"
              style={{ minWidth: 48, minHeight: 48 }}
            />
          </Link>
        </div>

        {/* Sidebar main content */}
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <div className="flex flex-col items-center mb-6 relative group">
              <img
                src={FarmerDp}
                alt="Profile"
                className="rounded-full border-white border-2 w-16 h-16 mb-2 object-cover cursor-pointer"
                onClick={() =>
                  document.getElementById("profilePicInput").click()
                }
                title="Click to change profile picture"
              />

              <h2 className="text-lg font-bold text-center">Elvis Nwachukwu</h2>
              <p className="text-sm text-center">Farmer</p>
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
                        : "hover:bg-gray-200 hover:text-green-700"
                    }
                  `}
                  onClick={() => setSidebarOpen(false)}
                >
                  {item.icon}
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
          <div>
            <button className="w-full flex items-center justify-center gap-2 text-white border cursor-pointer border-transparent px-2 mb-4 bg-red-600 py-1 rounded-lg font-semibold hover:bg-red-500 hover:text-white transition text-sm sm:text-base">
              <FiLogOut className="text-lg" />
              Logout
            </button>
          </div>
        </div>
      </aside>

      {/* Overlay for mobile sidebar */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/70 bg-opacity-40 z-30 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </>
  );
}

export default DashboardAsideBar;
