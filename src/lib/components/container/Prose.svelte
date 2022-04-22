<script lang="ts">
	export let size: `prose-${"xl" | "lg" | "sm" | "base"}` = "prose-lg";
	export let fullWidth: boolean = false;
</script>

<div
	class:max-w-4xl={!fullWidth}
	class:max-w-none={fullWidth}
	class="prose {size} mx-auto prose-headings:font-semibold prose-p:font-sans hover:prose-a:decoration-2 dark:prose-invert"
	{...$$props}
>
	<slot />
</div>
