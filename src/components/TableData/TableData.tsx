import { useEffect, useState, useContext } from "react";

import { BoxDataStyled } from "../../styles/BoxData/BoxDataStyled";
import { ContainerStyled } from "../../styles/Container/ContainerStyled";

import { getTransactions } from "../../services/api";
import { currencyFormatterBrl } from "../../utils/currencyFormatter";

import { GlobalContext } from "../../context/reducer";
import { GlobalActionType } from "../../context/models";

import { Transaction } from "../../models/Transaction";

export const TableData = () => {
	const { dispatch } = useContext(GlobalContext);
	const [transactions, setTransactions] = useState<Transaction[]>([]);

	useEffect(() => {
		getTransactions().then(transactions => {
			setTransactions(transactions.data);
		});
	}, []);

	const handleOpenDetailsModal = (transaction: Transaction) => {
		dispatch({
			type: GlobalActionType.SET_SELECTED_TRANSACTION,
			payload: transaction
		});
		dispatch({
			type: GlobalActionType.SET_MODAL_OPEN,
			payload: true
		});
	};

	return (
		<ContainerStyled>
			{transactions.map(transaction => (
				<BoxDataStyled title={transaction.title} key={transaction.id}>
					<button
						type="button"
						aria-label="Open Details Details"
						onClick={() => {
							handleOpenDetailsModal(transaction);
						}}
					>
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
