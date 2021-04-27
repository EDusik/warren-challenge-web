import styled from "styled-components";

export const SortButtonStyled = styled.button`
  height: 46px;
  width: 46px;
  padding: 12px;
  justify-content: right;
  display: flex;
  align-items: center;
  border: none;
  background-color: transparent;  
  font-size: 1.5rem;
  filter: 0.2s;

  &:hover{
    filter: brightness(0.8);
  }
`;
