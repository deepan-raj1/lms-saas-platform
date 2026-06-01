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
        <div className="max-w-2xl mx-auto p-6">
            <Navbar />
            <h2 className="text-3xl font-bold mb-6">
                Create Course
            </h2>
            <input
                type="text"
                placeholder="Course Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <br /><br />


            <textarea
                className="w-full border rounded p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Course Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />

            <br /><br />

            <button 
                onClick={handleCreate}
                className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded"
            >
                Create Course
            </button>
        </div>
    );
}

export default CreateCourse;
