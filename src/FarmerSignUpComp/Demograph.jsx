import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import farm from '../assets/farm.jpeg';
import one from '../assets/number-1.png';
import two from '../assets/number-2.png';
import three from '../assets/number-3.png';
import five from '../assets/number-5.png';
import tick from '../assets/checkmark.png';
import { useFormData } from "../context/FormContext";

const Demograph = () => {
  const navigate = useNavigate();

  const { updateFormSection } = useFormData();


  const [formData, setFormData] = useState({
    maritalStatus: '',
    children: '',
    state: '',
    localGov: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.maritalStatus) newErrors.maritalStatus = "Select your marital status";
    if (!formData.children) newErrors.children = "Select number of children";
    if (!formData.state) newErrors.state = "Select a state";
    if (!formData.localGov) newErrors.localGov = "Select a local government";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      updateFormSection('demograph', formData);
      navigate('/FarmerSignUpComp/ResidentialAdd');
    } else {
      alert('Please complete all fields before continuing.');
    };
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <div className="relative w-[15px] sm:w-1/5 h-full shrink-0">
        <img src={farm} alt="farm" className="absolute w-full h-full object-cover z-0" />
        <div className="absolute inset-0 bg-black opacity-60 z-10"></div>

        <div className="relative z-20 flex flex-col justify-between h-full p-6 text-white">
          <div>
            <h1 className="text-2xl font-bold mb-1">The Extension Manager</h1>
            <p className="text-sm text-white/80 mb-10">Logo can go in this spot right here</p>
            <div className="space-y-6">
              <span className="flex items-center gap-3">
                <img src={one} alt="1" className="w-6 h-6" />
                <Link to='/FarmerSignUpComp/Personal' className="flex items-center gap-2">
                  <span>Personal Information</span>
                  <img src={tick} alt="tick" className="h-5 w-5" />
                </Link>
              </span>
              <span className="flex items-center gap-3 text-white/70">
                <img src={two} alt="2" className="w-6 h-6" />
                <span className="font-semibold">Demographic</span>
              </span>
              <span className="flex items-center gap-3 text-white/70">
                <img src={three} alt="3" className="w-6 h-6" />
                <Link to='/FarmerSignUpComp/ResidentialAdd'>Residential Address</Link>
              </span>
              <span className="flex items-center gap-3 text-white/70">
                <img src={five} alt="5" className="w-6 h-6" />
                <Link to='/FarmerSignUpComp/RS'>Review and Submit</Link>
              </span>
            </div>
            <Link to='/' className='cursor-pointer'>
              <button className="text-green-700 mt-8 border border-green-600 px-2 py-1 rounded-lg font-semibold hover:bg-green-100 transition text-sm sm:text-base">
                Go Home
              </button>
            </Link>
          </div>

          <p className="text-sm text-white/70">
            Already have an account?{' '}
            <Link to='/login' className="underline text-white hover:text-yellow-400">
              SIGN IN
            </Link>
          </p>
        </div>
      </div>

      {/* Form Section (Right side) */}
      <div className="flex-1 overflow-y-auto p-6 flex justify-center items-center bg-green-50">
        <form onSubmit={handleSubmit} className="w-full max-w-xl">
          <h1 className="text-xl font-bold mb-4">DEMOGRAPHIC INFORMATION</h1>

          {/* Marital Status */}
          <p className="text-sm mb-1">Marital Status</p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-4">
            {['Single', 'Married', 'Divorced'].map((status) => (
              <label key={status} className="flex items-center gap-2">
                <input
                  type="radio"
                  name="maritalStatus"
                  value={status}
                  checked={formData.maritalStatus === status}
                  onChange={handleChange}
                />
                {status}
              </label>
            ))}
          </div>

          {errors.maritalStatus && <p className="text-red-600 text-sm mb-2">{errors.maritalStatus}</p>}

          {/* Number of Children */}
          <p className="text-sm mb-1">Number of Children</p>
          <select
            name="children"
            value={formData.children}
            onChange={handleChange}
            className="block w-full mb-3 p-2 border rounded border-gray-300"
          >
            <option value="" disabled>Select number of children</option>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4+">4 and above</option>
          </select>
          {errors.children && <p className="text-red-600 text-sm mb-2">{errors.children}</p>}

          {/* State */}
          <p className="text-sm mb-1">State</p>
          <select
            name="state"
            value={formData.state}
            onChange={handleChange}
            className="block w-full mb-3 p-2 border rounded border-gray-300"
          >
            <option value="" disabled>Select state</option>
            <option value="Kano">Kano</option>
            <option value="Abuja">Abuja</option>
            <option value="Lagos">Lagos</option>
            <option value="Imo">Imo</option>
          </select>
          {errors.state && <p className="text-red-600 text-sm mb-2">{errors.state}</p>}

          {/* Local Government */}
          <p className="text-sm mb-1">Local Government</p>
          <select
            name="localGov"
            value={formData.localGov}
            onChange={handleChange}
            className="block w-full mb-4 p-2 border rounded border-gray-300"
          >
            <option value="" disabled>Select local government</option>
            <option value="Fagge">Fagge</option>
            <option value="Kubua">Kubua</option>
            <option value="Sabon Garri">Sabon Garri</option>
            <option value="Maitama">Maitama</option>
          </select>
          {errors.localGov && <p className="text-red-600 text-sm mb-2">{errors.localGov}</p>}

          {/* Navigation Buttons */}
          <div className="flex justify-between gap-3 mt-6">
            <button
              type="button"
              onClick={() => navigate('/FarmerSignUpComp/Personal')}
              className="bg-white border border-green-600 text-green-700 p-2 rounded-lg w-[150px]"
            >
              Back
            </button>
            <button
              type="submit"
              className="bg-green-600 text-white p-2 rounded-lg w-[350px]"
            >
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Demograph;
