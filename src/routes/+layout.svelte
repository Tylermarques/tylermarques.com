<script>
    import '../app.postcss';
    import NavBar from "$lib/components/NavBar.svelte";
</script>

<div class="lg:px-[20rem] py-4 border-gray-600 border-2">
	<NavBar/>
	<slot />
</div>
