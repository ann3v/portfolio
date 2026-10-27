import { afterEach, describe, expect, it, vi } from "vitest";
import { getSiteUrl, pageMetadata } from "@/lib/metadata";

afterEach(() => vi.unstubAllEnvs());

describe("public site URL", () => {
  it("omits the origin when a public deployment is not configured", () => {
    expect(getSiteUrl({})).toBeUndefined();
  });

  it("uses the explicitly configured domain and removes page paths", () => {
    expect(
      getSiteUrl({
        SITE_URL:
          " https://portfolio.example.com/work/kosvibe?preview=true#work ",
        VERCEL_URL: "preview.example.vercel.app",
      })?.href,
    ).toBe("https://portfolio.example.com/");
  });

  it("uses Vercel's production domain for production and preview host for previews", () => {
    const environment = {
      VERCEL_URL: "preview.example.vercel.app",
      VERCEL_PROJECT_PRODUCTION_URL: "production.example.vercel.app",
    };
    expect(
      getSiteUrl({ ...environment, VERCEL_ENV: "production" })?.origin,
    ).toBe("https://production.example.vercel.app");
    expect(getSiteUrl({ ...environment, VERCEL_ENV: "preview" })?.origin).toBe(
      "https://preview.example.vercel.app",
    );
    expect(
      getSiteUrl({
        VERCEL_ENV: "production",
        VERCEL_URL: environment.VERCEL_URL,
      })?.origin,
    ).toBe("https://preview.example.vercel.app");
  });

  it.each([
    "not a URL",
    "javascript:alert(1)",
    "file:///private/portfolio",
    "https://user:password@example.com",
  ])("rejects an invalid or unsafe configured origin: %s", (SITE_URL) => {
    expect(getSiteUrl({ SITE_URL })).toBeUndefined();
  });

  it("creates canonical and social metadata for the current page", () => {
    vi.stubEnv("SITE_URL", "https://portfolio.example.com");
    const metadata = pageMetadata(
      "KosVibe",
      "A collaborative mobile project.",
      "/work/kosvibe",
    );
    expect(metadata.alternates?.canonical).toBe(
      "https://portfolio.example.com/work/kosvibe",
    );
    expect(metadata.openGraph).toMatchObject({
      url: "https://portfolio.example.com/work/kosvibe",
      description: "A collaborative mobile project.",
      images: [
        {
          url: "https://portfolio.example.com/opengraph-image",
          width: 1200,
          height: 630,
        },
      ],
    });
  });

  it("does not publish a fabricated canonical when no site URL exists", () => {
    vi.stubEnv("SITE_URL", "");
    vi.stubEnv("VERCEL_URL", "");
    vi.stubEnv("VERCEL_PROJECT_PRODUCTION_URL", "");
    const metadata = pageMetadata(
      "KosVibe",
      "A collaborative mobile project.",
      "/work/kosvibe",
    );
    expect(metadata.alternates).toBeUndefined();
    expect(metadata.openGraph).not.toHaveProperty("url");
    expect(metadata.openGraph).not.toHaveProperty("images");
  });
});
