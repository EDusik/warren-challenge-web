import { render, fireEvent } from "@testing-library/react";

import { GlobalActionType, GlobalState } from "../../../context/models";
import { GlobalContextConsumer, GlobalContext } from "../../../context/reducer";
import { Transaction } from "../../../models/Transaction";

import { SortButton } from "./SortButton";

describe("SortButton Component", () => {
	const INITIAL_CONTEXT_ASC: GlobalState = {
		isDetailsModalOpen: false,
		selectedTransaction: {} as Transaction,
		searchValue: "",
		sortType: "asc",
		transactions: [] as Transaction[],
		searchedTransactions: [] as Transaction[]
	};

	const INITIAL_CONTEXT_DESC: GlobalState = {
		isDetailsModalOpen: false,
		selectedTransaction: {} as Transaction,
		searchValue: "",
		sortType: "desc",
		transactions: [] as Transaction[],
		searchedTransactions: [] as Transaction[]
	};

	const dispatch = jest.fn();
	const createSortButtonComponent = (context: any) => {
		return {
			...render(
				<GlobalContext.Provider value={{ context: context, dispatch }}>
					<GlobalContextConsumer>{() => <SortButton />}</GlobalContextConsumer>
				</GlobalContext.Provider>
			),
			dispatch
		};
	};

	it("should clicked sort-button sortType: desc send payload asc", async () => {
		const { getByTestId } = createSortButtonComponent(INITIAL_CONTEXT_DESC);
		const sortButton = getByTestId("sort-button");

		fireEvent.click(sortButton);
		await expect(dispatch).toHaveBeenCalledWith({ "payload": "asc", "type": GlobalActionType.SET_SORT_TYPE });
	});

	it("should clicked sort-button sortType: asc send payload desc", async () => {
		const { getByTestId } = createSortButtonComponent(INITIAL_CONTEXT_ASC);
		const sortButton = getByTestId("sort-button");

		fireEvent.click(sortButton);
		await expect(dispatch).toHaveBeenCalledWith({ "payload": "desc", "type": GlobalActionType.SET_SORT_TYPE });
	});
});
