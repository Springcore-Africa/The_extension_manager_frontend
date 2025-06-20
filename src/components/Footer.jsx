import { Link } from "react-router-dom";
import Bgimg from "../assets/footer-img.jpeg";
import Logo from "../assets/logo.jpeg";
import {
  FaSquareFacebook,
  FaSquareXTwitter,
  FaSquareInstagram,
  FaLinkedin,
} from "react-icons/fa6";

function Footer() {
  return (
    <footer
      className="relative w-full min-h-[50vh] bg-no-repeat bg-cover bg-center flex flex-col justify-end text-white pt-5 pb-0"
      style={{ backgroundImage: `url(${Bgimg})` }}
    >
      <div className="absolute inset-0 bg-black/70 z-0"></div>
      {/* Footer Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row md:items-start md:justify-between gap-10 px-4 py-8 animate-fade-in-up">
        {/* Logo & About */}
        <div className="flex-1 flex flex-col items-start animate-slide-in-left">
          <Link to="/" className="flex items-center mb-4 group">
            <img
              src={Logo}
              alt="logo"
              className="w-12 h-12 object-cover rounded-lg border-2 border-green-600 shadow-md bg-white group-hover:scale-110 transition-transform duration-300"
              style={{ minWidth: 48, minHeight: 48 }}
            />
          </Link>
          <p className="text-green-100 mb-4 max-w-xs animate-fade-in">
            Empowering farmers and communities with technology, knowledge, and
            sustainable solutions for a better agricultural future.
          </p>
          {/* Social Media Icons */}
          <div className="flex gap-4 mt-2">
            <a
              href="https://www.facebook.com"
              className="text-green-100 hover:text-white transition hover:scale-125 duration-300 animate-fade-in-up"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaSquareFacebook size={24} />
            </a>
            <a
              href="https://www.x.com"
              className="text-green-100 hover:text-white transition hover:scale-125 duration-300 animate-fade-in-up"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaSquareXTwitter size={24} />
            </a>
            <a
              href="https://www.instagram.com"
              className="text-green-100 hover:text-white transition hover:scale-125 duration-300 animate-fade-in-up"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaSquareInstagram size={24} />
            </a>
            <a
              href="https://www.linkedin.com"
              className="text-green-100 hover:text-white transition hover:scale-125 duration-300 animate-fade-in-up"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
        
        {/* Quick Links */}
        <div className="flex-1 mb-8 md:mb-0 flex flex-col items-start sm:items-center md:items-center animate-fade-in-up">
          <h4 className="text-lg font-semibold mb-4 text-white animate-fade-in-down">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-green-300 transition hover:translate-x-2 duration-300 animate-slide-in-left">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-green-300 transition hover:translate-x-2 duration-300 animate-slide-in-right">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-green-300 transition hover:translate-x-2 duration-300 animate-slide-in-left">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/products" className="hover:text-green-300 transition hover:translate-x-2 duration-300 animate-slide-in-right">
                Products
              </Link>
            </li>
          </ul>
        </div>
        {/* Contact */}
        <div className="flex-1 mb-8 md:mb-0 flex flex-col items-start animate-slide-in-right">
          <h4 className="text-lg font-semibold mb-4 text-green-200 animate-fade-in-down">
            Contact Us
          </h4>
          <p className="mb-2 text-green-100 text-left animate-fade-in">
            The Extension Manager Headquarters: MS-2 Penthouse, Micheville
            Estate, Lokogoma District Abuja
          </p>
          <p className="mb-2 text-green-100 text-left animate-fade-in-up">
            General Inquiries:{" "}
            <a
              href="mailto:info@extensionmanager.org"
              className="hover:text-green-300 underline underline-offset-2 transition"
            >
              info@extensionmanager.org
            </a>
          </p>
          <p className="mb-2 text-green-100 text-left animate-fade-in-up">
            Support & Helpdesk:{" "}
            <a
              href="mailto:support@extensionmanager.org"
              className="hover:text-green-300 underline underline-offset-2 transition"
            >
              support@extensionmanager.org
            </a>
          </p>
          <p className="mb-2 text-green-100 text-left animate-fade-in-up">
            Want to work with us?:{" "}
            <a
              href="mailto:partnerships@extensionmanager.org"
              className="hover:text-green-300 underline underline-offset-2 transition"
            >
              partnerships@extensionmanager.org
            </a>
          </p>
          <p className="mb-2 text-green-100 text-left animate-fade-in-up">
            Phone: +234 000 123 4567
          </p>
          <p className="mt-4 text-green-100 text-sm text-left animate-fade-in">
            Mon - Fri: 9:00am - 5:00pm (WAT)
          </p>
        </div>
      </div>

      {/* Copyright at the bottom */}
      <div className="relative z-10 w-full border-t border-green-800 pt-6 pb-4 text-center text-green-100 text-sm bg-transparent animate-fade-in-up">
        &copy; {new Date().getFullYear()} The Extension Manager. All rights
        reserved.
      </div>
    </footer>
  );
}


export default Footer;