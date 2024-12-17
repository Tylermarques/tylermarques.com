import { browser } from '$app/environment';
import type { Post, PostMetadata } from './types';

export const fetchPosts = async (): Promise<Post[]> => {
  const posts: Post[] = [];


  // Get all posts during SSR
  const paths = import.meta.glob<{ metadata: PostMetadata }>('/src/posts/*.md', { eager: true });

  for (const path in paths) {
    const file = paths[path];
    const slug = path.split('/').pop()?.slice(0, -3) ?? '';

    if (file && typeof file === 'object' && 'metadata' in file) {
      const metadata = file.metadata;
      const post: Post = {
        ...metadata,
        slug
      };
      if (new Date(post.date) <= new Date()) {

        posts.push(post);
      }

    }
  }

  // Sort posts by date in descending order
  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
}
