const cleanup = (str: string) => str.toLowerCase().normalize().trim();

export function fuzzy_match(value_term: string) {
	const value = cleanup(value_term);

	return {
		matches: (input_term: string) => {
			const user_input = cleanup(input_term);
			let user_input_index = 0;

			for (let i = 0; i < value.length; i++) {
				if (value[i] === user_input[user_input_index]) {
					user_input_index += 1;
				}
			}

			return user_input_index === user_input.length;
		},
	};
}
