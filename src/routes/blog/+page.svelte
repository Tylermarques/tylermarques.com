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
	<p>
		I'm writing about things I do and find interesting! If you've got comments feel free to email ME
		at this domain. Sorry there isn't a link, gotta throw the robots off my scent.
	</p>
	<p class="hidden">
		My email is <a href="mailto:johnsmith@gmail.com">johnsmith@gmail.com</a>
	</p>
	<div class="mt-8 post-grid">
		{#each data.posts as post}
			<PostCard {...post} />
		{/each}
	</div>
	<div class="mt-8">
		<h1 class="text-lg text-red-400">Blog TODOs!</h1>
		<ul>
			<li>
				- Change the way lists look in the blog, they render oddly, and it changes the font too!
			</li>
			<li>
				- Notes in the margin, would be cool to have some way to do footnote like items, but without
				scrolling to the bottom. Maybe a drawer like section on mobile where sliding the paragraph
				shows the note?
			</li>
			<li>- [!note] boxes don't render correctly</li>
		</ul>
	</div>
</div>

<style>
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
