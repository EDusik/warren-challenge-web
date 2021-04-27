import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import { Footer } from "./Footer";

describe("Footer component", () => {
	const urlGitHub = "https://github.com/EDusik";

	const createFooterComponent = () => {
		return {
			...render(<Footer />)
		};
	};

	it("should show the correct text", () => {
		const { getByTestId } = createFooterComponent();
		expect(getByTestId("footer").textContent).toBe("Develop by 👨‍💻 Eduardo Dusik");
		expect(getByTestId("footer-anchor")).toHaveAttribute("href", urlGitHub);
	});
});
