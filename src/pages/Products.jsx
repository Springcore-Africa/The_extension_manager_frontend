import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Products() {
  return (
    <>
      {/* Navbar Component */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full min-h-[80vh] bg-no-repeat bg-cover bg-center flex items-center justify-center bg-gray-800">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl sm:text-5xl md:text-8xl lg:text-9xl xl:text-[4rem] font-semibold text-white drop-shadow-lg mb-6">
            OUR PRODUCTS
          </h1>
        </div>
      </section>

      {/* Footer Component */}
      <Footer />
    </>
  );
}

export default Products;
