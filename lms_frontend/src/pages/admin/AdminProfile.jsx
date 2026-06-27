import AdminNavbar from "../../components/navbars/AdminNavbar";

function AdminProfile() {
    return (
        <div className="min-h-screen bg-gray-100">
            <AdminNavbar />

            <div className="max-w-7xl mx-auto p-6">
                <h1 className="text-4xl font-bold">
                    Admin Profile
                </h1>

                <p className="text-gray-600 mt-2">
                    Coming Soon...
                </p>
            </div>
        </div>
    );
}

export default AdminProfile;