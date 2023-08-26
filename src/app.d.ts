/// <reference types="lucia" />

declare global {
	// See https://kit.svelte.dev/docs/types#app
	namespace App {
		interface Error {
			message: string;
			suggestion?: string;
		}
		interface Locals {
			auth: import('lucia').AuthRequest;
		}
		type PageData = {
			user: import('lucia').User | null;
		};
		// interface Platform {}
	}

	namespace Lucia {
		type Auth = import('$lib/server/lucia').Auth;
		type DatabaseUserAttributes = Omit<
			import('@prisma/client').AuthUser,
			'id' | 'time_created' | 'time_updated'
		>;
		// type DatabaseSessionAttributes = {};
	}
}

declare module '*?raw' {
	const value: string;
	export default value;
}

export {};
