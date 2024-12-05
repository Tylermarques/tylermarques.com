
// src/routes/+page.server.ts
import type { Post } from '$lib/types'
import { fetchPosts } from '$lib/posts';

export async function GET() {
  const posts = await fetchPosts();
  const body = render(posts)
  return new Response(
    body,
    {
      headers: {
        'Cache-Control': `max-age=0, s-max-age=${600}`,
        'Content-Type': 'application/xml',
      }
    },
  );
};

const render = (posts: Post[]) => `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
<atom:link href="http://tylermarques.com/rss" rel="self" type="application/rss+xml" />
<title>Tyler Marques</title>
<link>https://tylermarques.com</link>
<description>Tyler Marques's Blog. Whatever interests me goes here.</description>
${posts
    .map(
      (post: Post) => `<item>
<guid>https://tylermarques.com/blog/${post.slug}</guid>
<title>${post.title}</title>
<link>https://tylermarques.com/blog/${post.slug}</link>
<description>${post.description}</description>
<pubDate>${new Date(post.date).toUTCString()}</pubDate>
</item>`
    )
    .join('')}
</channel>
</rss>
`;
