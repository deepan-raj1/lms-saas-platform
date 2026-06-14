const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white min-h-screen flex items-center">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Learn Job-Ready Skills.
              <br />
              Build Your Future.
            </h1>

            <p className="mt-6 text-lg text-indigo-100">
              Master Python, Full Stack Development,
              AI & Machine Learning through practical
              industry-focused courses.
            </p>

            <div className="mt-8 flex gap-4 flex-wrap">

              <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100">
                Explore Courses
              </button>

              <button className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-indigo-600 transition">
                Become Instructor
              </button>

            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">

              <div>
                <h3 className="text-2xl font-bold">500+</h3>
                <p>Students</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold">20+</h3>
                <p>Courses</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold">10+</h3>
                <p>Instructors</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold">95%</h3>
                <p>Satisfaction</p>
              </div>

            </div>

          </div>

          {/* Right Content */}
          <div className="hidden md:flex justify-center">

            <div className="bg-white/10 backdrop-blur-md p-10 rounded-2xl shadow-2xl">

              <h2 className="text-3xl font-bold mb-4">
                🚀 Start Learning Today
              </h2>

              <p>
                Practical Courses
                <br />
                Real Projects
                <br />
                Career Growth
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default HeroSection;