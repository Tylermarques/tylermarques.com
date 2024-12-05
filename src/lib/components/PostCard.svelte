<script lang="ts">
	import { format } from 'date-fns';
	import type { Post } from '$lib/types';
	interface Props {
		post: Post;
	}
	let { post }: Props = $props();
</script>

<article class="post-card">
	<h3>{post.title}</h3>
	<time datetime={post.date}>{format(new Date(post.date), 'MMMM d, yyyy')}</time>
	<p>{post.description}</p>
	<a href="/blog/{post.slug}" class="read-more">Read more <span class="arrow">→</span></a>
</article>

<style>
	.post-card {
		background: var(--card-bg);
		padding: 1.5rem;
		border-radius: 8px;
		border: 1px solid var(--border-color);
		transition: all 0.2s ease;
	}

	.post-card:hover {
		transform: translateY(-2px);
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
		border-color: var(--accent-color);
	}

	h3 {
		margin: 0;
		font-size: 1.4rem;
		color: var(--heading-color);
		font-family: var(--font-mono);
	}

	time {
		display: block;
		font-size: 0.9rem;
		color: var(--text-muted);
		margin: 0.5rem 0;
		font-family: var(--font-mono);
	}

	p {
		margin: 1rem 0;
		color: var(--text-color);
		line-height: 1.6;
	}

	.read-more {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		font-weight: 500;
		text-decoration: none;
		color: var(--accent-color);
		font-family: var(--font-mono);
	}

	.read-more:hover .arrow {
		transform: translateX(4px);
	}

	.arrow {
		transition: transform 0.2s ease;
	}
</style>
