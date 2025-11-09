// src/components/AnimatedHero.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function AnimatedHero() {
  return (
    <section className="relative mb-12">
      <div className="hero-blob" aria-hidden="true" />

      <div className="container text-center relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-slate-900 dark:text-white"
        >
          Student Planner — organise tasks, notes & expenses
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.08, duration: 0.6 }}
          className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-gray-600 dark:text-gray-300"
        >
          A lightweight cross-platform app built with Expo — manage tasks, take rich text notes,
          track spending and view simple analytics — made for students.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.18, duration: 0.6 }}
          className="mt-6 flex items-center justify-center gap-3"
        >
          <Link href="#download" className="inline-block px-5 py-3 rounded-xl bg-indigo-600 text-white font-semibold shadow hover:opacity-95">
            Download APK
          </Link>

          <a
            href="https://expo.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200 bg-white/80 dark:bg-transparent"
          >
            Open on Expo
          </a>
        </motion.div>
      </div>
    </section>
  );
}
