import { createClient } from "@urql/svelte";

export const client = createClient({
	url: import.meta.env.VITE_GRAPHQL_ENDPOINT,
	//	fetchOptions: () => {
	//		const token = getToken();
	//		return {
	//			headers: { authorization: token ? `Bearer ${token}` : "" },
	//		};
	//	},
});
