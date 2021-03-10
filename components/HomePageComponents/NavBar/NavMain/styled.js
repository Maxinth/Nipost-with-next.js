import styled, { css } from "styled-components";
import { LogoContainer } from "./Logo/styled";
import { LogoImage } from "./Logo/styled";
import MenuIcon from "@material-ui/icons/Menu";

const Nav = styled.nav`
  position: sticky;
  /* border: 2px solid red; */
  background: #fff;
  box-shadow: 1px 2px 6px grey;
`;

const Section = styled.section`
  /* padding: 0.5rem 1rem; */
  display: flex;
  align-items: center;
  ${LogoContainer} {
    transition: margin-left 0.2s;
    margin-left: 1rem;
  }
  ${({ mobile }) =>
    mobile &&
    css`
      > button {
        margin-left: 0.2rem;
      }
      @media (min-width: 300px) {
        ${LogoContainer} {
          margin-left: calc(4rem + 10vw);
        }
      }

      /* @media (max-width: 360px) {
        ${LogoContainer} {
          margin-left: 3rem;
        }
      } */
      /* @media (max-width: 411px) {
        ${LogoContainer} {
          margin-left: 5rem;
        }
      } */
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
      @media (min-width: 780px) {
        display: none;
      }
    `}

  ${({ largerScreens }) =>
    largerScreens &&
    css`
      display: none;
      padding: 0.5rem 0.1rem;
      max-width: 1200px;
      margin: 0 auto;
      ${LogoContainer} {
        margin-left: 0.2rem;
      }
      @media (min-width: 780px) {
        display: flex;
        justify-content: space-between;
      }
    `}
`;

const BaseLink = styled.a`
  margin-right: 0.9rem;
  font-family: "Montserrat", sans-serif;
  text-transform: uppercase;
  font-size: 0.8rem;
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

  @media (min-width: 992px) {
    font-weight: 400;
  }
  @media (min-width: 1065px) {
    text-transform: capitalize;
  }
`;

const LinksContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-left: 5rem;
  transition: margin-left 0.2s;
`;

const ArmsImage = styled(LogoImage)`
  height: 40px;
`;

const Hamburger = styled(MenuIcon)`
  font-size: 2.1rem !important;
  color: black;
`;

export { Nav, Section, LinksContainer, BaseLink, ArmsImage, Hamburger };
