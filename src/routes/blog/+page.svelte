<script lang="ts">
	import type { PageData } from './$types';
	import PostCard from '$lib/components/PostCard.svelte';

	export let data: PageData;
</script>

<svelte:head>
	<title>Blog Posts | DevBlog</title>
	<meta name="description" content="All blog posts" />
</svelte:head>

<div class="blog-posts">
	<h1>Blog Posts</h1>
	<div class="post-grid">
		{#each data.posts as post}
			<PostCard {...post} />
		{/each}
	</div>
</div>

<style>
	.blog-posts {
		width: 100%;
		padding: 2rem 0;
	}

	h1 {
		margin-bottom: 2rem;
		text-align: center;
	}

	.post-grid {
		display: grid;
		gap: 2rem;
	}

	@media (min-width: 768px) {
		.post-grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}
</style>
