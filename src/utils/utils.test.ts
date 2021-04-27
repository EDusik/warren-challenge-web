import { sortTransactionsAsc, sortTransactionsDesc, removeDuplicatedTransactions, concatQuery } from "./utils";

import transactionsMockDesc from "../mocks/transactions.json";
import transactionsMockAsc from "../mocks/transactionsAsc.json";
import transactionMock from "../mocks/transaction.json";
import duplicatedTransactionsMock from "../mocks/duplicatedTransactions.json";

describe("Utils Unit Tests", () => {
	it("should sortTransactionsAsc(transactionsMockDesc) return transactionMockAsc", () => {
		expect(sortTransactionsAsc(transactionsMockDesc)).toStrictEqual(transactionsMockAsc);
	});

	it("should sortTransactionsDesc(transactionsMockAsc) return transactionsMockDesc", () => {
		expect(sortTransactionsDesc(transactionsMockAsc)).toBe(transactionsMockAsc);
	});

	it("should concatQuery(transactionsMockAsc) return just one Object", () => {
		expect(concatQuery("Resgate", transactionsMockAsc)).toStrictEqual([transactionMock]);
	});

	it("should removeDuplicatedTransactions(transactionsMockAsc) return the same value", () => {
		expect(removeDuplicatedTransactions(transactionsMockAsc)).toStrictEqual(transactionsMockAsc);
	});

	it("should removeDuplicatedTransactions(duplicatedTransactionsMock) return the length 3", () => {
		expect(removeDuplicatedTransactions(duplicatedTransactionsMock)).toHaveLength(3);
	});
});
