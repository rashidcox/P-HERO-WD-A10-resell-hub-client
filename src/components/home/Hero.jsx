// components/home/Hero.jsx
'use client';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-teal-600 to-blue-700 text-white py-24 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold mb-4"
        >
          Buy & Sell Pre-Owned Products
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-xl mb-8 text-teal-100"
        >
          Safe, sustainable, and affordable second-hand marketplace
        </motion.p>
        <motion.a
          href="/products"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="bg-white text-teal-700 font-semibold px-8 py-3 rounded-full text-lg inline-block"
        >
          Browse Products
        </motion.a>
      </div>
    </section>
  );
}