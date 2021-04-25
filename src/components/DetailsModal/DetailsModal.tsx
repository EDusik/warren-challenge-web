import React, { useContext, useEffect, useState } from "react";
import { GlobalActionType } from "../../context/models";
import { GlobalContext } from "../../context/reducer";

import { getTransaction } from "../../services/api";
import { Transaction } from "../../models/Transaction";

import { DetailsModalStyled } from "../../styles/DetailsModal/DetailsModalStyled";
import { AiOutlineClose as CloseIcon } from "react-icons/ai";
import { currencyFormatterBrl } from "../../utils/currencyFormatter";
import { StatusBarStyled } from "../../styles/StatusBar/StatusBarStyled";

export const DetailsModal = () => {
	const { context, dispatch } = useContext(GlobalContext);
	const [selectedTransaction, setSelectedTransaction] = useState<Transaction>(
		context.selectedTransaction as Transaction
	);

	console.log(selectedTransaction);

	useEffect(() => {
		getTransaction(context.selectedTransaction.id).then(transaction => {
			setSelectedTransaction(transaction.data);
		});
	}, [context.selectedTransaction.id]);

	const handleCloseDetailsModal = () => {
		dispatch({
			type: GlobalActionType.SET_MODAL_OPEN,
			payload: false
		});
	};

	const setStatusBar = (title: string) => {
		switch (title) {
			case "Resgate":
				return <p>Solicitada</p>;
			case "Movimentação interna":
				return <p className="center">Processando</p>;
			case "Depósito":
				return <p className="right">Concluída</p>;
			default:
				return <p className="center">{title}</p>;
		}
	};

	return (
		<DetailsModalStyled title={selectedTransaction.title}>
			<div className="detailsModalBody">
				<h1>{selectedTransaction.title}</h1>
				<div className="bar">
					<StatusBarStyled title={selectedTransaction.title}>
						<div></div>
					</StatusBarStyled>
				</div>
				<div className="status">
					<div>{setStatusBar(selectedTransaction.title)}</div>
				</div>
				<b>Transferido de</b>
				<hr />
				<p>
					{selectedTransaction.from}
					<span>{currencyFormatterBrl(selectedTransaction.amount)}</span>
				</p>
				<b>Para</b>
				<hr />
				<p>
					{selectedTransaction.to}
					<span>{currencyFormatterBrl(selectedTransaction.amount)}</span>
				</p>
				<button type="button" aria-label="Close Details Modal" onClick={handleCloseDetailsModal}>
					<CloseIcon title="Close" />
				</button>
			</div>
		</DetailsModalStyled>
	);
};
