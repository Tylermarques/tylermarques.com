<script lang="ts">
	import BlogPreview from '$lib/components/BlogPreview.svelte';
	import { blogPosts } from '$lib/data';
	export const maxRows = 2;
	export const maxCols = 2;
</script>

<div class="grid md:grid-cols-2 sm:grid-cols-1 gap-2">
	{#each blogPosts.slice(0, maxRows * maxCols) as blog}
		<BlogPreview {blog} />
	{/each}
</div>
