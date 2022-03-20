import { gql } from "@urql/svelte";

const QueryCountryFragment = gql`
	fragment CountryPreview on Country {
		name
		code
		capital
		currency
		languages {
			name
			code
		}
	}
`;

export const QueryCountryList = gql`
	query QueryCountryList {
		countries {
			...CountryPreview
		}
	}

	${QueryCountryFragment}
`;

export const QueryCountryDetail = gql`
	query QueryCountryDetail($countryCode: ID!) {
		country(code: $countryCode) {
			...CountryPreview
		}
	}

	${QueryCountryFragment}
`;
