import { render } from "@testing-library/react";

import { Navbar } from "./Navbar";

describe("Navbar component", () => {
	const createNavbarComponent = () => {
		return {
			...render(<Navbar />)
		};
	};

	it("should show the correct text", () => {
		const { getByTestId } = createNavbarComponent();
		expect(getByTestId("logo").textContent).toBe("Eduwarren");
	});
});
