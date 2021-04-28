import { render } from "@testing-library/react";

import { GlobalActionType, GlobalState } from "../../context/models";
import { GlobalContextConsumer, GlobalContext } from "../../context/reducer";

import transactionsMock from "../../mocks/transactions.json";
import transactionMock from "../../mocks/transaction.json";
import { Transaction } from "../../models/Transaction";

import { TransactionData } from "./TransactionData";

describe("TransactionData Component", () => {
	const INITIAL_CONTEXT_ASC: GlobalState = {
		isDetailsModalOpen: false,
		selectedTransaction: {} as Transaction,
		searchValue: "",
		sortType: "asc",
		transactions: transactionsMock as Transaction[],
		searchedTransactions: [transactionMock] as Transaction[]
	};

	const dispatch = jest.fn();
	const createTransactionDataComponent = (context: any) => {
		return {
			...render(
				<GlobalContext.Provider value={{ context: context, dispatch }}>
					<GlobalContextConsumer>{() => <TransactionData />}</GlobalContextConsumer>
				</GlobalContext.Provider>
			),
			dispatch
		};
	};

	it("should call dispatch action SET_SEARCHED_TRANSACTIONS when component is mounted", () => {
		createTransactionDataComponent(INITIAL_CONTEXT_ASC);

		expect(dispatch).toHaveBeenCalledWith({
			"payload": [transactionMock],
			"type": GlobalActionType.SET_SEARCHED_TRANSACTIONS
		});
	});
});
