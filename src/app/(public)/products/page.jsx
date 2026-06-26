"use client";

import Link from 'next/link';
import React, { useState, useMemo } from 'react';
// Importing simple grid/list icons for the layout switcher toggle, plus a chevron for the dropdown
import { LuLayoutGrid, LuList, LuChevronDown } from 'react-icons/lu';

// 1. Mock Data array based on the aaa.png marketplace concept
const DEMO_PRODUCTS = [
  { id: 1, name: "Dell Inspiron 15 Laptop", price: 35000, category: "Electronics", condition: "Good", rating: 4.6, image: "💻" },
  { id: 2, name: "iPhone 12 128GB", price: 45000, category: "Mobiles", condition: "Excellent", rating: 4.7, image: "📱" },
  { id: 3, name: "Wooden Dining Table", price: 12000, category: "Furniture", condition: "Good", rating: 4.5, image: "🪑" },
  { id: 4, name: "Sony WH-1000XM4", price: 15500, category: "Electronics", condition: "Good", rating: 4.6, image: "🎧" },
  { id: 5, name: "Honda CB Shine 2018", price: 85000, category: "Vehicles", condition: "Good", rating: 4.7, image: "🏍️" },
  { id: 6, name: "Men's Denim Jacket", price: 1200, category: "Fashion", condition: "Good", rating: 4.4, image: "🧥" },
  { id: 7, name: "MacBook Pro 2019", price: 65000, category: "Electronics", condition: "Excellent", rating: 4.8, image: "💻" },
  { id: 8, name: "iPhone 11 64GB", price: 28000, category: "Mobiles", condition: "Excellent", rating: 4.7, image: "📱" },
  { id: 9, name: "Canon EOS 700D", price: 18500, category: "Electronics", condition: "Good", rating: 4.6, image: "📷" },
  { id: 10, name: "Wooden Study Table", price: 6500, category: "Furniture", condition: "Fair", rating: 4.5, image: "🪑" },
];

const ITEMS_PER_PAGE = 6;

export default function ProductsPage() {
  // --- State Management ---
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedCondition, setSelectedCondition] = useState("All");
  const [maxPrice, setMaxPrice] = useState(100000);
  const [sortBy, setSortBy] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);
  const [viewMode, setViewMode] = useState("grid"); // 'grid' or 'list'

  // State to manage whether the category dropdown is open
  const [isCategoryOpen, setIsCategoryOpen] = useState(true);

  // --- Filtering & Sorting Logic ---
  const filteredAndSortedProducts = useMemo(() => {
    let result = [...DEMO_PRODUCTS];

    // Search filter
    if (searchQuery) {
      result = result.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Category filter
    if (selectedCategory !== "All") {
      result = result.filter(product => product.category === selectedCategory);
    }

    // Condition filter
    if (selectedCondition !== "All") {
      result = result.filter(product => product.condition === selectedCondition);
    }

    // Price filter
    result = result.filter(product => product.price <= maxPrice);

    // Sorting
    if (sortBy === "low-to-high") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === "high-to-low") {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [searchQuery, selectedCategory, selectedCondition, maxPrice, sortBy]);

  // --- Pagination Logic ---
  const totalPages = Math.ceil(filteredAndSortedProducts.length / ITEMS_PER_PAGE);
  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredAndSortedProducts.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredAndSortedProducts, currentPage]);

  // Reset page when filters change
  const handleFilterChange = (filterAction) => {
    filterAction();
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">

        {/* Breadcrumb / Header */}
        <div className="mb-6">
          <p className="text-xs text-gray-500">Home &gt; Products</p>
          <h1 className="text-2xl font-bold text-gray-900 mt-1">All Products</h1>
        </div>

        {/* Top Controls Bar */}
        <div className="bg-white p-4 rounded-lg shadow-sm mb-6 flex flex-col md:flex-row gap-4 justify-between items-center">
          <div className="flex flex-wrap gap-3 w-full md:w-auto items-center">
            <input
              type="text"
              placeholder="Search products..."
              className="border border-gray-300 rounded px-3 py-1.5 text-sm outline-none focus:border-green-600 w-full sm:w-64"
              value={searchQuery}
              onChange={(e) => handleFilterChange(() => setSearchQuery(e.target.value))}
            />

            <select
              className="border border-gray-300 rounded px-3 py-1.5 text-sm bg-white"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="default">Sort by: Default</option>
              <option value="low-to-high">Price: Low to High</option>
              <option value="high-to-low">Price: High to Low</option>
            </select>

            {/* Grid / List Layout Switcher */}
            <div className="flex border border-gray-300 rounded overflow-hidden">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 ${viewMode === "grid" ? "bg-green-600 text-white" : "bg-white text-gray-600 hover:bg-gray-100"}`}
                title="Grid View"
              >
                <LuLayoutGrid size={16} />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 ${viewMode === "list" ? "bg-green-600 text-white" : "bg-white text-gray-600 hover:bg-gray-100"}`}
                title="List View"
              >
                <LuList size={16} />
              </button>
            </div>
          </div>

          <div className="text-sm text-gray-500 self-end md:self-center">
            Showing {paginatedProducts.length} of {filteredAndSortedProducts.length} results
          </div>
        </div>

        {/* Main Content Layout */}
        <div className="flex flex-col lg:flex-row gap-6">

          {/* SIDEBAR FILTERS */}
          <aside className="w-full lg:w-64 bg-white p-6 rounded-lg shadow-sm h-fit shrink-0">

            {/* Clickable Dropdown Categories Layout */}
            <div className="mb-6">
              <button
                onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                className="w-full flex items-center justify-between text-left focus:outline-none group"
              >
                <h3 className="font-semibold text-gray-900 text-sm uppercase tracking-wider group-hover:text-green-600 transition-colors">
                  Categories ({selectedCategory})
                </h3>
                <LuChevronDown
                  size={18}
                  className={`text-gray-500 transition-transform duration-200 group-hover:text-green-600 ${isCategoryOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {/* Collapsible Dropdown Content Container */}
              <div className={`mt-3 space-y-1 transition-all overflow-hidden ${isCategoryOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
                {["All", "Electronics", "Mobiles", "Furniture", "Vehicles", "Fashion"].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => handleFilterChange(() => setSelectedCategory(cat))}
                    className={`w-full text-left text-sm px-3 py-2 rounded-md transition-colors font-medium ${selectedCategory === cat
                        ? "bg-green-50 text-green-600 font-semibold"
                        : "text-gray-600 hover:bg-gray-50 hover:text-green-600"
                      }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <hr className="my-4 border-gray-200" />

            {/* Condition */}
            <div className="mb-6">
              <h3 className="font-semibold text-gray-900 mb-3 text-sm uppercase tracking-wider">Condition</h3>
              <div className="space-y-2">
                {["All", "Excellent", "Good", "Fair"].map((cond) => (
                  <label key={cond} className="flex items-center text-sm cursor-pointer hover:text-green-600">
                    <input
                      type="radio"
                      name="condition"
                      className="accent-green-600 mr-2"
                      checked={selectedCondition === cond}
                      onChange={() => handleFilterChange(() => setSelectedCondition(cond))}
                    />
                    {cond}
                  </label>
                ))}
              </div>
            </div>

            <hr className="my-4 border-gray-200" />

            {/* Price Range */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-3 text-sm uppercase tracking-wider">Max Price</h3>
              <input
                type="range"
                min="1000"
                max="100000"
                step="1000"
                value={maxPrice}
                onChange={(e) => handleFilterChange(() => setMaxPrice(Number(e.target.value)))}
                className="w-full accent-green-600 cursor-pointer"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-2">
                <span>৳1,000</span>
                <span className="font-semibold text-green-600">৳{maxPrice.toLocaleString()}</span>
              </div>
            </div>
          </aside>

          {/* PRODUCT CONTAINER */}
          <div className="flex-1">
            {paginatedProducts.length === 0 ? (
              <div className="bg-white rounded-lg p-12 text-center shadow-sm">
                <p className="text-gray-500 text-lg">No products found matching your filters.</p>
              </div>
            ) : (
              <>
                {/* Dynamically Styled Products Layout Box */}
                <div className={viewMode === "grid"
                  ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
                  : "flex flex-col gap-4"
                }>
                  {paginatedProducts.map((product) => (
                    <div
                      key={product.id}
                      className={`bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex ${viewMode === "grid" ? "flex-col" : "flex-row items-center p-4 gap-6"
                        }`}
                    >
                      {/* Product Media Box */}
                      <div className={`bg-gray-100 flex items-center justify-center text-5xl select-none relative shrink-0 ${viewMode === "grid" ? "h-48 w-full" : "h-32 w-32 rounded-md"
                        }`}>
                        {product.image}
                        <span className="absolute top-3 right-3 text-xs bg-white/80 backdrop-blur-sm px-2 py-0.5 rounded text-gray-600 font-medium">
                          ★ {product.rating}
                        </span>
                      </div>

                      {/* Product Metadata & Actions Info split */}
                      <div className="flex-1 flex flex-col sm:flex-row justify-between items-start sm:items-center w-full p-4 sm:p-0">
                        <div className={viewMode === "grid" ? "" : "space-y-1"}>
                          <div className="flex gap-1 items-center text-xs text-gray-400 uppercase mb-1">
                            {/* Clickable Category Badge */}
                            <button
                              onClick={() => handleFilterChange(() => setSelectedCategory(product.category))}
                              className="text-green-600 hover:underline font-medium"
                            >
                              {product.category}
                            </button>
                            <span>• {product.condition}</span>
                          </div>
                          <h2 className="font-semibold text-gray-800 text-base line-clamp-1 mb-2">{product.name}</h2>
                          <p className="text-xl font-bold text-green-600">৳{product.price.toLocaleString()}</p>
                        </div>

                        {/* Details navigation block */}
                        <div className={viewMode === "grid" ? "w-full" : "w-full sm:w-auto shrink-0"}>
                          <div>
                            <Link
                              href={`/products/${product.id}`}
                              className={`block text-center bg-gray-100 hover:bg-green-600 hover:text-white text-gray-700 text-sm font-medium py-2 px-4 rounded transition-colors ${viewMode === "grid" ? "mt-4 w-full" : "w-full sm:w-40"
                                }`}
                            >
                              Product Details
                            </Link>
                          </div>

                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Pagination Controls */}
                {totalPages > 1 && (
                  <div className="flex justify-center items-center gap-2 mt-8">
                    <button
                      onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                      disabled={currentPage === 1}
                      className="px-3 py-1 rounded border border-gray-300 text-sm disabled:opacity-40 disabled:cursor-not-allowed bg-white"
                    >
                      Prev
                    </button>

                    {[...Array(totalPages)].map((_, index) => (
                      <button
                        key={index + 1}
                        onClick={() => setCurrentPage(index + 1)}
                        className={`px-3 py-1 rounded border text-sm ${currentPage === index + 1
                            ? 'bg-green-600 text-white border-green-600'
                            : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
                          }`}
                      >
                        {index + 1}
                      </button>
                    ))}

                    <button
                      onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                      disabled={currentPage === totalPages}
                      className="px-3 py-1 rounded border border-gray-300 text-sm disabled:opacity-40 disabled:cursor-not-allowed bg-white"
                    >
                      Next
                    </button>
                  </div>
                )}
              </>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}