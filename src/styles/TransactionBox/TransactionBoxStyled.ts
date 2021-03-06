import styled from "styled-components";

export const TransactionBoxStyled = styled.div`
  flex: 1 1 19rem;
  padding: 1rem;
  margin: 1rem;
  height: 200px;
  background-color: var(--white);
  border-radius: 12px;

  button {
    justify-content: center;
    border: none;
    background-color: transparent;
    width: 100%;
    cursor: pointer;
    height: 100%;
    display: flex;           
    flex-direction: column;
    line-height: 2;
    transition: 0.2s;
    
    h1 {
      font-size: 1.5rem;
      font-weight: 500;
      color:  ${props =>
				props.title === "Movimentação interna" ? "#0D81FF" : props.title === "Depósito" ? "#1BBC58" : "#FF9A0D"};
    }

    p {
      font-size: 1rem;
      font-weight: 400;
      color: var(--text);
      text-align: justify;
    }

    b {
      font-size: 1rem;
      font-weight: 400;
      color: var(--dark);
    }

    span {
      font-size: 1.2rem;
      font-weight: 400;
      color: var(--dark);
    }

    div {
      display: flex;
      justify-content: space-between;
      width: 100%;
    }
  }

  &:hover {
    box-shadow: 1px 1px 8px 1px var(--border);
  }
`;
