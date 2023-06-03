// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		interface Error {
			message: string;
			suggestion?: string;
		}
		interface Locals {
			user: {
				id: string;
			} | null;
		}
		interface PageData {
			session: import('@auth/core/types').Session | null;
		}
		// interface Platform {}
	}
}

export {};
