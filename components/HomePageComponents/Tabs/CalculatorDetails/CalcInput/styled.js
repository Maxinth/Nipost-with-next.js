import styled, { css } from "styled-components";

const CalcBox = styled.div`
  /* padding: 0 0.7rem; */
  display: flex;
  border: 1px solid rgb(193, 190, 190);
  input {
    border: none;
  }
  border-radius: 5px;
  margin: 0rem 0.6rem 0.5rem;

  @media (min-width: 768px) {
    margin-right: unset;

    :nth-child(2) {
      margin-left: unset;
      margin-right: 0.6rem;
    }
  }

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

const Section = styled.section``;

const CostSection = styled.section`
  @media (min-width: 768px) {
    display: grid;
    gap: 5px;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }

  @media (min-width: 992px) {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
`;

const Box = styled.div`
  padding: 0.5rem 0.7rem;
  button {
    width: 100%;
    font-weight: 700;
  }
`;

export { CalcBox, Button, Section, Box, CostSection };
