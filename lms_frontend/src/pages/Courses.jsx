import { useEffect, useState } from "react";
import API from "../services/api";
import Navbar from "../components/DashboardNavbar";

function Courses() {
    const [courses, setCourses] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        API.get("/courses/")
            .then((res) => setCourses(res.data))
            .catch(() => alert("Error fetching courses"));
    }, []);

    const handleEnroll = async (courseId) => {
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
        <div>
            <Navbar />
            <h2>All Courses</h2>
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Search courses..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="border rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            {filteredCourses.length === 0 && (
    <p className="text-gray-500 mb-4">
        No courses found.
    </p>
)}

            {filteredCourses.map((course) => (
                <div key={course.id} className="border rounded-lg shadow-md p-4 mb-4 bg-white">
                    <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                    <p className="text-gray-600 mb-3">{course.description}</p>
                    <button 
                        onClick={() => handleEnroll(course.id)} 
                        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
                    >
                        Enroll
                    </button>

                    <hr />
                </div>
            ))}         
        </div>
    );
}

export default Courses;