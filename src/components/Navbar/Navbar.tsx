import { NavbarStyled } from "../../styles/Navbar/NavbarStyled";
import { ContainerStyled } from "../../styles/Container/ContainerStyled";

import { SortButton } from "./SortButton/SortButton";

export const Navbar = () => {
	return (
		<ContainerStyled>
			<NavbarStyled data-testid="logo">
				<div>
					Edu<span>warren</span>
				</div>
				<SortButton />
			</NavbarStyled>
		</ContainerStyled>
	);
};
