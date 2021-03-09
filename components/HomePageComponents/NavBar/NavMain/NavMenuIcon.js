import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import { IconButton } from "@material-ui/core";
import styled from "styled-components";

const Hamburger = styled(MenuIcon)`
  font-size: 2.1rem !important;
  color: black;
`;

const NavMenuIcon = () => {
  return (
    <IconButton>
      <Hamburger />
    </IconButton>
  );
};

export default NavMenuIcon;
