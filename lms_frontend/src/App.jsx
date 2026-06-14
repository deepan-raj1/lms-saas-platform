import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import Courses from "./pages/Courses";
import CreateCourse from "./pages/CreateCourse";
import InstructorCourses from "./pages/InstructorCourses";
import EditCourse from "./pages/EditCourse";
import DashboardNavbar from "./components/DashboardNavbar";
import Profile from "./pages/Profile";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />

                <Route
                    path="/dashboard"
                    element={
                        <ProtectedRoute>
                            <DashboardNavbar />
                            <Dashboard />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/courses"
                    element={
                        <ProtectedRoute>
                        <Courses />
                        </ProtectedRoute>
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
            </Routes>
        </BrowserRouter>
    );
}

export default App;



