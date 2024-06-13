<script>
	const routes = [
		{ route: '/', name: 'Home', id: 0 },
		{ route: '/blog', name: 'Blog', id: 1 },
		{ route: '/about', name: 'About', id: 2 }
	];
</script>

<div class="flex flex-row min-w-full min-h-5">
	{#each routes as route (route.id)}
		<div class="px-5">
			<a href={route.route}> {route.name}</a>
		</div>
	{/each}
</div>

