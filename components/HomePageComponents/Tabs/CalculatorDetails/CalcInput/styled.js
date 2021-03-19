import styled, { css } from "styled-components";

const CalcBox = styled.div`
  /* padding: 0 0.7rem; */
  display: flex;
  border: 1px solid rgb(193, 190, 190);
  input {
    border: none;
  }
  margin: 0rem 0.6rem 0.5rem;
  border-radius: 5px;

  ${({ reverse }) =>
    reverse &&
    css`
      flex-direction: row-reverse;
      button {
        border-top-right-radius: unset;
        border-bottom-right-radius: unset;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
      }
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

const Section = styled.section`
  ${({ main }) =>
    main &&
    css`
      div + button {
        width: 100%;
        margin: 0.2rem 0.8rem 0.5rem 0.4rem;
      }
    `}
`;

export { CalcBox, Button, Section };
