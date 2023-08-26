import { superValidate } from 'sveltekit-superforms/server';
import { z } from 'zod';
import type { Actions, PageServerLoad } from './$types';

const schema = z.object({
	value: z.string().min(3).max(20).default('example value'),
});

export const load: PageServerLoad = async () => {
	const form = superValidate(schema);

	return {
		form,
	};
};

export const actions: Actions = {
	default: async (event) => {
		const form = await superValidate(event.request, schema);

		console.log('form', form);

		return { form };
	},
};
