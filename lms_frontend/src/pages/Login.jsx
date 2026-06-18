import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../services/api";

function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async () => {
    setLoading(true);
    setError("");

    try {
      const res = await API.post("token/", {
        username,
        password,
      });

      localStorage.setItem("token", res.data.access);
      localStorage.setItem("role", res.data.role);

      navigate("/dashboard");
    } catch (err) {
      setError("Invalid username or password");
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
            Welcome Back
          </h1>

          <p className="text-xl text-indigo-100">
            Continue learning, building projects,
            and growing your career with Zenix LMS.
          </p>
        </div>

      </div>

      {/* Right Side */}
      <div className="flex items-center justify-center p-8 bg-gray-50">

        <div className="bg-white p-10 rounded-2xl shadow-lg w-full max-w-md">

          <h2 className="text-3xl font-bold text-center mb-2">
            Sign In
          </h2>

          <p className="text-center text-gray-500 mb-8">
            Login to your account
          </p>

          {error && (
            <div className="bg-red-100 text-red-600 p-3 rounded mb-4">
              {error}
            </div>
          )}

          <div className="space-y-4">

            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full border p-3 rounded-lg"
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border p-3 rounded-lg"
            />

            <button
              onClick={handleLogin}
              disabled={loading}
              className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition"
            >
              {loading ? "Signing In..." : "Login"}
            </button>

          </div>

          <div className="mt-6 text-center">

            <Link
              to="/forgot-password"
              className="text-indigo-600 text-sm"
            >
              Forgot Password?
            </Link>

          </div>

          <div className="mt-4 text-center text-gray-600">

            Don't have an account?{" "}

            <Link
              to="/register"
              className="text-indigo-600 font-semibold"
            >
              Register
            </Link>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Login;