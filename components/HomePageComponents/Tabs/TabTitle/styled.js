import styled, { css } from "styled-components";

const Span = styled.span`
  margin-left: 0.1rem;
  font-weight: 600;
  transition: color 0.2;
  :hover {
    color: rgb(21, 129, 157);
  }
`;

const TabBox = styled.div`
  display: flex;
  align-items: center;
  font-family: "Open Sans", sans-serif;
  font-size: 0.4rem;
  padding: 0.6rem 0.5rem 0.5rem;
  cursor: pointer;
  transition: background-color 0.2s;
  text-transform: uppercase;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  text-align: center;

  @media (max-width: 280px) {
    font-size: 0.2rem;
  }
  @media (min-width: 500px) {
    padding: 1.2rem 1rem 1rem;
    font-size: 0.7rem;
  }

  > svg {
    font-size: 0.9rem;
  }

  ${({ isCurrentItem }) =>
    isCurrentItem &&
    css`
      background-color: #fff;
      border: 1px solid rgb(226, 226, 226);
      border-bottom: 1px solid transparent;
      ${Span} {
        color: rgb(21, 129, 157);
      }
    `}
`;

const TabSection = styled.section`
  display: flex;
  align-items: center;
`;

export { Span, TabBox, TabSection };
