import { render } from "@testing-library/react";
import { GlobalContextProvider, GlobalContextConsumer } from "../../../context/reducer";

import mockTransactions from "../../../mocks/transactions.json";

import { TransactionBox } from "./TransactionBox";

describe("TransactionBox Component", () => {
	const createTransactionBoxComponent = () => {
		return {
			...render(
				<GlobalContextProvider>
					<GlobalContextConsumer>{() => <TransactionBox data={mockTransactions} />}</GlobalContextConsumer>
				</GlobalContextProvider>
			)
		};
	};

	it("should transactions[0] show the correct infos", () => {
		const { queryAllByTestId } = createTransactionBoxComponent();

		expect(queryAllByTestId("transaction-title")[0].textContent).toBe(mockTransactions[0].title);
		expect(queryAllByTestId("transaction-description")[0].textContent).toBe(mockTransactions[0].description);
		expect(queryAllByTestId("transaction-status")[0].textContent).toBe(`status: ${mockTransactions[0].status}`);
		expect(queryAllByTestId("transaction-amount")[0].textContent).toBe("R$ 2,078.66");
	});

	it("should transactions[1] show the correct infos", () => {
		const { queryAllByTestId } = createTransactionBoxComponent();

		expect(queryAllByTestId("transaction-title")[1].textContent).toBe(mockTransactions[1].title);
		expect(queryAllByTestId("transaction-description")[1].textContent).toBe(mockTransactions[1].description);
		expect(queryAllByTestId("transaction-status")[1].textContent).toBe(`status: ${mockTransactions[1].status}`);
		expect(queryAllByTestId("transaction-amount")[1].textContent).toBe("R$ 148,856.29");
	});

	it("should transactions[2] show the correct infos", () => {
		const { queryAllByTestId } = createTransactionBoxComponent();

		expect(queryAllByTestId("transaction-title")[2].textContent).toBe(mockTransactions[2].title);
		expect(queryAllByTestId("transaction-description")[2].textContent).toBe(mockTransactions[2].description);
		expect(queryAllByTestId("transaction-status")[2].textContent).toBe(`status: ${mockTransactions[2].status}`);
		expect(queryAllByTestId("transaction-amount")[2].textContent).toBe("R$ 25,092.8");
	});
});
