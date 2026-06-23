import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
      <div className="max-w-lg text-center">
        {/* 404 */}
        <h1 className="text-8xl md:text-9xl font-bold text-blue-600">
          404
        </h1>

        {/* Title */}
        <h2 className="mt-4 text-3xl font-bold text-gray-900">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="mt-4 text-gray-600">
          Sorry, the page you are looking for doesn't exist or has been
          moved.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Link
            href="/"
            className="px-6 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition"
          >
            Go Home
          </Link>

          <Link
            href="/products"
            className="px-6 py-3 border border-gray-300 rounded-xl font-medium hover:bg-gray-100 transition"
          >
            Browse Products
          </Link>
        </div>

        {/* Decorative Card */}
        <div className="mt-12 bg-white rounded-2xl border p-6 shadow-sm">
          <div className="text-5xl mb-3">🛒</div>
          <h3 className="font-semibold text-lg">
            Looking for great deals?
          </h3>
          <p className="text-gray-500 mt-2">
            Explore thousands of pre-owned products from trusted sellers.
          </p>
        </div>
      </div>
    </div>
  );
}