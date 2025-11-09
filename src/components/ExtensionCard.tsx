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
  const shots =
    ext.screenshots && ext.screenshots.length > 0
      ? ext.screenshots
      : [ext.poster || "/screenshots/placeholder.jpg"];

  const [activeIndex, setActiveIndex] = React.useState(0);
  const main = shots[activeIndex] ?? shots[0];

  const onImgError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    (e.target as HTMLImageElement).src = "/screenshots/placeholder.jpg";
  };

  return (
    <section className="col-span-full w-full">
      <div className="card rounded-2xl overflow-hidden shadow-lg p-6">
        <div className="promo-grid">
          {/* Left visual area */}
          <div>
            <div style={{ position: "relative" }}>
              <img
                src={main}
                alt={`${ext.title} screenshot`}
                onError={onImgError}
                className="promo-visual"
                loading="lazy"
                draggable={false}
              />

              <div style={{ position: "absolute", left: 20, bottom: 20 }} className="promo-overlay">
                <h3 className="text-white text-lg font-bold leading-tight">{ext.title}</h3>
                {ext.shortDesc && <p className="text-white/90 text-sm mt-1 hidden md:block">{ext.shortDesc}</p>}
              </div>
            </div>

            {shots.length > 1 && (
              <div className="promo-thumbs mt-3">
                {shots.map((s, i) => (
                  <button
                    key={s + i}
                    onClick={() => setActiveIndex(i)}
                    aria-label={`View screenshot ${i + 1}`}
                    className={i === activeIndex ? "active" : ""}
                    style={{ minWidth: 92 }}
                  >
                    <img src={s} alt={`screenshot ${i + 1}`} onError={onImgError} className="w-24 h-24 object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right content area */}
          <aside className="promo-meta">
            <h3 className="text-2xl font-extrabold mb-2 hidden md:block">{ext.title}</h3>

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
              <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm line-clamp-6">{ext.longDesc}</p>
            )}

            <div className="promo-ctas mt-4">
              <a
                href={ext.downloadUrl || ext.githubUrl || "#"}
                className="primary inline-flex items-center justify-center gap-2 px-4 py-3 bg-indigo-600 text-white rounded-lg font-semibold shadow hover:opacity-95"
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
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 border rounded-lg text-sm"
                >
                  Open in Expo
                </a>
              )}
            </div>

            <div className="mt-4 flex items-center gap-3">
              <a
                href={ext.githubUrl || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-icon p-2 inline-flex items-center justify-center"
                aria-label="Open on GitHub"
              >
                <FaGithub />
              </a>

              <a href="#download" className="text-sm text-gray-600 dark:text-gray-300 ml-2 underline">
                Download & Install info
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
