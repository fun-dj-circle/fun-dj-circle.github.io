import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  // 実際にはここでDBから記事一覧を取得したりします
  // const posts = await getPosts() 
  
  const baseUrl = 'https://www.soundcreate.org' // 自分のドメイン

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // 動的なページ（ブログ記事など）を追加する場合
    /* ...posts.map((post) => ({
      url: `${baseUrl}/posts/${post.slug}`,
      lastModified: post.updatedAt,
    })), */
  ]
}