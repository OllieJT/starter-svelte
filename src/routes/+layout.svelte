<script lang="ts">
	import '@fontsource-variable/inter';
	import SvelteIcon from '@inqling/svelte-icons/simple-icons/svelte.svelte';
	import '../app.postcss';
</script>

<header class="p-10">
	<SvelteIcon class="h-20 w-20 text-orange-600" />
</header>

<main class="px-10">
	<slot />
</main>
