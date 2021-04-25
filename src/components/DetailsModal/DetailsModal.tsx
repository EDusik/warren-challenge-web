import { useContext } from "react";
import { GlobalActionType } from "../../context/models";
import { GlobalContext } from "../../context/reducer";

import { DetailsModalStyled } from "../../styles/DetailsModal/DetailsModalStyled";

import { AiOutlineClose as CloseIcon } from "react-icons/ai";

export const DetailsModal = () => {
	const { dispatch } = useContext(GlobalContext);

	const handleCloseDetailsModal = () => {
		dispatch({
			type: GlobalActionType.SET_MODAL_OPEN,
			payload: false
		});
	};

	return (
		<DetailsModalStyled>
			<div>
				<h1>Details Modal</h1>
				<button type="button" aria-label="Close Details Modal" onClick={handleCloseDetailsModal}>
					<CloseIcon title="Close" />
				</button>
			</div>
		</DetailsModalStyled>
	);
};
