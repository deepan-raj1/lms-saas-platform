import { Link, useNavigate } from "react-router-dom";

function InstructorNavbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <nav className="bg-indigo-600 text-white px-6 py-4 shadow-md">

      <div className="max-w-7xl mx-auto flex items-center">

        {/* Logo */}
        <h1 className="text-xl font-bold">
          Zenix LMS
        </h1>

        {/* Menu */}
        <div className="flex gap-6 ml-10">

          <Link
            to="/instructor-dashboard"
            className="hover:text-indigo-200"
          >
            Dashboard
          </Link>

          <Link
            to="/instructor-courses"
            className="hover:text-indigo-200"
          >
            My Courses
          </Link>

          <Link
            to="/create-course"
            className="hover:text-indigo-200"
          >
            Create Course
          </Link>

          <Link
            to="/instructor-profile"
            className="hover:text-indigo-200"
          >
            Profile
          </Link>

        </div>

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="ml-auto bg-red-500 hover:bg-red-600 px-4 py-2 rounded"
        >
          Logout
        </button>

      </div>

    </nav>
  );
}

export default InstructorNavbar;