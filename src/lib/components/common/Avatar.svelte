<script lang="ts">
	export let src: string | undefined;
	export let alt: string = "";
	export let size: number = 40;
</script>

<img
	{src}
	{alt}
	width={size}
	height={size}
	class="relative z-0 block h-[1em] w-[1em] overflow-hidden rounded-full bg-zinc-200 text-transparent ring ring-white hover:z-10"
/>
