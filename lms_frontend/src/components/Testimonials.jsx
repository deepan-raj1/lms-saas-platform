const testimonials = [
  {
    id: 1,
    name: "Arun Kumar",
    role: "Python Developer",
    feedback:
      "The Python Full Stack course helped me build real-world projects and improve my confidence.",
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Data Analyst",
    feedback:
      "The learning experience was practical and easy to follow. Highly recommended.",
  },
  {
    id: 3,
    name: "Rahul Verma",
    role: "Software Engineer",
    feedback:
      "The projects and assignments prepared me for real industry work.",
  },
];

function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">
            What Our Students Say
          </h2>

          <p className="text-gray-600 mt-3">
            Success stories from our learners.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gray-50 rounded-2xl p-8 shadow-md hover:shadow-xl transition"
            >
              <div className="text-yellow-500 text-xl mb-4">
                ⭐⭐⭐⭐⭐
              </div>

              <p className="text-gray-700 italic">
                "{testimonial.feedback}"
              </p>

              <div className="mt-6">
                <h3 className="font-bold">
                  {testimonial.name}
                </h3>

                <p className="text-gray-500 text-sm">
                  {testimonial.role}
                </p>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Testimonials;