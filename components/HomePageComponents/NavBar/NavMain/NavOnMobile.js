import React from "react";
import Logo from "./Logo";
import NavMenuIcon from "./NavMenuIcon";
import { Section } from "./styled";

const NavOnMobile = () => {
  return (
    <Section mobile>
      <NavMenuIcon />
      <Logo />
    </Section>
  );
};

export default NavOnMobile;
