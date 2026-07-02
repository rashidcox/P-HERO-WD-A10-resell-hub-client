
"use client";

import React, { useState, useMemo } from 'react';
import { useParams, useRouter } from 'next/navigation';

// 1. Unified Demo array data matching aaa.png profile
const DEMO_PRODUCTS = [
  { 
    id: 1, 
    name: "Dell Inspiron 15 Laptop", 
    price: 35000, 
    category: "Electronics", 
    condition: "Good", 
    rating: 4.6, 
    reviewsCount: 120,
    location: "Dhaka, Bangladesh",
    description: "Dell Inspiron 15, Core i5 10th Gen, 8GB RAM, 512GB SSD. Used for 2 years. Everything works perfectly.",
    specs: { processor: "Intel Core i5 10th Gen", ram: "8GB DDR4", storage: "512GB SSD", display: '15.6" Full HD', warranty: "No", used: "2 Years" },
    seller: { name: "Nusrat Jahan", rating: 4.9, reviews: 230, location: "Dhaka, Bangladesh" },
    images: ["💻", "🔌", "📦", "💼"] // Primary + auxiliary thumbnail emojis
  },
  { 
    id: 2, 
    name: "iPhone 12 128GB", 
    price: 45000, 
    category: "Mobiles", 
    condition: "Excellent", 
    rating: 4.7, 
    reviewsCount: 85,
    location: "Chittagong, Bangladesh",
    description: "Factory unlocked iPhone 12 with 128GB storage. TrueTone and FaceID fully operational. 87% Battery Health.",
    specs: { processor: "A14 Bionic", ram: "4GB", storage: "128GB", display: '6.1" Super Retina', warranty: "3 Months Remaining", used: "1 Year" },
    seller: { name: "Hasan Mahmud", rating: 4.8, reviews: 180, location: "Chittagong, Bangladesh" },
    images: ["📱", "🔌", "📦"] 
  },
  { 
    id: 3, 
    name: "Wooden Dining Table", 
    price: 12000, 
    category: "Furniture", 
    condition: "Good", 
    rating: 4.5, 
    reviewsCount: 42,
    location: "Dhaka, Bangladesh",
    description: "Solid Segun wood 4-seater dining table. Minor scuffs on legs, top surface is clean and polished.",
    specs: { material: "Teak Wood", seats: "4 Seater", finish: "Glossy Lacquer", weight: "25kg", warranty: "No", used: "3 Years" },
    seller: { name: "Sadia Afrin", rating: 4.8, reviews: 170, location: "Dhaka, Bangladesh" },
    images: ["🪑", "🪵", "🛠️"] 
  }
];

export default function ProductDetailsPage() {
  const params = useParams();
  const router = useRouter();
  
  // Find product from dataset matching dynamic ID path and dinamic here today life simple of here.
  const product = useMemo(() => {
    return DEMO_PRODUCTS.find(p => p.id === parseInt(params.id)) || DEMO_PRODUCTS[0];
  }, [params.id]);

  // Handle active viewing image asset
  const [activeImgIndex, setActiveImgIndex] = useState(0);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 p-4 md:p-8">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-sm overflow-hidden p-4 md:p-8">
        
        {/* Navigation Breadcrumb */}
        <div className="mb-6 text-xs text-gray-500 flex gap-2">
          <span className="cursor-pointer hover:underline" onClick={() => router.push('/products')}>Home</span> &gt; 
          <span>{product.category}</span> &gt; 
          <span className="text-gray-800 font-medium">{product.name}</span>
        </div>

        {/* Main Content Splitting Wrapper */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* LEFT INTERACTIVE MEDIA BOX (4 Columns) */}
          <div className="lg:col-span-5 flex gap-4">
            {/* Thumbnails list stack */}
            <div className="flex flex-col gap-2">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImgIndex(idx)}
                  className={`w-14 h-14 border rounded-md flex items-center justify-center text-2xl transition-all ${
                    activeImgIndex === idx ? 'border-green-600 ring-2 ring-green-100' : 'border-gray-200 hover:border-gray-400'
                  }`}
                >
                  {img}
                </button>
              ))}
            </div>

            {/* Featured Active Display viewport */}
            <div className="flex-1 bg-gray-100 border border-gray-200 rounded-lg h-80 lg:h-96 flex items-center justify-center text-8xl select-none">
              {product.images[activeImgIndex]}
            </div>
          </div>

          {/* RIGHT METADATA AND SPECS HUB (7 Columns) */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">{product.name}</h1>
              
              {/* Ratings and reviews bar */}
              <div className="flex items-center gap-2 mb-4 text-sm">
                <span className="text-yellow-500 text-base">★★★★★</span>
                <span className="font-semibold text-gray-700">{product.rating}</span>
                <span className="text-gray-400">({product.reviewsCount} reviews)</span>
              </div>

              {/* Price Tag */}
              <div className="text-3xl font-extrabold text-green-600 mb-4">
                ৳{product.price.toLocaleString()}
              </div>

              {/* Badge Pills */}
              <div className="flex flex-wrap gap-4 text-sm mb-6 bg-gray-50 p-3 rounded-lg">
                <p><span className="text-gray-400">Condition:</span> <span className="bg-green-100 text-green-800 font-medium px-2 py-0.5 rounded text-xs ml-1">{product.condition}</span></p>
                <p><span className="text-gray-400">Category:</span> <span className="text-gray-800 font-medium ml-1">{product.category}</span></p>
                <p><span className="text-gray-400">Location:</span> <span className="text-gray-800 font-medium ml-1">{product.location}</span></p>
              </div>

              {/* Text Description */}
              <p className="text-gray-600 text-sm leading-relaxed mb-6 border-b pb-6">
                {product.description}
              </p>

              {/* Technical Specifications Matrix */}
              <div className="mb-6">
                <h3 className="font-semibold text-sm text-gray-900 uppercase tracking-wider mb-3">Specifications</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-sm">
                  {Object.entries(product.specs).map(([key, value]) => (
                    <div key={key} className="flex border-b border-gray-100 py-1.5 justify-between">
                      <span className="text-gray-400 capitalize">{key}:</span>
                      <span className="font-medium text-gray-800">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Action and Purchase block */}
            <div className="border-t pt-4 mt-auto">
              <div className="flex flex-wrap sm:flex-nowrap gap-3">
                <button 
                  onClick={() => alert('Added to Wishlist!')}
                  className="flex-1 sm:flex-initial px-6 py-3 border border-gray-300 hover:border-gray-400 text-gray-700 rounded-lg text-sm font-medium transition-colors text-center"
                >
                  ♡ Add to Wishlist
                </button>
                <button 
                  onClick={() => alert('Proceeding to instant checkout transaction!')}
                  className="flex-1 bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg text-sm font-medium transition-colors text-center shadow-sm"
                >
                  Buy Now
                </button>
              </div>
              <p className="text-xs text-gray-400 mt-3 flex items-center gap-1.5 justify-center sm:justify-start">
                🛡️ 100% Secure Transaction via ReSell Hub Shield
              </p>
            </div>

          </div>
        </div>

        {/* BOTTOM SECTION: SELLER PROFILE CARD */}
        <div className="mt-12 bg-gray-50 border border-gray-100 rounded-xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-xl font-bold text-green-700 shadow-inner">
              {product.seller.name[0]}
            </div>
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-tight">Seller Information</p>
              <h4 className="font-bold text-gray-800 text-base">{product.seller.name}</h4>
              <p className="text-xs text-gray-500 mt-0.5">★ {product.seller.rating} ({product.seller.reviews} reviews) • {product.seller.location}</p>
            </div>
          </div>
          
          <div className="flex gap-2 w-full sm:w-auto">
            <button 
              onClick={() => alert(`Opening chat channel with ${product.seller.name}`)}
              className="flex-1 sm:flex-none px-4 py-2 bg-white border border-gray-200 hover:bg-gray-100 text-gray-700 text-xs font-semibold rounded transition-colors"
            >
              Message Seller
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}