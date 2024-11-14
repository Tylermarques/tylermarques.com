import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';
import remarkToc from 'remark-toc';
import rehypeSlug from 'rehype-slug';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', '.md'],
  preprocess: [
    vitePreprocess(),
    mdsvex({
      extensions: ['.md'],
      remarkPlugins: [remarkToc],
      rehypePlugins: [rehypeSlug]
    })
  ],
  kit: {
    adapter: adapter({
      out: 'build'
    })
  }
};

export default config;
