import { useEffect, useState } from "react";
import API from "../services/api";
import DashboardNavbar from "../components/DashboardNavbar";
import { useNavigate } from "react-router-dom";

function InstructorDashboard() {
    const [courses, setCourses] = useState([]);
    const navigate = useNavigate();

    const username =
        localStorage.getItem("username") || "Instructor";

    useEffect(() => {
        API.get("courses/instructor-courses/")
            .then((res) => setCourses(res.data))
            .catch(() => alert("Error fetching courses"));
    }, []);

    return (
        <div className="min-h-screen bg-gray-100">

            <DashboardNavbar />

            <div className="max-w-6xl mx-auto p-6">

                <div className="mb-8">
                    <h1 className="text-4xl font-bold">
                        Welcome Back, {username} 👋
                    </h1>

                    <p className="text-gray-600 mt-2">
                        Manage your courses and students.
                    </p>
                </div>

                {/* Stats Cards */}

                <div className="grid md:grid-cols-4 gap-4 mb-8">

                    <div className="bg-white shadow rounded-xl p-5">
                        <h3 className="text-gray-500">
                            Total Courses
                        </h3>

                        <p className="text-3xl font-bold mt-2">
                            {courses.length}
                        </p>
                    </div>

                    <div className="bg-white shadow rounded-xl p-5">
                        <h3 className="text-gray-500">
                            Published Courses
                        </h3>

                        <p className="text-3xl font-bold mt-2">
                            {courses.length}
                        </p>
                    </div>

                    <div className="bg-white shadow rounded-xl p-5">
                        <h3 className="text-gray-500">
                            Students
                        </h3>

                        <p className="text-3xl font-bold mt-2">
                            0
                        </p>
                    </div>

                    <div className="bg-white shadow rounded-xl p-5">
                        <h3 className="text-gray-500">
                            Revenue
                        </h3>

                        <p className="text-3xl font-bold mt-2">
                            ₹0
                        </p>
                    </div>

                </div>

                {/* Quick Actions */}

                <div className="mb-10">

                    <h2 className="text-2xl font-bold mb-4">
                        Quick Actions
                    </h2>

                    <div className="grid md:grid-cols-3 gap-4">

                        <button
                            onClick={() => navigate("/create-course")}
                            className="bg-indigo-600 text-white p-4 rounded-xl"
                        >
                            Create Course
                        </button>

                        <button
                            onClick={() => navigate("/instructor-courses")}
                            className="bg-green-600 text-white p-4 rounded-xl"
                        >
                            My Courses
                        </button>

                        <button
                            className="bg-yellow-500 text-white p-4 rounded-xl"
                        >
                            Analytics (Coming Soon)
                        </button>

                    </div>

                </div>

                {/* Course List */}

                <h2 className="text-2xl font-bold mb-6">
                    My Courses
                </h2>

                {courses.length === 0 ? (
                    <div className="bg-white p-8 rounded-xl shadow text-center">

                        <h3 className="text-xl font-semibold mb-2">
                            No Courses Created Yet
                        </h3>

                        <p className="text-gray-600">
                            Create your first course to start teaching.
                        </p>

                    </div>
                ) : (
                    courses.map((course) => (
                        <div
                            key={course.id}
                            className="bg-white rounded-2xl shadow p-6 mb-5"
                        >
                            <h3 className="text-xl font-semibold">
                                {course.title}
                            </h3>

                            <p className="text-gray-600 mt-2">
                                {course.description}
                            </p>
                        </div>
                    ))
                )}

            </div>

        </div>
    );
}

export default InstructorDashboard;