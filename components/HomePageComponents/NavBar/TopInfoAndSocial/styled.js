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

  @media (min-width: 531px) {
    width: 50%;
  }
`;

const IconsContainer = styled.div`
  background-color: rgb(21, 129, 157);
  display: none;
  padding: 0.5rem 7rem;
  width: 50%;
  height: 100%;
  @media (min-width: 531px) {
    display: flex;
    justify-content: center;
    align-items: center;
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
