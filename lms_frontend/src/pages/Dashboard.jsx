import { useEffect, useState } from "react";
import API from "../services/api";
import Navbar from "../components/DashboardNavbar";


function Dashboard() {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        API.get("courses/my-courses/")
            .then((res) => setCourses(res.data))
            .catch(() => alert("Error fetching courses"));
    }, []);

    return (
    <div>
        <Navbar />

        <div className="max-w-5xl mx-auto p-6">

            <h2 className="text-3xl font-bold mb-4">
                My Courses
            </h2>

            <div className="bg-blue-100 p-4 rounded-lg mb-6 shadow">
                <h3 className="text-xl font-semibold">
                    Courses Enrolled: {courses.length}
                </h3>
            </div>

            {courses.map((course) => (
                <div
                    key={course.id}
                    className="bg-white shadow-md rounded-lg p-5 mb-4 border"
                >
                    <h3 className="text-xl font-semibold">
                        {course.title}
                    </h3>

                    <p className="text-gray-600 mt-2">
                        {course.description}
                    </p>
                </div>
            ))}

        </div>
    </div>
);
}

export default Dashboard;