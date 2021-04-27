import { useEffect, useContext } from "react";

import { getTransactions } from "../../services/api";
import { Transaction } from "../../models/Transaction";

import { TransactionBox } from "./TransactionBox/TransactionBox";
import { GlobalContext } from "../../context/reducer";
import { GlobalActionType } from "../../context/models";

export const TransactionData = () => {
	const { context, dispatch } = useContext(GlobalContext);

	const sortTransactionsDesc = (data: any) => {
		return data.sort((a: any, b: any) => b.date.localeCompare(a.date));
	};

	const sortTransactionsAsc = (data: any) => {
		return data.sort((a: any, b: any) => a.date.localeCompare(b.date));
	};

	useEffect(() => {
		getTransactions().then(transactions => {
			dispatch({
				type: GlobalActionType.SET_TRANSACTIONS,
				payload: transactions.data
			});
		});
	}, [dispatch]);

	useEffect(() => {
		const searchValueTyped = context.searchValue;

		if (searchValueTyped && searchValueTyped.trim() !== "") {
			const transactions = concatQuery(searchValueTyped);
			const result = removeDuplicatedTransactions(transactions);

			if (result !== undefined) {
				dispatch({
					type: GlobalActionType.SET_SEARCHED_TRANSACTIONS,
					payload: result
				});
			}
		} else {
			dispatch({
				type: GlobalActionType.SET_SEARCHED_TRANSACTIONS,
				payload: context.transactions
			});
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [context.searchValue, context.transactions, dispatch]);

	const concatQuery = (searchValueTyped: string) => {
		searchValueTyped = searchValueTyped.toLowerCase();
		const title = context.transactions.filter(transactionTitle =>
			transactionTitle.title ? transactionTitle.title.toLowerCase().includes(searchValueTyped) : null
		);
		const status = context.transactions.filter(transactionStatus =>
			transactionStatus.status ? transactionStatus.status.toLowerCase().includes(searchValueTyped) : null
		);

		const listOfTransactions = title.concat(status);
		return listOfTransactions;
	};

	const removeDuplicatedTransactions = (transactions: Transaction[]) => {
		const transactionsMapped = new Map();
		for (const transaction of transactions) {
			transactionsMapped.set(transaction.id, transaction);
		}

		const result = Array.from(transactionsMapped.values());
		return result;
	};

	useEffect(() => {
		if (context.sortType === "asc") {
			dispatch({
				type: GlobalActionType.SET_SEARCHED_TRANSACTIONS,
				payload: sortTransactionsAsc(context.searchedTransactions)
			});
		}

		if (context.sortType === "desc") {
			dispatch({
				type: GlobalActionType.SET_SEARCHED_TRANSACTIONS,
				payload: sortTransactionsDesc(context.searchedTransactions)
			});
		}
	}, [context.searchedTransactions, context.sortType, dispatch]);

	return <TransactionBox data={context.searchedTransactions} />;
};
