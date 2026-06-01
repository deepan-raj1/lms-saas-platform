import { useEffect, useState } from "react";
import API from "../services/api";
import Navbar from "../components/Navbar";

function Courses() {
    const [courses, setCourses] = useState([]);

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
            console.log(err.response);
            alert("Enrollment failed");
        }
    };


    return (
        <div>
            <Navbar />
            <h2>All Courses</h2>

            {courses.map((course) => (
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