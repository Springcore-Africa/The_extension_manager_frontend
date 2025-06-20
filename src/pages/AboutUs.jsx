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
          className="relative w-full min-h-[90vh] bg-no-repeat bg-cover bg-center flex items-center justify-center overflow-x-hidden"
          style={{ backgroundImage: `url(${Bgimg})` }}
        >
          <div className="absolute inset-0 bg-black/60 transition-opacity duration-700" />
          <div className="relative z-10 text-center px-4 animate-fade-in-down">
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-semibold text-white drop-shadow-lg mb-6 tracking-tight transition-all duration-700 ease-in-out">
              ABOUT US
            </h1>
            <p className="text-lg italic sm:text-2xl text-green-100 font-medium max-w-2xl mx-auto transition-opacity duration-700 delay-200 animate-fade-in">
              Empowering farmers, youth, and communities through digital
              innovation.
            </p>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="bg-green-50 py-16 px-4 flex flex-col items-center overflow-x-hidden">
        <div className="max-w-4xl w-full mx-auto">
          <h2 className="text-4xl font-bold text-green-700 mb-8 text-center animate-fade-in-down transition-all duration-700">
            Our Story
          </h2>

          <p className="text-lg text-gray-700 mb-5 text-left animate-fade-in transition-all duration-700 delay-100">
            <span className="font-semibold text-green-800">
              The Extension Manager
            </span>{" "}
            was born out of a need to reimagine agricultural extension in
            Nigeria. Traditional extension systems are overburdened, outdated,
            and under-resourced. With over 70% of Nigeria's rural population
            involved in farming and fewer than 10,000 active extension agents
            nationwide, the need for a scalable, modern solution is urgent.
          </p>
          <p className="text-lg text-gray-700 mb-8 text-left animate-fade-in transition-all duration-700 delay-200">
            Our model redefines extension by developing trained NYSC graduates
            as <b>tech-enabled service providers</b>, supported by a powerful
            digital platform that integrates advisory, finance, and market
            access.
          </p>

          {/* What Makes Us Different */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-10 animate-fade-in-up transition-all duration-700">
            <h3 className="text-2xl font-semibold text-green-700 mb-4 text-center">
              What Makes Us Different
            </h3>
            <ul className="grid sm:grid-cols-2 gap-4 text-gray-700">
              <li className="flex items-start gap-2 transition-transform duration-500 hover:scale-105 animate-slide-in-left">
                <span className="text-2xl">🔍</span>
                <span>
                  <span className="font-semibold text-green-800">
                    Data-Driven:
                  </span>{" "}
                  We collect real-time data on farms, yields, inputs, and
                  advisory activities to personalize services.
                </span>
              </li>
              <li className="flex items-start gap-2 transition-transform duration-500 hover:scale-105 animate-slide-in-right">
                <span className="text-2xl">🌍</span>
                <span>
                  <span className="font-semibold text-green-800">
                    Community-Embedded:
                  </span>{" "}
                  Our agents work closely with farmers, providing personalized
                  support in local languages and understanding unique community
                  needs.
                </span>
              </li>
              <li className="flex items-start gap-2 transition-transform duration-500 hover:scale-105 animate-slide-in-left">
                <span className="text-2xl">⚙</span>
                <span>
                  <span className="font-semibold text-green-800">
                    Tech-Embedded:
                  </span>{" "}
                  Our mobile app works offline, supports local languages, and
                  includes smart advisory tools.
                </span>
              </li>
              <li className="flex items-start gap-2 transition-transform duration-500 hover:scale-105 animate-slide-in-right">
                <span className="text-2xl">💡</span>
                <span>
                  <span className="font-semibold text-green-800">
                    Holistic Support:
                  </span>{" "}
                  Beyond advice, we offer full farm business support – including
                  loans, input procurement, insurance, and buyer linkage.
                </span>
              </li>
            </ul>
          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div className="bg-white rounded-2xl shadow-lg p-8 animate-fade-in-up transition-all duration-700">
              <h3 className="text-2xl font-semibold text-green-700 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-700">
                To empower a new generation of youth extension agents to deliver
                high-impact, digital advisory and business services to every
                smallholder farmer in Nigeria and eventually, across Africa.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8 animate-fade-in-up transition-all duration-700 delay-200">
              <h3 className="text-2xl font-semibold text-green-700 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-700">
                A future where every farm is profitable, every farmer is
                empowered, and every community thrives.
              </p>
            </div>
          </div>

          {/* How to Engage */}
          <div className="py-8">
            <h2 className="text-4xl font-bold text-green-700 mb-8 text-center animate-fade-in-down transition-all duration-700">
              How to Engage
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col hover:shadow-2xl transition-transform duration-500 hover:scale-105 animate-fade-in-up group">
                <h4 className="text-2xl font-semibold text-green-700 mb-3 group-hover:text-green-900 transition-colors duration-300">
                  For Farmers
                </h4>
                <ul className="list-disc list-inside text-gray-700 space-y-2 text-left">
                  <li className="transition-all duration-300 group-hover:translate-x-2">Onboard easily with the help of a local agent</li>
                  <li className="transition-all duration-300 group-hover:translate-x-2">Get real-time advice in your local language</li>
                  <li className="transition-all duration-300 group-hover:translate-x-2">Access loans, insurance, and farm inputs</li>
                  <li className="transition-all duration-300 group-hover:translate-x-2">Sell your produce through trusted buyers</li>
                </ul>
              </div>
              <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col hover:shadow-2xl transition-transform duration-500 hover:scale-105 animate-fade-in-up group delay-100">
                <h4 className="text-2xl font-semibold text-green-700 mb-3 group-hover:text-green-900 transition-colors duration-300">
                  For NYSC Youth
                </h4>
                <ul className="list-disc list-inside text-gray-700 space-y-2 text-left">
                  <li className="transition-all duration-300 group-hover:translate-x-2">Become a Certified Digital Extension Agent</li>
                  <li className="transition-all duration-300 group-hover:translate-x-2">Get trained in agribusiness, data, and digital tools</li>
                  <li className="transition-all duration-300 group-hover:translate-x-2">Work in the field while making real impact</li>
                  <li className="transition-all duration-300 group-hover:translate-x-2">Start your career as an agripreneur</li>
                </ul>
              </div>
              <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col hover:shadow-2xl transition-transform duration-500 hover:scale-105 animate-fade-in-up group delay-200">
                <h4 className="text-2xl font-semibold text-green-700 mb-3 group-hover:text-green-900 transition-colors duration-300">
                  For Partners & Investors
                </h4>
                <ul className="list-disc list-inside text-gray-700 space-y-2 text-left">
                  <li className="transition-all duration-300 group-hover:translate-x-2">
                    Integrate your services (credit, insurance, inputs, etc.)
                  </li>
                  <li className="transition-all duration-300 group-hover:translate-x-2">Get real-time insights and data</li>
                  <li className="transition-all duration-300 group-hover:translate-x-2">Scale development programs through our agent network</li>
                  <li className="transition-all duration-300 group-hover:translate-x-2">Improve rural livelihoods and food security</li>
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

