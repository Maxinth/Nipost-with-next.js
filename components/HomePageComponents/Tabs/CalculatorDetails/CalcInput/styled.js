import styled, { css } from "styled-components";

const CalcBox = styled.div`
  /* padding: 0 0.7rem; */
  display: flex;
  border: 1px solid rgb(193, 190, 190);
  input {
    border: none;
  }
  margin: 0 0.6rem;
  border-radius: 5px;

  ${({ reverse }) =>
    reverse &&
    css`
      flex-direction: row-reverse;
    `}
`;

const Button = styled.button`
  border: none;
  outline: none;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  padding: 0.2rem 1rem;
  color: black;
`;

export { CalcBox, Button };
