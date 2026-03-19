// src/components/FeaturesSection.tsx
"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";

const features = [
  {
    icon: "📗",
    title: "Multiple Expense Categories",
    description: "Track expenses across Food, Transport, College, Books, Snacks, and Other with flexible categorization.",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: "⚡",
    title: "Seamlessly Manage Everything",
    description: "Easy to organize and track all your tasks, notes, and expenses in one unified place.",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: "📊",
    title: "Monitor Your Spending with Ease",
    description: "Detailed analytics with interactive charts give you clear insights into your financial habits.",
    gradient: "from-orange-500 to-red-500"
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  }
};

export default function FeaturesSection() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section ref={ref} className="py-20 md:py-32 bg-gradient-to-b from-transparent via-slate-50/50 to-transparent dark:via-slate-900/20">
      <div className="container">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.p
            variants={itemVariants}
            className="text-sm md:text-base font-semibold text-indigo-600 dark:text-indigo-400 mb-4 tracking-wide uppercase"
          >
            WHY US?
          </motion.p>
          
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white mb-6"
          >
            Choose us
            <br />
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              is the right way!
            </span>
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Transform Your Student Life into a Smarter, More Efficient Experience
            with Our Productivity Solutions
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group"
            >
              <div className="relative h-full bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/50 dark:border-slate-700/50 shadow-lg hover:shadow-2xl transition-all duration-300">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-3xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  {feature.description}
                </p>

                <a
                  href="https://github.com/Mortarion002/student-productivity-app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-indigo-600 dark:text-indigo-400 font-semibold group-hover:gap-2 transition-all duration-300"
                >
                  learn more
                  <svg className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>

                {/* Decorative element */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl -z-10 group-hover:scale-150 transition-transform duration-500"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}