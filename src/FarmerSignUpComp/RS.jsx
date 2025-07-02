// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { useFormData } from '../context/FormContext';
// import farm from '../assets/farm.jpeg';
// import one from '../assets/number-1.png';
// import two from '../assets/number-2.png';
// import three from '../assets/number-3.png';
// import five from '../assets/number-5.png';
// import tick from '../assets/checkmark.png';

// const RS = () => {
//   const { formData } = useFormData();
//   const navigate = useNavigate();

//   const handleFinalSubmit = () => {
//     console.log("✅ Final Form Data:", formData);
//     alert("Submitted successfully!");
//     navigate('/Auth');
//   };

//   return (
//     <div className="flex h-screen overflow-hidden">
//       {/* Sidebar */}
//       <div className="relative w-2/5 sm:w-1/4 h-full">
//         <img src={farm} alt="farm" className="absolute w-full h-full object-cover z-0" />
//         <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
//         <div className="relative z-20 flex flex-col justify-between h-full p-6 text-white">
//           <div>
//             <h1 className="text-2xl font-bold mb-1">The Extension Manager</h1>
//             <p className="text-sm text-white/80 mb-10">Logo can go in this spot right here</p>
//             <div className="space-y-6">
//               <span className="flex items-center gap-3">
//                 <img src={one} alt="1" className="w-6 h-6" />
//                 <Link to="/FarmerSignUpComp/Personal" className="flex items-center gap-2">Personal Information</Link>
//                 <img src={tick} alt="tick" className="h-5 w-5" />
//               </span>
//               <span className="flex items-center gap-3">
//                 <img src={two} alt="2" className="w-6 h-6" />
//                 <Link to="/FarmerSignUpComp/Demograph" className="flex items-center gap-2">Demographic</Link>
//                 <img src={tick} alt="tick" className="h-5 w-5" />
//               </span>
//               <span className="flex items-center gap-3">
//                 <img src={three} alt="3" className="w-6 h-6" />
//                 <Link to="/FarmerSignUpComp/ResidentialAdd" className="flex items-center gap-2">Residential Address</Link>
//                 <img src={tick} alt="tick" className="h-5 w-5" />
//               </span>
//               <span className="flex items-center gap-3">
//                 <img src={five} alt="5" className="w-6 h-6" />
//                 <span className="font-semibold">Review and Submit</span>
//               </span>
//             </div>
//             <Link to="/" className="cursor-pointer">
//               <button className="text-green-700 mt-8 border border-green-600 px-2 py-1 rounded-lg font-semibold hover:bg-green-100 transition text-sm sm:text-base">
//                 Go Home
//               </button>
//             </Link>
//           </div>
//           <p className="text-sm text-white/70">
//             Already have an account?{' '}
//             <Link to="/login" className="underline text-white hover:text-green-400">
//               SIGN IN
//             </Link>
//           </p>
//         </div>
//       </div>

//       {/* Review Section */}
//       <div className="flex-1 p-6 overflow-y-auto bg-green-50">
//         <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-2xl p-6">
//           <h1 className="text-2xl font-bold mb-6">Review & Submit</h1>

//           {formData.personal && (
//             <section className="mb-6">
//               <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
//               <h2 className="text-lg font-semibold">Personal Information</h2>
//               <p><strong>First Name:</strong> {formData.personal.firstName}</p>
//               <p><strong>Last Name:</strong> {formData.personal.lastName}</p>
//               <p><strong>Email:</strong> {formData.personal.email}</p>
//               <p><strong>Phone:</strong> {formData.personal.phone}</p>
//               <p><strong>ID Type:</strong> {formData.personal.idType}</p>
//               <p><strong>Date of Birth:</strong> {formData.personal.dob}</p>
//               <p><strong>Birth Certificate:</strong> {formData.personal.birthCert}</p>
//               <p><strong>Education Certificate:</strong> {formData.personal.eduCert}</p>
//               <p><strong>Passport Photograph:</strong> {formData.personal.passport}</p>
//               </div>
//             </section>
//           )}

//           {formData.demograph && (
//             <section className="mb-6">
//               <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
//                 <h2 className="text-lg font-semibold">Demographic</h2>
//               <p><strong>Marital Status:</strong> {formData.demograph.maritalStatus}</p>
//               <p><strong>Number of Children:</strong> {formData.demograph.children}</p>
//               <p><strong>State:</strong> {formData.demograph.state}</p>
//               <p><strong>Local Government:</strong> {formData.demograph.localGov}</p>
//               </div>
//             </section>
//           )}

//           {formData.address && (
//             <section className="mb-6">
//               <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
//               <h2 className="text-lg font-semibold">Residential Address</h2>
//               <p><strong>Address:</strong> {formData.address.address}</p>
//               <p><strong>State:</strong> {formData.address.state}</p>
//               <p><strong>City:</strong> {formData.address.city}</p>
//               <p><strong>Postal Code:</strong> {formData.address.postalCode}</p>
//               </div>
//             </section>
//           )}

//           <div className="mt-6 flex justify-between">
//             <button
//               onClick={() => navigate('/FarmerSignUpComp/ResidentialAdd')}
//               className="px-4 py-2 border border-green-600 cursor-pointer text-green-700 rounded hover:bg-green-50"
//             >
//               Back
//             </button>
//             <Link to='/Auth'>
//             <button
//               onClick={handleFinalSubmit}
//               className="px-6 py-2 bg-green-600 text-white cursor-pointer font-semibold rounded hover:bg-green-700"
//             >
//               Submit
//             </button></Link>
//           </div>
//         </div>
//       </div> 
//     </div>
//   );
// };

// export default RS;

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useFormData } from '../context/FormContext';
import farm from '../assets/farm.jpeg';
import one from '../assets/number-1.png';
import two from '../assets/number-2.png';
import three from '../assets/number-3.png';
import four from '../assets/number-4.png';
import five from '../assets/number-5.png';
import tick from '../assets/checkmark.png';
import axios from 'axios';


const RS = () => {
  const { formData } = useFormData();
  const navigate = useNavigate();


  const handleFinalSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting the following data:", formData);

    try {
      const response = await axios.post(
        'https://the-extension-manager-2.onrender.com/api/v1/farmers/register',
        formData,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      console.log(response.data);
      navigate('/Auth');
    } catch (error) {
      console.error('Registration failed:', error);
      alert('Registration failed. Please try again.');
    }
  };



  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <div className="relative w-2/5 sm:w-1/4 h-full">
        <img src={farm} alt="farm" className="absolute w-full h-full object-cover z-0" />
        <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
        <div className="relative z-20 flex flex-col justify-between h-full p-6 text-white">
          <div>
            <h1 className="text-2xl font-bold mb-1">The Extension Manager</h1>
            <p className="text-sm text-white/80 mb-10">Logo can go in this spot right here</p>
            <div className="space-y-6">
              <span className="flex items-center gap-3">
                <img src={one} alt="1" className="w-6 h-6" />
                <Link to="/FarmerSignUpComp/Personal" className="flex items-center gap-2">Personal Information</Link>
                <img src={tick} alt="tick" className="h-5 w-5" />
              </span>
              <span className="flex items-center gap-3">
                <img src={two} alt="2" className="w-6 h-6" />
                <Link to="/FarmerSignUpComp/Demograph" className="flex items-center gap-2">Demographic</Link>
                <img src={tick} alt="tick" className="h-5 w-5" />
              </span>
              <span className="flex items-center gap-3">
                <img src={three} alt="3" className="w-6 h-6" />
                <Link to="/FarmerSignUpComp/ResidentialAdd" className="flex items-center gap-2">Residential Address</Link>
                <img src={tick} alt="tick" className="h-5 w-5" />
              </span>
              <span className="flex items-center gap-3">
                <img src={four} alt="4" className="w-6 h-6" />
                <Link to="/FarmerSignUpComp/FarmingBg" className="flex items-center gap-2">Farming Background</Link>
                <img src={tick} alt="tick" className="h-5 w-5" />
              </span>
              <span className="flex items-center gap-3">
                <img src={five} alt="5" className="w-6 h-6" />
                <span className="font-semibold">Review and Submit</span>
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
            <Link to="/login" className="underline text-white hover:text-green-400">
              SIGN IN
            </Link>
          </p>
        </div>
      </div>

      {/* Review Section */}
      <div className="flex-1 p-6 overflow-y-auto bg-green-50">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-2xl p-6">
          <h1 className="text-2xl font-bold mb-6">Review & Submit</h1>

          {formData.personal && (
            <section className="mb-6">
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <h2 className="text-lg font-semibold">Personal Information</h2>
              <p><strong>First Name:</strong> {formData.personal.firstName}</p>
              <p><strong>Last Name:</strong> {formData.personal.lastName}</p>
              <p><strong>Role:</strong> {formData.personal.role}</p>
              <p><strong>Token:</strong> {formData.personal.token}</p>
              <p><strong>Email:</strong> {formData.personal.email}</p>
              <p><strong>Password:</strong> {formData.personal.password}</p>
              <p><strong>Phone:</strong> {formData.personal.phone}</p>
              <p><strong>National ID:</strong> {formData.personal.nationalId}</p>
              <p><strong>Date of Birth:</strong> {formData.personal.dob}</p>
              <p><strong>Birth Certificate:</strong> {formData.personal.birthCert}</p>
              <p><strong>Education Certificate:</strong> {formData.personal.eduCert}</p>
              <p><strong>Passport Photograph:</strong> {formData.personal.passport}</p>
              </div>
            </section>
          )}

          {formData.demograph && (
            <section className="mb-6">
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <h2 className="text-lg font-semibold">Demographic</h2>
              <p><strong>Marital Status:</strong> {formData.demograph.maritalStatus}</p>
              <p><strong>Number of Children:</strong> {formData.demograph.children}</p>
              <p><strong>State:</strong> {formData.demograph.state}</p>
              <p><strong>Local Government:</strong> {formData.demograph.localGov}</p>
              </div>
            </section>
          )}

          {formData.address && (
            <section className="mb-6">
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <h2 className="text-lg font-semibold">Residential Address</h2>
              <p><strong>Address:</strong> {formData.address.address}</p>
              <p><strong>State:</strong> {formData.address.state}</p>
              <p><strong>Description:</strong> {formData.address.description}</p>
              </div>
            </section>
          )}

          <div className="mt-6 flex justify-between">
            <button
              onClick={() => navigate('/SignUpComp/FarmingBg')}
              className="px-4 py-2 border border-green-600 text-green-700 rounded hover:bg-green-50"
            >
              Back
            </button>
            <Link to='./Auth'>
            <button
              onClick={handleFinalSubmit}
              className="px-6 py-2 bg-green-600 text-white font-semibold rounded hover:bg-green-700"
            >
              Submit
            </button></Link>
          </div>
        </div>
      </div> 
    </div>
  );
};

export default RS;
