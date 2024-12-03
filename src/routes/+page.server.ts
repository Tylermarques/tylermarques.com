// src/routes/+page.server.ts
import type { PageServerLoad } from './$types';
import { fetchPosts } from '$lib/posts';

export const load: PageServerLoad = async () => {
  const posts = await fetchPosts();
  return {
    posts
  };
};
