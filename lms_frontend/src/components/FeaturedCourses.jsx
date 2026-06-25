import { Link } from "react-router-dom";

const courses = [
  {
    id: 1,
    title: "Python Full Stack Development",
    level: "Beginner",
    rating: 4.8,
  },
  {
    id: 2,
    title: "Machine Learning Fundamentals",
    level: "Intermediate",
    rating: 4.7,
  },
  {
    id: 3,
    title: "React JS Mastery",
    level: "Beginner",
    rating: 4.9,
  },
];

function FeaturedCourses() {
  return (
    <section className="py-20 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">
            Popular Courses
          </h2>

          <p className="text-gray-600 mt-3">
            Learn industry-relevant skills through practical projects.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition"
            >

              <div className="h-48 bg-indigo-100 flex items-center justify-center">
                <span className="text-xl font-bold text-indigo-700">
                  {course.title}
                </span>
              </div>

              <div className="p-6">

                <h3 className="text-xl font-semibold">
                  {course.title}
                </h3>

                <p className="text-gray-500 mt-2">
                  Level: {course.level}
                </p>

                <p className="text-yellow-500 mt-2">
                  ⭐ {course.rating}
                </p>

                <Link
                to={`/courses`}
                className="block mt-4 w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 text-center"
              >
                View Course
              </Link>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default FeaturedCourses;