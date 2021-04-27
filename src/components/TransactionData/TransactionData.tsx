import { useEffect, useContext } from "react";

import { getTransactions } from "../../services/api";

import { TransactionBox } from "./TransactionBox/TransactionBox";
import { GlobalContext } from "../../context/reducer";
import { GlobalActionType } from "../../context/models";

import {
	sortTransactionsAsc,
	sortTransactionsDesc,
	concatQuery,
	removeDuplicatedTransactions
} from "../../utils/utils";

export const TransactionData = () => {
	const { context, dispatch } = useContext(GlobalContext);

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
			const transactions = concatQuery(searchValueTyped, context.transactions);
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
