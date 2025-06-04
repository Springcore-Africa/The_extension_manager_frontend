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
    <div className="relative h-screen w-full">
      {/* Background Image */}
      <img
        src={bgFarm}
        alt="Background farm"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Login content */}
      <div className="relative z-20 flex items-center justify-center h-full">
        <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg max-w-md w-full">
          <h1 className="text-2xl font-bold mb-4 text-center">LOGIN</h1>
          <p className='text-sm mb-4 '>Dont have an account <Link to='/sign_up' className='text-green-600 hover:underline'>Sign Up</Link></p>
          <form className="space-y-4 relative">
            {/* Email Input */}
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 border border-gray-300 rounded"
            />

            {/* Password Input with Toggle */}
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                className="w-full p-2 border border-gray-300 rounded pr-10"
              />
              <img
                src={showPassword ? show : hide}
                alt={showPassword ? "Hide password" : "Show password"}
                onClick={togglePassword}
                className="absolute right-2 top-2 w-6 h-6 cursor-pointer"
              />
            </div>

            {/* Submit Button */}
            <Link to='/Dashboard'>
            <button
              type="submit"
              className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700 transition"
            >
              Sign In
            </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
