import { useEffect, useState } from "react";
import API from "../../services/api";
import InstructorNavbar from "../../components/navbars/InstructorNavbar";

function InstructorProfile() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        API.get("/users/profile")
            .then((res) => setUser(res.data))
            .catch(() => alert("Error fetching profile"));
    }, []);

    return (
        <div>
            <InstructorNavbar />

            <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-4">User Profile</h2>
                
                {user && (
                    <>
                        <p><strong>Username:</strong> {user.username}</p>
                        <p><strong>Email:</strong> {user.email}</p>
                        <p><strong>Role:</strong> {user.role}</p>
                    </>
                )}
            </div>
        </div>
    );
}

export default InstructorProfile;


