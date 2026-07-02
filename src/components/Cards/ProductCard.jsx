import Image from 'next/image';
import React from 'react';

const ProductCard = () => {
    return (
        <div>
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

                    <button className="w-full mt-5 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-medium transition">
                        View Details
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;