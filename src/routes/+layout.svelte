<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import '../app.css';
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<div class="app">
	<Header />

	<main>
		{@render children?.()}
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
</style>
