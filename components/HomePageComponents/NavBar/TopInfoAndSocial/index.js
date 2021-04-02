import React from "react";
import { Info, Container } from "./styled";
import SocialIcons from "./SocialIcons";
import { useGlobalContext } from "../../../context";

const NavTopInfoAndSocial = () => {
  const { handleMouseOut: handleMouseEnter } = useGlobalContext();

  return (
    <Container onMouseEnter={handleMouseEnter}>
      <Info>Say "Hi" at tunde.j.adeleye@gmail.com</Info>
      <SocialIcons />
    </Container>
  );
};

export default NavTopInfoAndSocial;
