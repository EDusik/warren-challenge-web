import { currencyFormatterBrl } from "./currencyFormatter";

describe("Currency Formatter", () => {
	it("should currencyFormatterBrl(0.00) return R$ 0", () => {
		expect(currencyFormatterBrl(0.0)).toBe("R$ 0");
	});

	it("should currencyFormatterBrl(100.50) return R$ 100.5", () => {
		expect(currencyFormatterBrl(100.5)).toBe("R$ 100.5");
	});

	it("should currencyFormatterBrl(1111.11) return R$ 1,111.11", () => {
		expect(currencyFormatterBrl(1111.11)).toBe("R$ 1,111.11");
	});

	it("should currencyFormatterBrl(9999.99) return R$ 9,999.99", () => {
		expect(currencyFormatterBrl(9999.99)).toBe("R$ 9,999.99");
	});
});
