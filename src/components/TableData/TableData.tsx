import { useEffect, useState, useContext } from "react";

import { BoxDataStyled } from "../../styles/BoxData/BoxDataStyled";
import { ContainerStyled } from "../../styles/Container/ContainerStyled";

import { getTransactions } from "../../services/api";
import { currencyFormatterBrl } from "../../utils/currencyFormatter";

interface Transactions {
	id: string;
	title: string;
	description: string;
	status: string;
	amount: number;
	date: string;
	from: string;
	to: string;
}

export const TableData = () => {
	const [transactions, setTransactions] = useState<Transactions[]>([]);

	useEffect(() => {
		getTransactions().then(transaction => {
			setTransactions(transaction.data);
		});
	}, []);

	return (
		<ContainerStyled>
			{transactions.map(transaction => (
				<BoxDataStyled title={transaction.title}>
					<a>
						<h1>{transaction.title}</h1>
						<p>{transaction.description}</p>
						<b>{transaction.status}</b>
						<span>{currencyFormatterBrl(transaction.amount)}</span>
					</a>
				</BoxDataStyled>
			))}
		</ContainerStyled>
	);
};
