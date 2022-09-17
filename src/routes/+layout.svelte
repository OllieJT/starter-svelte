<script lang="ts">
	import '@fontsource/inter/400.css';
	import SvelteIcon from '@inqling/svelte-icons/brand/svelte.svelte';
	import '../app.css';
</script>

<header class="p-10">
	<SvelteIcon class="h-20 w-20 text-orange-500" />
</header>

<main class="px-10">
	<slot />
</main>
