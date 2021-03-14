import React from "react";
import {
  AboutDropDown,
  ServicesDropDown,
  MediaDropDown,
  QuickToolsDropDown,
  ContactDetails,
} from "./LinksDropDowns";

const NavLinksDropDown = () => {
  return (
    <>
      <AboutDropDown />
      <ServicesDropDown />
      <MediaDropDown />
      <QuickToolsDropDown />
      <ContactDetails />
    </>
  );
};

export default NavLinksDropDown;
