import React, { useState, useRef } from 'react';
import BgFarm from '../assets/wide-farm.jpeg'
import { Link } from 'react-router-dom';

const Auth = () => {
  const [otp, setOtp] = useState(new Array(6).fill(''));
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const inputsRef = useRef([]);

  const handleChange = (element, index) => {
    const value = element.value.replace(/\D/g, ''); // Only digits
    if (!value) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to next input
    if (index < 5 && value) {
      inputsRef.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      const newOtp = [...otp];
      newOtp[index - 1] = '';
      setOtp(newOtp);
      inputsRef.current[index - 1].focus();
    }
  };
  
  return (
    <div className="relative h-screen w-full">
      {/* Background Image */}
      <img
        src={BgFarm}
        alt="Background farm"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* OTP Content */}
      <div className="relative z-20 flex items-center justify-center h-full">
        <div className="bg-white bg-opacity-95 shadow-md rounded-lg p-8 max-w-md w-full">
          <h1 className="text-2xl font-bold text-center mb-6">OTP Verification</h1>

          {message && (
            <p className="text-green-600 text-sm text-center mb-4">{setMessage}</p>
          )}

          <div className="flex justify-between mb-4">
            {otp.map((digit, index) => (
              <input
                key={index}
                type="text"
                inputMode="numeric"
                maxLength="1"
                value={digit}
                placeholder='-'
                onChange={(e) => handleChange(e.target, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                ref={(el) => (inputsRef.current[index] = el)}
                className="w-10 h-12 text-center text-lg border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            ))}
          </div>

          {error && (
            <p className="text-red-500 text-sm mb-4 text-center">{setError}</p>
          )}

          <Link to = "/FarmersDashboard"><button
            className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition mb-4 cursor-pointer"
          >
            Verify OTP
          </button></Link>
         
          <button
            className="w-full text-black  font-semibold text-sm text-center "
          >
            Didn’t receive the code? <span className='text-green-600 cursor-pointer hover:underline'>Resend OTP</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Auth;
