import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://buildwithhakeem.dev";
  const now = new Date();

  return [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/work`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/experience`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/now`, lastModified: now, changeFrequency: "weekly", priority: 0.6 },
    { url: `${base}/case/affora`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/case/privachat`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/case/lynkboard`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/case/maccleaner`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/case/tradeslynk`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/case/neurosiv`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/case/arvora`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/case/costos`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/affora/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.5 },
    { url: `${base}/intent-launcher/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.5 },
    { url: `${base}/intent-launcher/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.5 },
    { url: `${base}/intent-launcher/delete-data`, lastModified: now, changeFrequency: "yearly", priority: 0.5 },
  ];
}
