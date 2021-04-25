import styled from "styled-components";

export const DetailsModalStyled = styled.div`
  background: rgba(245, 243, 250, 0.8);
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;

	display: flex;
	justify-content: center;
	align-items: center;

  div {
    background: var(--white);
    width: 100%;
    max-width: 800px;
    min-height: 400px;
    padding: 2rem 3rem;
    border-radius: 12px;
    text-align: center;
    position: relative;

    button {
      position: absolute;
      right: 0.5rem;
      top: 0.5rem;
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
`;
