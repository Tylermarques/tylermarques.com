<script>
	import BlogPreview from '$lib/components/BlogPreview.svelte';
	const blogPosts = [
		{
			title: 'Hello World 1',
			date: '2022-01-01',
			description: 'This is a blog post',
			image: 'https://picsum.photos/id/10/800/600'
		},
		{
			title: 'Foo Bar',
			date: '2022-01-01',
			description: 'This is a blog post',
			image: 'https://picsum.photos/id/10/800/600'
		},
		{
			title: 'Hello World 2',
			date: '2022-01-01',
			description: 'This is a blog post',
			image: 'https://picsum.photos/id/11/800/600'
		},
		{
			title: 'Foo Bar 2',
			date: '2022-01-01',
			description:
				'This is a much longer description, it might even be longer than the blog post itself, but it is still a blog post',
			image: 'https://picsum.photos/id/11/800/600'
		}
	];
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
			that should scale when they need to.
		</p>
	</div>
	<h2 class="text-2xl text-gray-900">Latest Posts</h2>
	<div class="grid grid-cols-2 -mx-4">
		{#each blogPosts.slice(0, 2) as blog}
			<BlogPreview {blog} />
		{/each}
	</div>
</section>
