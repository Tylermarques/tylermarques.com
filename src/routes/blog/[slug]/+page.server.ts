import { blogPosts } from '../data';

export function load({ params }) {
  const post = blogPosts.find((post) => post.slug === params.slug);

  return {
    post
  };
}
