import { Link } from "react-router-dom";
import Logo from "../assets/logo.jpeg";
import NotFoundImg from "../assets/NotFound.jpg";

function NotFound() {
  return (
    <>
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-50 px-4">
      <img
        src={NotFoundImg}
        alt="Not Found"
        className="w-64 max-w-xs mb-6 rounded-xl shadow-lg border-4 border-green-100 animate-fade-in-up"
        style={{ animationDelay: "0.3s", animationDuration: "1.2s" }}
      />
      <h2 className="text-2xl font-semibold text-green-700 mb-4 animate-fade-in-up">
        Page Not Found
      </h2>
      <p className="mb-6 text-gray-700 text-center max-w-md animate-fade-in-up">
        Sorry, the page you are looking for does not exist or has been moved.
      </p>
      <Link
        to="/"
        className="bg-green-700 text-white px-3 py-2 rounded-lg font-semibold hover:bg-green-800 transition animate-fade-in"
        style={{ animationDelay: "0.5s" }}
      >
        Go to Home
      </Link>
    </div>
    </>
  );
}

export default NotFound;
