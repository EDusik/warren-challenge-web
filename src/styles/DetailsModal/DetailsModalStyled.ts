import styled from "styled-components";

export const DetailsModalStyled = styled.div`
  background: rgba(245, 243, 250, 0.9);
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;

	display: flex;
	justify-content: center;
	align-items: center;

  .detailsModalBody {
    background: var(--white);
    width: 100%;
    max-width: 660px;
    min-height: 360px;
    padding: 2.5rem;
    border-radius: 12px;
    text-align: justify;
    position: relative;

    p, b, span {
      display: flex;
    }

    h1 { 
      color: ${props =>
				props.title === "Movimentação interna" ? "#0D81FF" : props.title === "Depósito" ? "#1BBC58" : "#FF9A0D"};
    }

    b {
      font-size: 1.5rem;
      font-weight: 500; margin-top: 1rem;
      margin-top: 2rem;
    }

    p {
      font-size: 1.2rem;
      span {
        font-weight: 600;
        justify-content: flex-end;
        flex: 1;
      }
    }

    button {
      position: absolute;
      right: 1rem;
      top: 1.2rem;
      background: transparent;
      border: 0;
      font-size: 0;
      color: var(--text);
      filter: 0.2s;
      svg {
        font-size: 28px;
      }
      &:hover {
        filter: brightness(0.8);
      }
    }
  }

  .status {
    display: flex;
    div {
      flex: 1 1 33.3333333%;
      .center{
        justify-content: center;
      }

      .right{
        justify-content: flex-end;
      }
    }
  }
`;
