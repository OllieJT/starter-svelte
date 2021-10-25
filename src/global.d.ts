/// <reference types="@sveltejs/kit" />

declare global {
	namespace NodeJS {
		interface ProcessEnv {
			NODE_ENV: "development" | "production";
			NEXT_PUBLIC_URL: string;
		}
	}
}
