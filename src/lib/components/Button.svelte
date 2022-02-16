<script lang="ts">
	import { createEventDispatcher } from "svelte";
	const dispatch = createEventDispatcher();

	export let icon: ICON | undefined = undefined;
</script>

<button on:click={(e) => dispatch("click", e)} class="group">
	<slot />
	<svelte:component this={icon} class="block h-[1.5em]" />
</button>
