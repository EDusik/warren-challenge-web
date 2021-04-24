import { FooterStyled } from "../../styles/Footer/FooterStyled";
import { ContainerStyled } from "../../styles/Container/ContainerStyled";

export const Footer = () => {
	return (
		<ContainerStyled>
			<FooterStyled data-testid="footer">
				Develop by 👨‍💻 <b>Eduardo Dusik</b>
			</FooterStyled>
		</ContainerStyled>
	);
};
