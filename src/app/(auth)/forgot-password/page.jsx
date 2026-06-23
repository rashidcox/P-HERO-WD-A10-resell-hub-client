"use client";

import Link from "next/link";
import { FaEnvelope } from "react-icons/fa";

export default function ForgotPasswordPage() {
  return (
    <div className="min-h-screen bg-gray-400 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-gray-100 rounded-3xl shadow-lg p-8">

        {/* Header */}
        <div className="text-center">
          <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center">
            <FaEnvelope className="text-blue-600 text-2xl" />
          </div>

          <h1 className="mt-5 text-3xl font-bold text-gray-900">
            Forgot Password?
          </h1>

          <p className="mt-2 text-gray-500">
            Enter your email address and we'll send you a password reset link.
          </p>
        </div>

        {/* Form */}
        <form className="mt-8 space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>

            <div className="relative">
              <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition"
          >
            Send Reset Link
          </button>
        </form>

        {/* Back to Login */}
        <div className="mt-6 text-center">
          <Link
            href="/login"
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            ← Back to Login
          </Link>
        </div>

      </div>
    </div>
  );
}