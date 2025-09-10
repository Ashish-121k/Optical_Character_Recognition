import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo / App Name */}
        <Link to="/" className="text-2xl font-bold text-indigo-600">
          MyApp
        </Link>

        {/* Nav Links */}
        <div className="flex items-center space-x-6">
          <Link
            to="/"
            className="text-gray-700 hover:text-indigo-600 transition"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-gray-700 hover:text-indigo-600 transition"
          >
            About
          </Link>
          <Link
            to="/tryocr"
            className="text-gray-700 hover:text-indigo-600 transition"
          >
            Try OCR
          </Link>

          {/* Auth Buttons */}
          {!user ? (
            <>
              <Link
                to="/login"
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="px-4 py-2 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition"
              >
                Sign Up
              </Link>
            </>
          ) : (
            <div className="flex items-center space-x-4">
              <span className="text-gray-700 font-medium">
                Hi, {user.fullName || user.username}
              </span>
              <button
                onClick={logout}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
