import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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

  return (
    <>
      <nav
        className={`w-full px-6 py-4 flex items-center justify-between fixed top-0 left-0 z-50 transition-colors duration-300 ${
          scrolled ? "bg-green-800 shadow-xl text-white" : "bg-transparent text-white"
        }`}
      >
        {/* Logo */}
        <div className="text-2xl font-bold tracking-wide flex-1 text-left">
          The Extension Manager
          <span className="text-green-500"></span>
        </div>
        {/* Nav Links */}
        <ul className="hidden md:flex gap-10 text-lg font-medium flex-1 justify-center">
          <li>
            <Link to="/" className="hover:text-green-200 transition">
              Home
            </Link>
          </li>
          <li>
            <Link to="/products" className="hover:text-green-200 transition">
              Products
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-green-200 transition">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-green-200 transition">
              Contact
            </Link>
          </li>
        </ul>
        {/* Hamburger Right */}
        <div
          className="flex flex-col gap-1 md:hidden cursor-pointer"
          onClick={handleSidebar}        >
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
            <Link
              to="/"
              onClick={handleSidebar}
              className="hover:text-green-500 transition"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/product"
              onClick={handleSidebar}
              className="hover:text-green-500 transition"
            >
              Product
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              onClick={handleSidebar}
              className="hover:text-green-500 transition"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              onClick={handleSidebar}
              className="hover:text-green-500 transition"
            >
              Contact
            </Link>
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