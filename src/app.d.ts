// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	interface Locals {
		isUser: boolean;
	}
	// interface Platform {}
	// interface PrivateEnv {}
	interface PublicEnv {
		readonly PUBLIC_VARIABLE: string;
	}
	interface Session {
		isUser: boolean;
	}
	// interface Stuff {}
}
