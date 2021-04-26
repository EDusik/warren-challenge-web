import React, { useContext } from "react";

import { BoxDataStyled } from "../../../styles/BoxData/BoxDataStyled";
import { currencyFormatterBrl } from "../../../utils/currencyFormatter";

import { GlobalContext } from "../../../context/reducer";
import { GlobalActionType } from "../../../context/models";

import { Transaction } from "../../../models/Transaction";

import { ContainerStyled } from "../../../styles/Container/ContainerStyled";

interface Props {
	data: Transaction[];
}

export const TableBox: React.FC<Props> = ({ data }) => {
	const { dispatch } = useContext(GlobalContext);

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
			{data.map((transaction: Transaction) => (
				<BoxDataStyled title={transaction.title} key={transaction.id}>
					<button
						type="button"
						aria-label="Open Details Details"
						onClick={() => {
							handleOpenDetailsModal(transaction);
						}}
					>
						<h1 data-testid="transaction-title">{transaction.title}</h1>
						<p data-testid="transaction-description">{transaction.description}</p>
						<b data-testid="transaction-status">{transaction.status}</b>
						<span data-testid="transaction-amount">{currencyFormatterBrl(transaction.amount)}</span>
					</button>
				</BoxDataStyled>
			))}
		</ContainerStyled>
	);
};
