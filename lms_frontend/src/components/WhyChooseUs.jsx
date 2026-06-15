const features = [
  {
    title: "Industry Projects",
    icon: "🚀",
    description:
      "Build real-world projects that strengthen your portfolio and practical skills.",
  },
  {
    title: "Expert Instructors",
    icon: "👨‍🏫",
    description:
      "Learn from experienced professionals with industry knowledge.",
  },
  {
    title: "Certificates",
    icon: "🏆",
    description:
      "Earn certificates after successfully completing courses.",
  },
  {
    title: "Flexible Learning",
    icon: "⏰",
    description:
      "Study anytime, anywhere at your own pace.",
  },
];

function WhyChooseUs() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">
            Why Choose Zenix LMS?
          </h2>

          <p className="text-gray-600 mt-3">
            Everything you need to build job-ready skills and accelerate your career.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl hover:-translate-y-1 transition"
            >
              <div className="text-5xl mb-4">
                {feature.icon}
              </div>

              <h3 className="text-xl font-bold mb-3">
                {feature.title}
              </h3>

              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;