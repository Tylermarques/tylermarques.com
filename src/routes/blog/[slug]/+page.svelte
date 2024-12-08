<script lang="ts">
	import { format } from 'date-fns';
	let { data } = $props();
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta name="description" content={data.meta.description} />
</svelte:head>

<article class="post">
	<header>
		<h1>{data.meta.title}</h1>
		<h3>{data.meta.subtitle}</h3>
		<time datetime={data.meta.date}>{format(new Date(data.meta.date), 'MMMM d, yyyy')}</time>
	</header>

	<div class="content">
		<data.content />
	</div>

	<footer class="border-t-white border-t-2">
		<div class="pt-8">
			<p>
				If you're enjoying my blog, consider adding me to your favourite RSS reader!
				<a href="/rss">/rss</a>
			</p>
		</div>
	</footer>
</article>

<style>
	.post {
		width: 100%;
	}

	header {
		margin: 2rem 0 3rem;
		text-align: center;
	}

	h1 {
		font-size: 3.4rem;
		margin: 0 0 0.5rem;
		background: linear-gradient(45deg, var(--heading-color), var(--accent-color));
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	}

	time {
		color: var(--text-muted);
		font-size: 0.9rem;
		font-family: var(--font-mono);
	}

	.content {
		line-height: 1.8;
	}

	.content :global(h2) {
		font-size: 1.8rem;
		margin: 2.5rem 0 1rem;
		color: var(--heading-color);
	}

	.content :global(p) {
		margin: 1.5rem 0;
	}

	.content :global(pre) {
		margin: 1.5rem 0;
		padding: 1.5rem;
		border-radius: 8px;
		background: var(--color-bg-2);
		border: 1px solid var(--border-color);
	}

	.content :global(img) {
		max-width: 100%;
		height: auto;
		border-radius: 8px;
	}

	.content :global(ul) {
		margin: 1.5rem 0;
		padding-left: 1.5rem;
	}
	.content :global(table) {
		width: 100%;
		border-collapse: collapse;
		margin: 2rem 0;
	}

	.content :global(th),
	.content :global(td) {
		padding: 0.75rem;
		text-align: left;
		border-bottom: 1px solid var(--border-color);
	}

	.content :global(th) {
		background-color: var(--color-bg-1);
		color: var(--heading-color);
		font-weight: bold;
	}

	.content :global(tr:nth-child(even)) {
		background-color: var(--color-bg-2);
	}

	.content :global(tr:hover) {
		background-color: var(--color-bg-1);
	}

	.content :global(li) {
		margin: 0.5rem 0;
	}
</style>
