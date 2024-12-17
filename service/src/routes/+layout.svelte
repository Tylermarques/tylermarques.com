<script lang="ts">
	import posthog from 'posthog-js';
	import { browser } from '$app/environment';
	import Header from '$lib/components/Header.svelte';
	import '../app.css';
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();

	export const load = async () => {
		debugger;
		if (browser) {
			posthog.init('phc_mL4nzd4qTYul5CI5Z2YnvYxWfV9fDLlkbhDQQAUVitx', {
				api_host: 'https://us.i.posthog.com',
				person_profiles: 'identified_only' // or 'always' to create profiles for anonymous users as well
			});
		}
		return;
	};
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
