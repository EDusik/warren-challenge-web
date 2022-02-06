import React, { useContext } from "react";

import { GlobalContext } from "../../../context/reducer";
import { GlobalActionType } from "../../../context/models";

import { TransactionBoxStyled } from "../../../styles/TransactionBox/TransactionBoxStyled";
import { ContainerStyled } from "../../../styles/Container/ContainerStyled";
import { dateFormatter } from "../../../utils/dateFormatter";

import { Transaction } from "../../../models/Transaction";
import { currencyFormatterBrl } from "../../../utils/currencyFormatter";

interface Props {
	data: Transaction[];
}

export const TransactionBox: React.FC<Props> = ({ data }) => {
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
				<TransactionBoxStyled data-testid="transaction-box" title={transaction.title} key={transaction.id}>
					<button
						type="button"
						aria-label="Open Details Details"
						onClick={() => {
							handleOpenDetailsModal(transaction);
						}}
					>
						<h1 data-testid="transaction-title">{transaction.title}</h1>
						<p data-testid="transaction-description">{transaction.description}</p>
						<div>
							<p data-testid="transaction-status">
								<b>{transaction.status}</b>
							</p>
							<time data-testid="transaction-data">{dateFormatter(transaction.date)}</time>
						</div>
						<span data-testid="transaction-amount">{currencyFormatterBrl(transaction.amount)}</span>
					</button>
				</TransactionBoxStyled>
			))}
		</ContainerStyled>
	);
};
