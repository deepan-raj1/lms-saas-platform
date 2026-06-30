import { useEffect, useState } from "react";
import API from "../../services/api";
import AdminNavbar from "../../components/navbars/AdminNavbar";

function AdminInstructors() {

    const [instructors, setInstructors] = useState([]);

    useEffect(() => {

        API.get("users/admin-instructors/")
            .then((res) => {
                setInstructors(res.data);
            });

    }, []);

    return (

        <div className="min-h-screen bg-gray-100">

            <AdminNavbar />

            <div className="max-w-7xl mx-auto p-6">

                <h1 className="text-4xl font-bold">
                    Admin Instructors
                </h1>

                {instructors.map((ins) => (

                    <div
                        key={ins.id}
                        className="border p-4 rounded-lg mt-4"
                    >

                        <h2>{ins.username}</h2>

                        <p>{ins.email}</p>

                        <p>Courses : {ins.courses_count}</p>

                    </div>

                ))}

            </div>

        </div>

    );
}

export default AdminInstructors;