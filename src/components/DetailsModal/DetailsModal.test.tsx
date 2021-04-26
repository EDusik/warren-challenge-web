import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import { GlobalContextProvider, GlobalContextConsumer } from "../../context/reducer";
import { GlobalState } from "../../context/models";

import { Transaction } from "../../models/Transaction";
import { DetailsModal } from "./DetailsModal";

import mockTransaction from "../../mocks/transaction.json";

describe("DetailModal Component", () => {
	const INITIAL_CONTEXT: GlobalState = {
		isDetailsModalOpen: false,
		selectedTransaction: mockTransaction as Transaction
	};

	const createDetailsModalComponent = () => {
		return {
			...render(
				<GlobalContextProvider initialState={INITIAL_CONTEXT}>
					<GlobalContextConsumer>{() => <DetailsModal />}</GlobalContextConsumer>
				</GlobalContextProvider>
			)
		};
	};

	it("should Details Modal show the correct infos", () => {
		const { getByTestId, getByText } = createDetailsModalComponent();

		expect(getByTestId("modal-title").textContent).toBe(mockTransaction.title);
		expect(getByTestId("modal-status").textContent).toBe("Concluída");
		expect(getByTestId("modal-transferred-from").textContent).toBe("Transferido de");
		expect(getByText(mockTransaction.from)).toBeInTheDocument();
		expect(getByTestId("modal-amount-from").textContent).toBe("R$ 51,668.85");
		expect(getByTestId("modal-transferred-to").textContent).toBe("Para");
		expect(getByText(mockTransaction.to)).toBeInTheDocument();
		expect(getByTestId("modal-amount-to").textContent).toBe("R$ 51,668.85");
	});
});
