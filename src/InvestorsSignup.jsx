import bgFarm from "./assets/wide-farm.jpeg";
import { Link } from "react-router-dom";


const InvestorsSignup = () => {
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

      {/* Form Content */}
      <div className="relative z-20 flex items-center justify-center h-full">
        <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg max-w-lg w-full">
          <h1 className="text-2xl font-bold mb-4 text-center text-green-800">
            Investors Signin
          </h1>

          <form className="space-y-4">
            {/* Email */}
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-2 border border-gray-300 rounded"
            />

            {/* Password */}
            <div className="relative">
              <input
                type={"password"}
                placeholder="Password"
                className="w-full p-2 border border-gray-300 rounded pr-10"
              />
            </div>

            {/* Firstname */}
            <input
              type="text"
              placeholder="First Name"
              className="w-full p-2 border border-gray-300 rounded"
            />

            {/* Lastname */}
            <input
              type="text"
              placeholder="Last Name"
              className="w-full p-2 border border-gray-300 rounded"
            />

            {/* Phone Number */}
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full p-2 border border-gray-300 rounded"
            />

            {/* Photo */}
            <input
              type="file"
              accept="image/*"
              className="w-full p-2 border border-gray-300 rounded"
            />

            {/* Short Bio */}
            <textarea
              placeholder="Short Bio"
              rows={3}
              className="w-full p-2 border border-gray-300 rounded resize-none"
            />

            {/* Submit */}
            <Link to="/InvestorDashboard">
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
};

export default InvestorsSignup;
