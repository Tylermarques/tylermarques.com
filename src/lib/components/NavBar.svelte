<script>
	import { page } from '$app/stores';
	const routes = [
		{ route: '/', name: 'Home', id: 0 },
		{ route: '/blog', name: 'Blog', id: 1 }
	];
	let currentRoute = '';
	$: currentRoute = $page.url.pathname;
</script>

<div class="flex flex-row min-w-full min-h-5">
	{#each routes as route (route.id)}
		<div class="px-5">
			<a class={currentRoute === route.route ? 'underline' : ''} href={route.route}>
				{route.name}</a
			>
		</div>
	{/each}
</div>
