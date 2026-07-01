import { useEffect, useState } from "react";
import API from "../../services/api";
import AdminNavbar from "../../components/navbars/AdminNavbar";

function AdminProfile() {

    const [profile, setProfile] = useState({});

    useEffect(() => {

        API.get("users/profile/")
            .then((res) => {
                setProfile(res.data);
            })
            .catch((err) => {
                console.log(err.response);
                alert("Failed to load profile.");
            });

    }, []);

    return (

        <div className="min-h-screen bg-gray-100">

            <AdminNavbar />

            <div className="max-w-5xl mx-auto p-6">

                <h1 className="text-4xl font-bold mb-8">
                    My Profile
                </h1>

                <div className="bg-white rounded-2xl shadow-lg p-8">

                    <div className="flex justify-center mb-8">

                        <div className="w-28 h-28 rounded-full bg-red-600 text-white flex items-center justify-center text-5xl font-bold">

                            {profile.username?.charAt(0).toUpperCase()}

                        </div>

                    </div>

                    <div className="grid md:grid-cols-2 gap-6">

                        <div>

                            <label className="font-semibold">
                                Full Name
                            </label>

                            <input
                                value={profile.full_name || ""}
                                readOnly
                                className="w-full mt-2 border rounded-lg p-3 bg-gray-100"
                            />

                        </div>

                        <div>

                            <label className="font-semibold">
                                Username
                            </label>

                            <input
                                value={profile.username || ""}
                                readOnly
                                className="w-full mt-2 border rounded-lg p-3 bg-gray-100"
                            />

                        </div>

                        <div>

                            <label className="font-semibold">
                                Email
                            </label>

                            <input
                                value={profile.email || ""}
                                readOnly
                                className="w-full mt-2 border rounded-lg p-3 bg-gray-100"
                            />

                        </div>

                        <div>

                            <label className="font-semibold">
                                Role
                            </label>

                            <input
                                value={profile.role || ""}
                                readOnly
                                className="w-full mt-2 border rounded-lg p-3 bg-gray-100"
                            />

                        </div>

                        <div>

                            <label className="font-semibold">
                                Mobile Number
                            </label>

                            <input
                                value={profile.mobile_number || ""}
                                readOnly
                                className="w-full mt-2 border rounded-lg p-3 bg-gray-100"
                            />

                        </div>

                        <div>

                            <label className="font-semibold">
                                WhatsApp Number
                            </label>

                            <input
                                value={profile.whatsapp_number || ""}
                                readOnly
                                className="w-full mt-2 border rounded-lg p-3 bg-gray-100"
                            />

                        </div>

                    </div>

                    <div className="mt-8 flex justify-center">

                        <button
                            className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg"
                        >
                            Edit Profile
                        </button>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default AdminProfile;