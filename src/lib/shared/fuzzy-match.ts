type Props = {
	input: string;
	value: string;
};

export function use_fuzzy_match(raw: Props) {
	const user_input = raw.input.toLowerCase().trim();
	const value = raw.value.toLowerCase().trim();

	let user_input_index = 0;

	for (let i = 0; i < value.length; i++) {
		if (value[i] === user_input[user_input_index]) {
			user_input_index += 1;
		}
	}

	return user_input_index === user_input.length;
}
