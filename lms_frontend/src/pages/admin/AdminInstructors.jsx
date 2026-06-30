import { useEffect, useState } from "react";
import API from "../../services/api";
import AdminNavbar from "../../components/navbars/AdminNavbar";

function AdminInstructors() {

    const [instructors, setInstructors] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {

        API.get("users/admin-instructors/")
            .then((res) => {
                setInstructors(res.data);
            })
            .catch((err) => {
                console.log(err);
                alert("Failed to load instructors.");
            });

    }, []);

    const filteredInstructors = instructors.filter((instructor) =>
        instructor.username
            .toLowerCase()
            .includes(search.toLowerCase()) ||

        instructor.email
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
                        Instructor Management
                    </h1>

                    <p className="text-gray-600 mt-2">
                        View and manage all instructors.
                    </p>

                </div>

                {/* Search */}

                <div className="mb-8">

                    <input
                        type="text"
                        placeholder="Search Instructor..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full md:w-96 border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />

                </div>

                {/* Statistics */}

                <div className="grid md:grid-cols-3 gap-6 mb-10">

                    <div className="bg-white rounded-xl shadow p-6">

                        <h3 className="text-gray-500">
                            Total Instructors
                        </h3>

                        <p className="text-4xl font-bold mt-3 text-indigo-600">
                            {instructors.length}
                        </p>

                    </div>

                </div>

                {/* Empty */}

                {filteredInstructors.length === 0 ? (

                    <div className="bg-white rounded-xl shadow p-10 text-center">

                        <h2 className="text-2xl font-bold">
                            No Instructors Found
                        </h2>

                    </div>

                ) : (

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

                        {filteredInstructors.map((instructor) => (

                            <div
                                key={instructor.id}
                                className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition"
                            >

                                {/* Avatar */}

                                <div className="flex justify-center mb-5">

                                    <div className="w-20 h-20 rounded-full bg-indigo-600 text-white flex items-center justify-center text-3xl font-bold">

                                        {instructor.username
                                            ?.charAt(0)
                                            .toUpperCase()}

                                    </div>

                                </div>

                                {/* Details */}

                                <h2 className="text-xl font-bold text-center">

                                    {instructor.username}

                                </h2>

                                <p className="text-gray-500 text-center mt-2">

                                    {instructor.email}

                                </p>

                                <div className="border-t mt-5 pt-5">

                                    <div className="flex justify-between">

                                        <span className="font-medium">
                                            Courses
                                        </span>

                                        <span className="font-bold text-indigo-600">

                                            {instructor.courses_count}

                                        </span>

                                    </div>

                                </div>

                                {/* Button */}

                                <div className="mt-6 flex justify-center">

                                    <button
                                        className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-lg"
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

export default AdminInstructors;