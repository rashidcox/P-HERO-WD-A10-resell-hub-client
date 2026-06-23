import Image from "next/image";
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Dell Inspiron 15 Laptop",
    price: "35,000",
    condition: "Good",
    location: "Dhaka",
    image: "/products/laptop.png",
  },
  {
    id: 2,
    name: "iPhone 12 128GB",
    price: "48,000",
    condition: "Excellent",
    location: "Chattogram",
    image: "/products/iphone.png",
  },
  {
    id: 3,
    name: "3 Seater Sofa",
    price: "12,500",
    condition: "Good",
    location: "Dhaka",
    image: "/products/sofa.png",
  },
  {
    id: 4,
    name: "Canon EOS 700D",
    price: "22,000",
    condition: "Good",
    location: "Khulna",
    image: "/products/camera.png",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="py-16 bg-slate-50">
      <div className="container max-w-7xl sm:px-6 mx-auto px-4">

        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              Featured Products
            </h2>
            <p className="text-gray-500 mt-2">
              Discover the best second-hand deals.
            </p>
          </div>

          <Link
            href="/products"
            className="text-blue-600 font-medium hover:text-blue-700"
          >
            View All →
          </Link>
        </div>

        {/* Products Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition duration-300 overflow-hidden group"
            >
              {/* Product Image */}
              <div className="relative h-56 bg-gray-50">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-4 group-hover:scale-105 transition duration-300"
                />

                {/* Wishlist */}
                <button className="absolute top-3 right-3 bg-white shadow-md rounded-full p-2">
                  ❤️
                </button>
              </div>

              {/* Product Info */}
              <div className="p-5">
                <h3 className="font-semibold text-gray-900 line-clamp-2">
                  {product.name}
                </h3>

                <p className="text-2xl font-bold text-blue-600 mt-2">
                  ৳ {product.price}
                </p>

                <div className="flex items-center justify-between mt-4">
                  <span className="text-sm px-3 py-1 bg-green-100 text-green-700 rounded-full">
                    {product.condition}
                  </span>

                  <span className="text-sm text-gray-500">
                    📍 {product.location}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}