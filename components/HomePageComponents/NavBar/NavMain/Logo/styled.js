import styled from "styled-components";

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  width: 100px;
`;
const LogoImage = styled.img`
  object-fit: contain;
  width: 100px;
  height: 50px;
  display: block;
`;

const Box = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 0.4rem;
`;
const LogoText = styled.h4`
  text-transform: uppercase;
  font-family: "Open Sans", sans-serif;
  color: black;
  font-size: 0.6rem;
  font-weight: 700;
`;

export { LogoContainer, LogoImage, Box, LogoText };
