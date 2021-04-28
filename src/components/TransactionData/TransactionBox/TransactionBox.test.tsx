import { render } from "@testing-library/react";
import { GlobalActionType, GlobalState } from "../../../context/models";
import { GlobalContextConsumer, GlobalContext } from "../../../context/reducer";

import mockTransactions from "../../../mocks/transactions.json";
import mockTransaction from "../../../mocks/transaction.json";
import { Transaction } from "../../../models/Transaction";

import { TransactionBox } from "./TransactionBox";

describe("TransactionBox Component", () => {
	const INITIAL_CONTEXT: GlobalState = {
		isDetailsModalOpen: false,
		selectedTransaction: {} as Transaction,
		searchValue: "",
		sortType: "asc",
		transactions: [] as Transaction[],
		searchedTransactions: [] as Transaction[]
	};

	const dispatch = jest.fn();
	const createTransactionBoxComponent = () => {
		return {
			...render(
				<GlobalContext.Provider value={{ context: INITIAL_CONTEXT, dispatch }}>
					<GlobalContextConsumer>{() => <TransactionBox data={mockTransactions} />}</GlobalContextConsumer>
				</GlobalContext.Provider>
			),
			dispatch
		};
	};

	it("should transactions[0] show the correct infos", () => {
		const { queryAllByTestId } = createTransactionBoxComponent();

		expect(queryAllByTestId("transaction-title")[0].textContent).toBe(mockTransactions[0].title);
		expect(queryAllByTestId("transaction-description")[0].textContent).toBe(mockTransactions[0].description);
		expect(queryAllByTestId("transaction-status")[0].textContent).toBe(`status: ${mockTransactions[0].status}`);
		expect(queryAllByTestId("transaction-data")[0].textContent).toBe("22/12/2018");
		expect(queryAllByTestId("transaction-amount")[0].textContent).toBe("R$ 2,078.66");
	});

	it("should transactions[1] show the correct infos", () => {
		const { queryAllByTestId } = createTransactionBoxComponent();

		expect(queryAllByTestId("transaction-title")[1].textContent).toBe(mockTransactions[1].title);
		expect(queryAllByTestId("transaction-description")[1].textContent).toBe(mockTransactions[1].description);
		expect(queryAllByTestId("transaction-status")[1].textContent).toBe(`status: ${mockTransactions[1].status}`);
		expect(queryAllByTestId("transaction-data")[1].textContent).toBe("23/07/2017");
		expect(queryAllByTestId("transaction-amount")[1].textContent).toBe("R$ 148,856.29");
	});

	it("should transactions[2] show the correct infos", () => {
		const { queryAllByTestId } = createTransactionBoxComponent();

		expect(queryAllByTestId("transaction-title")[2].textContent).toBe(mockTransactions[2].title);
		expect(queryAllByTestId("transaction-description")[2].textContent).toBe(mockTransactions[2].description);
		expect(queryAllByTestId("transaction-status")[2].textContent).toBe(`status: ${mockTransactions[2].status}`);
		expect(queryAllByTestId("transaction-data")[2].textContent).toBe("25/08/2016");
		expect(queryAllByTestId("transaction-amount")[2].textContent).toBe("R$ 25,092.8");
	});

	it("should call dispatch action SET_SELECTED_TRANSACTION and SET_MODAL_OPEN when clicked transaction-title[0]", () => {
		const { queryAllByTestId } = createTransactionBoxComponent();

		queryAllByTestId("transaction-title")[0].click();
		expect(dispatch).toHaveBeenCalledWith({
			"payload": mockTransaction,
			"type": GlobalActionType.SET_SELECTED_TRANSACTION
		});
		expect(dispatch).toHaveBeenCalledWith({ "payload": true, "type": GlobalActionType.SET_MODAL_OPEN });
	});
});
