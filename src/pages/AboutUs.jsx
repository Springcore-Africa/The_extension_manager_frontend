import React from "react";
import Bgimg from "../assets/about-us-hero.jpg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function AboutUs() {
  return (
    <>
      {/* Navbar Component */}
      <Navbar />

      {/* Hero Section */}
      <section>
        <div
          className="relative w-full min-h-[80vh] bg-no-repeat bg-cover bg-center flex items-center justify-center"
          style={{ backgroundImage: `url(${Bgimg})` }}
        >
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 text-center px-4">
            <h1 className="text-5xl sm:text-5xl md:text-8xl lg:text-9xl xl:text-[4rem] font-semibold text-white drop-shadow-lg mb-6 ">
              ABOUT US
            </h1>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="bg-green-50 py-16 px-4 flex flex-col items-center">
        <div className="max-w-4xl w-full mx-auto">
          <h1 className="text-4xl font-bold text-green-700 mb-6 text-center">
            Our Story
          </h1>

          <p className="text-lg text-gray-700 mb-5 text-left">
            <span className="font-semibold text-green-800">
              The Extension Manager
            </span>
            was born out of a need to reimagine agricultural extension in
            Nigeria. Traditional extension systems are overburdened, outdated
            and under-resourced. With over 70% of Nigeria's rural population
            involved in farming and fewr than 10,000 active extension agents
            nationwide, the need for a scalable, modern solution is urgent.
          </p>
          <p className="text-lg text-gray-700 mb-8 text-left">
            Our model redifines extension by developing trained NYSC graduates
            as <b>tech-enabled service providers,</b> supported by a powerful
            digital platform that intergrates advisory, finance and market
            access.
          </p>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-10">
            <h2 className="text-2xl font-semibold text-green-700 mb-4">
              What Makes Us Different
            </h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>
                <span className="font-semibold text-green-800">
                  🔍 Data-Driven:
                </span>{" "}
                We collect real-time data on farms, yeilds, inputs and advisory
                activities to personalize services.
              </li>
              <li>
                <span className="font-semibold text-green-800">
                  🌍 Community-Embedded:
                </span>{" "}
                Our agents work closely with farmers, providing personalized
                support in local languages and understanding unique community
                needs.
              </li>
              <li>
                <span className="font-semibold text-green-800">
                  ⚙ Techn-Embedded:
                </span>{" "}
                Our mobile app works offline, supports local languages, and
                includes smart advisory tools.
              </li>
              <li>
                <span className="font-semibold text-green-800">
                  💡 Holistic Support:
                </span>{" "}
                Beyond advice, we offer full farm business support - including
                loans, input procurement, insurance and buyer linkage.
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-10">
            <h2 className="text-2xl font-semibold text-green-700 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-700 mb-2">
              To empower a new generation of youth extension agents to deliver
              high-impact, digital advisory and business services to every
              smallholder farmer in Nigeria and eventually, across Africa.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-8 mb-10">
            <h2 className="text-2xl font-semibold text-green-700 mb-4">
              Our Vision
            </h2>
            <p className="text-gray-700 mb-2">
              A future where every farm is profitable, every farmer is empowered
              and every community thrives.
            </p>
          </div>

          <div className="min-h-screen bg-green-50 px-4 flex flex-col items-center justify-center py-12">
            <h1 className="text-4xl font-bold text-green-700 mb-8 text-center">
              How to Engage
            </h1>
            <div className="flex flex-col md:grid-cols-3 gap-8 w-50% max-w-5xl">
              {/* Farmers */}
              <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col">
                <h2 className="text-2xl font-semibold text-green-700 mb-3 ">
                  For Farmers
                </h2>
                <ul className="list-disc list-inside text-gray-700 space-y-2 text-left">
                  <li>Onboard easily with the help of a local agent</li>
                  <li>Get real-time advice in your local language</li>
                  <li>Access loans, insurance, and farm inputs</li>
                  <li>Sell your produce through trusted buyers</li>
                </ul>
              </div>
              {/* NYSC Youth */}
              <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col">
                <h2 className="text-2xl font-semibold text-green-700 mb-3">
                  For NYSC Youth
                </h2>
                <ul className="list-disc list-inside text-gray-700 space-y-2 text-left">
                  <li>Become a Certified Digital Extension Agent</li>
                  <li>Get trained in agribusiness, data, and digital tools</li>
                  <li>Work in the field while making real impact</li>
                  <li>Start your career as an agripreneur</li>
                </ul>
              </div>
              {/* Partners & Investors */}
              <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col">
                <h2 className="text-2xl font-semibold text-green-700 mb-3">
                  For Partners & Investors
                </h2>
                <ul className="list-disc list-inside text-gray-700 space-y-2 text-left">
                  <li>
                    Integrate your services (credit, insurance, inputs, etc.)
                  </li>
                  <li>Get real-time insights and data</li>
                  <li>Scale development programs through our agent network</li>
                  <li>Improve rural livelihoods and food security</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Component */}
      <Footer />
    </>
  );
}

export default AboutUs;
