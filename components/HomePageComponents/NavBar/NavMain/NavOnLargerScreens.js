import React from "react";
import { Section } from "./styled";
import Logo from "./Logo";

const NavOnLargerScreens = () => {
  return (
    <Section largerScreens>
      <Logo />
    </Section>
  );
};

export default NavOnLargerScreens;
