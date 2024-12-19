<script lang="ts">
	export let note: string;
</script>

<div class="margin-note-container">
	<div class="content">
		<slot />
	</div>
	<div class="note">
		{note}
	</div>
</div>

<style>
	.margin-note-container {
		position: relative;
		margin: 1rem 0;
	}

	.content {
		margin-right: 12rem;
	}

	.note {
		position: absolute;
		right: -12rem;
		top: 0;
		width: 10rem;
		font-size: 0.9rem;
		color: var(--text-muted);
		font-family: var(--font-mono);
		border-left: 2px solid var(--accent-color);
		padding-left: 1rem;
	}

	@media (max-width: 1200px) {
		.content {
			margin-right: 0;
		}

		.note {
			position: relative;
			right: 0;
			width: 100%;
			margin-top: 0.5rem;
			padding: 0.5rem 0 0.5rem 1rem;
			background: var(--color-bg-1);
			border-radius: 4px;
		}
	}
</style>
