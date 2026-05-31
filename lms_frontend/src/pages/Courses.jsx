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
                <div key={course.id} style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "10px" }}>
                    <h3>{course.title}</h3>
                    <p>{course.description}</p>
                    <button onClick={() => handleEnroll(course.id)}>Enroll</button>

                    <hr />
                </div>
            ))}         
        </div>
    );
}

export default Courses;