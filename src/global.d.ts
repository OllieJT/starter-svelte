/// <reference types="@sveltejs/kit" />

/*

	Example adding global type:

	interface Fathom {
		trackGoal: (event: string, value: number) => void;
	}
	declare const fathom: Fathom;

*/

interface ImportMetaEnv {}

declare global {
	namespace NodeJS {
		interface ProcessEnv {
			NODE_ENV: "development" | "production";
			NEXT_PUBLIC_URL: string;
		}
	}
}

declare namespace App {
	interface Locals {}

	interface Platform {}

	interface Session {}

	interface Stuff {}
}
