import { useEffect, useState } from "react";
import API from "../services/api";
import Navbar from "../components/DashboardNavbar";
import { useNavigate } from "react-router-dom";


function StudentDashboard() {
    const [courses, setCourses] = useState([]);
    const navigate = useNavigate();

    const username = localStorage.getItem("username") || "Student";

    useEffect(() => {
        API.get("courses/my-courses/")
            .then((res) => setCourses(res.data))
            .catch(() => alert("Error fetching courses"));
    }, []);

    return (
    <div className="min-h-screen bg-gray-100">
        <Navbar />

        <div className="max-w-5xl mx-auto p-6">

            <div className="mb-8">
                <h1 className="text-4xl font-bold">
                    Welcome Back, {username} 👋
                </h1>

                <p className="text-gray-600 mt-2">
                    Continue your learning journey today.
                </p>
            </div>



            <div className="grid md:grid-cols-4 gap-4 mb-8">

                <div className="bg-white shadow rounded-xl p-5">
                    <h3 className="text-gray-500">
                    Enrolled Courses
                    </h3>

                    <p className="text-3xl font-bold mt-2">
                    {courses.length}
                    </p>
                </div>

                <div className="bg-white shadow rounded-xl p-5">
                    <h3 className="text-gray-500">
                    In Progress
                    </h3>

                    <p className="text-3xl font-bold mt-2">
                    {courses.length}
                    </p>
                </div>

                <div className="bg-white shadow rounded-xl p-5">
                    <h3 className="text-gray-500">
                    Completed
                    </h3>

                    <p className="text-3xl font-bold mt-2">
                    0
                    </p>
                </div>

                <div className="bg-white shadow rounded-xl p-5">
                    <h3 className="text-gray-500">
                    Certificates
                    </h3>

                    <p className="text-3xl font-bold mt-2">
                    0
                    </p>
                </div>

            </div>

            <div className="mb-10">

                <h2 className="text-2xl font-bold mb-4">
                    Quick Actions
                </h2>

                <div className="grid md:grid-cols-4 gap-4">

                    <button className="bg-indigo-600 text-white p-4 rounded-xl" onClick={() => navigate("/courses")}>
                    Browse Courses
                    </button>

                    <button className="bg-green-600 text-white p-4 rounded-xl" onClick={() => navigate("/profile")}>
                    My Profile
                    </button>

                    <button className="bg-yellow-500 text-white p-4 rounded-xl" onClick={() => navigate("/certificates")}>
                    Certificates (Coming Soon)
                    </button>

                    <button className="bg-red-500 text-white p-4 rounded-xl" onClick={() => navigate("/support")}>
                    Support (Coming Soon)
                    </button>

                </div>

             </div>
            
            <h2 className="text-2xl font-bold mb-6">
                My Learning
            </h2>

            {courses.length === 0 ? (
                <div className="bg-white p-8 rounded-xl shadow text-center">
                    <h3 className="text-xl font-semibold mb-2">
                        No Courses Yet
                    </h3>

                    <p className="text-gray-600">
                        Start exploring courses and begin learning today.
                    </p>
                </div>
            ) : (
                courses.map((course) => (
                    <div
                        key={course.id}
                        className="bg-white rounded-2xl shadow p-6 mb-5 hover:shadow-lg transition"
                    >
                        <h3 className="text-xl font-semibold">
                            {course.title}
                        </h3>

                        <p className="text-gray-600 mt-2">
                            {course.description}
                        </p>

                        <button className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded-lg">
                            Continue Learning
                        </button>
                    </div>
                ))
            )}
        </div>
    </div>
);
}

export default StudentDashboard;