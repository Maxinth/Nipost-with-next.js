import React from "react";
import Logo from "./Logo";
import NavMenuIcon from "./NavMenuIcon";
import { Nav, Section } from "./styled";

const NavMain = () => {
  return (
    <Nav>
      <Section mobile>
        <NavMenuIcon />
        <Logo />
      </Section>
    </Nav>
  );
};

export default NavMain;
