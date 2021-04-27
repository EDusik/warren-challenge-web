import { useContext } from "react";
import { FcGenericSortingAsc as IconAsc, FcGenericSortingDesc as IconDesc } from "react-icons/fc";
import { GlobalActionType } from "../../../context/models";
import { GlobalContext } from "../../../context/reducer";
import { SortButtonStyled } from "../../../styles/SortButton/SortButtonStyled";

export const SortButton = () => {
	const { context, dispatch } = useContext(GlobalContext);

	const handleSortData = () => {
		if (context.sortType === "asc") {
			dispatch({
				type: GlobalActionType.SET_SORT_TYPE,
				payload: "desc"
			});
		} else {
			dispatch({
				type: GlobalActionType.SET_SORT_TYPE,
				payload: "asc"
			});
		}
	};

	return (
		<SortButtonStyled
			type="button"
			id="sort-button"
			name="sort-button"
			date-testid="sort-button"
			aria-label="Order by"
			onClick={handleSortData}
		>
			{context.sortType === "desc" ? <IconAsc title="Asc" /> : <IconDesc title="Desc" />}
		</SortButtonStyled>
	);
};
