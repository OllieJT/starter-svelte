<script lang="ts">
	import Constrain from "./Constrain.svelte";
	import Gutter from "./Gutter.svelte";

	export let constrain: boolean = false;
	export let gutter: boolean = false;
</script>

{#if constrain && gutter}
	<Gutter>
		<Constrain>
			<div class="w-full {$$props.class}">
				<slot />
			</div>
		</Constrain>
	</Gutter>
{:else if constrain}
	<Constrain>
		<div class="w-full {$$props.class}">
			<slot />
		</div>
	</Constrain>
{:else if gutter}
	<Gutter>
		<div class="w-full {$$props.class}">
			<slot />
		</div>
	</Gutter>
{:else}
	<div class="w-full {$$props.class}">
		<slot />
	</div>
{/if}
