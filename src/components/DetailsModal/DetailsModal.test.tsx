import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import { GlobalContextConsumer, GlobalContext } from "../../context/reducer";
import { GlobalActionType, GlobalState } from "../../context/models";

import { Transaction } from "../../models/Transaction";
import { DetailsModal } from "./DetailsModal";

import mockTransaction from "../../mocks/transaction.json";

describe("DetailsModal Component", () => {
	const INITIAL_CONTEXT: GlobalState = {
		isDetailsModalOpen: false,
		selectedTransaction: mockTransaction as Transaction,
		searchValue: "",
		sortType: "asc",
		transactions: [] as Transaction[],
		searchedTransactions: [] as Transaction[]
	};

	const dispatch = jest.fn();
	const createDetailsModalComponent = () => {
		return {
			...render(
				<GlobalContext.Provider value={{ context: INITIAL_CONTEXT, dispatch }}>
					<GlobalContextConsumer>{() => <DetailsModal />}</GlobalContextConsumer>
				</GlobalContext.Provider>
			),
			dispatch
		};
	};

	it("should Details Modal show the correct infos", () => {
		const { getByTestId, getByText } = createDetailsModalComponent();

		expect(getByTestId("modal-title").textContent).toBe(mockTransaction.title);
		expect(getByTestId("modal-status").textContent).toBe("Solicitada");
		expect(getByTestId("modal-transferred-from").textContent).toBe("Transferido de");
		expect(getByText(mockTransaction.from)).toBeInTheDocument();
		expect(getByTestId("modal-amount-from").textContent).toBe("R$ 2,078.66");
		expect(getByTestId("modal-transferred-to").textContent).toBe("Para");
		expect(getByText(mockTransaction.to)).toBeInTheDocument();
		expect(getByTestId("modal-amount-to").textContent).toBe("R$ 2,078.66");
	});

	it("should call dispatch action SET_MODAL_OPEN when clicked modal-close-button", () => {
		const { getByTestId } = createDetailsModalComponent();

		getByTestId("modal-close-button").click();
		expect(dispatch).toHaveBeenCalledWith({ "payload": false, "type": GlobalActionType.SET_MODAL_OPEN });
	});
});
