import React from "react";
import { Section } from "./styled";
import Logo from "./Logo";
import NavigationLinks from "./NavigationLinks";

const NavOnLargerScreens = () => {
  return (
    <Section largerScreens>
      <Logo />
      <NavigationLinks />
    </Section>
  );
};

export default NavOnLargerScreens;
