export const currencyFormatterBrl = (value: number) => {
	return `R$ ${new Intl.NumberFormat().format(value)}`;
};
