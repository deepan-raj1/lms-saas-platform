import { useEffect, useState } from "react";
import AdminNavbar from "../../components/navbars/AdminNavbar";
import API from "../../services/api";
import { useNavigate } from "react-router-dom";

function AdminCourses() {

    const [courses, setCourses] = useState([]);
    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    const fetchCourses = () => {
        API.get("courses/")
            .then((res) => setCourses(res.data))
            .catch(() => alert("Failed to load courses"));
    };

    useEffect(() => {
        fetchCourses();
    }, []);

    const filteredCourses = courses.filter(course =>
        course.title.toLowerCase().includes(search.toLowerCase())
    );

    const handleDelete = async (id) => {

        const confirmDelete = window.confirm(
            "Are you sure you want to delete this course?"
        );

        if (!confirmDelete) return;

        try {

            await API.delete(`courses/${id}/edit/`);

            alert("Course deleted successfully.");

            fetchCourses();

        } catch (error) {

            console.error(error);

            alert("Failed to delete course.");

        }

    };

    return (
        <div className="min-h-screen bg-gray-100">

            <AdminNavbar />

            <div className="max-w-7xl mx-auto p-8">

                {/* Heading */}

                <div className="mb-8">

                    <h1 className="text-4xl font-bold">
                        Course Management
                    </h1>

                    <p className="text-gray-600 mt-2">
                        Manage all courses available in the LMS.
                    </p>

                </div>

                {/* Search */}

                <div className="mb-8">

                    <input
                        type="text"
                        placeholder="Search course..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full md:w-96 border rounded-lg p-3"
                    />

                </div>

                {/* Statistics */}

                <div className="grid md:grid-cols-3 gap-6 mb-10">

                    <div className="bg-white rounded-xl shadow p-6">

                        <h3 className="text-gray-500">
                            Total Courses
                        </h3>

                        <p className="text-4xl font-bold mt-3 text-indigo-600">
                            {courses.length}
                        </p>

                    </div>

                </div>

                {/* Empty */}

                {filteredCourses.length === 0 ? (

                    <div className="bg-white rounded-xl shadow p-10 text-center">

                        <h2 className="text-2xl font-bold">
                            No Courses Found
                        </h2>

                    </div>

                ) : (

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

                        {filteredCourses.map(course => (

                            <div
                                key={course.id}
                                className="bg-white rounded-xl shadow-lg overflow-hidden"
                            >

                                {course.thumbnail ? (

                                    <img
                                        src={course.thumbnail}
                                        alt={course.title}
                                        className="w-full h-52 object-cover"
                                    />

                                ) : (

                                    <div className="h-52 bg-indigo-600 flex items-center justify-center">

                                        <span className="text-white text-xl font-bold">

                                            {course.title}

                                        </span>

                                    </div>

                                )}

                                <div className="p-5">

                                    <h2 className="text-xl font-bold">

                                        {course.title}

                                    </h2>

                                    <p className="text-gray-500 mt-1">

                                        Instructor: {course.instructor_name}

                                    </p>

                                    <p className="text-gray-600 mt-4 line-clamp-3">

                                        {course.description}

                                    </p>

                                    <div className="flex gap-3 mt-6">

                                        <button
                                            onClick={() => navigate(`/edit-course/${course.id}`)}
                                            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg"
                                        >
                                            Edit
                                        </button>

                                        <button
                                            onClick={() => handleDelete(course.id)}
                                            className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg"
                                        >
                                            Delete
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

export default AdminCourses;

