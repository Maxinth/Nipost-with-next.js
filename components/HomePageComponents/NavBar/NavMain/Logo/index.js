import React from "react";
import { Container, LogoImage } from "./styled";
import LogoTexts from "./LogoTexts";

const Logo = () => {
  return (
    <Container>
      <LogoImage src="./logoMain.png" alt="logo" />
      <LogoTexts />
    </Container>
  );
};

export default Logo;
