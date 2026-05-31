import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../services/api";
import Navbar from "../components/Navbar";

function EditCourse() {
    const { Id } = useParams();
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() => {
        API.get(`courses/${Id}/`)
            .then((res) => {
                setTitle(res.data.title);
                setDescription(res.data.description);
            })
            .catch(() => alert("Error fetching course details"));
    }, [Id]);

    const handleUpdate = async () => {
        try {
            await API.put(`courses/${Id}/edit/`, { 
                title, 
                description 
            });

            alert("Course updated successfully!");

            navigate("/instructor-courses");
        } catch (err) {
            console.log(err.response.data);
            alert("Course update failed");
        }
    };

    return (
        <div>
            <Navbar />
            <h2>Edit Course</h2>

            <input
                type="text"
                placeholder="Course Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <br /><br />

            <textarea
                placeholder="Course Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <br /><br />

            <button onClick={handleUpdate}>Update Course</button>
        </div>
    );
}

export default EditCourse;