// src/components/BrandSection.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const brands = [
  { name: "React Native", icon: "⚛️" },
  { name: "Expo", icon: "📱" },
  { name: "TypeScript", icon: "🔷" },
  { name: "Zustand", icon: "🐻" },
  { name: "AsyncStorage", icon: "💾" },
  { name: "Chart Kit", icon: "📊" }
];

export default function BrandSection() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section ref={ref} className="py-16 border-y border-gray-200/50 dark:border-slate-700/50">
      <div className="container">
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-sm md:text-base text-gray-500 dark:text-gray-400 mb-8 uppercase tracking-wider font-semibold"
        >
          Built with top technologies
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center"
        >
          {brands.map((brand, index) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
              className="flex flex-col items-center gap-2 group cursor-default"
            >
              <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                {brand.icon}
              </div>
              <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                {brand.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}