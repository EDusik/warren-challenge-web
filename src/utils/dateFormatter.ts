export const dateFormatter = (date: string) => {
	return date.split("-").reverse().join("/");
};
