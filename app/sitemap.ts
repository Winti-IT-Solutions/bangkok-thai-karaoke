import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: "https://bangkok-thai-karaoke.example/", lastModified: new Date() }];
}
