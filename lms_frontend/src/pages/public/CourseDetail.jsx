import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../../services/api";
import PublicNavbar from "../../components/navbars/PublicNavbar";

function CourseDetail() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [course, setCourse] = useState(null);

    useEffect(() => {
        API.get(`courses/${id}/`)
            .then((res) => setCourse(res.data))
            .catch(() => alert("Course not found"));
    }, [id]);

    if (!course) {
        return (
            <div>
                <PublicNavbar />
                <p className="text-center mt-10">
                    Loading...
                </p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-100">
            <PublicNavbar />

            <div className="max-w-6xl mx-auto p-6">

                {course.thumbnail && (
                    <img
                        src={course.thumbnail}
                        alt={course.title}
                        className="w-full h-96 object-cover rounded-2xl shadow"
                    />
                )}

                <div className="bg-white rounded-2xl shadow-lg p-8 mt-6">

                    <h1 className="text-4xl font-bold">
                        {course.title}
                    </h1>

                    <p className="text-gray-500 mt-2">
                        Instructor: {course.instructor_name}
                    </p>

                    <hr className="my-6" />

                    <h2 className="text-2xl font-semibold mb-3">
                        Course Description
                    </h2>

                    <p className="text-gray-700 leading-relaxed">
                        {course.description}
                    </p>

                    <div className="mt-8">
                        <button
                            onClick={() => navigate("/login")}
                            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg"
                        >
                            Enroll Now
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default CourseDetail;