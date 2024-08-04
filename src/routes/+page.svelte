<script lang="ts">
	import BlogPreviewList from '$lib/components/BlogPreviewList.svelte';
</script>

<section class="mx-auto p-4">
	<div class="pb-[2em]">
		<h1 class="text-3xl text-gray-900">Tyler Marques</h1>
		<p class="text-gray-600">
			I'm (mostly) an ML engineer / architect. I run a boutique consultantcy, <a
				href="https://www.MarquesCG.com/"
				class="underline">MarquesCG</a
			>
			if you're interested. I love to build things and I'm always looking for new challenges. I'm half
			decent at infrastructure and architecture. My day-to-day is focused on shipping client products
			that scale.
		</p>
	</div>
	<h2 class="text-2xl text-gray-900">Latest Posts</h2>
	<BlogPreviewList />
</section>
