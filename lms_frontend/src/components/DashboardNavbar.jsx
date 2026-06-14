// import { Link } from "react-router-dom";

// function Navbar() {
//     const handleLogout = () => {
//         localStorage.clear();
//         window.location.href = "/";
//     };

//     return (
//         <nav
//             style={{
//                 display: "flex",
//                 gap: "15px",
//                 padding: "15px",
//                 backgroundColor: "#f0f0f0",
//                 marginBottom: "20px",
//             }}
//         >
//             <h3>LMS Platform</h3>

//             <Link to="/dashboard">Dashboard</Link>
//             <Link to="/courses">Courses</Link>
//             <Link to="/create-course">Create Course</Link>
//             <Link to="/instructor-courses">Instructor Courses</Link>

//             <button onClick={handleLogout} style={{ marginLeft: "auto" }}>
//                 Logout
//             </button>
//         </nav>
//     );
// }

// export default Navbar;


import { Link } from "react-router-dom";

function Navbar() {
  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  return (
    <nav className="bg-blue-600 text-white px-6 py-4 flex items-center gap-6 shadow-md">
      <h1 className="text-xl font-bold">
        LMS Platform
      </h1>

      <Link to="/dashboard" className="hover:underline">
        Dashboard
      </Link>

      <Link to="/courses" className="hover:underline">
        Courses
      </Link>

      <Link to="/profile" className="hover:underline">
        Profile
      </Link>


      <Link to="/create-course" className="hover:underline">
        Create Course
      </Link>

      <Link to="/instructor-courses" className="hover:underline">
        Instructor Courses
      </Link>

      <button
        onClick={handleLogout}
        className="ml-auto bg-red-500 hover:bg-red-600 px-4 py-2 rounded"
      >
        Logout
      </button>
    </nav>
  );
}

export default Navbar;