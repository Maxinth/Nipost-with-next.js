import React from "react";
import styled from "styled-components";
import NavMain from "./NavMain";
import NavTopInfoAndSocial from "./TopInfoAndSocial";
import NavLinksDropDown from "./NavLinksDropDown";

const NavContainer = styled.section`
  /* position: relative; */
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 300;
`;

const Navbar = () => {
  return (
    <NavContainer>
      <NavTopInfoAndSocial />
      <NavMain />
      <NavLinksDropDown />
    </NavContainer>
  );
};

export default Navbar;
