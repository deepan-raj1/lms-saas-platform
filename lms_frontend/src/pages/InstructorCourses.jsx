import { useEffect, useState } from "react";
import API from "../services/api";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "../components/DashboardNavbar";

function InstructorCourses() {
    const [courses, setCourses] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        API.get("courses/instructor-courses/")
            .then((res) => setCourses(res.data))
            .catch(() => alert("Error fetching instructor courses"));
    }, []);

    const handleDelete = async (courseId) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this course? This action cannot be undone.");
        if (!confirmDelete) return;
        try {
            await API.delete(`courses/${courseId}/edit/`);
            setCourses(courses.filter(course => course.id !== courseId));
            alert("Course deleted successfully!");
        } catch (err) {
            console.log(err.response?.data);
            alert("Course deletion failed");
        }
    };

    return (
    <div className="min-h-screen bg-gray-100">
        <Navbar />

        <div className="max-w-6xl mx-auto p-6">

            <div className="flex justify-between items-center mb-8">

                <div>
                    <h1 className="text-4xl font-bold">
                        My Courses
                    </h1>

                    <p className="text-gray-600">
                        Manage and grow your learning business
                    </p>
                </div>

                <button
                    onClick={() => navigate("/create-course")}
                    className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-3 rounded-lg"
                >
                    + Create Course
                </button>

            </div>

            <div className="grid md:grid-cols-3 gap-4 mb-8">

                <div className="bg-white rounded-xl shadow p-5">
                    <h3 className="text-gray-500">
                        Total Courses
                    </h3>

                    <p className="text-3xl font-bold mt-2">
                        {courses.length}
                    </p>
                </div>

                <div className="bg-white rounded-xl shadow p-5">
                    <h3 className="text-gray-500">
                        Published
                    </h3>

                    <p className="text-3xl font-bold mt-2">
                        {courses.length}
                    </p>
                </div>

                <div className="bg-white rounded-xl shadow p-5">
                    <h3 className="text-gray-500">
                        Students
                    </h3>

                    <p className="text-3xl font-bold mt-2">
                        0
                    </p>
                </div>

            </div>


            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {courses.length === 0 ? (
                <div className="col-span-full bg-white rounded-xl p-10 text-center shadow">
                    <h3 className="text-xl font-semibold mb-2">
                        No Courses Created Yet
                    </h3>

                    <p className="text-gray-600 mb-4">
                        Create your first course and start teaching.
                    </p>

                    <button
                        onClick={() => navigate("/create-course")}
                        className="bg-indigo-600 text-white px-5 py-3 rounded-lg"
                    >
                        Create First Course
                    </button>
                </div>
            ) : (
                <>

                    {courses.map((course) => (
                        <div
                            key={course.id}
                            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition"
                        >
                            {/* Thumbnail */}
                            {
                                course.thumbnail ? (
                                    <img
                                        src={`http://127.0.0.1:8000${course.thumbnail}`}
                                        alt={course.title}
                                        className="w-full h-52 object-cover"
                                    />
                                ) : (
                                    <div className="h-52 bg-gray-200 flex items-center justify-center">
                                        No Thumbnail
                                    </div>
                                )
                            }

                            {/* Course Details Section */}
                            <div className="p-5">

                                <div className="flex justify-between items-center">

                                    <h3 className="text-xl font-bold">
                                        {course.title}
                                    </h3>

                                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                                        Published
                                    </span>

                                </div>

                                <p className="text-gray-600 mt-3 line-clamp-3">
                                    {course.description}
                                </p>

                                {/* Action Buttons */}
                                <div className="flex gap-2 mt-5">

                                    <button
                                        className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded"
                                    >
                                        Manage
                                    </button>

                                    <Link to={`/edit-course/${course.id}`}>
                                        <button
                                            className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded"
                                        >
                                            Edit
                                        </button>
                                    </Link>

                                    <button
                                        onClick={() => handleDelete(course.id)}
                                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
                                    >
                                        Delete
                                    </button>

                                </div>
                            </div> 
                        </div> 
                    ))}
                </>
            )}

            </div>
        </div>
    </div>
);
}

export default InstructorCourses;

