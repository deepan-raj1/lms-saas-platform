import { useState } from "react";
import API from "../services/api";
import Navbar from "../components/DashboardNavbar";
import { useNavigate } from "react-router-dom";

function CreateCourse() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [thumbnail, setThumbnail] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleCreate = async () => {

    if (!title.trim()) {
      alert("Course title is required");
      return;
    }

    if (!description.trim()) {
      alert("Course description is required");
      return;
    }

    setLoading(true);

    try {
      const formData = new FormData();

      formData.append("title", title);
      formData.append("description", description);

      if (thumbnail) {
        formData.append("thumbnail", thumbnail);
      } 

      await API.post("courses/create/", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });


      alert("Course created successfully!");

      setTitle("");
      setDescription("");
      setThumbnail(null);

      navigate("/instructor-courses");

    } catch (err) {
      console.log(err.response?.data);
      alert("Course creation failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="max-w-4xl mx-auto p-6">

        <div className="mb-8">
          <h1 className="text-4xl font-bold">
            Create New Course
          </h1>

          <p className="text-gray-600 mt-2">
            Build and publish a new course for your students.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">

          <h2 className="text-2xl font-semibold mb-6">
            Course Information
          </h2>

          <div className="space-y-5">

            <div>
              <label className="block mb-2 font-medium">
                Course Title
              </label>

              <input
                type="text"
                placeholder="Python Full Stack Development"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
                <label className="block mb-2 font-medium">
                    Course Thumbnail
                </label>

                <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setThumbnail(e.target.files[0])}
                    className="w-full border rounded-lg p-2"
                />
            </div>

            {
                thumbnail && (
                    <img
                    src={URL.createObjectURL(thumbnail)}
                    alt="Preview"
                    className="w-full max-w-md h-56 object-cover rounded-xl border shadow"
                    />
                )
            }

            <div>
              <label className="block mb-2 font-medium">
                Course Description
              </label>

              <textarea
                rows="6"
                placeholder="Describe what students will learn in this course..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div className="flex gap-4 pt-4">

              <button
                onClick={handleCreate}
                disabled={loading}
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg disabled:bg-gray-400"
              >
                {loading ? "Publishing..." : "Publish Course"}
              </button>

              <button
                onClick={() => {
                  setTitle("");
                  setDescription("");
                  setThumbnail(null);
                }}
                disabled={loading}
                className="bg-gray-300 hover:bg-gray-400 px-6 py-3 rounded-lg disabled:bg-gray-400"
              >
                Clear Form
              </button>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default CreateCourse;

