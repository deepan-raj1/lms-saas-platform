import { useEffect, useState } from "react";
import API from "../services/api";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

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
            <h2>Instructor Courses</h2>
            {courses.map((course) => (
                <div key={course.id} style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "10px" }}>
                    <h3>{course.title}</h3>
                    <p>{course.description}</p>

                    <Link to={`/edit-course/${course.id}`}>
                        <button style={{ backgroundColor: "blue", color: "white", border: "none", padding: "5px 10px", cursor: "pointer", marginRight: "10px" }}>
                            Edit
                        </button>
                    </Link>

                    <button 
                        onClick={() => handleDelete(course.id)}
                        style={{ backgroundColor: "red", color: "white", border: "none", padding: "5px 10px", cursor: "pointer" }}
                    >
                        Delete
                    </button>

                    <hr />
                </div>
            ))}
        </div>
    );
}

export default InstructorCourses;