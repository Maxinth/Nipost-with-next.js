import React from "react";
import { Section } from "./styled";
import Logo from "./Logo";
import NavigationLinks from "./NavigationLinks";
import { useGlobalContext } from "../../../context";

const NavOnLargerScreens = () => {
  const { handleMouseOut } = useGlobalContext();
  return (
    <Section
      largerScreens
      // onMouseLeave={handleMouseOut}
    >
      <Logo />
      <NavigationLinks />
    </Section>
  );
};

export default NavOnLargerScreens;
