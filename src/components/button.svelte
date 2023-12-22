<script lang="ts">
	import type { Snippet } from 'svelte';
	import { twMerge } from 'tailwind-merge';

	const { className, href, children, variant } = $props<{
		className?: string;
		href: string;
		children: Snippet;
		variant: 'primary' | 'secondary';
	}>();
</script>

<a
	{href}
	class={twMerge(
		'flex h-12 items-center px-5 text-base font-medium leading-none tracking-wide sm:px-6',
		variant === 'primary' && 'bg-primary-400 text-mono-950 hover:bg-primary-500',
		variant === 'secondary' && 'bg-secondary-500 text-white hover:bg-secondary-600',
		className,
	)}
>
	<span>{@render children()}</span>
</a>
