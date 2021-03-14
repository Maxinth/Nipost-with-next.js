import React from "react";
import {
  AboutDropDown,
  ServicesDropDown,
  MediaDropDown,
} from "./LinksDropDowns";

const NavLinksDropDown = () => {
  return (
    <div>
      <AboutDropDown />
      <ServicesDropDown />
      <MediaDropDown />
    </div>
  );
};

export default NavLinksDropDown;
