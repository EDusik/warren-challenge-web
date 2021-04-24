import { NavbarStyled } from "../../styles/Navbar/NavbarStyled";
import { ContainerStyled } from "../../styles/Container/ContainerStyled";

export const Navbar = () => {
	return (
		<ContainerStyled>
			<NavbarStyled data-testid="logo">
				Edu<span>warren</span>
			</NavbarStyled>
		</ContainerStyled>
	);
};
