import React, { useState } from 'react';
import bgFarm from '../assets/login-page-img.jpg';
import { Link } from "react-router-dom";
import show from '../assets/show.png';
import hide from '../assets/hide.png';

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <img
        src={bgFarm}
        alt="Background farm"
        className="absolute inset-0 w-full h-full object-cover animate-fade-in"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/65 z-10" />

      {/* Login content */}
      <div className="relative z-20 flex items-center justify-center h-full px-4">
        <div className="bg-white/90 backdrop-blur-md p-10 rounded-2xl shadow-2xl max-w-md w-full animate-fade-in-up">
          <h1 className="text-2xl font-bold mb-2 text-center text-green-800 tracking-tight animate-fade-in-down">
            LOGIN
          </h1>
          <p className="text-sm mb-6 text-center animate-fade-in">
            Don&apos;t have an account?{" "}
            <Link
              to="/sign_up"
              className="text-green-700 font-semibold hover:underline hover:text-green-900 transition"
            >
              Sign Up
            </Link>
          </p>
          <form className="space-y-5">
            {/* Email Input */}
            <div>
              <label className="block text-green-800 font-semibold mb-1">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 transition-all duration-300 hover:border-green-400"
                required
              />
            </div>

            {/* Password Input with Toggle */}
            <div>
              <label className="block text-green-800 font-semibold mb-1">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
                  className="w-full p-3 border border-green-200 rounded-lg pr-12 focus:outline-none focus:ring-2 focus:ring-green-400 transition-all duration-300 hover:border-green-400"
                  required
                />
                <img
                  src={showPassword ? show : hide}
                  alt={showPassword ? "Hide password" : "Show password"}
                  onClick={togglePassword}
                  className="absolute right-3 top-3 w-6 h-6 cursor-pointer hover:scale-110 transition"
                />
              </div>
            </div>

            {/* Forgot Password */}
            <div className="flex justify-end">
              <Link to="/resetpassword" className="text-blue-600 text-[15px] hover:underline">
                Forgot Password?
              </Link>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-green-700 text-white py-3 rounded-lg font-semibold hover:bg-green-900 transition shadow hover:scale-105 duration-300"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;