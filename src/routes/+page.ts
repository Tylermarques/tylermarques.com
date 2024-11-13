import type { PageLoad } from './$types';
import { fetchPosts } from '$lib/posts';

export const load: PageLoad = async () => {
  const posts = await fetchPosts();
  return {
    posts
  };
}
