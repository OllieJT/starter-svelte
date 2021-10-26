<script lang="ts">
	export let constrain: boolean = false;
</script>

<style lang="scss">
	div {
		--content-width: 800px;
		--content-overflow: calc(var(--space-large) * 2);
		--content-width-alt: calc(var(--content-width) + var(--content-overflow));

		&.constrain {
			max-width: var(--content-width-alt);
			margin-left: auto;
			margin-right: auto;
		}

		:global(h1),
		:global(h2),
		:global(h3),
		:global(h4),
		:global(h5),
		:global(h6),
		:global(p),
		:global(ul),
		:global(ol),
		:global(dl),
		:global(pre),
		:global(menu),
		:global(figcaption),
		:global(details),
		:global(hr) {
			max-width: var(--content-width);
			margin-left: auto;
			margin-right: auto;
		}

		:global(blockquote),
		:global(figure) {
			max-width: var(--content-width-alt);
			margin-left: auto;
			margin-right: auto;
			margin-top: var(--space-large);
			margin-bottom: var(--space-large);
		}

		:global(h1),
		:global(h2),
		:global(h3),
		:global(h4),
		:global(h5),
		:global(h6) {
			margin-top: var(--space-small);
			margin-bottom: var(--space-small);
			&:first-child {
				margin-top: var(--space-large);
			}
		}

		:global(p) {
			margin-top: 0.4em;
			margin-bottom: 1em;
		}

		:global(ul),
		:global(ol),
		:global(dl) {
			margin-top: var(--space-large);
			margin-bottom: var(--space-large);
			:global(ul),
			:global(ol),
			:global(dl) {
				margin-top: var(--space-tiny);
				margin-bottom: var(--space-small);
			}
			:global(li),
			:global(dd),
			:global(dt) {
				margin-top: var(--space-small);
				margin-bottom: var(--space-small);
			}
		}

		:global(hr) {
			margin-top: var(--space-large);
			margin-bottom: var(--space-large);
			border-color: var(--fg-alt);
			opacity: 0.25;
		}
	}
</style>

<div class:constrain>
	<slot />
</div>
