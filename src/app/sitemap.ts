import type { MetadataRoute } from "next";
import { projects } from "@/data/portfolio";
import { getSiteUrl } from "@/lib/metadata";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  if (!base) return [];
  return ["/", ...projects.map((project) => `/work/${project.slug}`)].map(
    (path) => ({
      url: new URL(path, base).href,
      changeFrequency: "monthly",
      priority: path === "/" ? 1 : 0.8,
    }),
  );
}
