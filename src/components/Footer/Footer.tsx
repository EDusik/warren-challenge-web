import { FooterStyled } from "../../styles/Footer/FooterStyled";
import { ContainerStyled } from "../../styles/Container/ContainerStyled";

export const Footer = () => {
	return (
		<ContainerStyled>
			<FooterStyled data-testid="footer">
				Develop by 👨‍💻{" "}
				<a href="https://github.com/EDusik" rel="noreferrer" target="_blank" data-testid="footer-anchor">
					Eduardo Dusik
				</a>
			</FooterStyled>
		</ContainerStyled>
	);
};
