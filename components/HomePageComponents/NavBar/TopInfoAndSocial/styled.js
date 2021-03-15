import styled, { css } from "styled-components";

const Info = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.7rem;
  font-weight: 600;
  background-color: rgb(105, 105, 105);
  width: 100%;
  transition: width 0.2s;
  text-align: center;

  @media (min-width: 531px) {
    width: 50%;
  }
  @media (min-width: 900px) {
    width: 65%;
  }
`;

const IconsContainer = styled.div`
  background-color: rgb(21, 129, 157);
  display: none;
  padding: 1.1rem 7rem;
  width: 50%;
  height: 100%;
  transition: background-color 0.2s;
  @media (min-width: 531px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (min-width: 815px) {
    background-color: ghostwhite;
  }

  @media (min-width: 900px) {
    width: 35%;
  }
`;

const IconContainer = styled.span`
  background-color: #fff;
  border-radius: 100px;
  padding: 0.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 0.2rem;

  ${({ color }) =>
    color &&
    css`
      > svg {
        color: ${color};
        font-size: 1.5rem;
      }
    `}
`;

const Container = styled.section`
  color: #fff;
  font-family: "Open Sans", sans-serif;
  font-size: 0.9rem;
  display: flex;
  height: 40px;
`;

export { Info, IconContainer, IconsContainer, Container };
