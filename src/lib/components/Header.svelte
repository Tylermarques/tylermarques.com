<script>
	import { page } from '$app/stores';
</script>

<header>
	<nav>
		<a href="/" class="logo" aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
			<span class="bracket">{`{`}</span>
			TMarques
			<span class="bracket">{`}`}</span>
		</a>

		<ul>
			<li>
				<a href="/blog" aria-current={$page.url.pathname === '/blog' ? 'page' : undefined}>
					Blog
				</a>
			</li>
			<li>
				<a href="/about" aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
					About
				</a>
			</li>
		</ul>
	</nav>
</header>

<style>
	header {
		padding: 1rem 0;
		border-bottom: 1px solid var(--border-color);
		background: var(--header-bg);
	}

	nav {
		max-width: var(--column-width);
		margin: 0 auto;
		padding: 0 1rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.logo {
		font-family: var(--font-mono);
		font-size: 1.4rem;
		font-weight: 700;
		color: var(--heading-color);
		text-decoration: none;
		display: flex;
		align-items: center;
		gap: 0.25rem;
	}

	.bracket {
		color: var(--accent-color);
	}

	ul {
		display: flex;
		gap: 2rem;
		list-style: none;
		margin: 0;
		padding: 0;
	}

	li a {
		color: var(--text-color);
		text-decoration: none;
		font-family: var(--font-mono);
		font-size: 0.9rem;
		transition: color 0.2s ease;
	}

	li a:hover {
		color: var(--accent-color);
	}

	[aria-current='page'] {
		color: var(--accent-color);
	}
</style>
