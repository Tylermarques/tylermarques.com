<script lang="ts">
	// TODO: I'd like to have someway to have side notes in the margin. They'd need to fold under for phone screens, but would be nice to have.
	//  Could even be the way that [!Note] tags render.
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
	<p>
		I'm writing about things I do and find interesting! If you've got comments feel free to email ME
		at this domain
	</p>
	<p class="hidden">
		My email is <a href="mailto:johnsmith@gmail.com">johnsmith@gmail.com</a>
	</p>
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
