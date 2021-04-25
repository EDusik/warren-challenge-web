import React, { createContext, useReducer } from "react";

import { GlobalAction, GlobalActionType, GlobalContextProps, GlobalState } from "./models";

export const INITIAL_CONTEXT: GlobalState = {
	isDetailsModalOpen: false
};

const GlobalContext = createContext({} as GlobalContextProps);

const reducer = (state = INITIAL_CONTEXT, action: GlobalAction): GlobalState => {
	switch (action.type) {
		case GlobalActionType.SET_MODAL_OPEN:
			return { ...state, isDetailsModalOpen: action.payload };
		default:
			throw new Error(`Unsupported action type: ${action}`);
	}
};

const GlobalContextProvider: React.FunctionComponent = ({ children }: any) => {
	const [context, dispatch] = useReducer(reducer, INITIAL_CONTEXT);
	const value = { context, dispatch } as GlobalContextProps;
	return <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>;
};

const GlobalContextConsumer = GlobalContext.Consumer;
export { GlobalContext, GlobalContextProvider, GlobalContextConsumer };
