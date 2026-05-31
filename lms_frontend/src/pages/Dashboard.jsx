import { useEffect, useState } from "react";
import API from "../services/api";
import Navbar from "../components/Navbar";

function Dashboard() {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        API.get("courses/my-courses/")
            .then((res) => setCourses(res.data))
            .catch(() => alert("Error fetching courses"));
    }, []);

    return (
        <div>
            <Navbar />
            <h2>My Courses</h2>

            <button
                onClick={() => {
                    localStorage.clear();
                    window.location.href = "/";
                }}
            >
                Logout
            </button>

            {courses.map((course) => (
                <div key={course.id}>
                    <h3>{course.title}</h3>
                    <p>{course.description}</p>
                </div>
            ))}
        </div>
    );
}

export default Dashboard;