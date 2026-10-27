import type { Metadata } from "next";

type SiteEnvironment = Record<string, string | undefined>;

/** Never fabricate a public origin; Vercel provides one at deploy time. */
export function getSiteUrl(
  env: SiteEnvironment = process.env,
): URL | undefined {
  const configured = env.SITE_URL?.trim();
  const automatic =
    env.VERCEL_ENV === "production"
      ? env.VERCEL_PROJECT_PRODUCTION_URL || env.VERCEL_URL
      : env.VERCEL_URL;
  const value = configured || (automatic ? `https://${automatic}` : undefined);
  if (!value) return undefined;
  try {
    const url = new URL(value);
    if (
      !["http:", "https:"].includes(url.protocol) ||
      url.username ||
      url.password
    )
      return undefined;
    return new URL(url.origin);
  } catch {
    return undefined;
  }
}

export function pageMetadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  const base = getSiteUrl();
  const url = base ? new URL(path, base).href : undefined;
  return {
    title,
    description,
    ...(url ? { alternates: { canonical: url } } : {}),
    openGraph: {
      title: `${title} — Ardit Avdiu`,
      description,
      type: "website",
      siteName: "Ardit Avdiu",
      ...(url ? { url } : {}),
      ...(base
        ? {
            images: [
              {
                url: new URL("/opengraph-image", base).href,
                width: 1200,
                height: 630,
                alt: "Ardit Avdiu — Full-Stack Developer",
              },
            ],
          }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} — Ardit Avdiu`,
      description,
    },
  };
}
