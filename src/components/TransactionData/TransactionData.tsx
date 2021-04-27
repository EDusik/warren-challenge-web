import { useEffect, useState } from "react";

import { getTransactions } from "../../services/api";
import { Transaction } from "../../models/Transaction";

import { TransactionBox } from "./TransactionBox/TransactionBox";

export const TransactionData = () => {
	const [transactions, setTransactions] = useState<Transaction[]>([]);

	useEffect(() => {
		getTransactions().then(transactions => {
			setTransactions(transactions.data);
		});
	}, []);

	return <TransactionBox data={transactions} />;
};
