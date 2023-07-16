// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		interface Error {
			message: string;
			suggestion?: string;
		}
		interface Locals {
			auth: import('lucia-auth').AuthRequest;
		}
		type PageData = {
			user: import('lucia-auth').User | null;
		};
		// interface Platform {}
	}
}

/// <reference types="lucia-auth" />
declare global {
	namespace Lucia {
		type Auth = import('$lib/server/lucia').Auth;
		type UserAttributes = {
			id: string;
			email: string;
		};
	}
}

declare module '*?raw' {
	const value: string;
	export default value;
}

export {};
