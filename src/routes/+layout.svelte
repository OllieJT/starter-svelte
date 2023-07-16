<script lang="ts">
	import '@fontsource-variable/inter';
	import '../app.postcss';
	import type { LayoutServerData } from './$types';

	import 'highlight.js/styles/github.css';

	export let data: LayoutServerData;
	data;
</script>

<slot />
