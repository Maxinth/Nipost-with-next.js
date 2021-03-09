import React from "react";
import NavOnMobile from "./NavOnMobile";
import NavOnLargerScreens from "./NavOnLargerScreens";
import { Nav } from "./styled";

const NavMain = () => {
  return (
    <Nav>
      <NavOnMobile />
      <NavOnLargerScreens />
    </Nav>
  );
};

export default NavMain;
