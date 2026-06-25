import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../services/api";
import InstructorNavbar from "../components/navbars/InstructorNavbar";

function EditCourse() {
    const { Id } = useParams();
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [thumbnail, setThumbnail] = useState(null);
    const [currentThumbnail, setCurrentThumbnail] = useState("");
    const [thumbnailPreview, setThumbnailPreview] = useState("");

    useEffect(() => {
        API.get(`courses/${Id}/`)
            .then((res) => {
                setTitle(res.data.title);
                setDescription(res.data.description);
                setCurrentThumbnail(res.data.thumbnail);
            })
            .catch(() => alert("Error fetching course details"));
    }, [Id]);

    const handleUpdate = async () => {
        try {
            const formData = new FormData();

            formData.append("title", title);
            formData.append("description", description);

            if (thumbnail) {
                formData.append("thumbnail", thumbnail);
            }

            await API.put(
                `courses/${Id}/edit/`,
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );

            alert("Course updated successfully!");

            navigate("/instructor-courses");

        } catch (err) {
            console.log(err.response?.data);
            alert("Course update failed");
        }
    };

    return (
        <div>
            <InstructorNavbar />
            <div className="max-w-3xl mx-auto p-6">

    <h1 className="text-3xl font-bold mb-6">
        Edit Course
    </h1>

    {currentThumbnail && !thumbnailPreview && (
        <div className="mb-6">

            <p className="font-semibold mb-2">
                Current Thumbnail
            </p>

            <img
                src={currentThumbnail}
                alt="thumbnail"
                className="w-64 rounded-lg border"
            />

        </div>
    )}

    <div className="mb-4">

        <label className="block mb-2 font-medium">
            Course Title
        </label>

        <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border rounded-lg p-3"
        />

    </div>

    <div className="mb-4">

        <label className="block mb-2 font-medium">
            Description
        </label>

        <textarea
            rows="5"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border rounded-lg p-3"
        />

    </div>

    <div className="mb-6">

        <label className="block mb-2 font-medium">
            Upload New Thumbnail
        </label>

        <input
            type="file"
            accept="image/*"
            onChange={(e) => {
                const file = e.target.files[0];

                if (file) {
                    setThumbnail(file);
                    setThumbnailPreview(URL.createObjectURL(file));
                }
            }}
        />

        {thumbnailPreview && (
            <div className="mt-4">

                <p className="font-semibold mb-2">
                    New Thumbnail Preview
                </p>

                <img
                    src={thumbnailPreview}
                    alt="Preview"
                    className="w-64 rounded-lg border shadow"
                />

            </div>
        )}

    </div>

    <button
        onClick={handleUpdate}
        className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg"
    >
        Update Course
    </button>

</div>
</div>
    );
}

export default EditCourse;