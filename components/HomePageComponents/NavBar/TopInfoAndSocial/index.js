import React from "react";
import { Info, Container } from "./styled";
import SocialIcons from "./SocialIcons";
import { useGlobalContext } from "../../../context";

const NavTopInfoAndSocial = () => {
  const { handleMouseOut: handleMouseEnter } = useGlobalContext();

  return (
    <Container onMouseEnter={handleMouseEnter}>
      <Info>Contact me on +234 902 428 2995</Info>
      <SocialIcons />
    </Container>
  );
};

export default NavTopInfoAndSocial;
