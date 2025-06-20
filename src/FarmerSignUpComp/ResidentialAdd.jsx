import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useFormData } from "../context/FormContext";
import farm from '../assets/farm.jpeg';
import one from '../assets/number-1.png';
import two from '../assets/number-2.png';
import three from '../assets/number-3.png';
import four from '../assets/number-4.png';
import five from '../assets/number-5.png';
import tick from '../assets/checkmark.png';

const ResidentialAdd = () => {
  const { updateFormSection } = useFormData();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    address: '',
    state: '',
    city: '',
    postalCode: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.address) newErrors.address = 'Address is required';
    if (!formData.state) newErrors.state = 'Please select a state';
    if (!formData.city) newErrors.city = 'Please select a city';
    if (!formData.postalCode) newErrors.postalCode = 'Postal code is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      updateFormSection('address', formData); // ✅ Save to correct section
      navigate('/SignUpComp/FarmingBg');
    } else {
      alert('Please complete all required fields.');
    }
  };

  return (
    <div className="flex flex-col sm:flex-row h-screen">
      {/* Sidebar */}
      <div className="relative w-full sm:w-1/4 h-[300px] sm:h-full">
        <img src={farm} alt="farm" className="absolute w-full h-full object-cover z-0" />
        <div className="absolute inset-0 bg-black opacity-60 z-10"></div>

        <div className="relative z-20 flex flex-col justify-between h-full p-6 text-white">
          <div>
            <h1 className="text-2xl font-bold mb-1">The Extension Manager</h1>
            <p className="text-sm text-white/80 mb-10">Logo can go in this spot right here</p>

            <div className="space-y-6">
              <span className="flex items-center gap-3">
                <img src={one} alt="1" className="w-6 h-6" />
                <Link to='/SignUpComp/Personal' className="flex items-center gap-2">
                  <span>Personal Information</span>
                  <img src={tick} alt="tick" className="h-5 w-5" />
                </Link>
              </span>
              <span className="flex items-center gap-3">
                <img src={two} alt="2" className="w-6 h-6" />
                <Link to='/SignUpComp/Demograph' className="flex items-center gap-2">
                  <span>Demographic</span>
                  <img src={tick} alt="tick" className="h-5 w-5" />
                </Link>
              </span>
              <span className="flex items-center gap-3 text-white">
                <img src={three} alt="3" className="w-6 h-6" />
                <span className="font-semibold">Residential Address</span>
              </span>
              <span className="flex items-center gap-3 text-white/70">
                <img src={four} alt="4" className="w-6 h-6" />
                <Link to='/SignUpComp/FarmingBg'>Farming Background</Link>
              </span>
              <span className="flex items-center gap-3 text-white/70">
                <img src={five} alt="5" className="w-6 h-6" />
                <Link to='/SignUpComp/RS'>Review and Submit</Link>
              </span>
            </div>

            <Link to='/' className='cursor-pointer'>
              <button className="text-green-700 mt-6 border border-green-600 px-2 py-1 rounded-lg font-semibold hover:bg-green-100 transition text-sm sm:text-base">
                Go Home
              </button>
            </Link>
          </div>

          <p className="text-sm text-white/70 mt-6">
            Already have an account?{' '}
            <Link to='/login' className="underline text-white hover:text-yellow-400">
              SIGN IN
            </Link>
          </p>
        </div>
      </div>

      {/* Form Section */}
      <div className="w-full sm:w-3/4 flex items-center justify-center p-4 sm:p-12 bg-green-50">
        <form onSubmit={handleSubmit} className="w-full max-w-xl">
          <h1 className="text-xl font-semibold mb-6">Residential Address</h1>

          <div className="space-y-4">
            <div>
              <p className="text-sm mb-1">Address</p>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
              />
              {errors.address && <p className="text-red-600 text-sm">{errors.address}</p>}
            </div>

            <div>
              <p className="text-sm mb-1">State</p>
              <select
                name="state"
                value={formData.state}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded-lg"
              >
                <option value="">Select state</option>
                <option value="Kano">Kano</option>
                <option value="Abuja">Abuja</option>
                <option value="Lagos">Lagos</option>
                <option value="Imo">Imo</option>
              </select>
              {errors.state && <p className="text-red-600 text-sm">{errors.state}</p>}
            </div>

            <div>
              <p className="text-sm mb-1">City</p>
              <select
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded-lg"
              >
                <option value="">Select city</option>
                <option value="Kano">Kano</option>
                <option value="Abuja">Abuja</option>
                <option value="Lagos">Lagos</option>
                <option value="Imo">Imo</option>
              </select>
              {errors.city && <p className="text-red-600 text-sm">{errors.city}</p>}
            </div>

            <div>
              <p className="text-sm mb-1">Postal Code</p>
              <input
                type="text"
                name="postalCode"
                value={formData.postalCode}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
              />
              {errors.postalCode && <p className="text-red-600 text-sm">{errors.postalCode}</p>}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <button
              type="button"
              onClick={() => navigate('/SignUpComp/Demograph')}
              className="bg-white text-green-700 border border-green-600 rounded-lg px-4 py-2 w-full sm:w-[150px]"
            >
              Back
            </button>
            <button
              type="submit"
              className="bg-green-600 text-white rounded-lg px-4 py-2 w-full sm:w-[350px]"
            >
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResidentialAdd;
