import React from 'react';
import bgFarm from '../assets/wide-farm.webp';
import { Link } from 'react-router-dom';
function SignUp() {
  return (
    <div className="relative h-screen w-full bg-green-50 overflow-hidden">
      {/* Background Image */}
      <img
        src={bgFarm}
        alt="Background farm"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 py-16">
      <div className="bg-green-50 backdrop-blur-md rounded-xl shadow-2xl p-8 max-w-5xl w-full mbn-6">
          <h1 className="text-4xl font-bold text-green-800 mb-2 text-center">SIGN UP</h1>
            <Link to="/" className="cursor-pointer">
                          <button className="text-green-700 mb-4 border border-green-600 px-2 py-1 rounded-lg font-semibold hover:bg-green-500 hover:text-white transition text-sm sm:text-base">
                            Go Home
                          </button>
                        </Link>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Farmer */}
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition">
              <h2 className="text-2xl font-semibold text-green-700 mb-2">As a Farmer</h2>
              <p className="text-gray-700">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus beatae fuga illo est ullam ipsa quisquam quos eos iusto mollitia quasi, quaerat labore praesentium unde voluptatibus maxime ab cumque alias.
              </p>
              <Link to ='/SignUpComp/Personal'><button className='mt-4 border rounded-lg bg-green-700 p-2 text-white cursor-pointer  hover:bg-green-600'>Sign Up</button></Link>
            </div>

            {/* Partner */}
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition">
              <h2 className="text-2xl font-semibold text-green-700 mb-2">As a Partner</h2>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, voluptatibus placeat sint aliquam et non, obcaecati ea sequi ipsam dolorum eos quae iusto ratione velit autem exercitationem, eligendi ab assumenda!
              </p>
              <button className='mt-4 border rounded-lg bg-green-700 p-2 text-white cursor-pointer  hover:bg-green-600'>Sign Up</button>
            </div>

            {/* Associate */}
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition">
              <h2 className="text-2xl font-semibold text-green-700 mb-2">As an Extension Manager</h2>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab facere culpa aperiam quasi iste aliquam laudantium nesciunt eveniet, delectus illum mollitia! Architecto, tempora optio earum placeat incidunt quae quas laudantium?
              </p>
              <button className='mt-4 border rounded-lg bg-green-700 p-2 text-white cursor-pointer  hover:bg-green-600'>Sign Up</button>
            </div>

            {/* Investor */}
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition">
              <h2 className="text-2xl font-semibold text-green-700 mb-2">As an Investor</h2>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium repellendus, ab nihil eos placeat iusto, culpa magnam aliquam eveniet, dolor quisquam voluptatem. Magni exercitationem dolorum neque minima, expedita obcaecati deserunt.
              </p>
              <Link to= '/InvestorsSignup'><button className='mt-4 border rounded-lg bg-green-700 p-2 text-white cursor-pointer  hover:bg-green-600'>Sign Up</button></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
