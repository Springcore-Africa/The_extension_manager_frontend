import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import Bgimg from "../assets/logo.jpeg";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleSidebar = () => setSidebar(!sidebar);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // For active link styling
  const navLinkClass =
  "relative inline-flex items-center hover:text-green-200 transition px-2 py-1 rounded-xl group";
const navLinkActiveClass = "text-white bg-none font-bold shadow";

  return (
    <>
      <style>
        {`
        .nav-underline {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          height: 2px;
          background: #22c55e;
          width: 100%;
          transform: scaleX(0);
          transform-origin: center;
          transition: transform 0.3s cubic-bezier(.4,0,.2,1);
          pointer-events: none;
        }
        .group:hover .nav-underline,
        .group:focus .nav-underline {
          transform: scaleX(1);
        }
        .nav-underline-active {
          transform: scaleX(1);
          background: #fff;
        }
      `}
      </style>
      <nav
        className={`w-full pl-4 sm:pl-0 px-6 py-4 flex items-center justify-between fixed top-0 left-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-green-800 shadow-xl text-white"
          : "bg-transparent text-white"
        }`}
      >
        {/* Logo */}
        <Link to="/" className="flex sm:pl-18">
        <img
          src={Bgimg}
          alt="Logo"
          className="w-12 h-12 object-cover rounded-lg border-2 border-green-600 shadow-md bg-white"
          style={{ minWidth: 48, minHeight: 48 }}
        />
      </Link>

        {/* Nav Links */}
        <ul className="hidden md:flex gap-10 text-lg font-medium flex-1 justify-center">
          <li>
            <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `${navLinkClass} ${isActive ? navLinkActiveClass : ""}`
            }
          >
            <span className="relative">
              Home
              <span
                className={`nav-underline ${
                  window.location.pathname === "/" ? "nav-underline-active" : ""
                }`}
              ></span>
            </span>
          </NavLink>
          </li>
          <li>
            <NavLink
            to="/products"
            className={({ isActive }) =>
              `${navLinkClass} ${isActive ? navLinkActiveClass : ""}`
            }
          >
            <span className="relative">
              Products
              <span
                className={`nav-underline ${
                  window.location.pathname === "/products"
                    ? "nav-underline-active"
                    : ""
                }`}
              ></span>
            </span>
          </NavLink>
          </li>
          <li>
            <NavLink
            to="/about"
            className={({ isActive }) =>
              `${navLinkClass} ${isActive ? navLinkActiveClass : ""}`
            }
          >
            <span className="relative">
              About
              <span
                className={`nav-underline ${
                  window.location.pathname === "/about"
                    ? "nav-underline-active"
                    : ""
                }`}
              ></span>
            </span>
          </NavLink>
          </li>
          <li>
            <NavLink
            to="/contact"
            className={({ isActive }) =>
              `${navLinkClass} ${isActive ? navLinkActiveClass : ""}`
            }
          >
            <span className="relative">
              Contact
              <span
                className={`nav-underline ${
                  window.location.pathname === "/contact"
                    ? "nav-underline-active"
                    : ""
                }`}
              ></span>
            </span>
          </NavLink>
          </li>
        </ul>

        {/* Hamburger Right */}
        <div
          className="flex flex-col gap-1 md:hidden cursor-pointer"
          onClick={handleSidebar}
        >
          <span className="w-6 h-0.5 bg-white rounded"></span>
          <span className="w-6 h-0.5 bg-white rounded"></span>
          <span className="w-6 h-0.5 bg-white rounded"></span>
        </div>
      </nav>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          sidebar ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          className="close-btn text-3xl absolute top-4 right-6 text-green-700 hover:text-green-900"
          onClick={handleSidebar}
        >
          &times;
        </button>
        <ul className="flex flex-col mt-20 gap-8 px-8 text-green-700 text-lg font-semibold">
          <li>
            <NavLink
              to="/"
              end
              onClick={handleSidebar}
              className={({ isActive }) =>
                `transition px-2 py-1 rounded ${
                  isActive
                    ? "bg-green-100 text-green-800 font-bold"
                    : "hover:text-green-500"
                }`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              onClick={handleSidebar}
              className={({ isActive }) =>
                `transition px-2 py-1 rounded ${
                  isActive
                    ? "bg-green-100 text-green-800 font-bold"
                    : "hover:text-green-500"
                }`
              }
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              onClick={handleSidebar}
              className={({ isActive }) =>
                `transition px-2 py-1 rounded ${
                  isActive
                    ? "bg-green-100 text-green-800 font-bold"
                    : "hover:text-green-500"
                }`
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              onClick={handleSidebar}
              className={({ isActive }) =>
                `transition px-2 py-1 rounded ${
                  isActive
                    ? "bg-green-100 text-green-800 font-bold"
                    : "hover:text-green-500"
                }`
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </aside>

      {/* Overlay */}
      {sidebar && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={handleSidebar}
        ></div>
      )}
    </>
  );
}

export default Navbar;
