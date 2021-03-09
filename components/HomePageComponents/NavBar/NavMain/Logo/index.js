import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  margin-top: 3rem;
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
  margin-left: 0.8rem;
`;
const LogoText = styled.h4`
  text-transform: uppercase;
  font-family: "Open Sans", sans-serif;
  color: #333;
  font-size: 0.6rem;
  font-weight: 700;
`;
const Logo = () => {
  return (
    <Container>
      <LogoImage src="./logoMain.png" alt="logo" />
      <Box>
        <LogoText>Nigerian</LogoText>
        <LogoText>Postal</LogoText>
        <LogoText>service</LogoText>
      </Box>
    </Container>
  );
};

export default Logo;
