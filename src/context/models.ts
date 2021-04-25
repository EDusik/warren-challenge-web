import { Dispatch } from "react";

export enum GlobalActionType {
	SET_MODAL_OPEN = "SET_MODAL_OPEN"
}

export type GlobalAction = { type: GlobalActionType.SET_MODAL_OPEN; payload: boolean };

export interface GlobalState {
	isDetailsModalOpen: boolean;
}

export interface GlobalContextProps extends ContextProps<GlobalState, GlobalAction> {}

export interface ContextProps<T, P> {
	context: T;
	dispatch: Dispatch<P>;
}
