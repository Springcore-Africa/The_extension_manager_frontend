import React from "react";
import bgFarm from "../assets/wide-farm.jpeg";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <img
        src={bgFarm}
        alt="Background farm"
        className="absolute inset-0 w-full h-full object-cover animate-fade-in"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/75 z-10" />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 py-16">
        <div className="bg-green-50/90 backdrop-blur-md rounded-2xl shadow-2xl p-10 max-w-5xl w-full animate-fade-in-up">
          <h1 className="text-4xl font-bold text-green-800 mb-4 text-center tracking-tight animate-fade-in-down">
            SIGN UP
          </h1>
          <Link to="/" className="flex justify-center">
            <button className="text-green-700 mb-6 border border-green-600 px-4 py-2 rounded-lg font-semibold hover:bg-green-700 hover:text-white transition text-sm sm:text-base shadow hover:scale-105 duration-300 animate-fade-in-up">
              Go Home
            </button>
          </Link>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Farmer */}
            <div className="p-8 bg-white/90 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 group animate-slide-in-left">
              <h2 className="text-2xl font-bold text-green-700 mb-2 group-hover:text-green-900 transition-colors duration-300">
                As a Farmer 👨‍🌾
              </h2>
              <p className="text-gray-700 mb-4">
                Join our network of empowered farmers and get access to digital tools, expert advice, and market opportunities to grow your farm business.
              </p>
              <Link to="/SignUpComp/Personal">
                <button className="mt-4 border rounded-lg bg-green-700 p-1 px-4 text-white cursor-pointer hover:bg-green-800 transition shadow group-hover:scale-105 duration-300">
                  Sign Up
                </button>
              </Link>
            </div>

            {/* Partner */}
            <div className="p-8 bg-white/90 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 group animate-slide-in-right">
              <h2 className="text-2xl font-bold text-green-700 mb-2 group-hover:text-green-900 transition-colors duration-300">
                As a Partner 🤝
              </h2>
              <p className="text-gray-700 mb-4">
                Collaborate with us to deliver innovative solutions, reach new markets, and make a lasting impact in the agricultural sector.
              </p>
              <button className="mt-4 border rounded-lg bg-green-700 p-1 px-4 text-white cursor-pointer hover:bg-green-800 transition shadow group-hover:scale-105 duration-300">
                Sign Up
              </button>
            </div>

            {/* Associate */}
            <div className="p-8 bg-white/90 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 group animate-slide-in-left">
              <h2 className="text-2xl font-bold text-green-700 mb-2 group-hover:text-green-900 transition-colors duration-300">
                As an Extension Manager 🧑‍💼
              </h2>
              <p className="text-gray-700 mb-4">
                Become a certified digital extension agent, empower farmers, and drive innovation in your community with our training and support.
              </p>
              <button className="mt-4 border rounded-lg bg-green-700 p-1 px-4 text-white cursor-pointer hover:bg-green-800 transition shadow group-hover:scale-105 duration-300">
                Sign Up
              </button>
            </div>

            {/* Investor */}
            <div className="p-8 bg-white/90 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 group animate-slide-in-right">
              <h2 className="text-2xl font-bold text-green-700 mb-2 group-hover:text-green-900 transition-colors duration-300">
                As an Investor 💼
              </h2>
              <p className="text-gray-700 mb-4">
                Invest in the future of agriculture, support sustainable growth, and unlock new opportunities with The Extension Manager.
              </p>
              <Link to="/InvestorsSignup">
                <button className="mt-4 border rounded-lg bg-green-700 p-1 px-4 text-white cursor-pointer hover:bg-green-800 transition shadow group-hover:scale-105 duration-300">
                  Sign Up
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;