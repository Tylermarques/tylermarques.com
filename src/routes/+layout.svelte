<script>
	import Header from '$lib/components/Header.svelte';
	import '../app.css';
</script>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		padding-top: 2rem;
		width: 100%;
		max-width: var(--column-width);
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 2rem;
		font-family: var(--font-mono);
		font-size: 0.9rem;
		color: var(--text-muted);
		border-top: 1px solid var(--border-color);
	}
</style>
