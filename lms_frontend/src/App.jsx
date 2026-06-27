import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./pages/public/LandingPage";
import Register from "./pages/public/Register";
import Login from "./pages/public/Login";
import StudentDashboard from "./pages/student/StudentDashboard";
import InstructorDashboard from "./pages/instructor/InstructorDashboard";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminCourses from "./pages/admin/AdminCourses";
import AdminInstructors from "./pages/admin/AdminInstructors";
import AdminStudents from "./pages/admin/AdminStudents";
import AdminProfile from "./pages/admin/AdminProfile";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicCourses from "./pages/public/PublicCourses";
import CreateCourse from "./pages/instructor/CreateCourse";
import InstructorCourses from "./pages/instructor/InstructorCourses";
import EditCourse from "./pages/instructor/EditCourse";
import InstructorProfile from "./pages/instructor/InstructorProfile";
import StudentProfile from "./pages/student/StudentProfile";
import CourseDetail from "./pages/public/CourseDetail";
import About from "./pages/public/About";
import Contact from "./pages/public/Contact";
import ManageCourse from "./pages/instructor/ManageCourse";
import MyCourses from "./pages/student/MyCourses";
import Certificates from "./pages/student/Certificates";
import BrowseCourses from "./pages/student/BrowseCourses";









function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />

                <Route
                    path="/student-dashboard"
                    element={
                        <ProtectedRoute>
                            <StudentDashboard />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/instructor-dashboard"
                    element={
                        <ProtectedRoute>
                        <InstructorDashboard />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/admin-dashboard"
                    element={
                        <ProtectedRoute>
                        <AdminDashboard />
                        </ProtectedRoute>
                    }
                />



                <Route
                    path="/courses"
                    element={
                        <PublicCourses />
                    }
                />

                <Route
                    path="/create-course"
                    element={
                        <ProtectedRoute>
                            <CreateCourse />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/instructor-courses"
                    element={
                        <ProtectedRoute>
                            <InstructorCourses />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/edit-course/:Id"
                    element={
                        <ProtectedRoute>
                            <EditCourse />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/instructor-profile"
                    element={
                        <ProtectedRoute>
                            <InstructorProfile />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/courses/:id"
                    element={
                        <CourseDetail />
                    }
                />
                <Route
                    path="/about"
                    element={<About />}
                />
                <Route
                    path="/contact"
                    element={<Contact />}
                />
                <Route
                    path="/manage-course/:id"
                    element={
                        <ProtectedRoute>
                            <ManageCourse />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/my-courses"
                    element={
                        <ProtectedRoute>
                            <MyCourses />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/certificates"
                    element={
                        <ProtectedRoute>
                            <Certificates />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/student-profile"
                    element={
                        <ProtectedRoute>
                            <StudentProfile />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/browse-courses"
                    element={
                        <ProtectedRoute>
                            <BrowseCourses />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/admin-courses"
                    element={
                        <ProtectedRoute>
                            <AdminCourses />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/admin-instructors"
                    element={
                        <ProtectedRoute>
                            <AdminInstructors />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/admin-students"
                    element={
                        <ProtectedRoute>
                            <AdminStudents />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/admin-profile"
                    element={
                        <ProtectedRoute>
                            <AdminProfile />
                        </ProtectedRoute>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;





