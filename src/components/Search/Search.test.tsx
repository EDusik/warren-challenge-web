import { render, fireEvent } from "@testing-library/react";
import { GlobalActionType, GlobalState } from "../../context/models";
import { GlobalContextConsumer, GlobalContext } from "../../context/reducer";
import { Transaction } from "../../models/Transaction";

import { Search } from "./Search";

describe("Search Component", () => {
	const INITIAL_CONTEXT: GlobalState = {
		isDetailsModalOpen: false,
		selectedTransaction: {} as Transaction,
		searchValue: "",
		sortType: "asc",
		transactions: [] as Transaction[],
		searchedTransactions: [] as Transaction[]
	};

	const dispatch = jest.fn();
	const createSearchComponent = () => {
		return {
			...render(
				<GlobalContext.Provider value={{ context: INITIAL_CONTEXT, dispatch }}>
					<GlobalContextConsumer>{() => <Search />}</GlobalContextConsumer>
				</GlobalContext.Provider>
			),
			dispatch
		};
	};

	it("should search input call dispatch action SET_SEARCH_VALUE when is typed something", async () => {
		const { getByTestId } = createSearchComponent();
		const searchInput = getByTestId("search");

		fireEvent.change(searchInput, { target: { value: "Resgate" } });
		await expect(dispatch).toHaveBeenCalledWith({ "payload": "Resgate", "type": GlobalActionType.SET_SEARCH_VALUE });
	});
});
