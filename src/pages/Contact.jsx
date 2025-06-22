import { useState } from "react";
import Bgimg from "../assets/contact-hero.jpeg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setShowModal(true);
  };

  return (
    <>
      {/* Navbar Component */}
      <Navbar />

      {/* Hero Section */}
      <div
        className="relative w-full min-h-[90vh] bg-no-repeat bg-cover bg-center flex items-center justify-center animate-fade-in-down"
        style={{ backgroundImage: `url(${Bgimg})` }}
      >
        <div className="absolute inset-0 bg-black/50 transition-opacity duration-700" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-semibold text-white drop-shadow-lg mb-6 tracking-tight transition-all duration-700 ease-in-out animate-fade-in-up">
            CONTACT US
          </h1>
          <p className="text-lg italic sm:text-2xl text-green-100 font-medium max-w-2xl mx-auto transition-opacity duration-700 delay-200 animate-fade-in">
            We'd love to hear from you, your feedback means a lot to us.
          </p>
        </div>
      </div>

      {/* Form Section */}
      <section className="min-h-screen bg-green-50 py-16 px-4 flex flex-col items-center animate-fade-in-up">
        <div className="max-w-2xl w-full bg-white rounded-xl shadow-2xl p-8 animate-slide-in-left">
          <h1 className="text-3xl font-bold text-green-700 mb-6 text-center animate-fade-in-down">
            Contact Us
          </h1>
          <p className="text-gray-700 mb-8 text-center animate-fade-in">
            We'd love to hear from you! Whether you are a farmer looking to join
            the platform, an NYSC graduate seeking a rewarding career, or a
            partner interested in scaling agricultural impact - we're here to
            talk.
          </p>
          {submitted ? (
            <div className="text-green-700 text-center text-lg font-semibold animate-fade-in-up">
              Thank you for reaching out! We will get back to you soon.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="animate-fade-in-up">
                <label
                  className="block text-green-800 font-semibold mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="w-full px-4 py-2 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 transition-all duration-300 hover:border-green-400"
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Full Name"
                />
              </div>
              <div className="animate-fade-in-up">
                <label
                  className="block text-green-800 font-semibold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="w-full px-4 py-2 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 transition-all duration-300 hover:border-green-400"
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="example123@email.com"
                />
              </div>
              <div className="animate-fade-in-up">
                <label
                  className="block text-green-800 font-semibold mb-2"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  className="w-full px-4 py-2 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 transition-all duration-300 hover:border-green-400"
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
                className="w-full bg-green-700 text-white py-3 rounded-lg font-semibold hover:bg-green-900 transition shadow duration-300 animate-fade-in-up"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Modal for submission confirmation */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 animate-fade-in">
          <div className="bg-white rounded-xl shadow-xl p-8 max-w-md w-full animate-fade-in-up">
            <h2 className="text-2xl font-bold mb-4 text-green-700">
              Thank You!
            </h2>
            <p className="mb-6 text-gray-700">
              Your message has been sent. We appreciate your feedback and will
              get back to you soon.
            </p>
            <button
              className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800 transition"
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Footer Component */}
      <Footer />
    </>
  );
}

export default Contact;
