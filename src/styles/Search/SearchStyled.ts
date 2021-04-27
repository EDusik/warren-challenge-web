import styled from "styled-components";

export const SearchStyled = styled.input`
  margin: 1rem;
  padding: 1rem;
  border-radius: 12px;
  height: 45px;
  border: none;
  width: 100%;
  font-size: 1rem;

  &:focus {
    box-shadow: 1px 1px 8px 1px var(--border);
    outline:none;
  }
`;
