import { Link, useNavigate } from "react-router-dom";

function DashboardNavbar() {
  const navigate = useNavigate();
  const role = localStorage.getItem("role");

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <nav className="bg-blue-600 text-white px-6 py-4 flex items-center gap-6 shadow-md">
      <h1 className="text-xl font-bold">
        LMS Platform
      </h1>

      <Link
        to={
          role === "admin"
            ? "/admin-dashboard"
            : role === "instructor"
            ? "/instructor-dashboard"
            : "/student-dashboard"
        }
        className="hover:underline"
      >
        Dashboard
      </Link>



      <Link to="/courses" className="hover:underline">
        Courses
      </Link>

      <Link to="/profile" className="hover:underline">
        Profile
      </Link>

      {role === "instructor" && (
        <>
          <Link to="/create-course" className="hover:underline">
            Create Course
          </Link>

          <Link to="/instructor-courses" className="hover:underline">
            Instructor Courses
          </Link>
        </>
      )}

      <button
        onClick={handleLogout}
        className="ml-auto bg-red-500 hover:bg-red-600 px-4 py-2 rounded"
      >
        Logout
      </button>
    </nav>
  );
}

export default DashboardNavbar;