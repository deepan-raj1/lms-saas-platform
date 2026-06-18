import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../services/api";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    full_name: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "student",
    mobile_number: "",
    whatsapp_number: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      setLoading(true);

      await API.post("users/register/", {
        full_name: formData.full_name,
        username: formData.username,
        email: formData.email,
        password: formData.password,
        role: formData.role,
        mobile_number: formData.mobile_number,
        whatsapp_number: formData.whatsapp_number,
      });

      setSuccess("Account created successfully");

      setTimeout(() => {
        navigate("/login");
      }, 2000);

    } catch (err) {
      console.error(err);

      if (err.response?.data) {
        setError(JSON.stringify(err.response.data));
      } else {
        setError("Registration failed");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen grid md:grid-cols-2">

      {/* Left Side */}
      <div className="hidden md:flex bg-indigo-600 text-white items-center justify-center p-12">
        <div>
          <h1 className="text-5xl font-bold mb-6">
            Join Zenix LMS
          </h1>

          <p className="text-xl text-indigo-100">
            Learn practical skills, build projects,
            and accelerate your career.
          </p>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex items-center justify-center p-8 bg-gray-50">

        <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-lg">

          <h2 className="text-3xl font-bold text-center mb-2">
            Create Account
          </h2>

          <p className="text-center text-gray-500 mb-6">
            Start your learning journey today
          </p>

          {error && (
            <div className="bg-red-100 text-red-600 p-3 rounded mb-4">
              {error}
            </div>
          )}

          {success && (
            <div className="bg-green-100 text-green-600 p-3 rounded mb-4">
              {success}
            </div>
          )}

          <form onSubmit={handleRegister} className="space-y-4">

            <input
              type="text"
              name="full_name"
              placeholder="Full Name"
              value={formData.full_name}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg"
            />

            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg"
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg"
            />

            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg"
            >
              <option value="student">Student</option>
              <option value="instructor">Instructor</option>
            </select>

            <input
              type="text"
              name="mobile_number"
              placeholder="Mobile Number (Optional)"
              value={formData.mobile_number}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg"
            />

            <input
              type="text"
              name="whatsapp_number"
              placeholder="WhatsApp Number (Optional)"
              value={formData.whatsapp_number}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg"
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg"
            />

            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700"
            >
              {loading ? "Creating Account..." : "Create Account"}
            </button>

          </form>

          <div className="mt-6 text-center text-gray-600">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-indigo-600 font-semibold"
            >
              Login
            </Link>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Register;