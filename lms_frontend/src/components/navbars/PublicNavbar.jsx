import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

function PublicNavbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">

            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

                {/* Logo */}

                <Link
                    to="/"
                    className="text-2xl font-bold text-indigo-600"
                >
                    ⚡ Zenix LMS
                </Link>

                {/* Desktop Navigation */}

                <div className="hidden md:flex gap-8 items-center">

                    <Link to="/" className="hover:text-indigo-600">
                        Home
                    </Link>

                    <Link to="/courses" className="hover:text-indigo-600">
                        Courses
                    </Link>

                    <Link to="/about" className="hover:text-indigo-600">
                        About
                    </Link>

                    <Link to="/contact" className="hover:text-indigo-600">
                        Contact
                    </Link>

                </div>

                {/* Desktop Buttons */}

                <div className="hidden md:flex gap-3">

                    <Link
                        to="/login"
                        className="px-4 py-2 border rounded-lg"
                    >
                        Login
                    </Link>

                    <Link
                        to="/register"
                        className="px-4 py-2 bg-indigo-600 text-white rounded-lg"
                    >
                        Register
                    </Link>

                </div>

                {/* Mobile Hamburger */}

                <button
                    className="md:hidden"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {
                        menuOpen
                            ? <X size={28} />
                            : <Menu size={28} />
                    }
                </button>

            </div>

            {/* Mobile Menu */}

            {
                menuOpen && (

                    <div className="md:hidden bg-white border-t shadow-md">

                        <div className="flex flex-col p-5 gap-4">

                            <Link
                                to="/"
                                onClick={() => setMenuOpen(false)}
                            >
                                Home
                            </Link>

                            <Link
                                to="/courses"
                                onClick={() => setMenuOpen(false)}
                            >
                                Courses
                            </Link>

                            <Link
                                to="/about"
                                onClick={() => setMenuOpen(false)}
                            >
                                About
                            </Link>

                            <Link
                                to="/contact"
                                onClick={() => setMenuOpen(false)}
                            >
                                Contact
                            </Link>

                            <hr />

                            <Link
                                to="/login"
                                onClick={() => setMenuOpen(false)}
                                className="border rounded-lg px-4 py-2 text-center"
                            >
                                Login
                            </Link>

                            <Link
                                to="/register"
                                onClick={() => setMenuOpen(false)}
                                className="bg-indigo-600 text-white rounded-lg px-4 py-2 text-center"
                            >
                                Register
                            </Link>

                        </div>

                    </div>

                )
            }

        </nav>
    );
}

export default PublicNavbar;