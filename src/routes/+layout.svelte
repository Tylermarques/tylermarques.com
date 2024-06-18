<script>
	import '../app.postcss';
	import NavBar from '$lib/components/NavBar.svelte';
</script>

<div class="flex items-center justify-center">
	<div class="lg:max-w-[70em] p-3">
		<NavBar />
		<slot />
	</div>
</div>
