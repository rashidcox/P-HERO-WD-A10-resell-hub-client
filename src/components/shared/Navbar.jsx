"use client";
import { useState } from "react";
import Link from "next/link";
import { LuShoppingBag } from "react-icons/lu";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "All Products", href: "/products" },
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <nav className="bg-gray-900 text-gray-300 shadow-md w-full z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-teal-500 flex items-center justify-center">
              <LuShoppingBag size={17} className="text-white" />
            </div>
            <span className="text-xl font-bold text-white">
              ReSell<span className="text-teal-400">Hub</span>
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-6 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-200 hover:text-blue-600 transition-colors duration-200 text-sm font-medium"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop Auth Buttons */}

          <div className="hidden md:flex items-center space-x-4">
          {/* Auth Buttons */}
            {
              user ? <>
                <Link href={'/profile'}>
                  <div className="w-10 h-10 rounded-full border-2 border-teal-400 overflow-hidden">
                    <Image className="w-full h-full object-cover" src={user?.image} alt="John Doe" width={40} height={40} />
                  </div>
                </Link>
                <button className='bg-red-500 text-white px-4 py-2 cursor-pointer rounded-2xl' onClick={() => authClient.signOut()}>Logout</button>
              </> : <>
                <Link href={'/login'}>Login</Link>
              </>
            }
            
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-gray-600 hover:text-blue-600 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pt-2 pb-4 space-y-1 shadow-lg">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="block text-gray-600 hover:text-blue-600 hover:bg-gray-50 px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 border-t border-gray-200 flex flex-col space-y-2 px-3">
           {
              user ? <div>
                <Link href={'/profile'} className="rounded-2xl text-center bg-teal-400 hover:bg-teal-500 font-bold text-white px-4 py-3">Profile</Link>
                <button className='bg-red-600 text-white px-4 py-2 cursor-pointer rounded-2xl' onClick={() => authClient.signOut()}>Logout</button>
              </div> : <>
                <Link href={'/login'} className="bg-teal-400 hover:bg-teal-500 font-bold px-4 py-3 rounded-2xl">Login</Link>
              </>
            }
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
