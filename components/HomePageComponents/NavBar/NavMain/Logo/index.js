import React from "react";
import { LogoContainer, LogoImage } from "./styled";
import LogoTexts from "./LogoTexts";

const Logo = () => {
  return (
    <LogoContainer>
      <LogoImage src="./logoMain.png" alt="logo" />
      <LogoTexts />
    </LogoContainer>
  );
};

export default Logo;
