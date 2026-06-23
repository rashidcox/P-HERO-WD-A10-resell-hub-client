"use client";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaUser,
} from "react-icons/fa";

import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
  };

  return (
    <div className="bg-slate-50 min-h-screen">

      {/* Hero */}
      <section className="bg-blue-600 text-white py-16 text-center">
        <h1 className="text-4xl font-bold">Contact Us</h1>
        <p className="mt-3 text-blue-100">
          We are here to help you anytime
        </p>
      </section>

      {/* Content */}
      <section className="container mx-auto px-4 py-16 grid lg:grid-cols-2 gap-10">

        {/* Contact Info */}
        <div className="space-y-6">

          <h2 className="text-3xl font-bold text-gray-900">
            Get in Touch
          </h2>

          <p className="text-gray-600">
            Have questions about buying or selling? Contact our support team.
          </p>

          <div className="space-y-4">

            <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm">
              <FaPhoneAlt className="text-blue-600 text-xl" />
              <div>
                <h4 className="font-semibold">Phone</h4>
                <p className="text-gray-500 text-sm">+880 1234 567 890</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm">
              <FaEnvelope className="text-blue-600 text-xl" />
              <div>
                <h4 className="font-semibold">Email</h4>
                <p className="text-gray-500 text-sm">support@resellhub.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm">
              <FaMapMarkerAlt className="text-blue-600 text-xl" />
              <div>
                <h4 className="font-semibold">Location</h4>
                <p className="text-gray-500 text-sm">
                  Chattogram, Bangladesh
                </p>
              </div>
            </div>

          </div>

        </div>

        {/* Form */}
        <div className="bg-white p-8 rounded-2xl shadow-md">

          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Send Message
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Name */}
            <div className="relative">
              <FaUser className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />

              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                type="text"
                placeholder="Your Name"
                className="w-full pl-10 p-3 border rounded-xl focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Email */}
            <div className="relative">
              <FaEnvelope className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />

              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                type="email"
                placeholder="Your Email"
                className="w-full pl-10 p-3 border rounded-xl focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Message */}
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows="5"
              placeholder="Your Message"
              className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-blue-500"
            ></textarea>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-medium transition"
            >
              Send Message
            </button>

          </form>
        </div>

      </section>
    </div>
  );
}