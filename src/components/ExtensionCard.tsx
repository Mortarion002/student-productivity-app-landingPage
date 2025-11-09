// src/components/ExtensionCard.tsx
"use client";

import React from "react";
import { FaGithub, FaDownload } from "react-icons/fa";

type Ext = {
  title: string;
  slug: string;
  shortDesc?: string;
  longDesc?: string;
  screenshots?: string[];
  poster?: string;
  githubUrl?: string;
  downloadUrl?: string;
  expoUrl?: string;
  tags?: string[];
};

export default function ExtensionCard({ ext }: { ext: Ext }) {
  const shots = ext.screenshots && ext.screenshots.length > 0 ? ext.screenshots : [ext.poster || "/screenshots/placeholder.jpg"];
  const [activeIndex, setActiveIndex] = React.useState(0);
  const main = shots[activeIndex] ?? shots[0];

  const onImgError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    (e.target as HTMLImageElement).src = "/screenshots/placeholder.jpg";
  };

  return (
    <section className="col-span-full w-full">
      <div className="card rounded-2xl overflow-hidden shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {/* LEFT: big visual */}
          <div className="md:col-span-2 bg-black/5 dark:bg-black/20">
            <div className="w-full h-[420px] md:h-[480px] relative">
              <img
                src={main}
                alt={`${ext.title} screenshot`}
                onError={onImgError}
                className="w-full h-full object-cover object-center block"
                loading="lazy"
                draggable={false}
              />

              {/* overlay for title (bottom-left) */}
              <div className="absolute left-4 bottom-4 z-20 p-3 rounded-lg bg-gradient-to-t from-black/60 to-transparent">
                <h3 className="text-white text-xl font-bold leading-tight">{ext.title}</h3>
                {ext.shortDesc && <p className="text-white/90 text-sm mt-1 max-w-xl hidden md:block">{ext.shortDesc}</p>}
              </div>
            </div>

            {/* thumbnails */}
            {shots.length > 1 && (
              <div className="flex gap-3 p-4 overflow-x-auto items-center">
                {shots.map((s, i) => (
                  <button
                    key={s + i}
                    onClick={() => setActiveIndex(i)}
                    className={`rounded-lg overflow-hidden border-2 ${i === activeIndex ? "border-indigo-500" : "border-transparent"} focus-ring`}
                    aria-label={`View screenshot ${i + 1}`}
                    style={{ minWidth: 92 }}
                  >
                    <img
                      src={s}
                      alt={`screenshot ${i + 1}`}
                      onError={onImgError}
                      className="w-24 h-24 object-cover object-center block"
                      loading="lazy"
                      draggable={false}
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* RIGHT: content & CTAs */}
          <aside className="p-6 md:col-span-1 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-extrabold mb-2 md:hidden">{ext.title}</h3>
              {ext.shortDesc && <p className="text-gray-700 dark:text-gray-300 mb-4">{ext.shortDesc}</p>}

              {ext.tags && ext.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {ext.tags.map((t) => (
                    <span key={t} className="text-xs px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 dark:bg-white/6 dark:text-indigo-200">
                      {t}
                    </span>
                  ))}
                </div>
              )}

              {ext.longDesc && (
                <div className="prose max-w-none text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-5">
                  {ext.longDesc}
                </div>
              )}
            </div>

            <div className="mt-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={ext.downloadUrl || ext.githubUrl || "#"}
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 bg-indigo-600 text-white rounded-lg font-semibold shadow hover:opacity-95 flex-1"
                  rel="noopener noreferrer"
                >
                  <FaDownload className="h-4 w-4" />
                  Download APK
                </a>

                {ext.expoUrl && (
                  <a
                    href={ext.expoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-3 border rounded-lg text-sm flex-1"
                  >
                    Open in Expo
                  </a>
                )}
              </div>

              <div className="mt-3 flex items-center gap-3">
                <a
                  href={ext.githubUrl || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-icon p-2 inline-flex items-center justify-center"
                  aria-label="Open on GitHub"
                >
                  <FaGithub />
                </a>

                <a
                  href="#download"
                  className="text-sm text-gray-600 dark:text-gray-300 ml-2 underline"
                >
                  Download & Install info
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
