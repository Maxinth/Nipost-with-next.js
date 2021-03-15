import React from "react";
import {
  AboutDropDown,
  ServicesDropDown,
  MediaDropDown,
  QuickToolsDropDown,
  ContactDetails,
} from "./LinksDropDowns";
import { useGlobalContext } from "../../../context";

const NavLinksDropDown = () => {
  const { itemInView } = useGlobalContext();
  const { aboutUs, services, media, quickTools, contact } = itemInView;
  return (
    <>
      {aboutUs && <AboutDropDown />}
      {services && <ServicesDropDown />}
      {media && <MediaDropDown />}
      {quickTools && <QuickToolsDropDown />}
      {contact && <ContactDetails />}
    </>
  );
};

export default NavLinksDropDown;
