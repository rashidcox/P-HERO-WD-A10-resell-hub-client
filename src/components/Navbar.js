import Link from 'next/link';
import { FiSearch, FiHeart, FiShoppingCart, FiUser } from 'react-icons/fi';

export default function Navbar() {
  return (
    <nav className="border-b border-gray-100 bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-1 text-2xl font-bold text-emerald-600">
          <span className="text-emerald-500">🛍️</span> ReSell <span className="text-gray-800">Hub</span>
        </Link>

        {/* Search Bar */}
        <div className="flex-1 max-w-xl relative flex items-center">
          <input 
            type="text" 
            placeholder="Search for products, categories or brands..." 
            className="w-full pl-4 pr-10 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-emerald-500 text-sm"
          />
          <FiSearch className="absolute right-3 text-gray-400 cursor-pointer" size={18} />
        </div>

        {/* Navigation Items */}
        <div className="flex items-center gap-6 text-gray-600 text-sm font-medium">
          <Link href="/products" className="hover:text-emerald-600">Products</Link>
          <Link href="/about" className="hover:text-emerald-600">About Us</Link>
          <Link href="/contact" className="hover:text-emerald-600">Contact</Link>
          
          <div className="flex items-center gap-4 ml-4 border-l pl-4 border-gray-200">
            <FiHeart className="cursor-pointer hover:text-emerald-600" size={20} />
            <FiShoppingCart className="cursor-pointer hover:text-emerald-600" size={20} />
            <Link href="/login" className="bg-emerald-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-emerald-700 transition">
              Login / Register
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}