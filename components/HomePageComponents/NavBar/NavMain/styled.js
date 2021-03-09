import styled, { css } from "styled-components";
import { LogoContainer } from "./Logo/styled";

const Nav = styled.nav`
  position: sticky;
`;

const Section = styled.section`
  padding: 0.5rem 1rem;
  display: flex;
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
        display: block;
      }
    `}
`;

const LinksContainer = styled.div``;
export { Nav, Section, LinksContainer };
