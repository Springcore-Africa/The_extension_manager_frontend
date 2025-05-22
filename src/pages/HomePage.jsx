import React from 'react';
import { Link } from "react-router-dom";
import Bgimg from '../assets/AGRICULTURE.png';

function HomePage() {
  return (
    <div
      className="relative w-full mt-2 min-h-screen bg-no-repeat bg-cover bg-center sm:bg-[center_top] md:bg-center"
      style={{ backgroundImage: `url(${Bgimg})` }}
    >
      {/* Optional Overlay for better contrast */}
      <div className="absolute inset-0 bg-black/30 sm:bg-black/20" />

      {/* Buttons Positioned Top-Right */}
      <div className="absolute top-3 right-18 z-10 flex flex-col sm:flex-row gap-2 sm:gap-4 items-end sm:items-start">
        <Link to='/sign_up'>
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition text-sm sm:text-base">
            Sign Up
          </button>
        </Link>

        <Link to='/login' className='cusor-pointer'>
          <button className="bg-white text-green-700 border border-green-600 px-4 py-2 rounded-lg hover:bg-green-100 transition text-sm sm:text-base cursor-pointer">
            Sign In
          </button>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;









// import React, { useState } from 'react';
// import { Link } from "react-router-dom";
// import farm from '../assets/farm.jpeg';
// import one from '../assets/number-1.png';
// import two from '../assets/number-2.png';
// import three from '../assets/number-3.png';
// import four from '../assets/number-4.png';
// import five from '../assets/number-5.png';

// const Personal = () => {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     phone: '',
//     idType: '',
//     dob: '',
//   });

//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const validate = () => {
//     const newErrors = {};
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     const phoneRegex = /^[0-9]{10}$/;

//     if (!formData.firstName) newErrors.firstName = "First name is required";
//     if (!formData.lastName) newErrors.lastName = "Last name is required";
//     if (!formData.email || !emailRegex.test(formData.email)) newErrors.email = "Enter a valid email";
//     if (!formData.phone || !phoneRegex.test(formData.phone)) newErrors.phone = "Enter a valid 10-digit phone number";
//     if (!formData.idType) newErrors.idType = "Select an ID type";
//     if (!formData.dob) newErrors.dob = "Date of birth is required";

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validate()) {
//       console.log("Form submitted:", formData);
//       alert("Form is valid. Submitting...");
//     } else {
//       alert("Please fill the form completely.");
//     }
//   };

//   return (
//     <div className="flex h-screen overflow-hidden">
//       {/* Sidebar */}
//       <div className="relative w-2/5 sm:w-1/4 h-full shrink-0">
//         <img src={farm} alt="farm" className="absolute w-full h-full object-cover z-0" />
//         <div className="absolute inset-0 bg-black/60 z-10"></div>
//         <div className="relative z-20 flex flex-col justify-between h-full p-6 text-white overflow-hidden">
//           <div>
//             <h1 className="text-2xl font-bold mb-1">The Extension Manager</h1>
//             <p className="text-sm text-white/80 mb-10">Logo can go in this spot right here</p>
//             <div className="space-y-6">
//               <span className="flex items-center gap-3">
//                 <img src={one} alt="1" className="w-6 h-6" />
//                 <Link to='/SignUpComp/Personal' className="font-semibold">Personal Information</Link>
//               </span>
//               <span className="flex items-center gap-3 text-white/70">
//                 <img src={two} alt="2" className="w-6 h-6" />
//                 <Link to='/SignUpComp/Demograph'>Demographic</Link>
//               </span>
//               <span className="flex items-center gap-3 text-white/70">
//                 <img src={three} alt="3" className="w-6 h-6" />
//                 <Link to='/SignUpComp/ResidentialAdd'>Residential Address</Link>
//               </span>
//               <span className="flex items-center gap-3 text-white/70">
//                 <img src={four} alt="4" className="w-6 h-6" />
//                 <Link to='/SignUpComp/FarmingBg'>Farming Background</Link>
//               </span>
//               <span className="flex items-center gap-3 text-white/70">
//                 <img src={five} alt="5" className="w-6 h-6" />
//                 <Link to='/SignUpComp/RS'>Review and Submit</Link>
//               </span>
//             </div>
//             <Link to='/' className='cursor-pointer'>
//               <button className="text-green-700 mt-8 border border-green-600 px-2 py-1 rounded-lg font-semibold hover:bg-green-100 transition text-sm sm:text-base">
//                 Go Home
//               </button>
//             </Link>
//           </div>
//           <p className="text-sm text-white/70">
//             Already have an account?{' '}
//             <Link to='/login' className="underline text-white hover:text-yellow-400">SIGN IN</Link>
//           </p>
//         </div>
//       </div>

//       {/* Form Section */}
//       <div className="flex-1 h-full overflow-y-auto p-6 flex justify-center">
//         <form onSubmit={handleSubmit} className="w-full max-w-xl">
//           <h1 className="text-xl font-bold mb-4">BASIC INFORMATION</h1>

//           <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" className="block w-full mb-1 p-2 border rounded" />
//           {errors.firstName && <p className="text-red-600 text-sm mb-2">{errors.firstName}</p>}

//           <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name" className="block w-full mb-1 p-2 border rounded" />
//           {errors.lastName && <p className="text-red-600 text-sm mb-2">{errors.lastName}</p>}

//           <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email Address" className="block w-full mb-1 p-2 border rounded" />
//           {errors.email && <p className="text-red-600 text-sm mb-2">{errors.email}</p>}

//           <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" className="block w-full mb-1 p-2 border rounded" />
//           {errors.phone && <p className="text-red-600 text-sm mb-2">{errors.phone}</p>}

//           <h1 className="text-xl font-bold mt-8 mb-2">IDENTIFICATION</h1>
//           <p className='text-sm'>Select ID Type</p>
//           <select name="idType" value={formData.idType} onChange={handleChange} className="block w-full mb-1 p-2 border rounded">
//             <option value="" disabled>ID Type</option>
//             <option value="nin">NIN</option>
//             <option value="bvn">BVN</option>
//             <option value="farm">FRYG</option>
//           </select>
//           {errors.idType && <p className="text-red-600 text-sm mb-2">{errors.idType}</p>}

//           <p className='text-sm'>ID Documents</p>
//           <div className='border-2 border-dotted border-gray-500 rounded-lg pointer-cursor'>
//             <input type="file" accept=".pdf,.doc,.docx" name="document" className="block w-full mb-4 cursor-pointer p-2" />
//           </div>

//           <p className='text-sm'>Date of Birth</p>
//           <input type="date" name="dob" value={formData.dob} onChange={handleChange} className="block w-full mb-1 p-2 border rounded" />
//           {errors.dob && <p className="text-red-600 text-sm mb-2">{errors.dob}</p>}

//           <h1 className="text-xl font-bold mt-8 mb-2">ADDITIONAL DOCUMENTS</h1>
//           <p>Birth Certificate</p>
//           <div className='border-2 border-dotted border-gray-500 rounded-lg cursor-pointer mb-4'>
//             <input type="file" accept=".pdf,.doc,.docx" name="birthCert" className="block w-full p-2" />
//           </div>

//           <p className='text-sm'>Highest Education Certificate</p>
//           <div className='border-2 border-dotted border-gray-500 rounded-lg cursor-pointer mb-4'>
//             <input type="file" accept=".pdf,.doc,.docx" name="eduCert" className="block w-full p-2" />
//           </div>

//           <p className='text-sm'>Passport Photograph</p>
//           <div className='border-2 border-dotted border-gray-500 rounded-lg cursor-pointer'>
//             <input type="file" accept="image/*" name="passport" className="block w-full p-6" />
//           </div>

//           <div className='flex justify-center mt-6'>
//             <button type="submit" className='bg-green-600 cursor-pointer mt-6 p-2 w-[350px] text-white rounded-lg'>Continue</button>
//           </div>
//           <br />
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Personal;
