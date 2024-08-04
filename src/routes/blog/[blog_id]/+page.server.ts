import { blogPosts } from '$lib/data';

export function load({ params }) {
  const post = blogPosts.find((post) => post.id == params.blog_id);

  return post
}
