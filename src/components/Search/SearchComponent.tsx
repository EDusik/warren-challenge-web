import { useContext } from "react";
import { GlobalContext } from "../../context/reducer";

import { SearchStyled } from "../../styles/Search/SearchStyled";
import { ContainerStyled } from "../../styles/Container/ContainerStyled";
import { GlobalActionType } from "../../context/models";

export const Search = () => {
	const { dispatch } = useContext(GlobalContext);

	const onChangeSearchValue = (value: string) => {
		dispatch({
			type: GlobalActionType.SET_SEARCH_VALUE,
			payload: value
		});
	};

	return (
		<ContainerStyled>
			<SearchStyled
				type="text"
				aria-label="search"
				id="search"
				name="search"
				title="search"
				placeholder="Search by Status or Title..."
				onChange={event => onChangeSearchValue(event.target.value)}
			/>
		</ContainerStyled>
	);
};
