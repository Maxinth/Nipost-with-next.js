import React from "react";
import {
  AboutDropDown,
  ServicesDropDown,
  MediaDropDown,
  QuickToolsDropDown,
  ContactDetails,
  SearchDropDown,
} from "./LinksDropDowns";
import { useGlobalContext } from "../../../context";

const NavLinksDropDown = () => {
  const { itemInView } = useGlobalContext();
  const {
    aboutUs,
    services,
    media,
    quickTools,
    contact,
    searchIcon,
  } = itemInView;
  return (
    <>
      {aboutUs && <AboutDropDown />}
      {services && <ServicesDropDown />}
      {media && <MediaDropDown />}
      {quickTools && <QuickToolsDropDown />}
      {contact && <ContactDetails />}
      {searchIcon && <SearchDropDown />}
    </>
  );
};

export default NavLinksDropDown;
