import { render } from "@testing-library/react";

import { Footer } from "./Footer";

describe("Footer component", () => {
	const createFooterComponent = () => {
		return {
			...render(<Footer />)
		};
	};

	it("should show the correct text", () => {
		const { getByTestId } = createFooterComponent();
		expect(getByTestId("footer").textContent).toBe("Develop by 👨‍💻 Eduardo Dusik");
	});
});
