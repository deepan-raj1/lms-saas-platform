import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import Register from "./pages/Register";
import Login from "./pages/Login";
import StudentDashboard from "./pages/StudentDashboard";
import InstructorDashboard from "./pages/InstructorDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicCourses from "./pages/PublicCourses";
import CreateCourse from "./pages/CreateCourse";
import InstructorCourses from "./pages/InstructorCourses";
import EditCourse from "./pages/EditCourse";
import DashboardNavbar from "./components/DashboardNavbar";
import Profile from "./pages/Profile";
import CourseDetail from "./pages/CourseDetail";
import About from "./pages/About";



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
                    path="/profile"
                    element={
                        <ProtectedRoute>
                            <Profile />
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
            </Routes>
        </BrowserRouter>
    );
}

export default App;



