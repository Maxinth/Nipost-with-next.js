import styled, { css } from "styled-components";
import { IconsContainer } from "../NavBar/TopInfoAndSocial/styled";
const Container = styled.section`
  background-color: rgb(102, 102, 102);
  font-family: "Open Sans", sans-serif;
  padding: 3rem 2rem;

  align-items: center;
  @media (min-width: 467px) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    > * {
      min-height: 360px;
      margin-right: 1rem;
    }
  }
  @media (min-width: 768px) {
    > * {
      min-height: 348px;
      margin-right: 1rem;
    }
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
  }
`;

const Span = styled.span`
  color: rgb(208, 207, 207);
  text-transform: capitalize;
  font-size: 0.8rem;
  transition: color 0.2;
`;

const Heading = styled.h6`
  color: #fff;
  font-size: 1.1rem;
  transition: font-size 0.2s;
  @media (max-width: 400px) {
    font-size: 0.9rem;
  }

  /* @media (min-width: 1200px) {
    font-size: 1.1rem;
  } */
`;
const Section = styled.div`
  margin-bottom: 2rem;
`;
const ListContainer = styled.ul`
  margin: 1rem 0;
  transition: margin 0.2s;
  @media (min-width: 768px) {
    margin: unset;
  }
`;
const ListItem = styled.li`
  display: flex;
  cursor: unset;
  align-items: center;
  margin: 0.5rem 0;
  transition: all 0.2s;
  width: unset;
  text-decoration-color: transparent;
  > svg {
    font-size: 0.7rem;
    color: #fff;
    margin-right: 1rem;
  }

  ${({ doLink }) =>
    doLink &&
    css`
      cursor: pointer;

      :hover {
        ${Span} {
          color: #fff;
        }
      }
    `}
`;

const IconContainer = styled.div`
  background-color: #fff;
  border-radius: 100px;
  /* flex: 1; */
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 0.2rem;
  padding: 1rem;
  height: 40px;
  width: 40px;
  color: ${({ color }) => color};
  > svg {
    font-size: 2.5rem;
    color: inherit;
    padding: 0.3rem;
  }
`;

// Signature
const SignContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  font-family: "Raleway", sans-serif;
  ${IconContainer} {
    background-color: rgb(102, 102, 102);
    /* background-color: ghostwhite; */
    margin: 0.2rem 0.2rem;
  }
`;

const SignatureContainer = styled.section`
  padding: 1rem;
  /* font-size: 0.6rem; */
  color: #fff;
  font-weight: 700;
  background-color: rgb(102, 102, 102);
  transition: margin-top 0.2s;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 280px) {
    font-size: 0.6rem;
  }
`;

const Contact = styled.p`
  color: inherit;
  font-family: "Open Sans", sans-serif;
  text-align: center;
`;

const FooterStyled = styled.footer``;
const SocialIconsContainer = styled.div`
  ${IconsContainer} {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(102, 102, 102);
    margin-left: -2rem;
  }
`;
export {
  IconContainer,
  SignContainer,
  SignatureContainer,
  Contact,
  ListItem,
  Span,
  Container,
  Section,
  Heading,
  ListContainer,
  FooterStyled,
  SocialIconsContainer,
};
