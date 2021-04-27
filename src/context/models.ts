import { Dispatch } from "react";
import { Transaction } from ".././models/Transaction";

export enum GlobalActionType {
	SET_MODAL_OPEN = "SET_MODAL_OPEN",
	SET_SEARCH_VALUE = "SET_SEARCH_VALUE",
	SET_SORT_TYPE = "SET_SORT_TYPE",
	SET_TRANSACTIONS = "SET_TRANSACTIONS",
	SET_SELECTED_TRANSACTION = "SET_SELECTED_TRANSACTION",
	SET_SEARCHED_TRANSACTIONS = "SET_SEARCHED_TRANSACTIONS"
}

export type GlobalAction =
	| { type: GlobalActionType.SET_MODAL_OPEN; payload: boolean }
	| { type: GlobalActionType.SET_SEARCH_VALUE; payload: string }
	| { type: GlobalActionType.SET_SORT_TYPE; payload: string }
	| { type: GlobalActionType.SET_SELECTED_TRANSACTION; payload: Transaction }
	| { type: GlobalActionType.SET_TRANSACTIONS; payload: Transaction[] }
	| { type: GlobalActionType.SET_SEARCHED_TRANSACTIONS; payload: Transaction[] };

export interface GlobalState {
	isDetailsModalOpen: boolean;
	searchValue: string;
	sortType: string;
	selectedTransaction: Transaction;
	transactions: Transaction[];
	searchedTransactions: Transaction[];
}

export interface GlobalContextProps extends ContextProps<GlobalState, GlobalAction> {}

export interface ContextProps<T, P> {
	context: T;
	dispatch: Dispatch<P>;
}
