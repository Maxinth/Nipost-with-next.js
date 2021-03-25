import styled, { css } from "styled-components";

const BannerContainer = styled.section`
  width: 100%;
  display: flex;
  position: relative;
`;
const BannerImage = styled.img`
  object-fit: contain;
  display: block;
  width: 100%;
  position: absolute;
  position: absolute;
  left: 0;
  top: 0;
  transition: opacity 0.7s ease-in;
  /* opacity: 0; */
  opacity: ${({ match }) => (match === "current" ? 1 : 0)};

  // make visible ONLY when the position is "activeSlide"
  ${(props) =>
    props.position === "activeSlide" &&
    css`
      opacity: 1;
    `}
`;

const PickUpBox = styled.div`
  font-family: "Open Sans", sans-serif;
  color: #fff;
  position: absolute;
  top: 50px;
  bottom: 50px;
  right: 200px;
  left: 90px;
  display: flex;
  flex-direction: column;
  opacity: 0;
  /* opacity: ${({ showContents }) => (showContents ? 1 : 0)}; */
  transition: transform 0.2s;
  transform: translateX(-100vw);
  transform: ${({ showContents }) =>
    showContents ? "translateX(0px)" : "translateX(-100vw)"};

  ${({ showContents }) =>
    showContents &&
    css`
      opacity: 1;
    `}
`;
const Header = styled.h1`
  font-size: calc(1.2rem + 2vw);
  text-transform: uppercase;
  margin-bottom: 0.5rem;
  line-height: 1.7;
  transition: font-size 0.2s;
  @media (max-width: 556px) {
    font-size: 0.6rem;
    display: none;
  }
  @media (min-width: 712px) {
    display: block;
  }
  @media (min-width: 1100px) {
    font-size: 3.5rem;
  }
  ${({ md }) =>
    md &&
    css`
      font-size: calc(0.4rem + 2vw);
      @media (max-width: 500px) {
        font-size: 0.4rem;
      }
      @media (min-width: 1100px) {
        font-size: 1.5rem;
      }
    `}
`;

const Btn = styled.button`
  text-transform: capitalize;
  color: #fff;
  padding: 1rem 1.5rem;
  border-radius: 9px;
  background-color: #de3939;
  width: 150px;
  border: none;
  outline: none;
  font-size: 1.2rem;
  margin-top: 1rem;
  transition: all 0.2s;
  opacity: 0;
  :hover {
    background-color: #fff;
    color: #333;
  }

  @media (min-width: 960px) {
    opacity: 1;
  }
`;

const Box = styled.div``;
export { BannerContainer, BannerImage, PickUpBox, Btn, Header, Box };
