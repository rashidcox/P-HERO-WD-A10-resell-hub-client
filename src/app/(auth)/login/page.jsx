"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const loger = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signIn.email({
      email: loger.email,
      password: loger.password,
    });

    if (error) {
      alert("error");
      return;
    }
    if(!error){
      alert("Login successful");
      redirect("/");
    }


  }



  return (
    <div className="min-h-screen bg-gray-400 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md bg-gray-100 rounded-3xl shadow-lg p-8">

        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">
            Welcome Back
          </h1>

          <p className="mt-2 text-gray-500">
            Sign in to your ReSell Hub account
          </p>
        </div>

        {/* Form */}
        <form className="mt-8 space-y-5" onSubmit={handleSubmit} method="POST">

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>

            <div className="relative">
              <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

              <input
                name="email"
                required
                type="email"
                placeholder="Enter your email"
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>

            <div className="relative">
              <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

              <input
                name="password"
                required
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="w-full pl-12 pr-12 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
              >
                {showPassword ? (
                  <FaEyeSlash size={18} />
                ) : (
                  <FaEye size={18} />
                )}
              </button>
            </div>
          </div>

          {/* Remember + Forgot */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" />
              Remember Me
            </label>

            <Link
              href="/forgot-password"
              className="text-blue-600 hover:text-blue-700"
            >
              Forgot Password?
            </Link>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition"
          >
            Login
          </button>

          {/* Divider */}
          <div className="relative py-2">
            <div className="border-t"></div>

            <span className="absolute left-1/2 top-2 -translate-x-1/2 bg-white px-3 text-sm text-gray-500">
              OR
            </span>
          </div>

          {/* Google Login */}
          <button
            type="button"
            className="w-full py-3 border border-gray-300 rounded-xl flex items-center justify-center gap-3 hover:bg-gray-50 transition"
          >
            <FcGoogle size={24} />
            Continue with Google
          </button>

          {/* Register */}
          <p className="text-center text-gray-600">
            Don't have an account?{" "}
            <Link
              href="/register"
              className="text-blue-600 font-semibold hover:text-blue-700"
            >
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}