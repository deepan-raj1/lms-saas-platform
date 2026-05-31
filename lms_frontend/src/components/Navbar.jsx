import { Link } from "react-router-dom";

function Navbar() {
    const handleLogout = () => {
        localStorage.clear();
        window.location.href = "/";
    };

    return (
        <nav
            style={{
                display: "flex",
                gap: "15px",
                padding: "15px",
                backgroundColor: "#f0f0f0",
                marginBottom: "20px",
            }}
        >
            <h3>LMS Platform</h3>

            <Link to="/dashboard">Dashboard</Link>
            <Link to="/courses">Courses</Link>
            <Link to="/create-course">Create Course</Link>
            <Link to="/instructor-courses">Instructor Courses</Link>

            <button onClick={handleLogout} style={{ marginLeft: "auto" }}>
                Logout
            </button>
        </nav>
    );
}

export default Navbar;