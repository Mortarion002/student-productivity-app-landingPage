// src/components/AppFeaturesSection.tsx
"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";

const appFeatures = [
  {
    icon: "✅",
    title: "Task & Planner Management",
    description: "Create and organize tasks with deadlines, course codes, and descriptions. Track your upcoming, overdue, and completed tasks all in one place."
  },
  {
    icon: "📝",
    title: "Rich Text Notes",
    description: "Capture ideas and study materials with a full-featured rich text editor. Add images, format text, and organize your notes efficiently."
  },
  {
    icon: "💰",
    title: "Expense Tracking & Analytics",
    description: "Track your daily expenses across multiple categories like Food, Transport, College, and Books. Visualize spending patterns with interactive charts and get detailed monthly overviews."
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  }
};

export default function AppFeaturesSection() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section ref={ref} className="py-20 md:py-32">
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
            CORE FEATURES
          </motion.p>
          
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white mb-6"
          >
            Everything You Need for
            <br />
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent">
              Student Success
            </span>
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Manage tasks, take notes, and track expenses - all in one powerful app designed specifically for students
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-7xl mx-auto items-center">
          {/* Left side - Features list */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
            className="space-y-8"
          >
            {appFeatures.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group"
              >
                <div className="bg-slate-900 dark:bg-slate-800 rounded-3xl p-8 hover:scale-[1.02] transition-all duration-300 border border-slate-800 dark:border-slate-700 shadow-xl">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-3xl flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                        {feature.title}
                      </h3>
                      
                      <p className="text-gray-300 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right side - App preview mockup */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="relative z-10">
              {/* Phone mockup frame */}
              <div className="relative mx-auto w-[280px] md:w-[320px] lg:w-[340px]">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-[3rem] blur-3xl"></div>
                <div className="relative bg-slate-900 rounded-[3rem] p-3 shadow-2xl border-4 border-slate-800">
                  <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-[2.5rem] overflow-hidden">
                    {/* Mock phone screen showing app features */}
                    <div className="bg-white dark:bg-slate-950 aspect-[9/19] p-6 flex flex-col gap-4">
                      {/* Header */}
                      <div className="text-center pb-4 border-b border-gray-200 dark:border-slate-800">
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white">Student Planner</h3>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Your productivity hub</p>
                      </div>

                      {/* Feature cards */}
                      <div className="space-y-3 flex-1">
                        {/* Expenses card */}
                        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-2xl p-4 border border-blue-100 dark:border-blue-800/30">
                          <div className="flex items-center gap-3 mb-2">
                            <div className="w-10 h-10 rounded-xl bg-blue-500 flex items-center justify-center text-white text-lg">
                              💰
                            </div>
                            <div>
                              <p className="font-semibold text-slate-900 dark:text-white text-sm">Expenses</p>
                              <p className="text-xs text-gray-600 dark:text-gray-400">Track spending</p>
                            </div>
                          </div>
                          <p className="text-xl font-bold text-slate-900 dark:text-white">₹380</p>
                        </div>

                        {/* Notes card */}
                        <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl p-4 border border-purple-100 dark:border-purple-800/30">
                          <div className="flex items-center gap-3 mb-2">
                            <div className="w-10 h-10 rounded-xl bg-purple-500 flex items-center justify-center text-white text-lg">
                              📝
                            </div>
                            <div>
                              <p className="font-semibold text-slate-900 dark:text-white text-sm">Notes</p>
                              <p className="text-xs text-gray-600 dark:text-gray-400">Study materials</p>
                            </div>
                          </div>
                        </div>

                        {/* Planner card */}
                        <div className="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20 rounded-2xl p-4 border border-orange-100 dark:border-orange-800/30">
                          <div className="flex items-center gap-3 mb-2">
                            <div className="w-10 h-10 rounded-xl bg-orange-500 flex items-center justify-center text-white text-lg">
                              ✅
                            </div>
                            <div>
                              <p className="font-semibold text-slate-900 dark:text-white text-sm">Planner</p>
                              <p className="text-xs text-gray-600 dark:text-gray-400">Tasks & deadlines</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Background decoration */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}