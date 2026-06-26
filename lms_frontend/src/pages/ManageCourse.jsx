import { useParams } from "react-router-dom";
import InstructorNavbar from "../components/navbars/InstructorNavbar";

function ManageCourse() {

    const { id } = useParams();

    return (

        <div className="min-h-screen bg-gray-100">

            <InstructorNavbar />

            <div className="max-w-7xl mx-auto p-6">

                <h1 className="text-4xl font-bold">
                    Manage Course
                </h1>

                <p className="text-gray-600 mt-2">
                    Course ID : {id}
                </p>

                <div className="grid md:grid-cols-4 gap-6 mt-10">

                    <div className="bg-white rounded-xl shadow p-6">

                        <h2 className="font-bold text-xl">
                            Course Details
                        </h2>

                        <p className="text-gray-600 mt-3">
                            Edit title, description,
                            thumbnail and pricing.
                        </p>

                    </div>

                    <div className="bg-white rounded-xl shadow p-6">

                        <h2 className="font-bold text-xl">
                            Modules
                        </h2>

                        <p className="text-gray-600 mt-3">
                            Organize lessons into modules.
                        </p>

                    </div>

                    <div className="bg-white rounded-xl shadow p-6">

                        <h2 className="font-bold text-xl">
                            Students
                        </h2>

                        <p className="text-gray-600 mt-3">
                            View enrolled students.
                        </p>

                    </div>

                    <div className="bg-white rounded-xl shadow p-6">

                        <h2 className="font-bold text-xl">
                            Settings
                        </h2>

                        <p className="text-gray-600 mt-3">
                            Publish or archive your course.
                        </p>

                    </div>

                </div>

            </div>

        </div>

    );
}

export default ManageCourse;