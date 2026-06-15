import { Link } from "react-router-dom";

function CTASection() {
  return (
    <section className="py-24 bg-indigo-600 text-white">
      <div className="max-w-5xl mx-auto px-6 text-center">

        <h2 className="text-4xl md:text-5xl font-bold">
          Ready to Start Learning?
        </h2>

        <p className="mt-6 text-lg text-indigo-100">
          Join hundreds of learners building job-ready skills
          through practical courses and real-world projects.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">

          <Link
            to="/register"
            className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold hover:scale-105 transition"
          >
            Get Started
          </Link>

          <Link
            to="/courses"
            className="border border-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-indigo-600 transition"
          >
            Explore Courses
          </Link>

        </div>

      </div>
    </section>
  );
}

export default CTASection;