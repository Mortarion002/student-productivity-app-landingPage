// src/components/DownloadSection.tsx
// Server component: reads data/extensions.json to obtain latest app info
import React from "react";
import fs from "fs";
import path from "path";

type Ext = {
  title: string;
  slug: string;
  shortDesc?: string;
  screenshots?: string[];
  poster?: string;
  githubUrl?: string;
  downloadUrl?: string;
  expoUrl?: string;
  checksum?: string;
};

async function getApp(): Promise<Ext | null> {
  try {
    const dataPath = path.join(process.cwd(), "data", "extensions.json");
    if (!fs.existsSync(dataPath)) return null;
    const raw = fs.readFileSync(dataPath, "utf-8");
    const arr = JSON.parse(raw) as Ext[];
    if (!Array.isArray(arr) || arr.length === 0) return null;
    return arr[0];
  } catch (err) {
    console.error("Failed to read extensions.json", err);
    return null;
  }
}

export default async function DownloadSection() {
  const app = await getApp();

  if (!app) {
    return (
      <section className="container py-12">
        <div className="text-center text-gray-600">Download information not available.</div>
      </section>
    );
  }

  const poster = app.poster || "/videos/student-how-to-download-poster.jpg";
  const downloadUrl = app.downloadUrl || app.githubUrl || "#";
  const expoUrl = app.expoUrl || null;
  const checksum = app.checksum || null;

  return (
    <section id="download" className="relative mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900 dark:text-gray-100">Get the app</h2>
          <p className="mx-auto max-w-2xl text-gray-600 dark:text-gray-300">
            Download the APK or open the Expo artifact (preview). If you need help, open our GitHub issues.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-2">
            <div className="card rounded-2xl overflow-hidden shadow-md">
              <img src={poster} alt={`${app.title} poster`} className="w-full h-auto object-cover" />
            </div>

            <div className="mt-6 flex flex-wrap gap-3 items-center">
              <a
                href={downloadUrl}
                className="inline-flex items-center px-5 py-3 bg-indigo-600 text-white rounded-lg font-semibold shadow hover:opacity-95"
                rel="noopener noreferrer"
              >
                Download APK (GitHub)
              </a>

              {expoUrl && (
                <a
                  href={expoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-3 border rounded-lg"
                >
                  Open in Expo
                </a>
              )}

              <a
                href="https://github.com/EternalKnight002/student-productivity-app/issues"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-3 rounded-lg text-sm text-gray-600"
              >
                Report issue
              </a>
            </div>

            <div className="mt-6 bg-white dark:bg-[#071025] p-4 rounded-lg border">
              <strong>Safety & checksum</strong>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                Verify the file after download using the SHA256 checksum if provided.
              </p>
              <div className="mt-2 font-mono text-xs break-all">
                {checksum ? checksum : "Checksum not provided"}
              </div>
            </div>
          </div>

          <aside className="md:col-span-1">
            <div className="card p-6 rounded-2xl">
              <h3 className="text-lg font-semibold mb-3">Quick install (Android)</h3>

              <ol className="howto-list mt-2 space-y-3 text-sm">
                <li className="flex gap-3 items-start">
                  <span className="step-num">1</span>
                  <span className="text-gray-700 dark:text-gray-300">Download the APK file from the GitHub button above.</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="step-num">2</span>
                  <span className="text-gray-700 dark:text-gray-300">Open the file manager and tap the APK to begin install.</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="step-num">3</span>
                  <span className="text-gray-700 dark:text-gray-300">If prompted, allow install from this source in system settings.</span>
                </li>
              </ol>

              <p className="text-xs text-gray-500 mt-4">
                Note: Android versions differ — if you’re unsure, open the GitHub repo for step-by-step help.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
