import StudentNavbar from "../../components/navbars/StudentNavbar";

function Certificates() {
    return (
        <div className="min-h-screen bg-gray-100">
            <StudentNavbar />

            <div className="max-w-7xl mx-auto p-6">
                <h1 className="text-4xl font-bold">
                    Certificates
                </h1>

                <p className="text-gray-600 mt-2">
                    Download your course completion certificates.
                </p>

                <div className="bg-white rounded-xl shadow p-10 mt-8 text-center">
                    <h2 className="text-2xl font-semibold">
                        🚧 Coming Soon
                    </h2>

                    <p className="text-gray-500 mt-3">
                        Certificates will be available after course completion.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Certificates;