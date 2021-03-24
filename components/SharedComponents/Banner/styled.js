import styled, { css } from "styled-components";

const Section = styled.section`
  font-family: "Open Sans", sans-serif;
  position: relative;
  /* padding: 2rem; */
  ${({ image }) =>
    image &&
    css`
      background-image: url(${image});
      background-position: 50%, 50%;
      object-fit: cover;
      min-height: 200px;
    `}
`;
const BannerImage = styled.img`
  object-fit: cover;
  width: 100%;
  display: block;
  min-height: 200px;
`;

const Heading = styled.h1`
  color: #fff;
  position: absolute;
  top: 90px;
  left: 20px;
  font-size: 1.2rem;
  font-weight: 700;
  text-transform: uppercase;
  transition: all 0.2s;
  @media (min-width: 500px) {
    font-size: 2rem;
  }
  @media (min-width: 900px) {
    font-size: 3rem;
    top: 60px;
  }
`;

export { Section, BannerImage, Heading };
