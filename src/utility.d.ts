//import type { SvelteComponent } from "svelte";

declare type ICON = any;

declare type IMAGE = { src: string; alt?: string };

declare type IMAGE_FIXED = IMAGE & { width: number; height: number };

declare interface LINK {
	label: string;
	href: string;
}

declare interface OPTION<V extends string = string> {
	label: string;
	value: V;
}
