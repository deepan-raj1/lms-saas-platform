import { useEffect, useState } from "react";
import API from "../services/api";
import PublicNavbar from "../components/PublicNavbar";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function PublicCourses() {
    const [courses, setCourses] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();

    // useEffect(() => {
    //     API.get("/courses/")
    //         .then((res) => setCourses(res.data))
    //         .catch(() => alert("Error fetching courses"));
    // }, []);

        useEffect(() => {
        API.get("/courses/")
            .then((res) => {
                console.log(res.data);
                setCourses(res.data);
            })
            .catch(() => alert("Error fetching courses"));
    }, []);

    const token = localStorage.getItem("token");

    const handleEnroll = async (courseId) => {
        if (!token) {
            navigate("/login");
            return;
        }

        try {
            await API.post("courses/enroll/", {
                course: courseId,
            });

            alert("Enrollment successful!");
        } catch (err) {
            alert(
                err.response?.data?.detail ||
                err.response?.data ||
                "Enrollment failed"
            );
        }
    };

    const filteredCourses = courses.filter((course) =>
        course.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-gray-100">
            <PublicNavbar />

            <div className="max-w-7xl mx-auto p-6">

                {/* Hero Section */}
                <div className="text-center mb-10">
                    <h1 className="text-4xl font-bold mb-3">
                        Explore Courses
                    </h1>

                    <p className="text-gray-600 text-lg">
                        Learn practical skills and accelerate your career.
                    </p>
                </div>

                {/* Search */}
                <div className="mb-8">
                    <input
                        type="text"
                        placeholder="Search courses..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full md:w-96 border border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>

                {/* Stats */}
                <div className="grid md:grid-cols-3 gap-4 mb-10">

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
                            Categories
                        </h3>

                        <p className="text-3xl font-bold mt-2">
                            1
                        </p>
                    </div>

                    <div className="bg-white rounded-xl shadow p-5">
                        <h3 className="text-gray-500">
                            Learning Paths
                        </h3>

                        <p className="text-3xl font-bold mt-2">
                            {courses.length}
                        </p>
                    </div>

                </div>

                {/* Empty State */}
                {filteredCourses.length === 0 ? (
                    <div className="bg-white rounded-xl shadow p-10 text-center">
                        <h3 className="text-xl font-semibold mb-2">
                            No Courses Found
                        </h3>

                        <p className="text-gray-600">
                            Try a different search keyword.
                        </p>
                    </div>
                ) : (

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

                        {filteredCourses.map((course) => (
                            <div
                                key={course.id}
                                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition"
                            >

                                {/* Thumbnail */}
                                {course.thumbnail ? (
                                    <Link to={`/courses/${course.id}`}>
                                        <img
                                            src={course.thumbnail}
                                            alt={course.title}
                                            className="w-full h-52 object-cover"
                                        />
                                    </Link>
                                ) : (
                                    <div className="h-52 bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center">
                                        <span className="text-white text-xl font-bold">
                                            {course.title}
                                        </span>
                                    </div>
                                )}

                                {/* Course Content */}
                                <div className="p-5">
                                    <Link to={`/courses/${course.id}`}>
                                        <h3 className="text-xl font-bold mb-2">
                                            {course.title}
                                        </h3>
                                    </Link>

                                    <p className="text-sm text-gray-500 mb-3">
                                        Instructor: {course.instructor_name}
                                    </p>

                                    <p className="text-gray-600 line-clamp-3">
                                        {course.description}
                                    </p>

                                    <div className="mt-5">
                                        <button
                                            onClick={() => handleEnroll(course.id)}
                                            className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg"
                                        >
                                            Enroll Now
                                        </button>
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

export default PublicCourses;