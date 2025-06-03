import React from "react";
import { Link } from "react-router-dom";
import Bgimg from "../assets/Hero-image.jpg";
import Srvtruck from "../assets/farm-truck.png";
import Ourimptbg from "../assets/our-impact-bg.jpg";
import Agric1 from "../assets/agric1.jpg";
import Agric2 from "../assets/agric2.jpg";
import Agric3 from "../assets/agric3.jpg";
import Agric4 from "../assets/agric4.jpg";
import Agric5 from "../assets/agric5.jpg";
import Susagric from "../assets/sus-agric.jpg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function HomePage() {
  const goals = [
    {
      label: "Farmers Productivity",
      emoji: "👨‍🌾",
      description: "Double farm productivity.",
    },
    {
      label: "Youth Agripower",
      emoji: "🤝",
      description: "Improve youth employment in agriculture.",
    },
    {
      label: "Agri Safety",
      emoji: "🛡️",
      description: "Reduce farmer risk through data and insurance.",
    },
    {
      label: "Sustainable Nourishment",
      emoji: "♻️",
      description: "Strengthen Nigeria's food system from ground up.",
    },
  ];

  return (
    <>
      {/* Navbar Component */}
      <Navbar />

      {/* Hero Section */}
      <div
        className="relative w-full min-h-[90vh] bg-no-repeat bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${Bgimg})` }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-4">
          <p className="text-2xl italic sm:text-3xl md:text-4xl lg:text-4xl text-green-200 mb-5 font-semibold leading-tight">
            Empowering Farmers. Enabling Agents. Transforming
          </p>
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[8rem] font-extrabold text-white drop-shadow-lg mb-6 ">
            AGRICULTURE
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/sign_up">
              <button className="bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition text-lg font-semibold shadow-lg">
                Get Started
              </button>
            </Link>
            <Link to="/login">
              <button className="bg-white text-green-700 border border-green-600 px-6 py-3 rounded-lg hover:bg-green-100 transition text-lg font-semibold shadow-lg">
                Sign In
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Welcome Message */}
      <section>
        <div className="min-h-[70vh] flex flex-col items-center justify-center shadow bg-green-50 px-4">
          <div className="max-w-2xl w-full">
            <h2 className="text-3xl font-bold text-center text-green-700 mb-10">
              Welcome to The Extension Manager
            </h2>
            <p className="text-black text-lg text-center sm:text-xl">
              Nigeria's agriculture faces a critical shortage of extension
              services, leaving millions of smallholder farmers without access
              to timely information, technology and finance. The Extension
              Manager bridges the gap by turning trained NYSC graduates into
              digital agricultural extension agents, fully equipped to serve as{" "}
              <b>farm co-founders</b> to small farmers.
            </p>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-green-700 mb-10">
            What We Offer
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="flex-1 min-w-[250px] max-w-xs bg-green-50 p-8 rounded-xl shadow hover:shadow-lg transition">
              <div className="text-green-600 text-4xl mb-4">📲</div>
              <h3 className="text-xl font-semibold mb-2">
                A Mobile-First Platform
              </h3>
              <p className="text-gray-600">
                For real-time advisory, recordkeeping and farm monitoring - even
                offline.
              </p>
            </div>
            <div className="flex-1 min-w-[250px] max-w-xs bg-green-50 p-8 rounded-xl shadow hover:shadow-lg transition">
              <div className="text-green-600 text-4xl mb-4">🧑‍🌾</div>
              <h3 className="text-xl font-semibold mb-2">
                Trained Youth Agents
              </h3>
              <p className="text-gray-600">
                Embedded in communities, delivering services in local languages.
              </p>
            </div>
            <div className="flex-1 min-w-[250px] max-w-xs bg-green-50 p-8 rounded-xl shadow hover:shadow-lg transition">
              <div className="text-green-600 text-4xl mb-4">📈</div>
              <h3 className="text-xl font-semibold mb-2">
                Smart Farm Insights
              </h3>
              <p className="text-gray-600">
                Powered by AI, satellite imagenary and on-ground data
                collection.
              </p>
            </div>
            <div className="flex-1 min-w-[250px] max-w-xs bg-green-50 p-8 rounded-xl shadow hover:shadow-lg transition">
              <div className="text-green-600 text-4xl mb-4">💼</div>
              <h3 className="text-xl font-semibold mb-2">
                Access to Inputs, Credits, Insurance, and Markets
              </h3>
              <p className="text-gray-600">
                Fully integrated into the extension workflow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section>
        <div className="min-h-[90vh] flex flex-col-reverse lg:flex-row items-center justify-center bg-white px-4 py-12 mb-10 gap-8">
          {/* Image Section */}
          <div className="w-full lg:w-1/2 flex justify-center mb-8 lg:mb-0">
            <img
              src={Srvtruck}
              alt="Farm Truck"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md rounded-xl shadow-lg object-cover"
            />
          </div>
          {/* Text Section */}
          <div className="w-full lg:w-1/2 max-w-2xl text-center lg:text-left mx-5">
            <h1 className="text-3xl sm:text-4xl font-bold text-green-700 mb-6">
              Our Services
            </h1>
            <p className="text-base sm:text-lg text-gray-700 mb-2">
              <b>Train & Deploy Agents</b> - We recruit and certify NYSC
              graduates in agribusiness, digital tools and extension skills.
            </p>
            <p className="text-base sm:text-lg text-gray-700 mb-2">
              <b>Onboard Farmers</b> - Agents enroll and support farmers in
              managing their farms like businesses.
            </p>
            <p className="text-base sm:text-lg text-gray-700 mb-2">
              <b>Deliver Services</b> - From planting advice to finicial access,
              agents provide tailored support using our app.
            </p>
            <p className="text-base sm:text-lg text-gray-700 mb-2">
              <b>Link Markets & Finance</b> - Farmers connect with buyers, input
              providers, banks and insurers - all through the platform.
            </p>
            <h1 className="text-xl sm:text-xl font-bold text-gray-700 my-10">
              "From Field to finance, The Extension Manager is your all-in-one
              agricultural partner"
            </h1>
            <Link to="/contact">
              <button className="bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition text-lg font-semibold shadow-lg w-full sm:w-auto">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Our Impact Picutures Section  */}
      <section>
        <div
          className="relative w-full min-h-[60vh] bg-no-repeat bg-cover bg-center flex flex-col items-center justify-center py-16 px-4"
          style={{ backgroundImage: `url(${Ourimptbg})` }}
        >
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center">
            <p className="text-white text-2xl sm:text-3xl md:text-4xl font-normal italic mb-8 text-center drop-shadow-lg">
              <span className="font-light">We Create Through</span>
              <span className="text-green-400 font-semibold"> Our Impact</span>
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-4 w-full">
              {[Agric1, Agric2, Agric3, Agric4, Agric5].map((img, idx) => (
                <div key={idx} className="flex justify-center">
                  <img
                    src={img}
                    alt=""
                    className="w-64 h-64 sm:w-40 sm:h-40 md:w-44 md:h-44 object-cover rounded-xl shadow-lg bg-white"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Impact Goals Section */}
      <section className="min-h-screen bg-green-50 py-16 px-4 flex flex-col items-center text-center">
        <h1 className="text-4xl font-bold text-green-700 mb-4">
          🎯Impact Goals
        </h1>
        <p className="text-lg text-gray-700 mb-10 max-w-2xl mx-auto">
          We are committed to making a real difference in the agricultural
          sector. Here are some key statistics that showcase our achievements
          and the positive impact we've had on communities and farmers.
        </p>
        <div className="flex flex-row flex-wrap justify-center gap-8 w-full max-w-5xl">
          {goals.map((goal, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center hover:shadow-2xl transition min-w-[220px] max-w-xs flex-1 text-center"
            >
              <div className="text-5xl mb-4">{goal.emoji}</div>
              <div className="text-3xl font-bold text-green-700 mb-2">
                {goal.value}
              </div>
              <div className="text-xl font-semibold text-green-800 mb-1">
                {goal.label}
              </div>
              <p className="text-gray-600">{goal.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Sustainable Agric */}
      <section>
        <div
          className="relative w-full min-h-[40vh] bg-no-repeat bg-cover bg-center flex flex-col items-center justify-center py-16 px-4"
          style={{ backgroundImage: `url(${Ourimptbg})` }}
        >
          <p className="text-white sm:text-3xl md:text-4xl font-normal italic mb-8 text-center drop-shadow-lg">
            <span className="font-light">Sustainable</span>
            <span className="text-green-400 font-semibold"> AGRICULTURE</span>
          </p>
          <img
            src={Susagric}
            alt=""
            className="rounded-lg w-[55rem] h-[30rem]"
          />
        </div>
      </section>

      {/* Footer Component */}
      <Footer />
    </>
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
