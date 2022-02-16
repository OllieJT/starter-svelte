import preprocess from "svelte-preprocess";
import adapter from "@sveltejs/adapter-static";
import path from "path";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: [".svelte"],

	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [preprocess({})],

	kit: {
		adapter: adapter({}),
		prerender: {
			enabled: true,
			//entries: ["*"],
			crawl: true,
		},
		vite: {
			json: {
				namedExports: true,
			},
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
