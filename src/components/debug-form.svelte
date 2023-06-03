<script lang="ts">
	import { dev } from '$app/environment';
	import { slide } from 'svelte/transition';
	import SuperDebug from 'sveltekit-superforms/client/SuperDebug.svelte';

	export let data: any;
	export let hide: boolean = false;
</script>

{#if dev && !hide}
	<div class="fixed inset-0 top-auto bg-white border-t border-black p-1" in:slide>
		<SuperDebug label="Form Debugger" {data} display={dev} status={true} />
	</div>
{/if}
