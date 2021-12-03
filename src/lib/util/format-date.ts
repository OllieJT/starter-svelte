import { format } from "date-fns";

const pretty = (d: Date): string => {
	if (!!d) return format(d, "do MMM yyyy");
	else return d;
};

export const formatDate = {
	pretty,
};
