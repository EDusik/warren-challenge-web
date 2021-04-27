import styled from "styled-components";

export const FooterStyled = styled.div`
  color: var(--text);
  font-size: 1rem;
  font-weight: 500;
  padding: 1rem;
  width: 100%;
  text-align: center;
  filter: 0.2s;

  a {
    font-weight: 600;
    &:hover {
      filter: brightness(0.8);
    }
  }
`;
