import { useContext, useEffect, useState } from "react";
import { GlobalActionType } from "../../context/models";
import { GlobalContext } from "../../context/reducer";

import { setStatusBar } from "../../utils/modalFormatter";
import { getTransaction } from "../../services/api";

import { DetailsModalStyled } from "../../styles/DetailsModal/DetailsModalStyled";
import { currencyFormatterBrl } from "../../utils/currencyFormatter";
import { StatusBarStyled } from "../../styles/StatusBar/StatusBarStyled";

import { Transaction } from "../../models/Transaction";
import { AiOutlineClose as CloseIcon } from "react-icons/ai";

export const DetailsModal = () => {
	const { context, dispatch } = useContext(GlobalContext);
	const [selectedTransaction, setSelectedTransaction] = useState<Transaction>(
		context.selectedTransaction as Transaction
	);

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

	return (
		<DetailsModalStyled title={selectedTransaction.title}>
			<div className="details-modal-body">
				<h1 data-testid="modal-title">{selectedTransaction.title}</h1>
				<div className="bar">
					<StatusBarStyled title={selectedTransaction.title}>
						<div></div>
					</StatusBarStyled>
				</div>
				<div className="status" data-testid="modal-status">
					<div>{setStatusBar(selectedTransaction.title)}</div>
				</div>
				<b data-testid="modal-transferred-from">Transferido de</b>
				<hr />
				<p data-testid="modal-from">
					{selectedTransaction.from}
					<span data-testid="modal-amount-from">{currencyFormatterBrl(selectedTransaction.amount)}</span>
				</p>
				<b data-testid="modal-transferred-to">Para</b>
				<hr />
				<p data-testid="modal-to">
					{selectedTransaction.to}
					<span data-testid="modal-amount-to">{currencyFormatterBrl(selectedTransaction.amount)}</span>
				</p>
				<button
					type="button"
					aria-label="Close Details Modal"
					data-testid="modal-close-button"
					onClick={handleCloseDetailsModal}
				>
					<CloseIcon title="Close" />
				</button>
			</div>
		</DetailsModalStyled>
	);
};
