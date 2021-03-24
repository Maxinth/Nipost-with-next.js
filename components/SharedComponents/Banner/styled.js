import styled from "styled-components";

const Section = styled.section`
  font-family: "Open Sans", sans-serif;
  position: relative;
`;
const BannerImage = styled.img`
  object-fit: cover;
  width: 100%;
  display: block;
`;

const Heading = styled.h1`
  color: #fff;
  position: absolute;
  top: 30px;
  left: 0;
  text-transform: uppercase;
`;

export { Section, BannerImage, Heading };
