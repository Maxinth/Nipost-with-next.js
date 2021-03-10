import React from "react";
import { IconButton } from "@material-ui/core";
import { Hamburger } from "./styled";
import { useGlobalContext } from "../../../context";

const NavMenuIcon = () => {
  const { toggleMobileMenu } = useGlobalContext();
  return (
    <IconButton onClick={toggleMobileMenu}>
      <Hamburger />
    </IconButton>
  );
};

export default NavMenuIcon;
