import React from "react";
import styled from "styled-components";
import NavMain from "./NavMain";
import NavTopInfoAndSocial from "./TopInfoAndSocial";

const NavContainer = styled.section``;
const Navbar = () => {
  return (
    <NavContainer>
      <NavTopInfoAndSocial />
      <NavMain />
    </NavContainer>
  );
};

export default Navbar;
