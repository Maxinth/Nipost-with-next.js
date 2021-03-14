import React from "react";
import {
  AboutDropDown,
  ServicesDropDown,
  MediaDropDown,
  QuickToolsDropDown,
} from "./LinksDropDowns";

const NavLinksDropDown = () => {
  return (
    <>
      <AboutDropDown />
      <ServicesDropDown />
      <MediaDropDown />
      <QuickToolsDropDown />
    </>
  );
};

export default NavLinksDropDown;
