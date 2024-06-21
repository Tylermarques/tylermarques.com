import { blogPosts } from '../data.js';

export function load({ params }) {
  const post = blogPosts.find((post) => post.slug === params.slug);

  return {
    post
  };
}
