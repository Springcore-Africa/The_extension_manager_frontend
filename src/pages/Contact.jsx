import React from "react";
import { useState } from "react";
import Bgimg from "../assets/contact-hero.jpeg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // To send the form data to backend
    setSubmitted(true);
  };

  return (
    <>
    {/* Navbar Component */}
      <Navbar />

      {/* Hero Section  */}
      <div
        className="relative w-full min-h-[75vh] bg-no-repeat bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${Bgimg})` }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl sm:text-5xl md:text-8xl lg:text-9xl xl:text-[4rem] font-semibold text-white drop-shadow-lg mb-6 ">
            CONTACT US
          </h1>
        </div>
      </div>

      {/* Form Section  */}
      <section className="min-h-screen bg-green-50 py-16 px-4 flex flex-col items-center">
        <div className="max-w-2xl w-full bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-green-700 mb-6 text-center">
            Contact Us
          </h1>
          <p className="text-gray-700 mb-8 text-center">
            We'd love to hear from you! Whether you are a farmer looking to join
            the platform, an NYSC graduate seeking a rewarding career, or a
            partner interested in scaling agricultural impact - we're here to
            talk.
          </p>
          {submitted ? (
            <div className="text-green-700 text-center text-lg font-semibold">
              Thank you for reaching out! We will get back to you soon.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  className="block text-green-800 font-semibold mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="w-full px-4 py-2 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Full Name"
                />
              </div>
              <div>
                <label
                  className="block text-green-800 font-semibold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="w-full px-4 py-2 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="example123@email.com"
                />
              </div>
              <div>
                <label
                  className="block text-green-800 font-semibold mb-2"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  className="w-full px-4 py-2 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                  id="message"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  required
                  placeholder="How can we help you?"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-green-700 text-white py-3 rounded-lg font-semibold hover:bg-green-900 transition shadow"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Footer Component */}
      <Footer />
    </>
  );
}
