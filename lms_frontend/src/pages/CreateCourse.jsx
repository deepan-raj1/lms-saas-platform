import { useState } from "react";
import API from "../services/api";
import Navbar from "../components/Navbar";

function CreateCourse() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleCreate = async () => {
        try {
            await API.post("/courses/create/", { 
                title, 
                description 
            });

            alert("Course created successfully!");
            setTitle("");
            setDescription("");
        } catch (err) {
            console.log(err.response.data);
            alert("Course creation failed");
        }
    };

    return (
        <div>
            <Navbar />
            <h2>Create Course</h2>
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

            <button onClick={handleCreate}>Create Course</button>
        </div>
    );
}

export default CreateCourse;