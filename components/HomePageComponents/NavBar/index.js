import React from "react";
import styled from "styled-components";
import NavMain from "./NavMain";
import NavTopInfoAndSocial from "./TopInfoAndSocial";
import NavLinksDropDown from "./NavLinksDropDown";

const NavContainer = styled.section`
  position: relative;
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
