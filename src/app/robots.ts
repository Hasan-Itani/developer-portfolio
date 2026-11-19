import type { MetadataRoute } from "next";
import { site } from "@/content/site";
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      ...(process.env.VERCEL_ENV === "production"
        ? { allow: "/" }
        : { disallow: "/" }),
    },
    sitemap: `${site.url}/sitemap.xml`,
  };
}
