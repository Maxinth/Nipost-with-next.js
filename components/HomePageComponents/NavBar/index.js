import React from "react";
import styled from "styled-components";
import NavTopInfoAndSocial from "./TopInfoAndSocial";
const NavContainer = styled.section`
  color: red;
`;
const Navbar = () => {
  return (
    <NavContainer>
      <NavTopInfoAndSocial />
    </NavContainer>
  );
};

export default Navbar;
