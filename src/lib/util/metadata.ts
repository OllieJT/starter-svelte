import type { Organization } from "schema-dts";

const token = {
	color: "#FF00FF",

	site_name: "Site Name",
	site_url: process.env.URL,
	site_logo: "",
	site_lang: "en_US", //en_GB

	twitter_username: "todo",
	twitter_id: "todo",
};

const jsonldOrganization: Organization = {
	//"@context": "https://schema.org",

	"@type": "Organization",
	name: token.site_name,
	url: token.site_url,
	logo: token.site_logo,

	sameAs: [
		"https://www.linkedin.com/company/<TODO>",
		"https://dribbble.com/<TODO>",
		"https://twitter.com/<TODO>",
	],
};

export const metadata = {
	token,
	jsonld: {
		organization: JSON.stringify(jsonldOrganization),
	},
};
