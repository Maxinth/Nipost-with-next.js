import styled, { css } from "styled-components";
import { LogoContainer } from "./Logo/styled";

const Nav = styled.nav`
  position: sticky;
`;

const Section = styled.section`
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  ${LogoContainer} {
    transition: margin-left 0.2s;
    margin-left: 1rem;
  }
  ${({ mobile }) =>
    mobile &&
    css`
      @media (min-width: 300px) {
        ${LogoContainer} {
          margin-left: calc(4rem + 10vw);
        }
      }
      @media (min-width: 500px) {
        ${LogoContainer} {
          margin-left: calc(6rem + 10vw);
        }
      }
      @media (min-width: 600px) {
        ${LogoContainer} {
          margin-left: calc(8rem + 15vw);
        }
      }
      @media (min-width: 760px) {
        display: none;
      }
    `}

  ${({ largerScreens }) =>
    largerScreens &&
    css`
      display: none;
      @media (min-width: 760px) {
        display: flex;
        justify-content: space-between;
      }
    `}
`;

const BaseLink = styled.a`
  margin-right: 0.5rem;
  font-family: "Montserrat", sans-serif;
  text-transform: uppercase;
  font-size: 0.6rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s;
  padding: 1rem 0;
  /* width: 100%; */
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    color: rgb(169, 60, 4);
    transform: translateY(10px);
  }
`;

const LinksContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  margin-left: 4rem;
`;

export { Nav, Section, LinksContainer, BaseLink };
