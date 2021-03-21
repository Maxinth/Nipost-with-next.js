import React from "react";
import { MenuBox, Span } from "./styled";
import DesktopMacIcon from "@material-ui/icons/DesktopMac";

const MenuOptions = () => {
  return (
    <MenuBox>
      <DesktopMacIcon />
      <Span>digital address system</Span>
    </MenuBox>
  );
};

export default MenuOptions;
