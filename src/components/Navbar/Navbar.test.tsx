import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import { GlobalContextConsumer, GlobalContextProvider } from "../../context/reducer";

import { Navbar } from "./Navbar";

describe("Navbar component", () => {
	const createNavbarComponent = () => {
		return {
			...render(
				<GlobalContextProvider>
					<GlobalContextConsumer>{() => <Navbar />}</GlobalContextConsumer>
				</GlobalContextProvider>
			)
		};
	};

	it("should show the correct text", () => {
		const { getByText } = createNavbarComponent();

		expect(getByText("Edu")).toBeInTheDocument();
		expect(getByText("warren")).toBeInTheDocument();
	});
});
