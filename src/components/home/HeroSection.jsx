"use client";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div>
            <span className="inline-block px-4 py-2 text-sm font-medium text-blue-600 bg-blue-100 rounded-full">
              Buy Smart, Sell Easy
            </span>

            <h1 className="mt-6 text-4xl md:text-5xl font-bold leading-tight text-gray-900">
              Find Great Deals on
              <span className="block text-blue-600">
                Pre-Owned Products
              </span>
            </h1>

            <p className="mt-4 text-gray-600 text-lg max-w-lg">
              Buy and sell second-hand items safely and easily across
              Bangladesh. Discover quality products at affordable prices.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                href="/products"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
              >
                Browse Products
              </Link>

              <Link
                href="/sell"
                className="px-6 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition"
              >
                Start Selling
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
              <div className="bg-white border rounded-xl p-4 text-center shadow-sm">
                <h3 className="font-bold text-xl">10,000+</h3>
                <p className="text-gray-500 text-sm">Products</p>
              </div>

              <div className="bg-white border rounded-xl p-4 text-center shadow-sm">
                <h3 className="font-bold text-xl">5,000+</h3>
                <p className="text-gray-500 text-sm">Sellers</p>
              </div>

              <div className="bg-white border rounded-xl p-4 text-center shadow-sm">
                <h3 className="font-bold text-xl">20,000+</h3>
                <p className="text-gray-500 text-sm">Buyers</p>
              </div>

              <div className="bg-white border rounded-xl p-4 text-center shadow-sm">
                <h3 className="font-bold text-xl">15,000+</h3>
                <p className="text-gray-500 text-sm">Orders</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative flex justify-center">
            <div className="absolute w-[500px] h-[500px] bg-green-100 rounded-full"></div>

            <div className="relative z-10">
              <Image
                src="/images/hero-products.png"
                alt="Marketplace Products"
                width={650}
                height={500}
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}