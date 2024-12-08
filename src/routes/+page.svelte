<script lang="ts">
	import type { PageData } from './$types';
	import PostCard from '$lib/components/PostCard.svelte';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();
</script>

<svelte:head>
	<title>DevBlog</title>
	<meta name="description" content="A space for all things Tyler Marques" />
</svelte:head>

<section class="container">
	<div class="">
		<h1 class="pb-3">Tyler Marques</h1>
		<p class="intro-text">
			I'm a ML engineer / systems architect. I run a small consultantcy, <a
				href="https://MarquesCG.com/"
				class="underline">MarquesCG</a
			>
			if you're interested.
		</p>
	</div>
	<section class="mt-8 font-tylermarques">
		<h2>Latest Posts</h2>
		<div class="post-grid">
			{#each data.posts as post}
				<PostCard {post} />
			{/each}
		</div>
	</section>
</section>

<style>
	h1 {
		font-size: 2.8rem;
		margin: 0;
		background: linear-gradient(45deg, var(--heading-color), var(--accent-color));
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
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
