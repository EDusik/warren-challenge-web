import { useEffect, useState } from "react";

import { getTransactions } from "../../services/api";
import { Transaction } from "../../models/Transaction";

import { TableBox } from "./TableBox/TableBox";

export const TableData = () => {
	const [transactions, setTransactions] = useState<Transaction[]>([]);

	useEffect(() => {
		getTransactions().then(transactions => {
			setTransactions(transactions.data);
		});
	}, []);

	return <TableBox data={transactions} />;
};
