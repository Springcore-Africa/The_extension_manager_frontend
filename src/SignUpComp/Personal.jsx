import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useFormData } from '../context/FormContext';
import farm from '../assets/farm.jpeg';
import one from '../assets/number-1.png';
import two from '../assets/number-2.png';
import three from '../assets/number-3.png';
import five from '../assets/number-5.png';

const Personal = () => {
  const navigate = useNavigate();
  const { updateFormSection } = useFormData();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    idType: '',
    dob: '',
    birthCert: '',
    eduCert: '',
    passport: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      // Only store file name to context (safe for display)
      setFormData(prev => ({ ...prev, [name]: files[0].name }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{11}$/;

    if (!formData.firstName) newErrors.firstName = 'First name is required';
    if (!formData.lastName) newErrors.lastName = 'Last name is required';
    if (!formData.email || !emailRegex.test(formData.email)) newErrors.email = 'Enter a valid email';
    if (!formData.phone || !phoneRegex.test(formData.phone)) newErrors.phone = 'Enter a valid 11-digit phone number';
    if (!formData.idType) newErrors.idType = 'Select an ID type';
    if (!formData.dob) newErrors.dob = 'Date of birth is required';
    if (!formData.birthCert) newErrors.birthCert = 'Birth certificate is required';
    if (!formData.eduCert) newErrors.eduCert = 'Education certificate is required';
    if (!formData.passport) newErrors.passport = 'Passport photograph is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("✅ Saving personal formData:", formData);
      updateFormSection('personal', formData);
      navigate('/SignUpComp/Demograph');
    } else {
      alert("Please fill out all required fields correctly.");
    }
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <div className="relative w-2/5 sm:w-1/4 h-full shrink-0">
        <img src={farm} alt="farm" className="absolute w-full h-full object-cover z-0" />
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <div className="relative z-20 flex flex-col justify-between h-full p-6 text-white overflow-hidden">
          <div>
            <h1 className="text-2xl font-bold mb-1">The Extension Manager</h1>
            <p className="text-sm text-white/80 mb-10">Logo can go in this spot right here</p>
            <div className="space-y-6">
              <span className="flex items-center gap-3">
                <img src={one} alt="1" className="w-6 h-6" />
                <span className="font-semibold">Personal Information</span>
              </span>
              <span className="flex items-center gap-3 text-white/70">
                <img src={two} alt="2" className="w-6 h-6" />
                <span>Demographic</span>
              </span>
              <span className="flex items-center gap-3 text-white/70">
                <img src={three} alt="3" className="w-6 h-6" />
                <span>Residential Address</span>
              </span>
              <span className="flex items-center gap-3 text-white/70">
                <img src={five} alt="5" className="w-6 h-6" />
                <span>Review and Submit</span>
              </span>
            </div>
            <Link to="/" className="cursor-pointer">
              <button className="text-green-700 mt-8 border border-green-600 px-2 py-1 rounded-lg font-semibold hover:bg-green-100 transition text-sm sm:text-base">
                Go Home
              </button>
            </Link>
          </div>
          <p className="text-sm text-white/70">
            Already have an account?{' '}
            <Link to="/login" className="underline text-white hover:text-yellow-400">
              SIGN IN
            </Link>
          </p>
        </div>
      </div>

      {/* Form Section */}
      <div className="flex-1 h-full overflow-y-auto p-6 flex justify-center bg-green-50">
        <form onSubmit={handleSubmit} className="w-full max-w-xl">
          <h1 className="text-xl font-bold mb-4">Basic Information</h1>

          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" className="block w-full mb-3 p-2 border rounded" />
          {errors.firstName && <p className="text-red-600 text-sm mb-2">{errors.firstName}</p>}

          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name" className="block w-full mb-3 p-2 border rounded" />
          {errors.lastName && <p className="text-red-600 text-sm mb-2">{errors.lastName}</p>}

          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email Address" className="block w-full mb-3 p-2 border rounded" />
          {errors.email && <p className="text-red-600 text-sm mb-2">{errors.email}</p>}

          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" className="block w-full mb-3 p-2 border rounded" />
          {errors.phone && <p className="text-red-600 text-sm mb-2">{errors.phone}</p>}

          <p className="text-sm mb-1 mt-4">Select ID Type</p>
          <select name="idType" value={formData.idType} onChange={handleChange} className="block w-full mb-3 p-2 border rounded">
            <option value="">ID Type</option>
            <option value="nin">NIN</option>
            <option value="bvn">BVN</option>
            <option value="fryg">FRYG</option>
          </select>
          {errors.idType && <p className="text-red-600 text-sm mb-2">{errors.idType}</p>}

          <p className="text-sm mb-1">Date of Birth</p>
          <input type="date" name="dob" value={formData.dob} onChange={handleChange} className="block w-full mb-3 p-2 border rounded" />
          {errors.dob && <p className="text-red-600 text-sm mb-2">{errors.dob}</p>}

          <h1 className="text-xl font-bold mt-8 mb-2">Additional Documents</h1>

          <p className="text-sm">Birth Certificate</p>
          <div className="border-2 border-gray-500 rounded-lg cursor-pointer mb-4">
            <input type="text" name="birthCert" onChange={handleChange} className="block w-full p-2" />
          </div>
          {errors.birthCert && <p className="text-red-600 text-sm mb-2">{errors.birthCert}</p>}

          <p className="text-sm">Highest Education Certificate</p>
          <div className="border-2 border-gray-500 rounded-lg cursor-pointer mb-4">
            <input type="text" name="eduCert" onChange={handleChange} className="block w-full p-2" />
          </div>
          {errors.eduCert && <p className="text-red-600 text-sm mb-2">{errors.eduCert}</p>}

          <p className="text-sm">Passport Photograph</p>
          <div className="border-2 border-gray-500 rounded-lg cursor-pointer mb-4">
            <input type="text" name="passport" onChange={handleChange} className="block w-full p-6" />
          </div>
          {errors.passport && <p className="text-red-600 text-sm mb-2">{errors.passport}</p>}

          <div className="flex justify-center mt-6">
            <button type="submit" className="bg-green-600 cursor-pointer p-2 w-[350px] text-white rounded-lg hover:bg-green-700 mb-6">
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Personal;
