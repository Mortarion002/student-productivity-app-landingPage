// src/app/layout.tsx
import "./globals.css";
import React from "react";
import Link from "next/link";
import ThemeToggle from "../components/ThemeToggle";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { ThemeProvider } from "next-themes";

import fs from "fs";
import path from "path";

export const metadata = {
  title: "Student Planner — Student Productivity App",
  description:
    "Student Planner — manage tasks, notes, expenses and view simple analytics. Built with Expo and React Native.",
  metadataBase: new URL("http://localhost:3000"),
  openGraph: {
    images: ["/videos/student-how-to-download-poster.jpg"],
  },
  authors: [{ name: "Aman Kumar", url: "https://github.com/Mortarion002" }],
};

async function getExtensionsCount(): Promise<number> {
  try {
    const file = path.join(process.cwd(), "data", "extensions.json");
    if (!fs.existsSync(file)) return 0;
    const raw = fs.readFileSync(file, "utf-8");
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) return parsed.length;
    return 0;
  } catch (err) {
    console.error("Error reading extensions.json:", err);
    return 0;
  }
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const count = await getExtensionsCount();

  return (
    <html lang="en">
      <head />
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <header className="py-3 backdrop-blur-sm">
            <div className="container flex items-center justify-between">
              <Link href="/" className="flex items-center gap-3">
                <div className="relative h-12 w-12 rounded-full overflow-hidden shadow-md border border-white/20">
                    <img
                      src="/splash.png"
                      alt="Student Planner Logo"
                      className="w-full h-full object-cover"
                    />
                  </div>


                <div>
                  <h2 className="text-base md:text-lg font-semibold tracking-tight text-slate-900 dark:text-white">
                    Student Planner
                  </h2>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                    Tasks • Notes • Expenses
                  </p>
                </div>
              </Link>

              <div className="flex items-center gap-4">
                <ThemeToggle />
              </div>
            </div>
          </header>

          <main>{children}</main>

          <footer className="site-footer py-20 mt-12">
            <div className="container mx-auto px-6">
              <div className="site-footer__inner">
                <h2 className="footer-heading">
                  Found a bug or have feedback?
                </h2>

                <p className="footer-subtext mt-3">
                  Open an issue on GitHub or email me — your feedback helps improve the app.
                </p>

                <a
                  href="https://github.com/Mortarion002/student-productivity-app/issues"
                  role="button"
                  aria-describedby="footer-contact-desc"
                  className="footer-cta mt-6 inline-block shimmer-hover"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Report issue
                </a>

                <div className="footer-social mt-8" aria-hidden="false">
                  <a
                    href="https://github.com/Mortarion002"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-social__link"
                    aria-label="GitHub"
                  >
                    <FaGithub />
                  </a>

                  <a
                    href="https://x.com/CloudKnight002"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-social__link"
                    aria-label="X (Twitter)"
                  >
                    <FaTwitter />
                  </a>

                  <a
                    href="https://linkedin.com/in/aman-kumar-537a73296"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-social__link"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin />
                  </a>
                </div>

                <p id="footer-contact-desc" className="footer-note mt-10">
                  © {new Date().getFullYear()} — Student Planner
                </p>
              </div>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
