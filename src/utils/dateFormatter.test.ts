import transaction from "../mocks/transaction.json";

import { dateFormatter } from "./dateFormatter";

describe("Date Formatter", () => {
	it("should dateFormatter(2018-12-22) return 22/12/2018", () => {
		expect(dateFormatter(transaction.date)).toBe("22/12/2018");
	});
});
