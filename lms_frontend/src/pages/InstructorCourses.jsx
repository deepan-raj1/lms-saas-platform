import { useEffect, useState } from "react";
import API from "../services/api";
import { Link } from "react-router-dom";
import Navbar from "../components/DashboardNavbar";

function InstructorCourses() {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        API.get("courses/instructor-courses/")
            .then((res) => setCourses(res.data))
            .catch(() => alert("Error fetching instructor courses"));
    }, []);

    const handleDelete = async (courseId) => {
        try {
            await API.delete(`courses/${courseId}/edit/`);
            setCourses(courses.filter(course => course.id !== courseId));
            alert("Course deleted successfully!");
        } catch (err) {
            console.log(err.response.data);
            alert("Course deletion failed");
        }
    };

    return (
    <div>
        <Navbar />

        <div className="max-w-6xl mx-auto p-6">

            <h2 className="text-3xl font-bold mb-4">
                Instructor Courses
            </h2>

            <div className="bg-green-100 p-4 rounded-lg mb-6 shadow">
                <h3 className="text-xl font-semibold">
                    Courses Created: {courses.length}
                </h3>
            </div>
            {courses.map((course) => (
                <div key={course.id} className="bg-white shadow-md rounded-lg p-5 mb-4 border">
                    <h3 className="text-xl font-semibold">{course.title}</h3>
                    <p className="text-gray-600 mt-2">{course.description}</p>

                    <Link to={`/edit-course/${course.id}`}>
                        <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded mt-3 mr-2">
                            Edit
                        </button>
                    </Link>

                    <button 
                        onClick={() => handleDelete(course.id)}
                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded mt-3 mr-2"
                    >
                        Delete
                    </button>

                </div>
            ))}
        </div>
    </div>
    );
}

export default InstructorCourses;