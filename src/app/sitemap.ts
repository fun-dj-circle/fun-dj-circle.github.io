import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  // Cloudflareで設定した「wwwあり」のドメインを指定してください
  const baseUrl = "https://www.soundcreate.org";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/member`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/release`,
      lastModified: new Date(),
      changeFrequency: "weekly", // 更新頻度が高いならweekly、低ければmonthlyでOK
      priority: 0.8,
    },
  ];
}
