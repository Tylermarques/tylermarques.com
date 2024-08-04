import { blogPosts } from '$lib/data';

export function load() {
  return { blogs: blogPosts };
}
