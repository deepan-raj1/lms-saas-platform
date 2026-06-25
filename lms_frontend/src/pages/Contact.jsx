import PublicNavbar from "../components/navbars/PublicNavbar";
import PublicFooter from "../components/PublicFooter";


function Contact() {
    return (
        <div className="min-h-screen bg-gray-100">
            <PublicNavbar />

            <div className="max-w-6xl mx-auto px-6 py-12">

                {/* Hero Section */}
                <div className="bg-white rounded-2xl shadow-lg p-10 text-center mb-10">

                    <h1 className="text-4xl md:text-5xl font-bold text-indigo-600">
                        Contact Us
                    </h1>

                    <p className="text-gray-600 mt-4 text-lg">
                        We'd love to hear from you. Reach out for course inquiries,
                        training programs, career guidance, or partnership opportunities.
                    </p>

                </div>

                <div className="grid md:grid-cols-2 gap-8">

                    {/* Contact Form */}
                    <div className="bg-white rounded-2xl shadow-lg p-8">

                        <h2 className="text-2xl font-bold mb-6">
                            Send Us a Message
                        </h2>

                        <form className="space-y-4">

                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />

                            <input
                                type="email"
                                placeholder="Your Email"
                                className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />

                            <input
                                type="text"
                                placeholder="Subject"
                                className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />

                            <textarea
                                rows="6"
                                placeholder="Your Message"
                                className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />

                            <button
                                type="submit"
                                className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg"
                            >
                                Send Message
                            </button>

                        </form>

                    </div>

                    {/* Contact Information */}
                    <div className="space-y-6">

                        <div className="bg-white rounded-2xl shadow-lg p-6">

                            <h2 className="text-2xl font-bold mb-4">
                                Zenix IT Skills Academy
                            </h2>

                            <p className="text-gray-600">
                                Learn. Build. Succeed.
                            </p>

                            <p className="text-gray-600">
                                Software Training & Placement Guidance
                            </p>

                        </div>

                        <div className="bg-white rounded-2xl shadow-lg p-6">

                            <h3 className="text-xl font-semibold mb-3">
                                Email
                            </h3>

                            <p className="text-gray-600">
                                contact@zenixskills.com
                            </p>

                        </div>

                        <div className="bg-white rounded-2xl shadow-lg p-6">

                            <h3 className="text-xl font-semibold mb-3">
                                Phone
                            </h3>

                            <p className="text-gray-600">
                                +91 XXXXX XXXXX
                            </p>

                        </div>

                        <div className="bg-white rounded-2xl shadow-lg p-6">

                            <h3 className="text-xl font-semibold mb-3">
                                WhatsApp
                            </h3>

                            <p className="text-gray-600">
                                +91 XXXXX XXXXX
                            </p>

                        </div>

                        <div className="bg-white rounded-2xl shadow-lg p-6">

                            <h3 className="text-xl font-semibold mb-3">
                                Location
                            </h3>

                            <p className="text-gray-600">
                                Tamil Nadu, India
                            </p>

                        </div>

                    </div>

                </div>

            </div>
            <PublicFooter />
        </div>
    );
}

export default Contact;