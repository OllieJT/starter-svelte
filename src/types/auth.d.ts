type USER_ONBOARDED = {
	is_onboarded: true;
	id: string;
	name: string;
	avatar: string;
};
type USER_NEW = {
	is_onboarded: false;
	id: string;
	name: string | null;
	avatar: string | null;
};

type SESSION_USER = ONBOARDED_USER | USER_NEW;

export declare module '@auth/core/types' {
	interface User {
		is_onboarded: boolean;
		id: string;
		name: string | null;
		avatar: string | null;
	}
	interface Session {
		user: SESSION_USER;
	}
}

/*
	For a while we had to duplicate type augmentation
	This _should_ be resolved, but it isn't: https://github.com/nextauthjs/next-auth/issues/6640#issuecomment-1468368213
*/

declare module '@auth/sveltekit/node_modules/@auth/core/types' {
	interface User {
		is_onboarded: boolean;
		id: string;
		name: string | null;
		avatar: string | null;
	}
	interface Session {
		user: SESSION_USER;
	}
}

export {};
