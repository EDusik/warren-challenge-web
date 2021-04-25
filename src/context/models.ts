import { Dispatch } from "react";
import { Transaction } from ".././models/Transaction";

export enum GlobalActionType {
	SET_MODAL_OPEN = "SET_MODAL_OPEN",
	SET_SELECTED_TRANSACTION = "SELECT_TRANSACTION"
}

export type GlobalAction =
	| { type: GlobalActionType.SET_MODAL_OPEN; payload: boolean }
	| { type: GlobalActionType.SET_SELECTED_TRANSACTION; payload: Transaction };

export interface GlobalState {
	isDetailsModalOpen: boolean;
	selectedTransaction: Transaction;
}

export interface GlobalContextProps extends ContextProps<GlobalState, GlobalAction> {}

export interface ContextProps<T, P> {
	context: T;
	dispatch: Dispatch<P>;
}
