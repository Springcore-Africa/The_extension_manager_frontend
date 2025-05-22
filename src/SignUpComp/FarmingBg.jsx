import React, { useState } from 'react';
import { useNavigate, Link } from "react-router-dom";
import farm from '../assets/farm.jpeg';
import one from '../assets/number-1.png';
import two from '../assets/number-2.png';
import three from '../assets/number-3.png';
import four from '../assets/number-4.png';
import five from '../assets/number-5.png';
import tick from '../assets/checkmark.png';
import { useFormData } from "../context/FormContext";



const FarmingBg = () => {
  const navigate = useNavigate();

  const { updateFormSection } = useFormData();

  const [formData, setFormData] = useState({
    farmingExperience: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, farmingExperience: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.farmingExperience || formData.farmingExperience.trim().length < 10) {
      newErrors.farmingExperience = "Please provide more detail (min 10 characters)";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validate()) {
      console.log("Farming Background Submitted:", formData);
      navigate('/SignUpComp/RS');
    } else {
      alert("Please fill in your farming background before continuing.");
    }
  };

  return (
    <div className="relative h-screen flex flex-col sm:flex-row">
      {/* Sidebar */}
      <div className="relative w-full sm:w-1/3 h-[300px] sm:h-full">
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
              <span className="flex items-center gap-3 text-white/70">
                <img src={two} alt="2" className="w-6 h-6" />
                <Link to='/SignUpComp/Demograph' className="flex items-center gap-2">
                  <span>Demographic</span>
                  <img src={tick} alt="tick" className="h-5 w-5" />
                </Link>
              </span>
              <span className="flex items-center gap-3 text-white/70">
                <img src={three} alt="3" className="w-6 h-6" />
                <Link to='/SignUpComp/ResidentialAdd' className="flex items-center gap-2">
                  <span>Residential Address</span>
                  <img src={tick} alt="tick" className="h-5 w-5" />
                </Link>
              </span>
              <span className="flex items-center gap-3 text-white">
                <img src={four} alt="4" className="w-6 h-6" />
                <span className="font-semibold">Farming Background</span>
              </span>
              <span className="flex items-center gap-3 text-white/70">
                <img src={five} alt="5" className="w-6 h-6" />
                <Link to='/SignUpComp/RS' className="text-white">Review and Submit</Link>
              </span>
            </div>

            <Link to='/' className='cursor-pointer'>
              <button className="text-green-700 mt-6 border border-green-600 px-4 py-2 rounded-lg font-semibold hover:bg-green-100 transition text-sm sm:text-base">
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
      <div className="w-full sm:w-2/3 bg-gray-50 p-6 sm:p-12 border border-brown-900 flex items-center justify-center bg-green-50">
        <form className="w-full max-w-xl" onSubmit={(e) => { e.preventDefault(); handleSubmit();
            if (validate()) {
              updateFormSection('farming', formData);
              navigate('/SignUpComp/RS');
            }
         }}>
          <h1 className="text-xl font-semibold mb-6">Farming Background</h1>

          <div className="mb-4">
            <label htmlFor="farming-info" className="text-sm mb-1 block">Describe Your Farming Experience</label>
            <textarea
              id="farming-info"
              name="farmingExperience"
              value={formData.farmingExperience}
              onChange={handleChange}
              placeholder="I was a farmer at Kafan Chan farming palm fruits..."
              rows="5"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
            />
            {errors.farmingExperience && (
              <p className="text-red-600 text-sm mt-1">{errors.farmingExperience}</p>
            )}
          </div>

          <div className='flex flex-col sm:flex-row gap-4 mt-6'>
            <button
              type="button"
              onClick={() => navigate('/SignUpComp/RS')}
              className='bg-white text-green-700 border border-green-600 rounded-lg px-4 py-2 w-full sm:w-[150px]'
            >
              Back
            </button>
            <button
              type="submit"
              className='bg-green-600 text-white rounded-lg px-4 py-2 w-full sm:w-[350px]'
            >
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FarmingBg;
