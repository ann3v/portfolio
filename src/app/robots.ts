import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/metadata";

export default function robots(): MetadataRoute.Robots {
  const base = getSiteUrl();
  const preview = process.env.VERCEL_ENV === "preview";
  return {
    rules: {
      userAgent: "*",
      ...(preview ? { disallow: "/" } : { allow: "/" }),
    },
    ...(!preview && base
      ? { sitemap: new URL("/sitemap.xml", base).href }
      : {}),
  };
}
