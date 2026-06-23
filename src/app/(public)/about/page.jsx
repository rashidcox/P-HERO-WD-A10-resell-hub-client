export default function AboutPage() {
  return (
    <div className="bg-gray-100 min-h-screen">

      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">
            About ReSell Hub
          </h1>

          <p className="mt-4 text-blue-100 max-w-2xl mx-auto">
            A smart marketplace where people can buy, sell, and reuse products easily, safely, and sustainably.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">

          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              Our Mission
            </h2>

            <p className="mt-4 text-gray-600 leading-relaxed">
              We aim to reduce waste and make second-hand buying and selling simple, secure, and accessible for everyone.
              ReSell Hub connects buyers and sellers in one trusted platform.
            </p>

            <ul className="mt-6 space-y-3 text-gray-600">
              <li>✔ Safe transactions</li>
              <li>✔ Verified sellers</li>
              <li>✔ Eco-friendly marketplace</li>
              <li>✔ Fast product listing</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow p-6">
            <div className="grid grid-cols-2 gap-4 text-center">

              <div className="p-4 bg-blue-50 rounded-xl">
                <h3 className="text-2xl font-bold text-blue-600">25K+</h3>
                <p className="text-sm text-gray-600">Users</p>
              </div>

              <div className="p-4 bg-green-50 rounded-xl">
                <h3 className="text-2xl font-bold text-green-600">18K+</h3>
                <p className="text-sm text-gray-600">Products</p>
              </div>

              <div className="p-4 bg-yellow-50 rounded-xl">
                <h3 className="text-2xl font-bold text-yellow-600">12K+</h3>
                <p className="text-sm text-gray-600">Deals</p>
              </div>

              <div className="p-4 bg-purple-50 rounded-xl">
                <h3 className="text-2xl font-bold text-purple-600">98%</h3>
                <p className="text-sm text-gray-600">Satisfaction</p>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">

          <h2 className="text-3xl font-bold text-gray-900">
            Why Choose Us
          </h2>

          <p className="text-gray-500 mt-2">
            A modern platform built for trust and convenience
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">

            <div className="p-6 border rounded-2xl hover:shadow-lg transition">
              <div className="text-3xl">🔒</div>
              <h3 className="mt-4 font-semibold">Secure Platform</h3>
              <p className="text-gray-500 text-sm mt-2">
                Safe and verified transactions between users.
              </p>
            </div>

            <div className="p-6 border rounded-2xl hover:shadow-lg transition">
              <div className="text-3xl">⚡</div>
              <h3 className="mt-4 font-semibold">Fast Listings</h3>
              <p className="text-gray-500 text-sm mt-2">
                Easily post products within minutes.
              </p>
            </div>

            <div className="p-6 border rounded-2xl hover:shadow-lg transition">
              <div className="text-3xl">🌱</div>
              <h3 className="mt-4 font-semibold">Eco Friendly</h3>
              <p className="text-gray-500 text-sm mt-2">
                Promote reuse and reduce waste.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 text-center">

          <h2 className="text-3xl font-bold text-gray-900">
            Our Vision
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            We believe in a future where every product gets a second life.
            ReSell Hub is built to support that vision globally.
          </p>

          <div className="mt-10">
            <div className="bg-white p-8 rounded-2xl shadow max-w-3xl mx-auto">
              <p className="text-gray-600 leading-relaxed">
                “Our goal is to build the most trusted second-hand marketplace where anyone can trade safely and confidently.”
              </p>

              <h4 className="mt-4 font-semibold text-blue-600">
                — ReSell Hub Team
              </h4>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}