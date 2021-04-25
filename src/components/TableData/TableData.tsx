import { useEffect, useState, useContext } from "react";

import { BoxDataStyled } from "../../styles/BoxData/BoxDataStyled";
import { ContainerStyled } from "../../styles/Container/ContainerStyled";

import { getTransactions } from "../../services/api";
import { currencyFormatterBrl } from "../../utils/currencyFormatter";

import { GlobalContext } from "../../context/reducer";
import { GlobalActionType } from "../../context/models";

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
	const { dispatch } = useContext(GlobalContext);

	const [transactions, setTransactions] = useState<Transactions[]>([]);

	useEffect(() => {
		getTransactions().then(transaction => {
			setTransactions(transaction.data);
		});
	}, []);

	const handleOpenDetailsModal = () => {
		dispatch({
			type: GlobalActionType.SET_MODAL_OPEN,
			payload: true
		});
	};

	return (
		<ContainerStyled>
			{transactions.map(transaction => (
				<BoxDataStyled title={transaction.title} key={transaction.id}>
					<button type="button" aria-label="Open Details Details" onClick={handleOpenDetailsModal}>
						<h1>{transaction.title}</h1>
						<p>{transaction.description}</p>
						<b>{transaction.status}</b>
						<span>{currencyFormatterBrl(transaction.amount)}</span>
					</button>
				</BoxDataStyled>
			))}
		</ContainerStyled>
	);
};
