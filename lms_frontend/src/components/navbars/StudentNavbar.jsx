import { Link, useNavigate } from "react-router-dom";

function StudentNavbar() {
    const navigate = useNavigate();

    const username = localStorage.getItem("username");

    const handleLogout = () => {
        localStorage.clear();
        navigate("/");
    };

    return (
        <nav className="bg-indigo-600 text-white shadow-md">

            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center">

                {/* Logo */}
                <Link
                    to="/student-dashboard"
                    className="text-2xl font-bold"
                >
                    ZENIX LMS
                </Link>

                {/* Navigation */}
                <div className="flex items-center gap-6 ml-10">

                    <Link
                        to="/student-dashboard"
                        className="hover:text-indigo-200"
                    >
                        Dashboard
                    </Link>

                    <Link
                        to="/browse-courses"
                        className="hover:text-indigo-200"
                    >
                        Browse Courses
                    </Link>

                    <Link
                        to="/my-courses"
                        className="hover:text-indigo-200"
                    >
                        My Courses
                    </Link>

                    <Link
                        to="/certificates"
                        className="hover:text-indigo-200"
                    >
                        Certificates
                    </Link>

                    <Link
                        to="/student-profile"
                        className="hover:text-indigo-200"
                    >
                        Profile
                    </Link>

                </div>

                {/* Right Side */}
                <div className="ml-auto flex items-center gap-5">

                    <span className="font-medium">
                        👋 {username}
                    </span>

                    <button
                        onClick={handleLogout}
                        className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg"
                    >
                        Logout
                    </button>

                </div>

            </div>

        </nav>
    );
}

export default StudentNavbar;