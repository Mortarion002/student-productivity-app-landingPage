// src/app/page.tsx
import React from "react";
import fs from "fs";
import path from "path";
import ExtensionCard from "../components/ExtensionCard";
import AnimatedHero from "../components/AnimatedHero";
import DownloadSection from "../components/DownloadSection";

/**
 * Main homepage
 */

type Ext = {
  title: string;
  slug: string;
  shortDesc: string;
  longDesc?: string;
  tags: string[];
  screenshots?: string[];
  githubUrl?: string;
  downloadUrl?: string;
  poster?: string;
  expoUrl?: string;
};

async function getExtensions(): Promise<Ext[]> {
  const dataPath = path.join(process.cwd(), "data", "extensions.json");
  try {
    if (!fs.existsSync(dataPath)) return [];
    const raw = fs.readFileSync(dataPath, "utf-8");
    return JSON.parse(raw) as Ext[];
  } catch (err) {
    console.error("Error reading extensions.json:", err);
    return [];
  }
}

export default async function HomePage() {
  const extensions = await getExtensions();
  const app = extensions[0];

  return (
    <>
      <section className="container py-12">
        {/* Animated hero (creative headline + tagline) */}
        <AnimatedHero />

        {/* Single centered promo card (keeps layout focused) */}
        {app ? (
          <div className="max-w-[1100px] mx-auto">
            <ExtensionCard ext={app} />
          </div>
        ) : (
          <div className="col-span-full text-center py-12 text-gray-600">
            No app info found — ensure <code>data/extensions.json</code> exists.
          </div>
        )}
      </section>

      {/* Download Section */}
      <DownloadSection />
    </>
  );
}
