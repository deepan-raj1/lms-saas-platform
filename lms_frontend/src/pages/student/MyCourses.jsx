import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../../services/api";
import StudentNavbar from "../../components/navbars/StudentNavbar";

function MyCourses() {
    const [courses, setCourses] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        API.get("courses/my-courses/")
            .then((res) => {
                setCourses(res.data);
            })
            .catch((err) => {
                console.log(err.response?.data);
                alert("Error loading enrolled courses.");
            });
    }, []);

    return (
        <div className="min-h-screen bg-gray-100">

            <StudentNavbar />

            <div className="max-w-7xl mx-auto p-6">

                {/* Header */}

                <div className="flex justify-between items-center mb-8">

                    <div>
                        <h1 className="text-4xl font-bold">
                            My Courses
                        </h1>

                        <p className="text-gray-600 mt-2">
                            Continue your learning journey.
                        </p>
                    </div>

                    <button
                        onClick={() => navigate("/browse-courses")}
                        className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-3 rounded-lg"
                    >
                        Browse More Courses
                    </button>

                </div>

                {/* Statistics */}

                <div className="grid md:grid-cols-3 gap-6 mb-10">

                    <div className="bg-white rounded-xl shadow p-6">

                        <h3 className="text-gray-500">
                            Enrolled Courses
                        </h3>

                        <p className="text-3xl font-bold mt-2">
                            {courses.length}
                        </p>

                    </div>

                    <div className="bg-white rounded-xl shadow p-6">

                        <h3 className="text-gray-500">
                            Completed
                        </h3>

                        <p className="text-3xl font-bold mt-2">
                            0
                        </p>

                    </div>

                    <div className="bg-white rounded-xl shadow p-6">

                        <h3 className="text-gray-500">
                            In Progress
                        </h3>

                        <p className="text-3xl font-bold mt-2">
                            {courses.length}
                        </p>

                    </div>

                </div>

                {/* Empty State */}

                {courses.length === 0 ? (

                    <div className="bg-white rounded-2xl shadow-lg p-12 text-center">

                        <h2 className="text-2xl font-bold mb-3">
                            No Courses Enrolled
                        </h2>

                        <p className="text-gray-600 mb-6">
                            Browse courses and start learning today.
                        </p>

                        <button
                            onClick={() => navigate("/browse-courses")}
                            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg"
                        >
                            Browse Courses
                        </button>

                    </div>

                ) : (

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

                        {courses.map((course) => (

                            <div
                                key={course.id}
                                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition"
                            >

                                {/* Thumbnail */}

                                {course.thumbnail ? (

                                    <img
                                        src={`http://127.0.0.1:8000${course.thumbnail}`}
                                        alt={course.title}
                                        className="w-full h-52 object-cover"
                                    />

                                ) : (

                                    <div className="h-52 bg-gray-200 flex items-center justify-center">

                                        <span className="text-gray-500">
                                            No Thumbnail
                                        </span>

                                    </div>

                                )}

                                {/* Course Details */}

                                <div className="p-5">

                                    <h2 className="text-xl font-bold">
                                        {course.title}
                                    </h2>

                                    <p className="text-sm text-gray-500 mt-2">
                                        Instructor : {course.instructor_name}
                                    </p>

                                    <p className="text-gray-600 mt-4 line-clamp-3">
                                        {course.description}
                                    </p>

                                    {/* Progress */}

                                    <div className="mt-5">

                                        <div className="flex justify-between text-sm mb-1">

                                            <span>
                                                Progress
                                            </span>

                                            <span>
                                                0%
                                            </span>

                                        </div>

                                        <div className="w-full bg-gray-200 rounded-full h-3">

                                            <div
                                                className="bg-green-500 h-3 rounded-full"
                                                style={{ width: "0%" }}
                                            ></div>

                                        </div>

                                    </div>

                                    {/* Buttons */}

                                    <div className="mt-6 flex gap-3">

                                        <button
                                            className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg"
                                        >
                                            Continue Learning
                                        </button>

                                        <Link
                                            to={`/courses/${course.id}`}
                                        >
                                            <button
                                                className="bg-gray-200 hover:bg-gray-300 px-4 py-3 rounded-lg"
                                            >
                                                Details
                                            </button>
                                        </Link>

                                    </div>

                                </div>

                            </div>

                        ))}

                    </div>

                )}

            </div>

        </div>
    );
}

export default MyCourses;