const categories = [
  {
    name: "Python Development",
    icon: "🐍",
  },
  {
    name: "Web Development",
    icon: "🌐",
  },
  {
    name: "AI & Machine Learning",
    icon: "🤖",
  },
  {
    name: "Data Science",
    icon: "📊",
  },
  {
    name: "Cloud Computing",
    icon: "☁️",
  },
  {
    name: "Career Skills",
    icon: "💼",
  },
];

function CategoriesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">
            Explore Categories
          </h2>

          <p className="text-gray-600 mt-3">
            Discover courses across multiple domains.
          </p>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">

          {categories.map((category) => (
            <div
              key={category.name}
              className="bg-gray-50 rounded-xl p-6 text-center shadow-sm hover:shadow-lg hover:-translate-y-1 transition"
            >
              <div className="text-4xl mb-3">
                {category.icon}
              </div>

              <h3 className="font-semibold">
                {category.name}
              </h3>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default CategoriesSection;