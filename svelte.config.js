import preprocess from "svelte-preprocess";
import adapter from "@sveltejs/adapter-auto";
import path from "path";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: [".svelte"],
	preprocess: [preprocess({})],

	kit: {
		outDir: "./.svelte-kit/",
		adapter: adapter({}),
		vite: {
			json: { namedExports: true },
			resolve: {
				alias: {
					$components: path.resolve("src/lib/components"),
					$util: path.resolve("src/lib/util"),
					$types: path.resolve("src/lib/types"),
					$api: path.resolve("src/lib/api"),
					$store: path.resolve("src/lib/store"),
				},
			},
		},
	},
};

export default config;
