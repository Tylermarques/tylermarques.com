<script lang="ts">
	import BlogPreview from '$lib/components/BlogPreview.svelte';
	import { blogPosts } from '$lib/data';
	export let maxPosts = blogPosts.length;
</script>

<div class="grid md:grid-cols-2 sm:grid-cols-1 gap-2">
	{#each blogPosts.slice(0, maxPosts) as blog}
		<BlogPreview {blog} />
	{/each}
</div>
