import StudentNavbar from "../../components/navbars/StudentNavbar";

function StudentProfile() {

    const username = localStorage.getItem("username");
    const email = localStorage.getItem("email");
    const role = localStorage.getItem("role");

    return (

        <div className="min-h-screen bg-gray-100">

            <StudentNavbar />

            <div className="max-w-7xl mx-auto p-6">

                {/* Header */}

                <div className="bg-white rounded-2xl shadow-lg p-8">

                    <div className="flex flex-col md:flex-row items-center gap-8">

                        {/* Avatar */}

                        <div className="w-32 h-32 rounded-full bg-indigo-600 flex items-center justify-center text-white text-5xl font-bold">

                            {username?.charAt(0).toUpperCase()}

                        </div>

                        {/* User Info */}

                        <div className="flex-1">

                            <h1 className="text-4xl font-bold">
                                {username}
                            </h1>

                            <p className="text-gray-600 mt-2">
                                {email}
                            </p>

                            <span className="inline-block mt-4 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full font-medium">

                                Student

                            </span>

                        </div>

                        {/* Edit */}

                        <button
                            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg"
                        >
                            Edit Profile
                        </button>

                    </div>

                </div>

                {/* Statistics */}
{/* 
                <div className="grid md:grid-cols-4 gap-6 mt-8">

                    <div className="bg-white rounded-xl shadow p-6">

                        <h3 className="text-gray-500">
                            Enrolled Courses
                        </h3>

                        <p className="text-3xl font-bold mt-2">
                            0
                        </p>

                    </div>

                    <div className="bg-white rounded-xl shadow p-6">

                        <h3 className="text-gray-500">
                            Completed
                        </h3>

                        <p className="text-3xl font-bold mt-2">
                            0
                        </p>

                    </div>

                    <div className="bg-white rounded-xl shadow p-6">

                        <h3 className="text-gray-500">
                            Certificates
                        </h3>

                        <p className="text-3xl font-bold mt-2">
                            0
                        </p>

                    </div>

                    <div className="bg-white rounded-xl shadow p-6">

                        <h3 className="text-gray-500">
                            Learning Hours
                        </h3>

                        <p className="text-3xl font-bold mt-2">
                            0
                        </p>

                    </div>

                </div> */}


                {/* Details */}

                <div className="grid lg:grid-cols-2 gap-8 mt-8">

                    {/* Personal Info */}

                    <div className="bg-white rounded-2xl shadow-lg p-8">

                        <h2 className="text-2xl font-bold mb-6">
                            Personal Information
                        </h2>

                        <div className="space-y-5">

                            <div>

                                <p className="text-gray-500">
                                    Username
                                </p>

                                <p className="font-semibold text-lg">
                                    {username}
                                </p>

                            </div>

                            <div>

                                <p className="text-gray-500">
                                    Email
                                </p>

                                <p className="font-semibold text-lg">
                                    {email}
                                </p>

                            </div>

                            <div>

                                <p className="text-gray-500">
                                    Role
                                </p>

                                <p className="font-semibold text-lg capitalize">
                                    {role}
                                </p>

                            </div>

                        </div>

                    </div>

                    {/* Learning Summary */}
{/* 
                    <div className="bg-white rounded-2xl shadow-lg p-8">

                        <h2 className="text-2xl font-bold mb-6">
                            Learning Summary
                        </h2>

                        <div className="space-y-5">

                            <div className="flex justify-between">

                                <span>
                                    Active Courses
                                </span>

                                <span className="font-bold">
                                    0
                                </span>

                            </div>

                            <div className="flex justify-between">

                                <span>
                                    Completed Courses
                                </span>

                                <span className="font-bold">
                                    0
                                </span>

                            </div>

                            <div className="flex justify-between">

                                <span>
                                    Certificates Earned
                                </span>

                                <span className="font-bold">
                                    0
                                </span>

                            </div>

                            <div className="flex justify-between">

                                <span>
                                    Learning Hours
                                </span>

                                <span className="font-bold">
                                    0 hrs
                                </span>

                            </div>

                        </div>

                    </div> */}

                </div>

            </div>

        </div>

    );
}

export default StudentProfile;