import { useEffect, useState } from "react";
import API from "../../services/api";
import AdminNavbar from "../../components/navbars/AdminNavbar";

function AdminStudents() {

    const [students, setStudents] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {

        API.get("users/admin-students/")
            .then((res) => {
                setStudents(res.data);
            })
            .catch((err) => {
                console.log(err.response);
                alert("Failed to load students.");
            });

    }, []);

    const filteredStudents = students.filter((student) =>

        student.username
            .toLowerCase()
            .includes(search.toLowerCase()) ||

        student.email
            .toLowerCase()
            .includes(search.toLowerCase())

    );

    return (

        <div className="min-h-screen bg-gray-100">

            <AdminNavbar />

            <div className="max-w-7xl mx-auto p-6">

                {/* Heading */}

                <div className="mb-8">

                    <h1 className="text-4xl font-bold">
                        Student Management
                    </h1>

                    <p className="text-gray-600 mt-2">
                        View and manage all students.
                    </p>

                </div>

                {/* Search */}

                <div className="mb-8">

                    <input
                        type="text"
                        placeholder="Search student..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full md:w-96 border rounded-lg p-3"
                    />

                </div>

                {/* Statistics */}

                <div className="grid md:grid-cols-3 gap-6 mb-10">

                    <div className="bg-white rounded-xl shadow p-6">

                        <h3 className="text-gray-500">
                            Total Students
                        </h3>

                        <p className="text-4xl font-bold mt-3">
                            {students.length}
                        </p>

                    </div>

                </div>

                {/* Empty */}

                {filteredStudents.length === 0 ? (

                    <div className="bg-white rounded-xl shadow p-10 text-center">

                        <h2 className="text-2xl font-bold">
                            No Students Found
                        </h2>

                    </div>

                ) : (

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

                        {filteredStudents.map((student) => (

                            <div
                                key={student.id}
                                className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition"
                            >

                                {/* Avatar */}

                                <div className="flex justify-center mb-4">

                                    <div className="w-20 h-20 rounded-full bg-green-600 text-white flex items-center justify-center text-3xl font-bold">

                                        {student.username
                                            ?.charAt(0)
                                            .toUpperCase()}

                                    </div>

                                </div>

                                {/* Details */}

                                <h2 className="text-xl font-bold text-center">

                                    {student.username}

                                </h2>

                                <p className="text-gray-500 text-center mt-1">

                                    {student.email}

                                </p>

                                <div className="mt-5 border-t pt-4">

                                    <div className="flex justify-between">

                                        <span className="font-medium">
                                            Enrolled Courses
                                        </span>

                                        <span className="font-bold text-green-600">

                                            {student.enrolled_courses}

                                        </span>

                                    </div>

                                </div>

                                {/* Button */}

                                <div className="mt-6 flex justify-center">

                                    <button
                                        className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg"
                                    >
                                        View Details
                                    </button>

                                </div>

                            </div>

                        ))}

                    </div>

                )}

            </div>

        </div>

    );

}

export default AdminStudents;