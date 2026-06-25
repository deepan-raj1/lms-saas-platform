import { Link } from "react-router-dom";

function PublicFooter() {
    return (
        <footer className="bg-gray-900 text-white mt-16">
            <div className="max-w-7xl mx-auto px-6 py-12">

                <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-12 lg:gap-20">

                    {/* Brand */}
                    <div className="max-w-sm">
                        <h2 className="text-2xl font-bold text-indigo-400 whitespace-nowrap">
                            ZENIX IT SKILLS ACADEMY
                        </h2>

                        <p className="mt-3 font-medium">
                            Learn. Build. Succeed.
                        </p>

                        <p className="text-gray-400 mt-2">
                            Software Training & Placement Guidance
                        </p>

                        <p className="text-gray-400 mt-6">
                            Learn job-ready skills through industry-focused courses.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="min-w-[180px]">
                        <h3 className="text-lg font-semibold mb-4">
                            Quick Links
                        </h3>

                        <ul className="space-y-2 text-gray-400">
                            <li>
                                <Link to="/" className="hover:text-white">
                                    Home
                                </Link>
                            </li>

                            <li>
                                <Link to="/courses" className="hover:text-white">
                                    Courses
                                </Link>
                            </li>

                            <li>
                                <Link to="/about" className="hover:text-white">
                                    About
                                </Link>
                            </li>

                            <li>
                                <Link to="/contact" className="hover:text-white">
                                    Contact
                                </Link>
                            </li>

                            <li>
                                <Link to="/login" className="hover:text-white">
                                    Login
                                </Link>
                            </li>

                            <li>
                                <Link to="/register" className="hover:text-white">
                                    Register
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div className="min-w-[180px]">
                        <h3 className="text-lg font-semibold mb-4">
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
                    <div className="min-w-[180px]">
                        <h3 className="text-lg font-semibold mb-4">
                            Contact
                        </h3>

                        <ul className="space-y-2 text-gray-400">
                            <li>support@zenixskills@gmail.com</li>
                            <li>+91 XXXXX XXXXX</li>
                            <li>India, Tamil Nadu, Chennai</li>
                        </ul>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400">
                    © 2026 Zenix IT Skills Academy. All Rights Reserved.
                </div>

            </div>
        </footer>
    );
}

export default PublicFooter;