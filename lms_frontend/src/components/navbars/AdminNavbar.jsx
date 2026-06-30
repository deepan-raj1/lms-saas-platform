import { Link, useNavigate } from "react-router-dom";

function AdminNavbar() {
    const navigate = useNavigate();

    const username = localStorage.getItem("username");

    const handleLogout = () => {
        localStorage.clear();
        navigate("/");
    };

    return (
        <nav className="bg-gray-900 text-white shadow-md">

            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center">

                {/* Logo */}
                <Link
                    to="/admin-dashboard"
                    className="text-2xl font-bold"
                >
                    ZENIX LMS
                </Link>

                {/* Navigation */}
                <div className="flex items-center gap-6 ml-10">

                    <Link
                        to="/admin-dashboard"
                        className="hover:text-gray-300"
                    >
                        Dashboard
                    </Link>

                    <Link
                        to="/admin-courses"
                        className="hover:text-gray-300"
                    >
                        Courses
                    </Link>

                    <Link
                        to="/admin-instructors"
                        className="hover:text-gray-300"
                    >
                        Instructors
                    </Link>

                    <Link
                        to="/admin-students"
                        className="hover:text-gray-300"
                    >
                        Students
                    </Link>

                    <Link
                        to="/admin-profile"
                        className="hover:text-gray-300"
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
                        className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg"
                    >
                        Logout
                    </button>

                </div>

            </div>

        </nav>
    );
}

export default AdminNavbar;