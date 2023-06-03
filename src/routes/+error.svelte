<script lang="ts">
	import { page } from '$app/stores';

	type AppError = typeof $page.error;

	const error: AppError = $page.error || {
		message: 'Unknown error',
		suggestion:
			"We track all errors and will fix this as soon as possible. If you're stuck and unable to continue, please contact us.",
	};
	const error_code = $page.status || 500;
</script>

<h1>
	<span>Error: {error_code}</span>
	<span>{error.message}</span>
</h1>

<p>{error.suggestion}</p>

<br />
<hr />
<br />

<pre>{JSON.stringify($page, null, 3)}</pre>
