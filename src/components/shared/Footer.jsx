import Link from 'next/link';
// Lucide icons from react-icons
import {
  LuShoppingBag,
  LuMail,
  LuPhone,
  LuMapPin,
  LuArrowRight,
} from 'react-icons/lu';
// Social brand icons from their respective packs
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6'; // Updated to the modern X/Twitter icon
import { IoLogoYoutube } from 'react-icons/io5';

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'All Products', href: '/products' },
  { label: 'Categories', href: '/categories' },
  { label: 'About Us', href: '/about' },
  { label: 'Contact Us', href: '/contact' },
];

const accountLinks = [
  { label: 'Login', href: '/login' },
  { label: 'Register', href: '/register' },
  { label: 'Buyer Dashboard', href: '/dashboard/buyer' },
  { label: 'Seller Dashboard', href: '/dashboard/seller' },
  { label: 'Profile Settings', href: '/dashboard/profile' },
];

const categories = [
  { label: 'Electronics', href: '/categories?cat=electronics' },
  { label: 'Mobile Phones', href: '/categories?cat=mobiles' },
  { label: 'Furniture', href: '/categories?cat=furniture' },
  { label: 'Vehicles', href: '/categories?cat=vehicles' },
  { label: 'Fashion', href: '/categories?cat=fashion' },
];

const socialLinks = [
  { icon: <FaFacebookF size={18} />, href: 'https://facebook.com', label: 'Facebook', color: 'hover:bg-blue-600' },
  { icon: <FaXTwitter size={18} />, href: 'https://twitter.com', label: 'Twitter', color: 'hover:bg-neutral-800' },
  { icon: <FaInstagram size={18} />, href: 'https://instagram.com', label: 'Instagram', color: 'hover:bg-pink-500' },
  { icon: <IoLogoYoutube size={18} />, href: 'https://youtube.com', label: 'YouTube', color: 'hover:bg-red-600' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">

      {/* ── Top CTA Banner ── */}
      <div className="bg-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-white text-lg font-bold">Ready to sell something?</h3>
            <p className="text-teal-100 text-sm mt-0.5">
              List your first product in under 2 minutes. It&apos;s free.
            </p>
          </div>
          <Link
            href="/register"
            className="shrink-0 flex items-center gap-2 bg-white text-teal-700 font-semibold text-sm px-5 py-2.5 rounded-lg hover:bg-teal-50 transition-colors"
          >
            Start Selling <LuArrowRight size={15} />
          </Link>
        </div>
      </div>

      {/* ── Main Footer Content ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Col 1 – Brand Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-teal-500 flex items-center justify-center">
                <LuShoppingBag size={17} className="text-white" />
              </div>
              <span className="text-xl font-bold text-white">
                ReSell<span className="text-teal-400">Hub</span>
              </span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed mb-5">
              Bangladesh&apos;s trusted marketplace for pre-owned products. Buy and sell safely,
              sustainably, and affordably.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-2">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className={`w-8 h-8 rounded-lg bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white transition-colors ${s.color}`}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 – Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-teal-400 transition-colors flex items-center gap-1.5 group"
                  >
                    <LuArrowRight
                      size={12}
                      className="opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all"
                    />
                    {link.label}
                  </Link>
                </li >
              ))}
            </ul>
          </div>

          {/* Col 3 – Categories */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-4">
              Categories
            </h4>
            <ul className="space-y-2.5">
              {categories.map((cat) => (
                <li key={cat.href}>
                  <Link
                    href={cat.href}
                    className="text-sm text-gray-400 hover:text-teal-400 transition-colors flex items-center gap-1.5 group"
                  >
                    <LuArrowRight
                      size={12}
                      className="opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all"
                    />
                    {cat.label}
                  </Link>
                </li >
              ))}
            </ul>
          </div>

          {/* Col 4 – Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-4">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <LuMapPin size={15} className="text-teal-400 mt-0.5 shrink-0" />
                <span className="text-sm text-gray-400">
                  123 Agrabad, Chattogram, Bangladesh
                </span>
              </li>
              <li className="flex items-center gap-3">
                <LuPhone size={15} className="text-teal-400 shrink-0" />
                <a
                  href="tel:+8801712345678"
                  className="text-sm text-gray-400 hover:text-teal-400 transition-colors"
                >
                  +880 17123 45678
                </a>
              </li>
              <li className="flex items-center gap-3">
                <LuMail size={15} className="text-teal-400 shrink-0" />
                <a
                  href="mailto:support@resellhub.com"
                  className="text-sm text-gray-400 hover:text-teal-400 transition-colors"
                >
                  support@resellhub.com
                </a>
              </li>
            </ul>

            {/* Trust badges */}
            <div className="mt-5 flex flex-wrap gap-2">
              <span className="text-xs bg-gray-800 text-gray-400 px-2.5 py-1 rounded-full border border-gray-700">
                🔒 Secure Payments
              </span>
              <span className="text-xs bg-gray-800 text-gray-400 px-2.5 py-1 rounded-full border border-gray-700">
                ✅ Verified Sellers
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500 text-center sm:text-left">
            © {currentYear} ReSellHub. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="text-xs text-gray-500 hover:text-teal-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-gray-500 hover:text-teal-400 transition-colors">
              Terms of Service
            </Link>
            <Link href="/faq" className="text-xs text-gray-500 hover:text-teal-400 transition-colors">
              FAQ
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}