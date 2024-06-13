<script>
	import { Card } from 'flowbite-svelte';

	export let data;
</script>

<div class="p-2 flex-row">
	<p>Idk a blog or summin'</p>
	<div class="grid grid-cols-2 gap-2">
		{#each data.summaries as { slug, title }}
			<Card href="/blog/{slug}" class="p-1">{title}</Card>
		{/each}
	</div>
</div>

