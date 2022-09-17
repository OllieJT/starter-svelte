<script lang="ts">
	import { page } from '$app/stores';

	function resolveErrorCode(code: number) {
		switch (code) {
			case 404:
				return {
					title: 'Page not found',
					subtitle: 'The page you are looking for does not exist.',
				};
			case 500:
				return {
					title: 'Internal server error',
					subtitle: 'Something went wrong on our end.',
				};
			default:
				return {
					title: 'Unknown error',
					subtitle: $page.error?.message || 'Something went wrong.',
				};
		}
	}

	$: error = resolveErrorCode($page.status || 500);
</script>

<h1>Error: {$page.status}</h1>
<h2>{error.title}</h2>
<p>{error.subtitle}</p>
