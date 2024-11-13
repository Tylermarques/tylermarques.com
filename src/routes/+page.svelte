<script lang="ts">
	import type { PageData } from './$types';
	import PostCard from '$lib/components/PostCard.svelte';
	import AsciiName from '$lib/components/AsciiName.svelte';

	export let data: PageData;
</script>

<svelte:head>
	<title>DevBlog</title>
	<meta name="description" content="A developer blog built with SvelteKit" />
</svelte:head>

<section class="container">
	<div class="pb-[2em]">
		<h1 class="text-3xl text-gray-900">Tyler Marques</h1>
		<p class="intro-text">
			I'm (mostly) an ML engineer / architect. I run a small consultantcy, <a
				href="https://www.MarquesCG.com/"
				class="underline">MarquesCG</a
			>
			if you're interested. I love to build and maintain systems. I'm always looking for new challenges.
			I'm half decent at infrastructure and architecture. In my day-to-day I help my clients build quickly
			and for future growth
		</p>
	</div>
	<section class="featured-posts">
		<h2>Latest Posts</h2>
		<div class="post-grid">
			{#each data.posts as post}
				<PostCard {...post} />
			{/each}
		</div>
	</section>
</section>

<style>
	p {
		font-family: var(--font-mono);
	}
	.container {
		width: 100%;
	}

	.hero {
		text-align: center;
		padding: 3rem 0;
	}

	h1 {
		font-size: 2.8rem;
		margin: 0;
		background: linear-gradient(45deg, var(--heading-color), var(--accent-color));
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	}

	.intro {
		font-size: 1.2rem;
		max-width: 38rem;
		margin: 1.5rem auto;
		color: var(--text-muted);
	}

	.featured-posts {
		margin: 4rem 0;
	}

	h2 {
		font-size: 1.8rem;
		margin-bottom: 2rem;
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
