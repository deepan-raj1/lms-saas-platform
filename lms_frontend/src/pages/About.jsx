import PublicNavbar from "../components/PublicNavbar";
import PublicFooter from "../components/PublicFooter";


function About() {
    return (
        <div className="min-h-screen bg-gray-100">
            <PublicNavbar />

            <div className="max-w-6xl mx-auto px-6 py-12">

                {/* Hero Section */}
                <div className="bg-white rounded-2xl shadow-lg p-10 text-center mb-10">

                    <h1 className="text-4xl md:text-5xl font-bold text-indigo-600">
                        ZENIX IT SKILLS ACADEMY
                    </h1>

                    <p className="text-2xl font-semibold mt-4">
                        Learn. Build. Succeed.
                    </p>

                    <p className="text-gray-600 mt-2 text-lg">
                        Software Training & Placement Guidance
                    </p>

                </div>

                {/* About Section */}
                <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">

                    <h2 className="text-3xl font-bold mb-4">
                        About Us
                    </h2>

                    <p className="text-gray-700 leading-relaxed">
                        At Zenix IT Skills Academy, we believe that practical
                        skills create successful careers. Our goal is to bridge
                        the gap between academic learning and industry
                        requirements by providing high-quality, hands-on
                        training that prepares learners for real-world
                        opportunities.
                    </p>

                    <p className="text-gray-700 leading-relaxed mt-4">
                        We help students, fresh graduates, job seekers, and
                        working professionals develop job-ready skills through
                        project-based learning, practical assignments, and
                        industry-focused training programs.
                    </p>

                </div>

                {/* Mission */}
                <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">

                    <h2 className="text-3xl font-bold mb-4">
                        Our Mission
                    </h2>

                    <p className="text-gray-700 leading-relaxed">
                        To empower learners with practical technology skills,
                        industry knowledge, and career guidance that help them
                        build successful and rewarding careers in the digital
                        world.
                    </p>

                </div>

                {/* What We Offer */}
                <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">

                    <h2 className="text-3xl font-bold mb-6">
                        What We Offer
                    </h2>

                    <div className="grid md:grid-cols-2 gap-4">

                        <div className="bg-indigo-50 p-4 rounded-lg">
                            Python Programming
                        </div>

                        <div className="bg-indigo-50 p-4 rounded-lg">
                            Full Stack Development
                        </div>

                        <div className="bg-indigo-50 p-4 rounded-lg">
                            Artificial Intelligence & Machine Learning
                        </div>

                        <div className="bg-indigo-50 p-4 rounded-lg">
                            Data Science & Analytics
                        </div>

                        <div className="bg-indigo-50 p-4 rounded-lg">
                            Software Development Projects
                        </div>

                        <div className="bg-indigo-50 p-4 rounded-lg">
                            Technical Interview Preparation
                        </div>

                        <div className="bg-indigo-50 p-4 rounded-lg">
                            Placement Guidance & Career Support
                        </div>

                        <div className="bg-indigo-50 p-4 rounded-lg">
                            Professional Skill Development
                        </div>

                    </div>

                </div>

                {/* Why Choose Us */}
                <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">

                    <h2 className="text-3xl font-bold mb-6">
                        Why Choose Zenix IT Skills Academy?
                    </h2>

                    <div className="space-y-4">

                        <div>
                            <h3 className="font-semibold text-lg">
                                Practical Learning Approach
                            </h3>
                            <p className="text-gray-600">
                                Learn by building real-world projects and
                                applications instead of focusing only on theory.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-semibold text-lg">
                                Industry-Oriented Training
                            </h3>
                            <p className="text-gray-600">
                                Courses are designed to align with current
                                industry requirements and job market
                                expectations.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-semibold text-lg">
                                Career-Focused Development
                            </h3>
                            <p className="text-gray-600">
                                Gain the skills, confidence, and guidance
                                needed to pursue successful technology careers.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-semibold text-lg">
                                Hands-On Projects
                            </h3>
                            <p className="text-gray-600">
                                Build a strong portfolio through practical
                                assignments and project-based learning.
                            </p>
                        </div>

                    </div>

                </div>

                {/* Vision */}
                <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">

                    <h2 className="text-3xl font-bold mb-4">
                        Our Vision
                    </h2>

                    <p className="text-gray-700 leading-relaxed">
                        To become a trusted and innovative learning platform
                        that empowers students and professionals with practical
                        technology skills, career confidence, and opportunities
                        for lifelong growth.
                    </p>

                </div>

                {/* Commitment */}
                <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">

                    <h2 className="text-3xl font-bold mb-6">
                        Our Commitment
                    </h2>

                    <ul className="space-y-3 text-gray-700">
                        <li>✅ Learn in-demand skills</li>
                        <li>✅ Build real-world projects</li>
                        <li>✅ Strengthen problem-solving abilities</li>
                        <li>✅ Prepare for technical careers</li>
                        <li>✅ Achieve professional success</li>
                    </ul>

                </div>

                {/* Footer Quote */}
                <div className="text-center py-8">

                    <h3 className="text-2xl font-bold text-indigo-600">
                        Learn. Build. Succeed.
                    </h3>

                    <p className="text-gray-600 mt-2">
                        Practical Skills. Real Projects. Career Success.
                    </p>

                </div>

            </div>
            <PublicFooter />
        </div>
    );
}

export default About;