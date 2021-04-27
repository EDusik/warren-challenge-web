import { Transaction } from "../models/Transaction";

export const sortTransactionsAsc = (data: Transaction[]) => {
	return data.sort((a: Transaction, b: Transaction) => a.date.localeCompare(b.date));
};

export const sortTransactionsDesc = (data: Transaction[]) => {
	return data.sort((a: Transaction, b: Transaction) => b.date.localeCompare(a.date));
};

export const concatQuery = (searchValueTyped: string, transactions: Transaction[]) => {
	searchValueTyped = searchValueTyped.toLowerCase();
	const title = transactions.filter(transactionTitle =>
		transactionTitle.title ? transactionTitle.title.toLowerCase().includes(searchValueTyped) : null
	);
	const status = transactions.filter(transactionStatus =>
		transactionStatus.status ? transactionStatus.status.toLowerCase().includes(searchValueTyped) : null
	);

	const listOfTransactions = title.concat(status);
	return listOfTransactions;
};

export const removeDuplicatedTransactions = (transactions: Transaction[]) => {
	const transactionsMapped = new Map();
	for (const transaction of transactions) {
		transactionsMapped.set(transaction.id, transaction);
	}

	const result = Array.from(transactionsMapped.values());
	return result;
};
