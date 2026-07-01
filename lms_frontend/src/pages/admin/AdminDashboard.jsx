import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../../services/api";
import AdminNavbar from "../../components/navbars/AdminNavbar";

function AdminDashboard() {

    const username = localStorage.getItem("username");
    const [stats, setStats] = useState({
        total_courses: 0,
        total_students: 0,
        total_instructors: 0,
        total_enrollments: 0
    });

    useEffect(() => {

        API.get("users/admin-dashboard-stats/")
            .then((res) => {
                setStats(res.data);
            })
            .catch((err) => {
                console.log(err.response);
            });
    }, []);



    return (
        <div className="min-h-screen bg-gray-100">

            <AdminNavbar />

            <div className="max-w-7xl mx-auto p-8">

                {/* Welcome */}

                <div className="mb-10">

                    <h1 className="text-4xl font-bold">
                        Welcome, {username}
                    </h1>

                    <p className="text-gray-600 mt-2">
                        Manage your Learning Management System from one place.
                    </p>

                </div>

                {/* Statistics */}

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">

                    <div className="bg-white rounded-xl shadow p-6">

                        <h3 className="text-gray-500">
                            Total Courses
                        </h3>

                        <p className="text-4xl font-bold mt-4 text-indigo-600">
                            {stats.total_courses}
                        </p>

                    </div>

                    <div className="bg-white rounded-xl shadow p-6">

                        <h3 className="text-gray-500">
                            Total Students
                        </h3>

                        <p className="text-4xl font-bold mt-4 text-green-600">
                            {stats.total_students}
                        </p>

                    </div>

                    <div className="bg-white rounded-xl shadow p-6">

                        <h3 className="text-gray-500">
                            Total Instructors
                        </h3>

                        <p className="text-4xl font-bold mt-4 text-orange-600">
                            {stats.total_instructors}
                        </p>

                    </div>

                    <div className="bg-white rounded-xl shadow p-6">

                        <h3 className="text-gray-500">
                            Total Enrollments
                        </h3>

                        <p className="text-4xl font-bold mt-4 text-red-600">
                            {stats.total_enrollments}
                        </p>

                    </div>

                </div>

                {/* Quick Actions */}

                <h2 className="text-2xl font-bold mb-6">

                    Quick Actions

                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">

                    <Link
                        to="/create-course"
                        className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl p-6 text-center font-semibold"
                    >
                        + Create Course
                    </Link>

                    <Link
                        to="/admin-courses"
                        className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl p-6 text-center font-semibold"
                    >
                        Manage Courses
                    </Link>

                    <Link
                        to="/admin-instructors"
                        className="bg-green-600 hover:bg-green-700 text-white rounded-xl p-6 text-center font-semibold"
                    >
                        Manage Instructors
                    </Link>

                    <Link
                        to="/admin-students"
                        className="bg-orange-600 hover:bg-orange-700 text-white rounded-xl p-6 text-center font-semibold"
                    >
                        Manage Students
                    </Link>

                </div>

                {/* Recent Activity */}

                <div className="bg-white rounded-xl shadow p-8">

                    <h2 className="text-2xl font-bold mb-5">

                        Recent Activity

                    </h2>

                    <p className="text-gray-500">

                        Activity tracking will be available in the next phase.

                    </p>

                </div>

            </div>

        </div>
    );
}

export default AdminDashboard;