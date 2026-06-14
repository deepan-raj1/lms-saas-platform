import { Link } from "react-router-dom";

function PublicNavbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <Link
          to="/"
          className="text-2xl font-bold text-indigo-600"
        >
          Zenix LMS
        </Link>

        <div className="hidden md:flex gap-8 items-center">

          <Link to="/" className="hover:text-indigo-600">
            Home
          </Link>

          <Link to="/courses" className="hover:text-indigo-600">
            Courses
          </Link>

          <Link to="/about" className="hover:text-indigo-600">
            About
          </Link>

          <Link to="/contact" className="hover:text-indigo-600">
            Contact
          </Link>

        </div>

        <div className="flex gap-3">

          <Link
            to="/login"
            className="px-4 py-2 border rounded-lg"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg"
          >
            Register
          </Link>

        </div>

      </div>
    </nav>
  );
}

export default PublicNavbar;