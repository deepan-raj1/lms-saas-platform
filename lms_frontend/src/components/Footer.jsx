import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold mb-4">
              Zenix LMS
            </h2>

            <p className="text-gray-400">
              Practical skills. Unstoppable growth.
              Learn job-ready skills through
              industry-focused courses.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">
              Quick Links
            </h3>

            <ul className="space-y-2 text-gray-400">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/courses">Courses</Link></li>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/register">Register</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-lg mb-4">
              Resources
            </h3>

            <ul className="space-y-2 text-gray-400">
              <li>FAQ</li>
              <li>Help Center</li>
              <li>Contact Us</li>
              <li>Support</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">
              Contact
            </h3>

            <ul className="space-y-2 text-gray-400">
              <li>support@zenixlms.com</li>
              <li>+91 XXXXX XXXXX</li>
              <li>India</li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-500">
          © 2026 Zenix LMS. All rights reserved.
        </div>

      </div>

    </footer>
  );
}

export default Footer;