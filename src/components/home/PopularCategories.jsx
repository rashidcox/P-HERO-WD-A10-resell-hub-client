import Link from "next/link";

const categories = [
  {
    id: 1,
    name: "Electronics",
    icon: "💻",
    count: "1,250 Items",
  },
  {
    id: 2,
    name: "Mobiles",
    icon: "📱",
    count: "980 Items",
  },
  {
    id: 3,
    name: "Furniture",
    icon: "🛋️",
    count: "540 Items",
  },
  {
    id: 4,
    name: "Vehicles",
    icon: "🚗",
    count: "320 Items",
  },
  {
    id: 5,
    name: "Fashion",
    icon: "👕",
    count: "860 Items",
  },
  {
    id: 6,
    name: "Books",
    icon: "📚",
    count: "410 Items",
  },
];

export default function PopularCategories() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              Popular Categories
            </h2>
          </div>

          <Link
            href="/categories"
            className="text-blue-600 font-medium hover:text-blue-700"
          >
            View All →
          </Link>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/category/${category.name.toLowerCase()}`}
              className="group bg-white border border-gray-200 rounded-2xl p-6 text-center hover:border-blue-600 hover:shadow-lg transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-2xl bg-blue-50 text-3xl group-hover:scale-110 transition">
                {category.icon}
              </div>

              {/* Name */}
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                {category.name}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}