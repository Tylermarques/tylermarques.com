<script>
	import BlogPreview from '$lib/components/BlogPreview.svelte';

	export let data;
</script>

<div class="p-2 flex-row">
	<div class="p-2 flex-row">
		I have wanted to put this site up for a while now, but I never got around to it. It's mostly a
		spot for writeups of projects I've worked on.
	</div>
	<div class="grid grid-cols-2 gap-2">
		{#each data.blogs as blog}
			<BlogPreview {blog} />
		{/each}
	</div>
</div>
