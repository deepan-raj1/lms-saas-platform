import { useEffect, useState } from "react";
import API from "../services/api";
import Navbar from "../components/Navbar";

function Dashboard() {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        API.get("courses/my-courses/")
            .then((res) => setCourses(res.data))
            .catch(() => alert("Error fetching courses"));
    }, []);

    return (
        <div className="max-w-5xl mx-auto p-6">
            <Navbar />
            <h2 className="text-3xl font-bold mb-6">My Courses</h2>

            <button
                onClick={() => {
                    localStorage.clear();
                    window.location.href = "/";
                }}
            >
                Logout
            </button>

            {courses.map((course) => (
                <div key={course.id} className="bg-white shadow-md rounded-lg p-5 mb-4 border">
                    <h3 className="text-xl font-semibold">{course.title}</h3>
                    <p className="text-gray-600 mt-2">{course.description}</p>
                </div>
            ))}
        </div>
    );
}

export default Dashboard;