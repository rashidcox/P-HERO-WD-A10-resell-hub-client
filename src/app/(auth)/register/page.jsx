"use client";

import { useState } from "react";
import Link from "next/link";
import {
    FaUser,
    FaEnvelope,
    FaLock,
    FaEye,
    FaEyeSlash,
} from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { authClient } from "@/lib/auth-client";
import { createAuthClient } from "better-auth/react";
import { role } from "better-auth/client";
import { redirect } from "next/navigation";

export default function RegisterPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const imageFile = formData.get("image");

        // Upload image to imgBB
        const imageData = new FormData();
        imageData.append("image", imageFile);

        const uploadRes = await fetch(
            `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API_KEY}`,
            {
                method: "POST",
                body: imageData,
            }
        );

        const uploadResult = await uploadRes.json();

        if (!uploadResult.success) {
            alert("Image upload failed");
            return;
        }

        const imageUrl = uploadResult.data.url;

        const user = Object.fromEntries(formData.entries());

        if (user.password !== user.confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        const { data, error } = await authClient.signUp.email({
            name: user.name,
            email: user.email,
            password: user.password,
            role: user.role,
            image: imageUrl, // imgBB URL
        });

        if (error) {
            alert("error in here");
            return;
        }
        if(data){
            alert("Registration successful");
            redirect("/login");
        }
    };

    const authClient = createAuthClient();
    const handleGoogleRegister = async () => {
        const data = await authClient.signUp.social({
            provider: "google",
        })
    }



    return (
        <div className="min-h-screen bg-gray-400 flex items-center justify-center px-4 py-10">
            <div className="w-full max-w-md bg-gray-100 rounded-3xl shadow-lg p-8">

                {/* Header */}
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-gray-900">
                        Create Account
                    </h1>

                    <p className="mt-2 text-gray-500">
                        Join ReSell Hub and start buying & selling today
                    </p>
                </div>

                {/* Form */}
                <form className="mt-8 space-y-5" onSubmit={handleSubmit} method="POST">

                    {/* Name */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Full Name
                        </label>

                        <div className="relative">
                            <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                            <input
                                name="name"
                                type="text"
                                required
                                placeholder="Enter your full name"
                                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            />
                        </div>
                    </div>


                    {/* Email */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Email Address
                        </label>

                        <div className="relative">
                            <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                            <input
                                name="email"
                                type="email"
                                required
                                placeholder="Enter your email"
                                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            />
                        </div>
                    </div>

                    {/* Image */}
                    <div>

                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Profile Image
                        </label>

                        <input
                            type="file"
                            required
                            name="image"
                            accept="image/*"
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        />
                    </div>

                    {/* Role Selection */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-3">
                            Select Role
                        </label>

                        <div className="grid grid-cols-2 gap-4">
                            <label className="cursor-pointer">
                                <input
                                    type="radio"
                                    name="role"
                                    value="buyer"
                                    defaultChecked
                                    className="peer hidden"
                                />

                                <div className="border-2 border-gray-200 rounded-xl p-4 text-center transition peer-checked:border-blue-600 peer-checked:bg-blue-50">
                                    <div className="text-2xl mb-2">🛒</div>
                                    <h3 className="font-semibold text-gray-900">
                                        Buyer
                                    </h3>
                                    <p className="text-xs text-gray-500 mt-1">
                                        Purchase products
                                    </p>
                                </div>
                            </label>

                            <label className="cursor-pointer">
                                <input
                                    type="radio"
                                    name="role"
                                    value="seller"
                                    className="peer hidden"
                                />

                                <div className="border-2 border-gray-200 rounded-xl p-4 text-center transition peer-checked:border-green-600 peer-checked:bg-green-50">
                                    <div className="text-2xl mb-2">🏪</div>
                                    <h3 className="font-semibold text-gray-900">
                                        Seller
                                    </h3>
                                    <p className="text-xs text-gray-500 mt-1">
                                        Sell your products
                                    </p>
                                </div>
                            </label>
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
                                type={showPassword ? "text" : "password"}
                                required
                                placeholder="Create password"
                                className="w-full pl-12 pr-12 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            />

                            <button
                                type="button"
                                onClick={() =>
                                    setShowPassword(!showPassword)
                                }
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
                            >
                                {showPassword ? (
                                    <FaEyeSlash />
                                ) : (
                                    <FaEye />
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Confirm Password */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Confirm Password
                        </label>

                        <div className="relative">
                            <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                            <input
                                name="confirmPassword"
                                type={
                                    showConfirmPassword
                                        ? "text"
                                        : "password"
                                }
                                required
                                placeholder="Confirm password"
                                className="w-full pl-12 pr-12 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            />

                            <button

                                type="button"
                                onClick={() =>
                                    setShowConfirmPassword(
                                        !showConfirmPassword
                                    )
                                }
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
                            >
                                {showConfirmPassword ? (
                                    <FaEyeSlash />
                                ) : (
                                    <FaEye />
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Terms */}
                    <label className="flex items-start gap-2 text-sm text-gray-600">
                        <input type="checkbox" required className="mt-1" />

                        <span>
                            I agree to the{" "}
                            <Link
                                href="/terms"
                                className="text-blue-600 font-medium"
                            >
                                Terms & Conditions
                            </Link>
                        </span>
                    </label>

                    {/* Register Button */}
                    <button
                        type="submit"
                        className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition"
                    >
                        Create Account
                    </button>

                    {/* Divider */}
                    <div className="relative py-2">
                        <div className="border-t"></div>

                        <span className="absolute left-1/2 top-2 -translate-x-1/2 bg-white px-3 text-sm text-gray-500">
                            OR
                        </span>
                    </div>

                    {/* Google Register */}
                    <button
                        type="button"
                        onClick={() => handleGoogleRegister()}
                        className="cursor-pointer w-full py-3 border border-gray-300 rounded-xl flex items-center justify-center gap-3 hover:bg-gray-50 transition"
                    >
                        <FcGoogle size={24} />
                        Continue with Google
                    </button>

                    {/* Login Link */}
                    <p className="text-center text-gray-600">
                        Already have an account?{" "}
                        <Link
                            href="/login"
                            className="text-blue-600 font-semibold"
                        >
                            Login
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
}