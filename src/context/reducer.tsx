import React, { createContext, useReducer } from "react";
import { Transaction } from "../models/Transaction";

import { GlobalAction, GlobalActionType, GlobalContextProps, GlobalState } from "./models";

export const INITIAL_CONTEXT: GlobalState = {
	isDetailsModalOpen: false,
	selectedTransaction: {} as Transaction
};

const GlobalContext = createContext({} as GlobalContextProps);

const reducer = (state = INITIAL_CONTEXT, action: GlobalAction): GlobalState => {
	switch (action.type) {
		case GlobalActionType.SET_MODAL_OPEN:
			return { ...state, isDetailsModalOpen: action.payload };
		case GlobalActionType.SET_SELECTED_TRANSACTION:
			return { ...state, selectedTransaction: action.payload };
		default:
			throw new Error(`Unsupported action type: ${action}`);
	}
};

type GlobalContextProviderProps = {
	children: React.ReactNode;
	initialState?: GlobalState;
};

const GlobalContextProvider: React.FunctionComponent<GlobalContextProviderProps> = ({
	children,
	initialState
}: any) => {
	const [context, dispatch] = useReducer(reducer, initialState || INITIAL_CONTEXT);
	const value = { context, dispatch } as GlobalContextProps;
	return <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>;
};

const GlobalContextConsumer = GlobalContext.Consumer;
export { GlobalContext, GlobalContextProvider, GlobalContextConsumer };
