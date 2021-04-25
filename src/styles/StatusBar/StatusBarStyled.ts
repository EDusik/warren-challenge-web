import styled from "styled-components";

export const StatusBarStyled = styled.div`
  height: 1rem;
  border-radius: 8px;
  background-color: var(--background);
  margin: 1.5rem 0 .7rem 0;

  div {
    height: 1rem;
    border-radius: 8px;
    background-color:  ${props =>
			props.title === "Movimentação interna" ? "#0D81FF" : props.title === "Depósito" ? "#1BBC58" : "#FF9A0D"};
    width: ${props => (props.title === "Movimentação interna" ? "50%" : props.title === "Depósito" ? "100%" : "5%")};
  }
`;
