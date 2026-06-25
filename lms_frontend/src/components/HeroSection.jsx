import { Link } from "react-router-dom";

const HeroSection = () => {
return ( <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white min-h-[85vh] flex items-center">

```
  <div className="max-w-7xl mx-auto px-6">

    <div className="grid md:grid-cols-2 gap-12 items-center">

      {/* Left Content */}
      <div>

        {/* Brand */}
        <p className="text-xl font-semibold text-indigo-200 mb-3">
          ZENIX IT SKILLS ACADEMY
        </p>

        {/* Tagline */}
         <h1 className="text-5xl md:text-6xl font-bold leading-tight mt-3">
               Learn.
              <br />
              Build.
              <br />
              Succeed.
          </h1>

        {/* Description */}
        <p className="mt-6 text-lg text-indigo-100 max-w-2xl">
          Software Training & Placement Guidance for aspiring
          developers, AI engineers, and technology professionals.
        </p>

        {/* Skills */}
        <p className="mt-4 text-indigo-200">
          Python Full Stack • AI & Machine Learning • Data Analytics • Real Projects
        </p>

        {/* Trust Badge */}
        <div className="mt-6">
          <span className="bg-white/20 px-4 py-2 rounded-full text-sm">
            🚀 Practical Skills. Career Growth. Industry Readiness.
          </span>
        </div>

        {/* Buttons */}
        <div className="mt-8 flex gap-4 flex-wrap">

          <Link
            to="/courses"
            className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Explore Courses
          </Link>

          <Link
            to="/login"
            className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-indigo-600 transition"
          >
            Get Started
          </Link>

        </div>

        {/* Stats */}
        {/* <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">

          <div>
            <h3 className="text-2xl font-bold">20+</h3>
            <p className="text-indigo-100">Courses</p>
          </div>

          <div>
            <h3 className="text-2xl font-bold">500+</h3>
            <p className="text-indigo-100">Students</p>
          </div>

          <div>
            <h3 className="text-2xl font-bold">10+</h3>
            <p className="text-indigo-100">Projects</p>
          </div>

          <div>
            <h3 className="text-2xl font-bold">95%</h3>
            <p className="text-indigo-100">Satisfaction</p>
          </div>

        </div> */}

      </div>

      {/* Right Content */}
      <div className="hidden md:flex justify-center">

        <div className="bg-white/10 backdrop-blur-md p-10 rounded-2xl shadow-2xl max-w-md">

          <h2 className="text-3xl font-bold mb-6">
            🚀 Why Choose Zenix?
          </h2>

          <ul className="space-y-4 text-lg">

            <li>✅ Industry-Focused Training</li>

            <li>✅ Real-World Projects</li>

            <li>✅ Placement Guidance</li>

            <li>✅ Job-Ready Skill Development</li>

            <li>✅ Learn from Practical Examples</li>

          </ul>

        </div>

      </div>

    </div>

  </div>

</section>

);
};

export default HeroSection;
